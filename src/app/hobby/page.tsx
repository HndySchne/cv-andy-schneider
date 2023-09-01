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
          <iframe
            src="https://www.youtube.com/embed/WAyWwqZtx9A?si=RDF9WgcMh8_M3k-i"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/XvWl5rtVHPM?si=BvJCqXKZheA30I2d"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <a href="https://open.spotify.com/artist/1LCmfsSmkquRTUWO9rqBAJ?si=Gfbdjy7hQ_OEWIjKvplhfw">
            <img
              src="/pictures/matched-by-mistake.webp"
              alt="matched by mistake"
            />
          </a>
        </div>
        <h3>Sport</h3>
        <div>
          <ul>
            <li>Semi-marathon Reims - 2022</li>
            <li>Semi-marathon Strasbourg - 2023</li>
            <li>Semi-marathon Reims - 2023</li>
          </ul>
        </div>
        <h3>Lutherie amateur</h3>
        <p>
          Réparations de plusieurs guitares et basses électriques (formation
          avec un luthier professionnel)
        </p>
      </section>
    </div>
  );
}

export default Hobby;
