
// grab elements
let showAll = document.getElementById("all-btn");
let showKids = document.getElementById("kids-btn");
let showCardio = document.getElementById("cardio-btn");
let showBjj = document.getElementById("bjj-btn");
let showMT = document.getElementById("muay-thai-btn");
let showBootcamp = document.getElementById("bootcamp-btn");


let cardioSchedule = document.getElementById("kickboxing");
let bjjSchedule = document.getElementById("bjj");
let muayThaiSchedule = document.getElementById("muay-thai");
let bootcampSchedule = document.getElementById("bootcamp");
let kidsSchedule = document.getElementById("kids");
let kidsBjjSchedule = document.getElementById("kids-bjj");



// functions
function clickAll(){
    cardioSchedule.classList.remove("hidden");
    bjjSchedule.classList.remove("hidden");
    muayThaiSchedule.classList.remove("hidden");
    bootcampSchedule.classList.remove("hidden");
    kidsBjjSchedule.classList.remove("hidden");
    kidsSchedule.classList.remove("hidden");

    showKids.classList.remove("bg-red-700");
    showCardio.classList.remove("bg-red-700");
    showBjj.classList.remove("bg-red-700");
    showMT.classList.remove("bg-red-700");
    showBootcamp.classList.remove("bg-red-700");
    showAll.classList.add("bg-red-700");
};

function clickKids(){
    cardioSchedule.classList.add("hidden");
    bjjSchedule.classList.add("hidden");
    muayThaiSchedule.classList.add("hidden");
    bootcampSchedule.classList.add("hidden");
    kidsSchedule.classList.remove("hidden");
    kidsBjjSchedule.classList.remove("hidden");

    showAll.classList.remove("bg-red-700");
    showCardio.classList.remove("bg-red-700");
    showBjj.classList.remove("bg-red-700");
    showMT.classList.remove("bg-red-700");
    showBootcamp.classList.remove("bg-red-700");
    showKids.classList.add("bg-red-700");
};

function clickCardio(){
    kidsSchedule.classList.add("hidden");
    kidsBjjSchedule.classList.add("hidden");
    bjjSchedule.classList.add("hidden");
    muayThaiSchedule.classList.add("hidden");
    bootcampSchedule.classList.add("hidden");
    cardioSchedule.classList.remove("hidden");

    showAll.classList.remove("bg-red-700");
    showKids.classList.remove("bg-red-700");
    showBjj.classList.remove("bg-red-700");
    showMT.classList.remove("bg-red-700");
    showBootcamp.classList.remove("bg-red-700");
    showCardio.classList.add("bg-red-700");
};

function clickBjj(){
    kidsSchedule.classList.add("hidden");
    kidsBjjSchedule.classList.add("hidden");
    cardioSchedule.classList.add("hidden");
    muayThaiSchedule.classList.add("hidden");
    bootcampSchedule.classList.add("hidden");
    bjjSchedule.classList.remove("hidden");

    showAll.classList.remove("bg-red-700");
    showKids.classList.remove("bg-red-700");
    showCardio.classList.remove("bg-red-700");
    showMT.classList.remove("bg-red-700");
    showBootcamp.classList.remove("bg-red-700");
    showBjj.classList.add("bg-red-700");
};

function clickMuayThai(){
    kidsSchedule.classList.add("hidden");
    kidsBjjSchedule.classList.add("hidden");
    cardioSchedule.classList.add("hidden");
    bjjSchedule.classList.add("hidden");
    bootcampSchedule.classList.add("hidden");
    muayThaiSchedule.classList.remove("hidden");

    showAll.classList.remove("bg-red-700");
    showKids.classList.remove("bg-red-700");
    showBjj.classList.remove("bg-red-700");
    showCardio.classList.remove("bg-red-700");
    showBootcamp.classList.remove("bg-red-700");
    showMT.classList.add("bg-red-700");
};

function clickBootcamp(){
    kidsSchedule.classList.add("hidden");
    kidsBjjSchedule.classList.add("hidden");
    cardioSchedule.classList.add("hidden");
    bjjSchedule.classList.add("hidden");
    muayThaiSchedule.classList.add("hidden");
    bootcampSchedule.classList.remove("hidden");

    showAll.classList.remove("bg-red-700");
    showKids.classList.remove("bg-red-700");
    showCardio.classList.remove("bg-red-700");
    showBjj.classList.remove("bg-red-700");
    showMT.classList.remove("bg-red-700");
    showBootcamp.classList.add("bg-red-700");
};

// call functions
showAll.addEventListener("click", clickAll);

showKids.addEventListener("click", clickKids);

showCardio.addEventListener("click", clickCardio);

showBjj.addEventListener("click", clickBjj);

showMT.addEventListener("click", clickMuayThai);

showBootcamp.addEventListener("click", clickBootcamp);