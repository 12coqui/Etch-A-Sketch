let click
const btn = document.querySelector('.grid-btn')
const btnRemove = document.querySelector('.remove')

    

const Function = () => {
      const container = document.querySelector('.container');
      const input = document.querySelector('#grid-number');
      const print = (e) => {
         if(click){
         const color = document.querySelector('#color-picker');
         const tg = e.target;
         tg.setAttribute('style', `background-color: ${color.value}`);
      }
   };


     const  cleanContainer = () => {
      const allCells = container.querySelectorAll('.grid-cell');
      allCells.forEach((item) => item.remove());
   };


     const  createGridCells = () => {
      let numberOfCell = input.value * input.value;
      if(numberOfCell >= 256 && numberOfCell <= 10000) {
         for(let i = 0; i < numberOfCell; i++){
            const newCell = document.createElement('div');
            newCell.classList.add('grid-cell');
            container.appendChild(newCell)};
            container.setAttribute('style', `grid-template-columns: repeat(${input.value}, 1fr)`);
            container.setAttribute('style', `grid-template-columns: repeat(${input.value}, 1fr)`);
            const cell = document.querySelectorAll('.grid-cell');
            cell.forEach((item) => item.addEventListener('mouseover', print));
         }
      };
      
return { print, cleanContainer, createGridCells }
}
const board = Function ();

   // CREATE BOARD
btn.addEventListener('click', board.createGridCells);

   // CLEAN BOARD
btnRemove.addEventListener('click', board.cleanContainer); 

  // CHANGE CONDITION TO PRINT
  document.querySelector('body').addEventListener('click', (e) => {click = !click});

