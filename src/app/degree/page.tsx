import "./degree.scss";
import "./degree_mobile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Degree() {
  return (
    <div>
      <h2>
      <FontAwesomeIcon icon={faGraduationCap} />
        FORMATIONS
      </h2>
      <section className="degree-body">
        <h3>DÉVELOPPEUR WEB (Openclassrooms) ⬥ 2023 </h3>
        <p>Formation Javascript/React/node.js /HTML5/CSS3 </p>
        <h3>INTI Formation (ADAMING) ⬥ 2017</h3>
        <p>
          Formation Mainframe IBM/COBOL et Qualification logiciel (57 jours),
          Formation de base et avancée
        </p>
        <h3>Université des sciences de la vie - STRASBOURG ⬥ 2014-2016</h3>
        <p>Master en biologie et valorisation des plantes </p>
        <h3>
          Université des sciences exactes et naturelles - REIMS ⬥ 2010-2014
        </h3>
        <p>Licence en biologie générale</p>
      </section>
    </div>
  );
}

export default Degree;
