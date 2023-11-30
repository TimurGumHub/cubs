const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
// container.style.gap = '1px';



const btn = document.createElement('button');
btn.style.width = '30px';
btn.style.height = '10px';
btn.textContent = 'button';
btn.style.fontSize = '3px';
container.appendChild(btn);


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function handleMouseOver() {
  this.style.backgroundColor = getRandomColor();
}
// function handleMouseOut() {
//   this.style.backgroundColor = 'red';
// }



function select_and_delete() {
  const elements = container.querySelectorAll('div');
  elements.forEach(i => {
    i.remove();   
  })
  const answer = prompt('Какое количество квадратов задать для новой сетки?');
  const number = parseInt(answer, 10);

  for (let rowIndex = 0; rowIndex < number; rowIndex++) {

    const rowContainer = document.createElement('div');
    rowContainer.style.display = 'flex';
    rowContainer.style.width = '100%';
  
  
    for (let index = 0; index < number; index++) {
      const cub = document.createElement('div');
      // cub.style.justifyContent = 'space-around';
      cub.style.width = '20px';
      cub.style.height = '20px';
      cub.style.background = 'red';
      cub.style.border = '2px solid black';
      cub.style.margin = '1px';
      rowContainer.appendChild(cub);
  
  
      cub.addEventListener('mouseover', handleMouseOver);
      // cub.addEventListener('mouseout', handleMouseOut);
      
    }
  
    container.appendChild(rowContainer)
  
  
  }
}

btn.addEventListener('click', select_and_delete)
