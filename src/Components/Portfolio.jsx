/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio4.jpg";

const imageAltText = "typing on pc";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Redesigned a real-world poorly designed website",
    description:
      "Redesigned website (link included) through collaborative project. Employed user-centered design principles, including IA, UX concepts, and HTML/CSS/JavaScript implementation.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Digital calculator and clock",
    description:
      "Developed clock and calculator GUI applications in Java, emphasizing correct layout, global setup, and action listener implementation for user input. Followed OOP principles and UI standards.",
  },
  {
    title: "Invoice System",
    description:
      "Created a Python-based invoice and billing system using text files. Designed for businesses to generate bills, manage stocks, and offer discounts. Bills displayed on Notepad for clarity, with stock management in Python.",
  },
  {
    title: "Image processing",
    description:
      "Created a project on C about building an image processing program that can load, save, copy images, and perform tasks like blurring. Additionally, it can generate C source code representations of images.",
   
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
