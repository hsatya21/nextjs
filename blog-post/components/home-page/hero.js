import classes from './hero.module.css';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/harshitImg.jpeg'
          alt='pic of harshit'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Harshit</h1>
      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
