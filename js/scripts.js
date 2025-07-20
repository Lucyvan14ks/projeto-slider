// Elementos principais
const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');

const container = document.querySelector('.container');
const list = container.querySelector('.list');
const thumb = container.querySelector('.thumb');

// Eventos
btnNext.addEventListener('click', () => handleCarouselMove('next'));
btnBack.addEventListener('click', () => handleCarouselMove('back'));

/**
 * Função principal que controla o movimento do carrossel
 * @param {'next' | 'back'} direction 
 */
function handleCarouselMove(direction) {
  const listItems = list.querySelectorAll('.list-item');
  const thumbItems = thumb.querySelectorAll('.thumb-item');

  if (!listItems.length || !thumbItems.length) return;

  if (direction === 'next') {
    moveNext(listItems, thumbItems);
  } else {
    moveBack(listItems, thumbItems);
  }

  addTransitionClass(direction);
}

/**
 * Move o primeiro item para o final (próximo)
 */
function moveNext(listItems, thumbItems) {
  list.appendChild(listItems[0]);
  thumb.appendChild(thumbItems[0]);
}

/**
 * Move o último item para o início (voltar)
 */
function moveBack(listItems, thumbItems) {
  list.prepend(listItems[listItems.length - 1]);
  thumb.prepend(thumbItems[thumbItems.length - 1]);
}

/**
 * Adiciona a classe de animação e remove depois de um tempo
 * @param {'next' | 'back'} direction 
 */
function addTransitionClass(direction) {
  container.classList.add(direction);

  setTimeout(() => {
    container.classList.remove('next');
    container.classList.remove('back');
  }, 3000); // Tempo da animação
}
