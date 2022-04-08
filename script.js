//Set necessary variables +
let slideIndex = 0;
let items = [];
let nextSlide = document.querySelector('.next');
let prevSlide = document.querySelector('.prev');
let digiPho = document.querySelector('.digimonPhoto');
let digiName = document.querySelector('.digiName');

let digi = fetch('https://digimon-api.vercel.app/api/digimon');
digi.then((response) =>
  response.json())
  .then((data) => {
    items.push(data)
    console.log(items)
    digiName.innerHTML = `${items[0][0].name}`
    digiPho.src = items[0][0].img;

  })

function neverEnding() {
  if (slideIndex === items[0].length) {
    slideIndex = 0;
  } else if (slideIndex === -1) {
    slideIndex = items[0].length - 1;
  }
}

function addInfo() {
  digiName.innerHTML = `${items[0][slideIndex].name}`;
  digiPho.src = items[0][slideIndex].img;
}

function clearItAll() {
  digiName.innerHTML = ``;
  digiPho.src = null;
}

nextSlide.addEventListener('click', function () {
  slideIndex++;
  neverEnding();
  clearItAll();
  addInfo();
  console.log(items[0].length)
  console.log(slideIndex)
})

prevSlide.addEventListener('click', function () {
  slideIndex--;
  neverEnding();
  clearItAll();
  addInfo();
  console.log(items[0].length)
  console.log(slideIndex)

})