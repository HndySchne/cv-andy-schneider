"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./header.scss";
import "./header_mobile.scss";
import React, { useState } from "react";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // fonction qui permet de changer le statut du top
    const ShowContent = () => {
      setIsOpen(!isOpen);
    };
  
    // permet d'appeler dynamiquement la classe hidden ou non pour afficher les technos
    const showtext = isOpen ? "navigation-link--visible" : "navigation-link";

  return (
    <div className="body-header">
    <h1>Andy Schneider</h1>
    <nav className="body-header__navigation">
      <div className={showtext}>
        <Link href="/home" className="body-header__btn" onClick={ShowContent}>
          <span>Accueil</span>
        </Link>
        <Link
          href="/stacks"
          className="body-header__btn"
          onClick={ShowContent}
        >
          <span>Technologies</span>
        </Link>
        <Link
          href="/degree"
          className="body-header__btn"
          onClick={ShowContent}
        >
          <span>Diplomes</span>
        </Link>
        <Link
          href="/experience"
          className="body-header__btn"
          onClick={ShowContent}
        >
          <span>Expérience</span>
        </Link>
        <Link
          href="/hobby"
          className="body-header__btn"
          onClick={ShowContent}
        >
          <span>Loisirs</span>
        </Link>
        <Link
          href="/contact"
          className="body-header__btn"
          onClick={ShowContent}
        >
          <span>Contact</span>
        </Link>
      </div>
      <button className="body-header__list" onClick={ShowContent}>
        <FontAwesomeIcon icon={faList} className="logo" />
      </button>
    </nav>
  </div>

  );
}

export default Header;
