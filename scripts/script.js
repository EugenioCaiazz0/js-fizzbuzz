/*creiamo una costante da lavoro in js per il container di riferimento in html*/
const containerFzBz = document.getElementById(`containerFizzBuzz`);

/*iniziamo il ciclo 1-100*/
for (let i = 1; i <= 100; i++) {
    /*dichiaro le variabili che si riferiscono alle classi che userò nel css e html*/
    let classDiv3 = '';
    let classDiv5 = ``;
    let classDiv3e5 = ``;
    
    /*inizio un unico if che valuti le 3 opzioni di div3, div5 e div3&5, oltre al default*/
    if(i % 3 == 0 && i% 5 == 0){
    classDiv3e5 = `div3e5`;
    /*stampo un box con le relative classi per ogni elemento i calcolato*/
    containerFzBz.innerHTML += 
    `<div class=" fizzBox ${classDiv3e5}">SASICC E FRIARIELL</div>`
  } else if ( i % 3 == 0) {
    classDiv3 = `div3`;
    containerFzBz.innerHTML += 
    `<div class=" fizzBox ${classDiv3}"> SASICC </div>`
  } else if ( i % 5 == 0) {
    classDiv5 = `div5`; 
    containerFzBz.innerHTML += 
    `<div class=" fizzBox ${classDiv5}"> FRIARIELL </div>`
  }

}