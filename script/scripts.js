const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numeros');

let active = 0;
const total = items.length;

function update(newIndex) {
  items.forEach(item => item.classList.remove('ativo', 'active'));
  dots.forEach(dot => dot.classList.remove('ativo', 'active'));

  active = newIndex;
  if (active >= total) {
    active = 0;
  } else if (active < 0) {
    active = total - 1;
  }

  items[active].classList.add('ativo');
  if (dots[active]) {
    dots[active].classList.add('ativo');
  }

  if (numberIndicator) {
    numberIndicator.textContent = String(active + 1).padStart(2, '0');
  }
}

prevButton.addEventListener('click', () => update(active - 1));

nextButton.addEventListener('click', () => update(active + 1));

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => update(index));
});