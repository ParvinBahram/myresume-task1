
export  function projectCard(item){
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
  
export function projectList(items){
  return items.map((item)=>projectCard(item)).join("");
}
