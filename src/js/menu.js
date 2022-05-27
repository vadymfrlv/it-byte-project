(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('body');
  const menuLink = document.querySelectorAll('.menu__link');

  // menuBtnRef.addEventListener("click", () => {
  //   const expanded =
  //     menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  //   menuBtnRef.classList.toggle("is-open");
  //   menuBtnRef.setAttribute("aria-expanded", !expanded);

  //   mobileMenuRef.classList.toggle("is-open");
  //   body.classList.toggle("no-scroll")
  // });
  menuBtnRef.addEventListener('click', toggleMenu);
  menuLink.forEach(function (link) {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  function toggleMenu() {
    if (window.innerWidth < 1366) {
      console.log('im here');

      const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);
      mobileMenuRef.classList.toggle('is-open');
      body.classList.toggle('no-scroll');
    }
  }

  // if ($(body).css('overflow-x') == 'hidden') {
  //   $(body).css('overflow-x', '');
  // }
})();
