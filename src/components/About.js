import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, links } = props;

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}
export default About;
