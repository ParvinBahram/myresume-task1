
const projectItems =[
  {
    id:1,
    category:"html-css",
    title:"سایت تپسی",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsamLorem,",
    link:"https://tapsi.ir",
  },
   {
    id:2,
    category:"js",
    title:" پروژه todo list",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
  },
   {
    id:3,
    category:"js",
    title:"سبدخرید",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir/",
  },
   {
    id:4,
    category:"tailwind",
    title:"صفحه اصلی و صفحه محصول یک سایت فروشگاهی",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
  },
   {
    id:5,
    category:"react",
    title:" پروژه  rick and morty",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
  },
   {
    id:6,
    category:"react",
    title:"پروژه فریلنسر",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
  },
   {
    id:7,
    category:"next",
    title:"shop-user",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
  },
   {
    id:8,
    category:"next",
    title:"shop-admin",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
  },
  {
    id:9,
    category:"seo",
    title:"نمونه سایت سئو شده",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
  },
  {
    id:10,
    category:"wp",
    title:"سایت ساخته شده با wp",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias rem autem ipsam",
    link:"https://tapsi.ir",
  },
]



const projectSection = document.querySelector(".project-section");
const btns= document.querySelectorAll(".btn-filter");

window.addEventListener("DOMContentLoaded",()=>{
    displayItem(projectItems)
})

btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const category = e.currentTarget.dataset.category;
    const categoryItems= projectItems.filter((item)=>{
      if(item.category === category){
        return item;
      }
    });
    if(category==="all"){
      displayItem(projectItems)
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
