
// mobile menu:
const toggler = document.querySelector("#toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click",(e)=>{
  navbar.classList.toggle("nav_expanded");
})

// show/hide dropdown menu
 const dropDown= document.querySelector(".dropdown");
 const dropDownMenu = document.querySelector(".dropdown-menu");

 dropDown.addEventListener("mouseenter", ()=>{
  dropDownMenu.style.display="block";
  dropDown.classList.add("text-purple-600")
 })
 dropDown.addEventListener("mouseleave", ()=>{
  dropDownMenu.style.display="none";
    dropDown.classList.remove("text-purple-600")
 })

// dark/light mode:
  // const toggle = document.getElementById('theme-controller');
  // const htmlEl = document.documentElement;
  
  // const currentTheme = localStorage.getItem('theme') || 'light';
  // htmlEl.setAttribute('data-theme', currentTheme);
  // toggle.checked = currentTheme === 'dark';

  // toggle.addEventListener('change', () => {
  //   const newTheme = toggle.checked ? 'dark' : 'light';
  //   htmlEl.setAttribute('data-theme', newTheme);
  //   localStorage.setItem('theme', newTheme);
  // });


  const toggle = document.getElementById('theme-controller');
  const htmlEl = document.documentElement;
  
  let currentTheme = localStorage.getItem('theme') ;
  if(!currentTheme){
    const preferDark= window.matchMedia("(prefers-color-scheme:dark)").matches;
    currentTheme=preferDark?"dark" : "light";
  }
  htmlEl.setAttribute('data-theme', currentTheme);
  toggle.checked = currentTheme === 'dark';

  toggle.addEventListener('change', () => {
    const newTheme = toggle.checked ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  
  
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
  },
  {
     input :document.getElementById("userName"),
     feedback:document.getElementById("userNameCheck"),
     regEx:/^[a-zA-z0-9@.]{11,30}$/,
  },
  {
     input :document.getElementById("message"),
     feedback :document.getElementById("messageCheck"),
     regEx: /^[a-zA-z0-9آ-ی.@\s\-_*+]{30,500}$/,
  }
 ];

 function Validation(){
  let isValid = true;
   for(const item of inputItems ){
    const value =item.input.value.trim();
    item.input.style.color= "black";

  if(value==="" || !item.regEx.test(value)){
    item.feedback.style.color= "red";
    item.feedback.textContent= value==="" ? "ورودی نمیتواند خالی باشد" : "مقدار نامعتبر است";
    item.input.classList.remove("input-style");
    item.input.classList.add("error-input-style");
     isValid=false;
  }else 
    item.feedback.textContent="قابل قبول";
    item.feedback.style.color= "green";
    item.input.classList.remove("error-input-style");
    item.input.classList.add("input-style");
  }
  return isValid;
}

for (const item of inputItems){
  item.input.addEventListener("input", Validation)
}

subBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  if(Validation()){
    alert("پیام با موفقیت ثبت شد")
  }else{
    alert("فیلدها را به درستی وارد کنید")
  }
})



