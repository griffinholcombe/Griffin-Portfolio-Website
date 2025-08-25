document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const body = document.querySelector('body');

  if (!header || !body) return;

  const headerBottom = header.getBoundingClientRect().bottom;

  if (headerBottom > 0) {
    body.classList.add('body-blur');
  } else {
    body.classList.remove('body-blur');
  }
});
