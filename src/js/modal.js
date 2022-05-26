(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-submit-modal-open]'),
    closeModalBtn: document.querySelector('[data-submit-modal-close]'),
    modal: document.querySelector('[data-submit-modal]'),
    menu: document.querySelector('[data-menu]'),
    menuBtn: document.querySelector('[data-menu-button]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    refs.menu.classList.remove('is-open');
    refs.menuBtn.classList.remove('is-open');
    refs.body.classList.remove('no-scroll');
  }
})();
