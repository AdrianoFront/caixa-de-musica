let toast = document.querySelector(".toast");
let botaoCadastrar = document.querySelector("#botaoCadastrar");
console;

botaoCadastrar.onclick = function () {
  toast.classList.add("visible");

  setTimeout(function () {
    toast.classList.remove("visible");
  }, 2000);
};
