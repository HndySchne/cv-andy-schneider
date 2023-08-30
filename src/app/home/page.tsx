import "./home.scss";
import "./home_mobile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home-container">
      <div className="abstract">
        <div className="abstract__text">
          <p>
            Développeur ayant 6 années d&#39;expériences dans le domaine du bancaire-assurances, je me suis récemment formé aux technologies web. Dynamique, sérieux et curieux, je suis à la recherche d&#39;une opportunité professionnelle différente
          </p>
          <a href='/documents/cv-andy-schneider.pdf' download='/documents/cv-andy-schneider.pdf'>
            <div className="abstract__resume">
              <p>
                CV en pdf :<FontAwesomeIcon icon={faDownload} />
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="picture-container">
        <img src="/pictures/pic.jpg" alt="Le candidat" />
      </div>
    </div>
  );
}

export default Home;
