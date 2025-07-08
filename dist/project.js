
import { projectList} from '../components/projectSection.js';
import { projectItems }from '../components/data.js' ;
import { renderFilter } from '../components/filterSection.js';

// mobile menu:
const toggler = document.querySelector("#toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click",(e)=>{
  navbar.classList.toggle("nav_expanded");
})


//show/hide dropdown :
const dropDown = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".dropdown-menu");

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



// dark/light mode:
    const toggleTheme= document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  const preferDark =window.matchMedia("(prefers-color-scheme:dark)").matches;
  if(savedTheme === 'dark' ||(!savedTheme && preferDark)){
    htmlEl.classList.add('dark');
    localStorage.setItem("theme", "dark");

  }else{
      htmlEl.classList.remove('dark');
      localStorage.setItem("theme", "light");

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

  
const projectSection = document.querySelector(".project_section");
window.addEventListener("DOMContentLoaded",()=>{
  renderProject(projectItems);
  renderFilter('#filters-container', renderProject)
})

  function renderProject(items){
  const result = projectList(items);
  projectSection.innerHTML=result
 }
 


 // form validation:
 const nameInput = document.getElementById("name");
 const userNameInput = document.getElementById("userName");
 const messageInput = document.getElementById("message");
 const nameFeedback= document.getElementById("nameCheck");
 const userNameFeedback= document.getElementById("userNameCheck");
 const messageFeedback= document.getElementById("messageCheck");
 const myForm = document.getElementById("getInTouch");
 const subBtn = document.getElementById("subBtn");

 const inputItems =[
  {
     input: document.getElementById("name"),
     feedback:document.getElementById("nameCheck"),
     regEx :/^[a-zA-z0-9آ-ی\s_]{5,20}$/,
     label: "نام"
  },
  {
     input :document.getElementById("userName"),
     feedback:document.getElementById("userNameCheck"),
     regEx:/^[a-zA-z0-9@.]{11,30}$/,
     label:"ایمیل،شماره تلفن"
  },
  {
     input :document.getElementById("message"),
     feedback :document.getElementById("messageCheck"),
     regEx: /^[a-zA-z0-9آ-ی.@\s\-_*+]{30,500}$/,
     label:"پیام"
  }
 ];

for (const item of inputItems){
  item.input.addEventListener("input",()=>{
    item.input.classList.add("dirty");
    Validation()
  })
}
 function Validation(){
  let isValid = true;
  const errorMessage =[];
   for(const item of inputItems ){
    const value =item.input.value.trim();
if(item.input.classList.contains("dirty")){
  if(value==="" || !item.regEx.test(value)){
    const msg = value==="" ? "ورودی نمیتواند خالی باشد" : "مقدار نامعتبر است";
    errorMessage.push(`${item.label} : ${msg}`);
    item.feedback.style.color= "red";
    item.feedback.textContent= msg ;
    item.input.classList.remove("input-style");
    item.input.classList.add("error-input-style");
    isValid=false;
  }else {
    item.feedback.textContent="قابل قبول";
    item.feedback.style.color= "green";
    item.input.classList.remove("error-input-style");
    item.input.classList.add("input-style");
  }
}
}
return {isValid, errorMessage};
}
subBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  for (const item of inputItems){
        item.input.classList.add("dirty");
  }
  CheckShowModal();
})

// open/close modal:
const modal=document.getElementById("modal");
const closeMdl= document.getElementById("closeModal");
const modalMessage=document.querySelector(".modal-message");

function ShowModal(){
  modal.classList.remove("hidden");
  setTimeout(()=>{
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-100")
  },150)
}
function CloseModal(){
  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0");
  setTimeout(()=>{
    modal.classList.add("hidden");
  },1000)
}

function CheckShowModal(){
  const result= Validation();
  if(result.isValid){
    modalMessage.textContent=`${"✅ "}${"پیام با موفقیت ثبت شد"}`;
    modal.classList.remove("border-4", "border-red-500");
    modal.classList.add("border-4", "border-green-500"); 

  }else{
     modalMessage.innerHTML=`${"❌"}${"<br>"}${result.errorMessage.join("<br>")}`;
       modal.classList.remove("border-4", "border-green-500");
       modal.classList.add("border-4", "border-red-500");

  }
  ShowModal();
}
closeMdl.addEventListener("click", CloseModal)
