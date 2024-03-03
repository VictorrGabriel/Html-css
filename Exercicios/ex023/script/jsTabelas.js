const state = [
  { name: 'São Paulo', population: 44411238 },
  { name: 'Minas Gerais', population: 20538718 },
  { name: 'Rio de Janeiro', population: 16054524 },
  { name: 'Bahia', population: 14141626 },
  { name: 'Paraná', population: 11444380 },
  { name: 'Rio Grande do Sul', population: 10882965 },
  { name: 'Pernambuco', population: 9058931},
  { name: 'Ceará', population: 8794957},
  { name: 'Pará', population: 8121025 },
  { name: 'Santa Catarina', population: 7610361},
  { name: 'Goiás', population:  7056495},
  { name: 'Maranhã', population:  6775805},
  { name: 'Paraíba', population:  3974657},
  { name: 'Amazonas', population:  3941613},
  { name: 'Espírito Santo', population:  3833712},
  { name: 'Mato Grosso', population:  3658649},
  { name: 'Rio Grande do Norte', population:  3302729},
  { name: 'Piauí', population:  3272199},
  { name: 'Alagoas', population:  3127683},
  { name: 'Distrito Federal', population:  2817381},
  { name: 'Mato Grosso do Sul', population:  2757013},
  { name: 'Sergipe', population:  2209558},
  { name: 'Rondônia', population:  1581196},
  { name: 'Tocantins', population:  1511460},
  { name: 'Acre', population:  830018},
  { name: 'Amapá', population:  733759},
  { name: 'Roraima', population:  636707},
];

const rowName = [
  document.getElementById('row1_name'),
  document.getElementById('row2_name'),
  document.getElementById('row3_name'),
  document.getElementById('row4_name'),
  document.getElementById('row5_name'),
  document.getElementById('row6_name'),
  document.getElementById('row7_name'),
  document.getElementById('row8_name'),
  document.getElementById('row9_name'),
  document.getElementById('row10_name'),
  document.getElementById('row11_name'),
  document.getElementById('row12_name'),
  document.getElementById('row13_name'),
  document.getElementById('row14_name'),
  document.getElementById('row15_name'),
  document.getElementById('row16_name'),
  document.getElementById('row17_name'),
  document.getElementById('row18_name'),
  document.getElementById('row19_name'),
  document.getElementById('row20_name'),
  document.getElementById('row21_name'),
  document.getElementById('row22_name'),
  document.getElementById('row23_name'),
  document.getElementById('row24_name'),
  document.getElementById('row25_name'),
  document.getElementById('row26_name'),
  document.getElementById('row27_name'),
];

const rowPop = [
  document.getElementById('row1_pop'),
  document.getElementById('row2_pop'),
  document.getElementById('row3_pop'),
  document.getElementById('row4_pop'),
  document.getElementById('row5_pop'),
  document.getElementById('row6_pop'),
  document.getElementById('row7_pop'),
  document.getElementById('row8_pop'),
  document.getElementById('row9_pop'),
  document.getElementById('row10_pop'),
  document.getElementById('row11_pop'),
  document.getElementById('row12_pop'),
  document.getElementById('row13_pop'),
  document.getElementById('row14_pop'),
  document.getElementById('row15_pop'),
  document.getElementById('row16_pop'),
  document.getElementById('row17_pop'),
  document.getElementById('row18_pop'),
  document.getElementById('row19_pop'),
  document.getElementById('row20_pop'),
  document.getElementById('row21_pop'),
  document.getElementById('row22_pop'),
  document.getElementById('row23_pop'),
  document.getElementById('row24_pop'),
  document.getElementById('row25_pop'),
  document.getElementById('row26_pop'),
  document.getElementById('row27_pop'),
];

let totalValueField = document.getElementById('total');

function positionStates() {
  for (let i = 0; i < state.length; i++) {
    rowName[i].innerHTML = state[i].name;
    rowPop[i].innerHTML = state[i].population;
  }
}
positionStates();

function calculateTotalPopulation(state, index) {
    let tValue = 0;
  if (index === 0) {
    return state[0].population;
  } else {
    tValue +=
    state[index].population + calculateTotalPopulation(state, index-1);
    return tValue
  }
  
}

const calculatePopulation = calculateTotalPopulation(state, state.length - 1);

totalValueField.innerHTML = `<p><strong>${calculatePopulation}</strong></p>`;


