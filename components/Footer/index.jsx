import React from "react";
import Link from "next/link";
import { version } from "../../package.json"

import { Wrapper, Content, LogoImg } from "./Footer.styles";

const Footer = () => {

  return (
    <Wrapper>
      <Content>
        <Link href="/">
          <LogoImg
            src="https://jesunmaailma.ml/images/supliikki.svg"
            alt="Supliikki logo"
          />
        </Link>
        <a
          href="https://articlepress.ml"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>ArticlePress</span>
        </a>
        <a
          href="https://finnplace.ml"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>FinnPlace</span>
        </a>
        <a
          href="https://teeveet.ml"
          target="_blank"
          rel="noreferrer noopener"
        >
         <span>Teeveet</span>
        </a>
        <a
          href="https://reactvidplay.ml"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>VidPlay</span>
        </a>
        <a
          href="https://jesunmaailma.ml"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Jesun Maailma</span>
        </a>
        <p>© 2022 Jesun Maailma</p>
        <h5>Sovelluksen versio: {version}</h5>
      </Content>
    </Wrapper>
  );
};

export default Footer;