import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nonso</h1>
        <p className={styles.description}>
          I'm a front-end developer with 1 year experience using HTML, CSS,
          JavaScript, React and NodeJS. Contact me if you'd like to hire me.
        </p>
        <a className={styles.contactBtn} href="/assets/NonsoIwedinobiDev.pdf" target="blank">
          Download CV
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/profile.jpg")}
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
