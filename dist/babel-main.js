import { Navbar } from "./navbar.js";
import { initHero } from "./initHero.js";
import { RenderProjects } from "./renderProjects.js";
import { Footer } from "./footer.js";
document.addEventListener("DOMContentLoaded", function () {
  Navbar("#oop-nav");
  initHero("#oop-hero");
  var projectsRender = new RenderProjects("#oop-projects");
  projectsRender.render();
  var footer = new Footer();
  footer.render();
});