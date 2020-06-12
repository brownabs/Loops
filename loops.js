const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
  let domString = '';
  for(let i = 0; i < dinosaurs.length; i++){
    domString += `<div class="dinosaur">`
    domString +=   `<h3>${dinosaurs[i].dinoType}</h3>`;
    domString +=   `<p>${dinosaurs[i].description}</p>`
    domString += `</div>`
  }
  printToDom('dino-barn', domString)
};

const dinosaurs = [
  {
    dinoType: 't-rex',
    description: 'Many teeth.',
  },
  {
    dinoType: 'stegosaurus',
    description: 'Spiky back',
  },
  {
    dinoType: 'velociraptor',
    description: 'Will eat your face',
  }
];

buildDinosaurs();

//array mini challenge 

const colors = ["red", "blue", "purple", "pink", "yellow"];
console.log(colors)

const colorLoop = () => {
  colors.forEach(color => {
    console.log(color)
  });
}
colorLoop();

//init function
(function colorLoop2 () {
  colors.forEach(color => {
    console.log(color)
  });
})();

const buildColors = () => {
  let domString = '';
  for(let i = 0; i < colors.length; i++){
    domString += `<div class="color">`
    domString +=   `<h1>${colors[i]}</h1>`;
    domString += `</div>`
  }
printToDom('colors', domString)
}
buildColors();
