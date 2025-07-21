
 class Project{
  constructor(item){
    this.title = item.title;
    this.description = item.description;
    this.category = item.category;
    this.completed = item.completed;
    this.createdAt = item.createdAt;
    this.link = item.link;
  }
  render(){
     return `<div class="project-item outline-0 shadow-lg rounded-xl px-6 py-4 bg-gray-200  mx-auto">
        <h2 class="text-xl text-purple-900">${this.title}</h2>
       <div class=" mt-2 flex items-center justify-between ">
       <p class="status">${this.completed ? "تکمیل شده" : "در حال اجرا"}<p/>
       <p class="badge"> ${this.category}</p></div>
        <p class="dark:text-black pt-4 pb-2 border-b border-b-gray-300">${this.description}</p>
        <span class="pt-2  block text-left text-gray-600 text-sm">${this.createdAt}</span>
        <a class="text-left block text-gray-600 pt-2 text-sm hover:text-gray-400" href=${this.link} target="_blank" rel="noopener noreferrer">${this.link}</a>
      </div>`;
  }
}

//  کلاس برای نمایش چند پروژه
 class ProjectList{
   constructor(items) {
    this.items = items.map(item => new Project(item))
   }

   renderAll(){

   return this.items.map(project =>project.render()).join("")
   }
}


  const  data = [
  {
    id:1,
    category:"html-css",
    title:"سایت تپسی",
    description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    link:"https://myresume-info.netlify.app/",
    createdAt:"6/6/2023",
    completed: true,
   
  },
   {
    id:2,
    category:"js",
    title:"سبدخرید",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link:"https://myresume-info.netlify.app/",
    createdAt:"6/7/2023",
    completed: true,

  },
   {
    id:3,
    category:"tailwind",
    title:"صفحه اصلی و  محصول ",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    link:"https://myresume-info.netlify.app/",
    createdAt:"6/8/2024",
    completed: true,
   },
    {
    id:4,
    category:"react",
    title:" پروژه  rick and morty",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link:"https://myresume-info.netlify.app/",
    createdAt:"2/14/2024",
    completed: false,

  },
   
   {
    id:5,
    category:"next",
    title:"shop-user",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    link:"https://myresume-info.netlify.app/",
    createdAt:"6/11/2024",
    completed: false,

  },
   
  {
    id:6,
    category:"seo",
    title:"نمونه سایت سئو شده",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    link:"https://myresume-info.netlify.app/",
    createdAt:"6/4/2025",
    completed: false,

  },
  ]

const oopData = new ProjectList(data);
document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("oop-projects").innerHTML=oopData.renderAll();
})