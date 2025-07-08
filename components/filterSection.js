
import { projectItems } from '../components/data.js';

export function renderFilter(containerSelector, renderProject) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const enableCategory = container.dataset.filterCategory === "true";
  const enableDate = container.dataset.filterDate === "true";
  const enableComplete = container.dataset.filterComplete === "true";

  const selectedCategories = new Set();
  const today = new Date();
  const baseDate = new Date();
  baseDate.setDate(today.getDate() - 1000);

  let html = "";

  // دسته‌بندی
  if (enableCategory) {
    html += 
      `<div>
      <div class="relative md:w-[70%] mx-auto" >
      <div id="category-btn" class="flex justify-between cursor-pointer gap-x-4 px-4 items-center  border border-gray-300 rounded-lg">
        <p class="md:text-xl md:span-2 py-2 text-right shrink-0 md:shrink-1"> دسته‌بندی</p>
        <span class="md:pl-2"><i data-lucide="chevron-down"></i></span>
      </div>
      <div id="category-menu" class="hidden absolute mt-1 md:static mx-auto  w-40 bg-white border rounded-lg border-gray-300 shadow-lg z-10">
        <ul class="category-list text-center py-4">
          <li class="btn-filter active-filter-btn" data-category="all">همه</li>
          <li class="btn-filter" data-category="html-css">Html-Css</li>
          <li class="btn-filter" data-category="tailwind">تیلویند</li>
          <li class="btn-filter" data-category="js">JS</li>
          <li class="btn-filter" data-category="react">ری‌اکت</li>
          <li class="btn-filter" data-category="next">نکست</li>
          <li class="btn-filter" data-category="wp">وردپرس</li>
          <li class="btn-filter" data-category="seo">سئو</li>
        </ul>
      </div>
      </div>
      <p id="categoryMessage" class="text-red-600 font-bold px-8 my-8 text-center"></p>
      </div>`
    ;
  }

  // فیلتر تاریخ
  if (enableDate) {
    html += 
`<div>
<div class="relative">
        <p id="filter-btn" class="md:text-lg md:hidden shrink-0 whitespace-nowrap cursor-pointer border border-gray-300 rounded-lg p-2">فیلتر تاریخ</p>
        <div id="date-filter" class="hidden absolute top-15 -right-30 bg-white dark:bg-gray-800 md:static md:flex md:px-6 md:my-4 space-y-2 flex flex-col">
          <label class="text-black">از تاریخ:
            <input type="range" id="startDate" min="0" max="1000" value="0" class="rounded">
            <span class="text-black dark:text-white" id="startDateLabel"></span>
          </label>
          <label class="text-blue-800">تا تاریخ:
            <input type="range" id="endDate" min="0" max="1000" value="1000" class="rounded">
            <span class="text-black dark:text-white" id="endDateLabel"></span>
          </label>
          <button id="filterDateBtn" class="border-2 mx-auto border-purple-700 bg-purple-200 text-purple-700 w-40 px-4 py-1 rounded-xl">اعمال فیلتر</button>
        </div>
      </div>
      <p id="dateMessage" class="text-red-600 font-bold px-8 my-8 text-center"></p>
      </div>`
    ;
  }

  // فیلتر کامل‌شده
  if (enableComplete) {
    html += 
      `<div>
      <div class="flex md:items-center shrink-0 px-4 justify-center">
        <label for="complete-toggle" class="flex cursor-pointer text-lg items-center gap-2 shrink-0 whitespace-nowrap">
          پروژه‌های انجام شده
          <div class="relative pr-4 items-center">
            <input id="complete-toggle" type="checkbox" class="sr-only peer" aria-label="completeToggle">
            <div class="w-14 h-8 bg-gray-300 peer-checked:bg-blue-600 dark:bg-gray-600 rounded-full transition-colors"></div>
            <div class="absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-6.5"></div>
          </div>
        </label>
      </div>
      </div>`
    ;
  }

  // نمایش HTML در DOM
  container.innerHTML = html;

  if (window.lucide) {
    lucide.createIcons();
  }

  //رویدادها

  if (enableCategory) {
    const btns = document.querySelectorAll(".btn-filter");
    const message = document.getElementById("categoryMessage");
    const categoryBtn = document.getElementById("category-btn");
    const categoryMenu = document.getElementById("category-menu");

    categoryBtn.addEventListener("click", () => {
      categoryMenu.classList.toggle("hidden");
    });


    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.category;
        if (category === "all") {
          selectedCategories.clear();
          btns.forEach((b) => b.classList.remove("active-filter-btn"));
          btn.classList.add("active-filter-btn");
          renderProject(projectItems);
          return;
        }

        document.querySelector("[data-category='all']").classList.remove("active-filter-btn")

        if (selectedCategories.has(category)) {
          selectedCategories.delete(category);
          btn.classList.remove("active-filter-btn");
        } else {
          selectedCategories.add(category);
          btn.classList.add("active-filter-btn");
        }

        const filteredItems = projectItems.filter((item) => selectedCategories.has(item.category));

        if (selectedCategories.size === 0) {
          message.textContent = "";
          document.querySelector("[data-category='all']").classList.add("active-filter-btn");
          renderProject(projectItems);
        } else if (filteredItems.length  === 0) {
          message.textContent = "پروژه‌ای با این دسته‌بندی وجود ندارد";
          renderProject([]);
        } else {
          message.textContent = "";
          renderProject(filteredItems);
        }
      });
    });
  }

  // تاریخ
  if (enableDate) {
    const filterBtn = document.getElementById("filter-btn");
    const dateFilter = document.getElementById("date-filter");
    const filterDateBtn = document.getElementById("filterDateBtn");
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const startDateLabel = document.getElementById("startDateLabel");
    const endDateLabel = document.getElementById("endDateLabel");
    const dateMessage = document.getElementById("dateMessage");

    const updateLabels = () => {
      const startOffset = parseInt(startDateInput.value, 10);
      const endOffset = parseInt(endDateInput.value, 10);
      const start = new Date(baseDate);
      const end = new Date(baseDate);
      start.setDate(baseDate.getDate() + startOffset);
      end.setDate(baseDate.getDate() + endOffset);
      startDateLabel.textContent = start.toLocaleDateString('en-US');
      endDateLabel.textContent = end.toLocaleDateString('en-US');
    };

    updateLabels();
    startDateInput.addEventListener("input", updateLabels);
    endDateInput.addEventListener("input", updateLabels);

    filterBtn.addEventListener("click", () => {
      dateFilter.classList.toggle("hidden");
    });

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
        renderProject([]);
      } else {
        renderProject(filteredByDate);
      }
    });
  }


  if (enableComplete) {
    const showCompleted = projectItems.filter((item) => item.completed);
    const completeToggle = document.getElementById("complete-toggle");
    const allBtn = document.querySelector("[data-category='all']")
    completeToggle.addEventListener("change", () => {
      if (completeToggle.checked) {
        renderProject(showCompleted);
      } else {
        selectedCategories.clear();
        document.querySelectorAll(".btn-filter").forEach((btn)=>btn.classList.remove("active-filter-btn"));
          if (allBtn) allBtn.classList.add("active-filter-btn");
          renderProject(projectItems)
        }
    })
  }
}