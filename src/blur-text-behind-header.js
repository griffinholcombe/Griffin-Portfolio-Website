document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const elements = document.querySelectorAll('.cardsContainer > div, .cardsContainer img');

  if (!header || !elements) return;

  const headerBottom = header.getBoundingClientRect().bottom;
  const headerTop = header.getBoundingClientRect().top;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < headerBottom && elementBottom > headerBottom/5) {
      element.classList.add('element-behind-header');
    } else {
      element.classList.remove('element-behind-header');
    }
  });
});
