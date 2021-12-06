// Desafio 10
  function techList(techs, name) {
  let list = [];
  let sortedTechs = techs.sort();
  for (let tech of sortedTechs) {
    list.push({
      tech,
      name,
    });
  }
  if (techs.length === 0) return 'Vazio!';
  return list;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(texto) {
  let result = texto.match(/[0-9]/g);
  let aguaCopos = 0;
  for (let item of result) aguaCopos += parseInt(item, 10);
  return (aguaCopos === 1) ? '1 copo de água' : `${aguaCopos} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
