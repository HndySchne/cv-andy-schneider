import "./experience.scss";
import "./experience_mobile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faChartPie,
  faServer,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

function Experience() {
  return (
    <div>
      <h2>
        <FontAwesomeIcon icon={faUserTie} /> EXPÉRIENCES
      </h2>
      <section className="experience-body">
        <h3>Data analyste = Amaris | Octobre 2021 - Août 2022</h3>
        <div className="experience-body__description">
          <p>
            Data analyste pour les Assurances du crédit mutuel, Strasbourg{" "}
            <span className="experience-body__logo">
              <FontAwesomeIcon icon={faChartPie} />
            </span>
          </p>
        </div>
        <h3>
          Ingénieur d'études et de Développement MAINFRAME/.NET = Sopra Steria |
          Avril 2017 - Octobre 2021
        </h3>
        <div className="experience-body__description">
          <p>
            Management de projets pour Euro-Information Développement des
            assurances du Crédit Mutuel, Strasbourg{" "}
            <span className="experience-body__logo">
              <FontAwesomeIcon icon={faServer} />
            </span>
          </p>
          <ul>
            <li>Rédaction de spécifications techniques et fonctionnelles</li>
            <li>Gestion des ressources : 4-6 personnes</li>
            <li>
              Gestion des plannings : outil interne chiffrages et plannings
            </li>
            <li>Rédaction des avant projets sommaires</li>
            <li>
              Gestion de projets en V et en agilité : utilisation de l'outil
              KABAN sur Teams
            </li>
            <li>Réalisation et qualification</li>
          </ul>
          <p>
            Projets majeurs : eDéclaration (600 jours homme), TSEMS (300 jours
            homme), Changement d'offre (300 jours homme)
          </p>
        </div>
        <h3>Assistant ingénieur = INRA | 2016 </h3>
        <div className="experience-body__description">
          <p>
            Extraction des lipides des plantes infectées et analyse par
            spectrométrie de masse, traitement des données statistiques avec le
            logiciel R, Colmar{" "}
            <span className="experience-body__logo">
              <FontAwesomeIcon icon={faFlask} />
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Experience;
