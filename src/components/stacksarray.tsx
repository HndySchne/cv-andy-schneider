import "../app/stacks/stacks.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface stackArray {
    title: string, 
    logo:  IconDefinition, 
    stack: Array<string>
}

function StacksArray({title, logo, stack}: stackArray) {
  const [isOpen, setIsOpen] = useState(false);

  // fonction qui permet de changer le statut du top
  const ShowContent = () => {
    setIsOpen(!isOpen);
  };

  // permet d'appeler dynamiquement la classe hidden ou non pour afficher les technos
  const showtext = isOpen ? "NotHidden" : "Hidden";

  return (
    <div className="stack-container">
      <h3>{title}</h3>
      <div className="stack-container__logo" onClick={ShowContent}>
        <span className="logostack">
        <FontAwesomeIcon icon={logo} />
        </span>
        <span className="hand">
          click !
        {/* <i class="fa-regular fa-hand-pointer"></i> */}
        </span>
      </div>
      <div className="stack-container__description">
        <ul className={showtext}>
          {stack.map((arrayStack) => (
            <li key={arrayStack}>{arrayStack}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StacksArray;
