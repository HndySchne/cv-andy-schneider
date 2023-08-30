import "./hobby.scss";
import "./hobby_mobile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableTennisPaddleBall } from "@fortawesome/free-solid-svg-icons";

function Hobby() {
  return (
    <div>
      <h2>
       <FontAwesomeIcon icon={faTableTennisPaddleBall} /> LOISIRS
      </h2>
      <section className="Hobby-body">
        <h3>Groupes de musique</h3>
        <div className="music-pictures">
          <a href="https://www.youtube.com/watch?v=WAyWwqZtx9A">
            <img src='/pictures/Pole-Nord.webp' alt="pole nord" />
          </a>
          <a href="https://open.spotify.com/artist/1LCmfsSmkquRTUWO9rqBAJ?si=Gfbdjy7hQ_OEWIjKvplhfw">
            <img src='/pictures/matched-by-mistake.webp' alt="matched by mistake" />
          </a>
          <a href="https://www.youtube.com/@andyschneider759">
            <img src='/pictures/youtube.webp' alt="Andy covers" />
          </a>
        </div>
        <h3>Sport</h3>
        <div>
          <ul>
            <li>Semi-marathon de Reims - 2022 : 2h04</li>
            <li>Semi-marathon de Strasbourg - 2023 : 2h10</li>
            <li>Semi-marathon de Reims - 2023 : à venir</li>
          </ul>
        </div>
        <h3>Lutherie amateur</h3>
        <p>Réparations de plusieurs guitares et basses électriques (formation avec un luthier professionnel)</p>
      </section>
    </div>
  );
}

export default Hobby;
