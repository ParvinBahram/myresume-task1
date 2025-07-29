import { Logo } from "./logo.js";
import { ThemeToggle } from "./themeToggle.js";
import { MobileMenu } from "./mobileMenu.js";
import { NavLinks } from "./navLinks.js";

// navbar class:
export function Navbar(selector) {
  var logo = new Logo("../assets/images/Logo1.png");
  var toggle = new ThemeToggle();
  var moblieMenu = new MobileMenu();
  var navlinks = new NavLinks();
  var nav = document.querySelector(selector);
  nav.innerHTML = "\n     ".concat(logo.render(), "\n     ").concat(toggle.render(), "\n     ").concat(moblieMenu.render(), "\n     ").concat(navlinks.render());
  lucide.createIcons();
  toggle.init();
  moblieMenu.init();
  navlinks.init();
}