async function loadData() {
  const res = await fetch("https://openapi.programming-hero.com/api/words/all");
  const data = await res.json();

  const div = document.getElementById("vocabulary-grid");
  div.innerHTML = ""; 

  data.data.forEach((element) => {
    const div2 = document.createElement("div");
    div2.classList.add("vocabulary-card");
    div2.innerHTML = `
       <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center text-center h-full">
        <h3 class="text-xl font-bold">${element.word}</h3>
        <h4 class="text-xs text-gray-500">Meaning/Pronunciation</h4>
        <p class="text-gray-700">${element.meaning || "N/A"} / ${element.pronunciation}</p>
       
        <div class="w-full flex justify-between items-center mt-auto pt-4">
            <button onclick="handleDetails(${element.id})" class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-gray-600 hover:bg-blue-100 transition">
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

const handleDetails = async (id) => { 
    console.log("Fetching details for ID:", id);
    
    const response = await fetch(`https://openapi.programming-hero.com/api/word/${id}`);
    const response2 = await fetch(`https://openapi.programming-hero.com/api/words/all`);

    const result2 = await response2.json();
    const wordData2 = result2.data; 
    const result = await response.json();
    const wordData = result.data; 
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = `
        <dialog id="modal-${id}" class="modal border-none rounded-xl p-0 backdrop:bg-black/60">
          <div class="modal-box bg-white p-8 rounded-xl shadow-2xl max-w-md w-full relative">
            <form method="dialog">
                <button class="btn btn-sm btn-circle absolute right-4 top-4 bg-gray-100 hover:bg-gray-200 border-none">✕</button>
            </form>
            
            <h3 class="text-2xl font-bold text-blue-600 mb-2">${wordData.word}</h3>
            <div class="space-y-3">
                <p><strong>Meaning:</strong> ${wordData2.meaning || "N/A"}</p>
                <p><strong>Pronunciation:</strong> ${wordData.pronunciation}</p>
                <p><strong>Part of Speech:</strong> <span class="italic text-gray-600">${wordData2.partsOfSpeech || "N/A"}</span></p>
                <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                    <p class="text-sm font-semibold text-blue-800">Example Sentence:</p>
                    <p class="text-sm italic">"${wordData.sentence}"</p>
                </div>
                <p><strong>Synonyms:</strong> ${wordData.synonyms.join(", ")}</p>
            </div>

            <div class="modal-action mt-6 flex justify-end">
              <form method="dialog">
                <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Got it!</button>
              </form>
            </div>
          </div>
        </dialog>
    `;
    
    document.body.appendChild(modalContainer);
    
    const dialog = document.getElementById(`modal-${id}`);
    dialog.showModal();

    dialog.addEventListener('close', () => {
        modalContainer.remove();
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
        <h3 class="text-xl font-bold">${element.word}</h3>
        <h4 class="text-xs text-gray-500">Meaning/Pronunciation</h4>
        <p class="text-gray-700">${element.meaning || "N/A"} / ${element.pronunciation}</p>
       
        <div class="w-full flex justify-between items-center mt-auto pt-4">
            <button onclick="handleDetails(${element.id})" class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-gray-600 hover:bg-blue-100 transition">
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
