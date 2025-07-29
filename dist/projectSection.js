export function projectCard(item) {
  return "<div class=\"project-item outline-0 shadow-lg rounded-xl px-6 py-4 bg-gray-200  mx-auto\">\n        <h2 class=\"text-xl text-purple-900\">".concat(item.title, "</h2>\n       <div class=\" mt-2 flex items-center justify-between \">\n       <p class=\"status\">").concat(item.completed ? "تکمیل شده" : "در حال اجرا", "<p/>\n       <p class=\"badge\"> ").concat(item.category, "</p></div>\n        <p class=\"dark:text-black pt-4 pb-2 border-b border-b-gray-300\">").concat(item.description, "</p>\n        <span class=\"pt-2  block text-left text-gray-600 text-sm\">").concat(item.createdAt, "</span>\n        <a class=\"text-left block text-gray-600 pt-2 text-sm hover:text-gray-400\" href=").concat(item.link, " target=\"_blank\" rel=\"noopener noreferrer\">").concat(item.link, "</a>\n      </div>");
}
export function projectList(items) {
  return items.map(function (item) {
    return projectCard(item);
  }).join("");
}