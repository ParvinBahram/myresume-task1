
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
  const savedTheme=localStorage.getItem("theme");
  if(savedTheme==="dark"){
    htmlEl.classList.add("dark");
    toggleTheme.checked= true;
  }else if(savedTheme==="light"){
    htmlEl.classList.remove("dark");
    toggleTheme.checked=false;
  }else{
    const preferDark =window.matchMedia("(prefers-color-scheme:dark)").matches;
    if(preferDark){
      htmlEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      htmlEl.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }};
  toggleTheme.addEventListener("change", ()=> {
    if(toggleTheme.checked){
      htmlEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      htmlEl.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  })




  // filter by category
const projectItems =[
  {
    id:1,
    category:"html-css",
    title:"سایت تپسی",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsamLorem,",
    link:"https://tapsi.ir",
    createdAt:"6/6/2023",
  },
   {
    id:2,
    category:"js",
    title:" پروژه todo list",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"6/7/2023",
  },
   {
    id:3,
    category:"js",
    title:"سبدخرید",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir/",
    createdAt:"6/8/2024",
  },
   {
    id:4,
    category:"tailwind",
    title:"صفحه اصلی و صفحه محصول یک سایت فروشگاهی",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"2/14/2024",
  },
   {
    id:5,
    category:"react",
    title:" پروژه  rick and morty",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"6/11/2024",
  },
   {
    id:6,
    category:"react",
    title:"پروژه فریلنسر",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"9/6/2024",
  },
   {
    id:7,
    category:"next",
    title:"shop-user",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"7/4/2025",
  },
   {
    id:8,
    category:"next",
    title:"shop-admin",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"8/1/2025",
  },
  
  {
    id:9,
    category:"wp",
    title:"سایت ساخته شده با wp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"5/5/2023",
  },
]

const projectSection = document.querySelector(".project-section");
const btns= document.querySelectorAll(".btn-filter");

window.addEventListener("DOMContentLoaded",()=>{
    displayItem(projectItems)
})

btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const message= document.getElementById("categoryMessage");
    message.textContent="";
    const category = e.currentTarget.dataset.category;
    const categoryItems= projectItems.filter((item)=>{
      if(item.category === category){
        return item;
      }
    });
    if(category==="all"){
      displayItem(projectItems)
    }else if(categoryItems.length===0){
      message.textContent= "پروژه ای با این دسته بندی وجود ندارد";
      projectSection.innerHTML = "";
    }else{
      displayItem(categoryItems);
    }
   
  })
})

function displayItem(menu){
  let result = menu.map(function(item) {
   return `<div class="project-item outline-0 shadow-lg rounded-xl p-8 bg-gray-200 max-w-6xl mx-auto">
        <h1 class="text-2xl text-purple-800">${item.title}</h1>
        <p class="dark:text-black pt-8 pb-4 border-b border-b-gray-300">${item.description}</p>
        <p class="pt-4 text-left text-gray-600" >${item.createdAt}</p>
        <a class="text-left block text-gray-600 pt-4 text-2xl hover:text-gray-400" href=${item.link} target="_blank" rel="noopener noreferrer">${item.link}</a>
      </div>`
  }).join("");
  projectSection.innerHTML= result;
}

 btns.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    btns.forEach((b)=>{
      b.classList.remove("active-filter-btn");
    })
    btn.classList.add("active-filter-btn");
})
 })



//  filter by date:
const filterDateBtn = document.getElementById("filterDateBtn");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const dateMessage = document.getElementById("dateMessage");


filterDateBtn.addEventListener("click", () => {
  dateMessage.textContent = "";

  const start = startDateInput.value;
  const end = endDateInput.value;

  if (!start || !end) {
    alert("لطفاً هر دو تاریخ را وارد کنید.");
    return;
  }

  const startDate = new Date(start);
  const endDate = new Date(end);
  const filteredByDate = projectItems.filter(item => {
    const itemDate = new Date(item.createdAt);
    return itemDate >= startDate && itemDate <= endDate;
  });

  if (filteredByDate.length === 0) {
    message.textContent = "پروژه‌ای در این بازه‌ی زمانی وجود ندارد";
    projectSection.innerHTML = "";
  } else {
    displayItem(filteredByDate);
  }
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

for (const item of inputItems){
  item.input.addEventListener("input",()=>{
    item.input.classList.add("dirty");
    Validation()
  })
}

 function Validation(){
  let isValid = false;
   for(const item of inputItems ){
    const value =item.input.value.trim();
if(item.input.classList.contains("dirty")){
  if(value==="" || !item.regEx.test(value)){
    item.feedback.style.color= "red";
    item.feedback.textContent= value==="" ? "ورودی نمیتواند خالی باشد" : "مقدار نامعتبر است";
    item.input.classList.remove("input-style");
    item.input.classList.add("error-input-style");
    isValid=false;
  }else {
    item.feedback.textContent="قابل قبول";
    item.feedback.style.color= "green";
    item.input.classList.remove("error-input-style");
    item.input.classList.add("input-style");
    isValid=true;
  }
}
   }
return isValid;
}

for (const item of inputItems){
  item.input.addEventListener("input", Validation)
}
subBtn.addEventListener("click", (e)=>{
  e.preventDefault();
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
  if(Validation()){
    modalMessage.textContent="پیام با موفقیت ثبت شد";
  }else{
     modalMessage.textContent="فیلدها را به درستی وارد کنید"
  }
  ShowModal();
}
closeMdl.addEventListener("click", CloseModal)