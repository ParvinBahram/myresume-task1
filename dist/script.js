
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


  // const toggle = document.getElementById('theme-controller');
  // const htmlEl = document.documentElement;
  
  // let currentTheme = localStorage.getItem('theme') ;
  // if(!currentTheme){
  //   const preferDark= window.matchMedia("(prefers-color-scheme:dark)").matches;
  //   currentTheme=preferDark?"dark" : "light";
  // }
  // htmlEl.setAttribute('data-theme', currentTheme);
  // toggle.checked = currentTheme === 'dark';

  // toggle.addEventListener('change', () => {
  //   const newTheme = toggle.checked ? 'dark' : 'light';
  //   htmlEl.setAttribute('data-theme', newTheme);
  //   localStorage.setItem('theme', newTheme);
  // });

  const projectItems =[
  {
    id:1,
    category:"html-css",
    title:"سایت تپسی",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsamLorem,",
    link:"https://tapsi.ir",
    createdAt:"6/6/2023"
  },
   {
    id:2,
    category:"js",
    title:"سبدخرید",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir/",
    createdAt:"6/7/2023"
  },
   {
    id:3,
    category:"tailwind",
    title:"صفحه اصلی و صفحه محصول یک سایت فروشگاهی",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"6/8/2024",
  },
   {
    id:4,
    category:"react",
    title:" پروژه  rick and morty",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"2/14/2024",
  },
   
   {
    id:5,
    category:"next",
    title:"shop-user",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"6/11/2024",
  },
   
  {
    id:6,
    category:"seo",
    title:"نمونه سایت سئو شده",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"6/4/2025",
  },
  // {
  //   id:7,
  //   category:"wp",
  //   title:"سایت ساخته شده با wp",
  //   description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
  //   link:"https://tapsi.ir",
  // },
]

const projectSection = document.querySelector(".project-section");
const btns= document.querySelectorAll(".btn-filter");
const message= document.getElementById("categoryMessage");

window.addEventListener("DOMContentLoaded",()=>{
    displayItem(projectItems)
})

btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
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
   return `<div class="project-item outline-0 shadow-lg rounded-xl p-8 bg-amber-100 max-w-6xl mx-auto">
        <h1 class="text-2xl text-blue-800">${item.title}</h1>
        <p class="dark:text-black pt-8">${item.description}</p>
        <a class="text-left block text-blue-800 pt-8 text-2xl" href=${item.link} target="_blank">${item.link}</a>
      </div>`
  })
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

 const sortBtns =document.querySelectorAll(".sort-btn");
  sortBtns.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
     message.textContent="";
    sortBtns.forEach((b)=>{
      b.classList.remove("active-sort-btn");
    })
    btn.classList.add("active-sort-btn");
})
 })
 
//  select sort buttons
  sortBtns.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    const sortBy= btn.dataset.sort;
    SortItems(projectItems, sortBy)
  })
})

//sort function
 function SortItems(items, sortBy){
 const sortRes =[...items].sort((a,b)=>{
    const dateA= new Date(a.createdAt);
    const dateB =new Date(b.createdAt);
    return sortBy === "desc" ? dateB - dateA : dateA - dateB
  })
 displayItem(sortRes);
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
  }
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



