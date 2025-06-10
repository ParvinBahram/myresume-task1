
const projectItems =[
  {
    id:1,
    category:"html-css",
    title:"سایت تپسی",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsamLorem,",
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
   return `<div class="project-item outline-0 shadow-lg rounded-xl p-8 bg-amber-100 max-w-6xl mx-auto">
        <h1 class="text-2xl text-blue-800">${item.title}</h1>
        <p class="dark:text-black pt-8">${item.description}</p>
        <a class="text-left block text-blue-800 pt-8 text-2xl mr-[70%]" href=${item.link} target="_blank">${item.link}</a>
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


 

  