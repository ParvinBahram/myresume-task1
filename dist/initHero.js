import { HeroSection } from "./heroSection.js";
var HeroData = {
  header: "سلام به سایت من خوش اومدین",
  name: "پروین بهرام",
  job: "برنامه نویس فرانت اند",
  education: "کارشناسی مهندسی نرم افزار دانشگاه پیام‌نور شهریار",
  experience: "مدت یک ساله که فعالیت خودمو در زمینه برنامه نویسی فرانت اند شروع کردم و ",
  skills: ["Html-Css", "Tailwind", "JavaScript", "React"],
  aboutLink: "../aboutMe.html",
  imageSrc: "../assets/images/me.webp"
};
var hero = new HeroSection(HeroData);
export function initHero(container) {
  container = document.querySelector(container);
  container.innerHTML = hero.render();
}