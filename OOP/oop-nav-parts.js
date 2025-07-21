
//  logo class:
class Logo {
  constructor(src){
    this.src = src;
  }
render(){
return `
  <div>
    <img src=${this.src} alt="logo" class="w-24 h-24">
  </div>
`
}}
const logo= new Logo("../assets/images/Logo1.png");


// theme class:
class ThemeToggle {
   render(){
    return `
      <div class="flex justify-center items-center py-8">
      <label for="theme-toggle" class="flex items-center cursor-pointer">
      <div class="relative">
      <input id="theme-toggle" type="checkbox" class="sr-only peer" aria-label="themeToggle" >
      <div class="w-14 h-8 bg-gray-300 peer-checked:bg-blue-700 dark:bg-gray-600 rounded-full transition-colors"></div>
      <div class="absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-6"></div>
      </div>
      </label>
    </div>
    `}
    init(){
       const toggleTheme= document.getElementById("theme-toggle");
       const htmlEl = document.documentElement;
       if(!toggleTheme) return;
      const savedTheme = localStorage.getItem("theme");
      const preferDark =window.matchMedia("(prefers-color-scheme:dark)").matches;
      if(savedTheme === 'dark' ||(!savedTheme && preferDark)){
        htmlEl.classList.add('dark');
        localStorage.setItem("theme", "dark");
      }else{
        htmlEl.classList.remove('dark');
        localStorage.setItem("theme", "light")
      }
      const currentTheme = localStorage.getItem('theme');
      if(currentTheme==="dark" ||(!currentTheme && preferDark)) toggleTheme.checked = true;
      toggleTheme.addEventListener("change", ()=> {
      if(toggleTheme.checked){
      htmlEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      htmlEl.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  })
    }
}const toggle= new ThemeToggle();


// mobile menu class:
class MobileMenu {
  constructor() {
    this.toggler = null;
    this.menuIcon = null;
    this.closeBtn = null;
    this.navLinks = null;
  }
  render() {
    return `
      <div id="toggler" class="px-2 md:hidden">
        <div class="mobile-menu">
          <i data-lucide="menu" class="text-purple-500 w-12 h-12" aria-hidden="true"></i>
        </div>
        <div class="closeBtn hidden">
          <i data-lucide="x" class="w-12 h-12 text-purple-500"></i>
        </div>
      </div>
    `;
  }
  init() {
    this.toggler = document.getElementById("toggler");
    if (!this.toggler) return;

    this.menuIcon = this.toggler.querySelector(".mobile-menu");
    this.closeBtn = this.toggler.querySelector(".closeBtn");
    this.navLinks = document.querySelector(".nav_links");

    this.menuIcon.addEventListener("click", () => {
      this.navLinks.classList.add("open");
      this.menuIcon.classList.add("hidden");
      this.closeBtn.classList.remove("hidden");
    });

    this.closeBtn.addEventListener("click", () => {
      this.navLinks.classList.remove("open");
      this.menuIcon.classList.remove("hidden");
      this.closeBtn.classList.add("hidden");
    });
  }
}
 const moblieMenu= new MobileMenu();


// links class :
class NavLinks{
  render(){
    return`<ul class="nav_links ">
        <li class="item dropdown relative cursor-pointer"><a href="#" class="link dropdown-link flex items-center" target="_blank">خدمات
        <span><i data-lucide="chevron-left" class="hover:text-purple-600
         rotate-0 md:-rotate-90 transition-transform duration-200 delay-200 md:pr-2"></i></span></a>
         <div class="dropdown-menu absolute opacity-0 transition-all duration-300 transform translate-y-2 invisible rounded-lg p-4  shadow-lg  top-0 right-25 bg-purple-100 outline-none md:top-10 md:-right-18 md:w-50">
          <a class="dropdown-item" href="#">طراحی سایت با کدنویسی</a>
          <a class="dropdown-item" href="#">طراحی سایت با وردپرس</a>
          <a class="dropdown-item" href="#">سئو و پشتیبانی</a>
         </div>
      </li>
        <li class="item"><a class="link" href="#project">پروژه ها</a></li>
        <li class="item md:hidden"><a class="btn w-full" href="#contact">ارتباط با من</a></li>
      </ul>
      <a class="btn hidden md:block items-center" href="#contact">ارتباط با من</a>

    `
  }
  init(){
  const dropDown = document.querySelector(".dropdown");
  const dropDownMenu = document.querySelector(".dropdown-menu");
     if (!dropDown || !dropDownMenu) return;
function showMenu() {
  dropDownMenu.classList.remove("opacity-0", "invisible", "translate-y-2");
  dropDownMenu.classList.add("opacity-100", "visible", "translate-y-0");
}
function hideMenu() {
  dropDownMenu.classList.remove("opacity-100", "visible", "translate-y-0");
  dropDownMenu.classList.add("opacity-0", "invisible", "translate-y-2");
}

dropDown.addEventListener("mouseenter", showMenu);
dropDown.addEventListener("mouseleave", hideMenu);
}
}
const navlinks= new NavLinks();





// navbar class:
class Navbar{
  constructor(selector){
    this.nav=document.querySelector(selector);
  }
  render(){
    this.nav.className="bg-gray-100 dark:bg-gray-700 nav sticky z-50 top-0 flex justify-between shadow-md lg:justify-around items-center px-6  md:max-h-80 flex-wrap" ;
    this.nav.innerHTML =
    `${logo.render()}
     ${toggle.render()}
     ${moblieMenu.render()}
     ${navlinks.render()}`
     ;
     toggle.init();
     moblieMenu.init()
     navlinks.init();
}
}
const navbar = new Navbar(".oop-nav");
 navbar.render()