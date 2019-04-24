document.addEventListener("DOMContentLoaded", function(event) {
  const click = document.querySelector(".click-menu");
  const menu = document.querySelector("#menu");
  let query = window.matchMedia("(min-width: 576px)");

  click.addEventListener("click", function() {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });

  function resize() {
    if (query.matches) {
      menu.classList.remove("open");
    }
  }

  window.onresize = resize;
});
