
// mobile menu:
const toggler = document.querySelector("#toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click",(e)=>{
  navbar.classList.toggle("nav_expanded");
})


// dark/light mode:
  const toggle = document.getElementById('theme-controller');
  const htmlEl = document.documentElement;
  
  const currentTheme = localStorage.getItem('theme') || 'light';
  htmlEl.setAttribute('data-theme', currentTheme);
  toggle.checked = currentTheme === 'dark';

  toggle.addEventListener('change', () => {
    const newTheme = toggle.checked ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  
  
  // form validation:
  // select items:
//  const myForm = document.getElementById("beInTouch");
//  const nameInput = document.getElementById("name");
//  const userNameInput = document.getElementById("userName");
//  const messageInput = document.getElementById("message");
//  const nameFeedback= document.getElementById("nameCheck");
//  const userNameFeedback= document.getElementById("userNameCheck");
//  const messageFeedback= document.getElementById("messageCheck");

// Regular expression:
//  const nameRegex = /^[a-zA-zآ-ی\s_]{5,20}$/;
//  const userNameRegex = /^[a-zA-z0-9آ-ی.@]{11,30}$/;
//  const messageRegex = /^[a-zA-z0-9آ-ی.@\s\-_*+]{10,500}$/;

// name input:
//  nameInput.addEventListener("input", ()=>{
//  const nameValue = nameInput.value.trim()
//   nameInput.style.color= "black";
//   if(nameValue=== ""){
//     nameFeedback.textContent="ضروری";
//     isValid=false;
//   }else if(!nameRegex.test(nameValue)){
//     nameFeedback.textContent= "نامعتبر است";
//     nameFeedback.style.color = "red";
//     isValid=false;
//   }else{
//     nameFeedback.textContent="قابل قبول";
//     nameFeedback.style.color="green";
//     isValid=true;
//   }
//  })
  // phone number or email:
//   userNameInput.addEventListener("input", ()=>{
//   const userNameValue = userNameInput.value.trim();
//     userNameInput.style.color= "black";
//   if(userNameValue===null){
//     userNameFeedback.innerHTML="ضروری";
//     isValid=false;
//   }else if(!userNameRegex.test(userNameValue)){
//     userNameFeedback.textContent= "نامعتبر است";
//     userNameFeedback.style.color = "red";
//     isValid=false;
//   }else{
//     userNameFeedback.textContent="قابل قبول";
//     userNameFeedback.style.color="green";
//     isValid=true;
//   }
//  })

// textarea/message input:
//   messageInput.addEventListener("input", ()=>{
//   const messageValue = messageInput.value.trim();
//     messageInput.style.color= "black";
//   if(messageValue===""){
//     messageFeedback.textContent="ضروری";
//     isValid=false;
//   }else if(!messageRegex.test(messageValue)){
//     messageFeedback.textContent= "نامعتبر است";
//     messageFeedback.style.color = "red";
//     isValid=false;
//   }else{
//     messageFeedback.textContent="قابل قبول";
//     messageFeedback.style.color="green";
//     isValid=true;
//   }
//  })

// button registeration:
//  myForm.addEventListener("submit", (e)=> {
//   e.preventDefault();
//   if(isValid){
//     alert("پیام با موفقیت دریافت شد")
//    } 
//   })


 const myForm = document.getElementById("getInTouch");

 const inputItems =[
  {
     input: document.getElementById("name"),
     feedback:document.getElementById("nameCheck"),
     regEx :/^[a-zA-zآ-ی\s_]{5,20}$/,
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

 function Validation(item){
   const value =item.input.value.trim();
   item.input.style.color= "black";
  if(value===""){
    isValid=false;
  }else if(!item.regEx.test(value)){
    // item.feedback.textContent=textContent;
    item.feedback.style.color= "red";
    item.input.classList.remove("input-style")
    item.input.classList.add("error-input-style")
    isValid=false;
  }else {
    item.feedback.textContent="قابل قبول";
    item.feedback.style.color= "green";
    item.input.classList.add("input-style")
    item.input.classList.remove("error-input-style")
    isValid=true;
  }
 }

 inputItems.map((item)=>{
  item.input.addEventListener("input", ()=> Validation(item))
 })

 myForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  // const allValid = inputItems.every(Validation);
  if (isValid) {
    alert("پیام با موفقیت ارسال شد")
  }else {
    alert("فیلدها را به درستی وارد کنید")
  }
 })