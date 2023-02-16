const burger = document.querySelector("#burger");
const menu = document.getElementById("menu");
const loadMoreBtn = document.querySelector("#loadmore");
const extra = document.querySelector("#extra");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

loadMoreBtn.onclick = function () {
  if (extra.classList.contains("hidden")) {
    extra.classList.remove("hidden");
    this.innerHTML = "SHOW LESS";
  } else {
    extra.classList.add("hidden");
    this.innerHTML = "LOAD MORE";
  }
};
