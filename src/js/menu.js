
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector("[data-menu]"),
    closeList: document.querySelector('.main-nav__list'),
  };
  console.log(refs);
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeList.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();