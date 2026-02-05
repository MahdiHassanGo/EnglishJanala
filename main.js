async function loadData() {
  const res = await fetch("https://openapi.programming-hero.com/api/words/all");
  const data = await res.json();
  console.log(data);

  const div = document.getElementById("vocabulary-grid");
  data.data.forEach((element) => {
    const div2 = document.createElement("div");
    div2.classList.add("vocabulary-card");
    div2.innerHTML = `
       <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center text-cente">
        <h3>${element.word}</h3>
        <h4>Meaning/Pronunciation</h4>
        <p>${element.meaning} /${element.pronunciation}</p>
       
    <div class="w-full flex justify-between items-center mt-auto">
                        <button class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-gray-600 hover:bg-blue-100 transition"><i class="fa-solid fa-info"></i></button>
                        <button class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-gray-600 hover:bg-blue-100 transition"><i class="fa-solid fa-volume-high"></i></button>
                    </div>
                    </div>
    `;
    div.appendChild(div2);
  });
}

async function loadDataByLevel(level) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/level/${level}`,
  );
  const data = await res.json();

  const div = document.getElementById("vocabulary-grid");

  div.innerHTML = "";
  if (!data.data || data.data.length === 0) {
    div.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-xl font-bold text-gray-400">No data available for Lesson ${level}</p>
            </div>
        `;
    return;
  }
  data.data.forEach((element) => {
    const div2 = document.createElement("div");

    div2.innerHTML = `
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center text-center h-full">
                <h3 class="text-xl font-bold text-gray-800 mb-1">${element.word}</h3>
                <h4 class="text-xs text-gray-500 mb-3">Meaning/Pronunciation</h4>
                <p class="text-lg font-medium text-gray-700 mb-6">${element.meaning} / ${element.pronunciation}</p>
            
                <div class="w-full flex justify-between items-center mt-auto">
                    <button class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-gray-600 hover:bg-blue-100 transition">
                        <i class="fa-solid fa-info"></i>
                    </button>
                    <button class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-gray-600 hover:bg-blue-100 transition">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
            </div>
        `;
    div.appendChild(div2);
  });
}

const lesson1 = document.getElementById("Lesson1");
lesson1.addEventListener("click", function () {
  loadDataByLevel(1);
  lesson1.classList.add("bg-blue-700", "text-white");
  lesson2.classList.remove("bg-blue-700", "text-white");
  lesson3.classList.remove("bg-blue-700", "text-white");
  lesson4.classList.remove("bg-blue-700", "text-white");
  lesson5.classList.remove("bg-blue-700", "text-white");
  lesson6.classList.remove("bg-blue-700", "text-white");
  lesson7.classList.remove("bg-blue-700", "text-white");
});

const lesson2 = document.getElementById("Lesson2");
lesson2.addEventListener("click", function () {
  loadDataByLevel(2);
  lesson2.classList.add("bg-blue-700", "text-white");
  lesson1.classList.remove("bg-blue-700", "text-white");
  lesson3.classList.remove("bg-blue-700", "text-white");
  lesson4.classList.remove("bg-blue-700", "text-white");
  lesson5.classList.remove("bg-blue-700", "text-white");
  lesson6.classList.remove("bg-blue-700", "text-white");
  lesson7.classList.remove("bg-blue-700", "text-white");
});
const lesson3 = document.getElementById("Lesson3");
lesson3.addEventListener("click", function () {
  loadDataByLevel(3);
  lesson1.classList.remove("bg-blue-700", "text-white");
  lesson3.classList.add("bg-blue-700", "text-white");
  lesson2.classList.remove("bg-blue-700", "text-white");
  lesson4.classList.remove("bg-blue-700", "text-white");
  lesson5.classList.remove("bg-blue-700", "text-white");
  lesson6.classList.remove("bg-blue-700", "text-white");
  lesson7.classList.remove("bg-blue-700", "text-white");
});
const lesson4 = document.getElementById("Lesson4");
lesson4.addEventListener("click", function () {
  loadDataByLevel(4);
  lesson1.classList.remove("bg-blue-700", "text-white");
    lesson2.classList.remove("bg-blue-700", "text-white");
    lesson3.classList.remove("bg-blue-700", "text-white");
  lesson4.classList.add("bg-blue-700", "text-white");
  lesson3.classList.remove("bg-blue-700", "text-white");
  lesson5.classList.remove("bg-blue-700", "text-white");
  lesson6.classList.remove("bg-blue-700", "text-white");
  lesson7.classList.remove("bg-blue-700", "text-white");

});
const lesson5 = document.getElementById("Lesson5");
lesson5.addEventListener("click", function () {
  loadDataByLevel(5);
  lesson1.classList.remove("bg-blue-700", "text-white");
  lesson2.classList.remove("bg-blue-700", "text-white");
  lesson3.classList.remove("bg-blue-700", "text-white");
  lesson5.classList.add("bg-blue-700", "text-white");
  lesson4.classList.remove("bg-blue-700", "text-white");
  lesson6.classList.remove("bg-blue-700", "text-white");
  lesson7.classList.remove("bg-blue-700", "text-white");
});
const lesson6 = document.getElementById("Lesson6");
lesson6.addEventListener("click", function () {
  loadDataByLevel(6);
  lesson6.classList.add("bg-blue-700", "text-white");
  lesson5.classList.remove("bg-blue-700", "text-white");
    lesson7.classList.remove("bg-blue-700", "text-white");
    lesson1.classList.remove("bg-blue-700", "text-white");
    lesson2.classList.remove("bg-blue-700", "text-white");
    lesson3.classList.remove("bg-blue-700", "text-white");
    lesson4.classList.remove("bg-blue-700", "text-white");

});
const lesson7 = document.getElementById("Lesson7");
lesson7.addEventListener("click", function () {
  loadDataByLevel(7);
  lesson7.classList.add("bg-blue-700", "text-white");
  lesson6.classList.remove("bg-blue-700", "text-white");
   lesson1.classList.remove("bg-blue-700", "text-white");
    lesson2.classList.remove("bg-blue-700", "text-white");
    lesson3.classList.remove("bg-blue-700", "text-white");
    lesson4.classList.remove("bg-blue-700", "text-white");
    lesson5.classList.remove("bg-blue-700", "text-white");
    
});

loadData();
