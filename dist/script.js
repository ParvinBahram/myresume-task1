
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
  }else{
      htmlEl.classList.remove('dark');
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

 
 // filter by category
  const projectItems =[
  {
    id:1,
    category:"html-css",
    title:"سایت تپسی",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    link:"https://tapsi.ir",
    createdAt:"6/6/2023",
    completed: true,
  },
   {
    id:2,
    category:"js",
    title:"سبدخرید",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"6/7/2023",
        completed: true,

  },
   {
    id:3,
    category:"tailwind",
    title:"صفحه اصلی و صفحه محصول یک سایت فروشگاهی",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link:"https://tapsi.ir",
    createdAt:"6/8/2024",
    completed: true,

  },
   {
    id:4,
    category:"react",
    title:" پروژه  rick and morty",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"2/14/2024",
    completed: false,

  },
   
   {
    id:5,
    category:"next",
    title:"shop-user",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"6/11/2024",
    completed: false,

  },
   
  {
    id:6,
    category:"seo",
    title:"نمونه سایت سئو شده",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
    createdAt:"6/4/2025",
    completed: false,

  },
]

const projectSection = document.querySelector(".project_section");
const btns= document.querySelectorAll(".btn-filter");
const message= document.getElementById("categoryMessage");
const selectedCategories= new Set();
window.addEventListener("DOMContentLoaded",()=>{
    displayItem(projectItems)
})

btns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    const category= e.currentTarget.dataset.category;
    if(category==="all"){
      selectedCategories.clear();
      btns.forEach((b)=>
        b.classList.remove("active-filter-btn"));
        btn.classList.add("active-filter-btn");
        displayItem(projectItems);
        return;
    }else document.querySelector("[data-category='all']")?.classList.remove("active-filter-btn");
      if (selectedCategories.has(category)){
        selectedCategories.delete(category);
        btn.classList.remove('active-filter-btn');
      }else{
         selectedCategories.add(category);
        btn.classList.add('active-filter-btn');
      }
      const filteredItems= projectItems.filter((item)=> selectedCategories.has(item.category));
      if(selectedCategories.size===0){
        message.textContent="";
        document.querySelector("[data-category='all']")?.classList.add("active-filter-btn");
        displayItem(projectItems)}
        else if(filteredItems.length===0){
          message.textContent="پروژه ای با این دسته بندی وجود  ندارد";
          projectItems.innerHTML="";
        }else {
          message.textContent="";
          displayItem(filteredItems)
        }
  });
});

function displayItem(projectItems){
  const result= projectItems.map((item)=>createItems(item)).join("");
  projectSection.innerHTML= result;
}



function createItems(item){
   return `<div class="project-item outline-0 shadow-lg rounded-xl px-6 py-4 bg-gray-200 max-w-6xl mx-auto">
        <h2 class="text-xl text-purple-900">${item.title}</h2>
       <div class=" mt-2 flex items-center justify-between">
       <p class="status">${item.completed ? "تکمیل شده" : "در حال اجرا"}<p/>
       <p class="badge">${item.category}</p></div>
        <p class="dark:text-black pt-4 pb-2 border-b border-b-gray-300">${item.description}</p>
        <p class="pt-2 text-left text-gray-600 text-sm">${item.createdAt}</p>
        <a class="text-left block text-gray-600 pt-2 text-xl hover:text-gray-400" href=${item.link} target="_blank" rel="noopener noreferrer">${item.link}</a>
      </div>`;
}



//  filter by date:
const filterDateBtn = document.getElementById("filterDateBtn");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const startDateLabel = document.getElementById("startDateLabel");
const endDateLabel = document.getElementById("endDateLabel");
const dateMessage = document.getElementById("dateMessage");

const today = new Date();
const baseDate = new Date();
baseDate.setDate(today.getDate() - 1000);

// نمایش تاریخ‌ها در کنار اسلایدر
function updateLabels() {
  const startOffset = parseInt(startDateInput.value, 10);
  const endOffset = parseInt(endDateInput.value, 10);

  const start = new Date(baseDate);
  start.setDate(baseDate.getDate() + startOffset);

  const end = new Date(baseDate);
  end.setDate(baseDate.getDate() + endOffset);

  startDateLabel.textContent = start.toLocaleDateString('en-US');
  endDateLabel.textContent = end.toLocaleDateString('en-US');
}

startDateInput.addEventListener("input", updateLabels);
endDateInput.addEventListener("input", updateLabels);
updateLabels(); 

filterDateBtn.addEventListener("click", () => {
  dateMessage.textContent = "";

  const startOffset = parseInt(startDateInput.value, 10);
  const endOffset = parseInt(endDateInput.value, 10);

  if (startOffset > endOffset) {
    alert("تاریخ شروع نباید از تاریخ پایان بیشتر باشد.");
    return;
  }

  const startDate = new Date(baseDate);
  startDate.setDate(baseDate.getDate() + startOffset);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(baseDate);
  endDate.setDate(baseDate.getDate() + endOffset);
  endDate.setHours(23, 59, 59, 999);

  const filteredByDate = projectItems.filter(item => {
    const itemDate = new Date(item.createdAt);
    return itemDate >= startDate && itemDate <= endDate;
  });

  if (filteredByDate.length === 0) {
    dateMessage.textContent = "پروژه‌ای در این بازه‌ی زمانی وجود ندارد";
    projectSection.innerHTML = "";
  } else {
    displayItem(filteredByDate);
  }
});

const showCompleted= projectItems.filter((item)=>item.completed);
const completeToggle= document.getElementById("complete-toggle");
completeToggle.addEventListener("change",()=>{
 if(completeToggle.checked){
  displayItem(showCompleted);
 }else {
  displayItem([]);
  document.querySelector("[data-category='all']")?.classList.remove("active-filter-btn")
 }
})

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
  }else{
     modalMessage.innerHTML=`${"❌"}${"<br>"}${result.errorMessage.join("<br>")}`;
  }
  ShowModal();
}
closeMdl.addEventListener("click", CloseModal)


const categoryBtn = document.getElementById('category-btn');
const categoryMenu = document.getElementById('category-menu');
const  filterBtn = document.getElementById("filter-btn");
const  dateFilter = document.getElementById("date-filter");

categoryBtn.addEventListener('click', () => {
  categoryMenu.classList.toggle('hidden');
});

 filterBtn.addEventListener("click",()=>{
  dateFilter.classList.toggle("hidden")
})
