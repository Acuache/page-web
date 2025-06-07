let lista = document.querySelector(".marquee__list");
let i = 0;
setInterval(() => {
  lista.style.marginLeft = `-${i}px`;
  if (i > lista.clientWidth) {
    i = 0;
  }
  i += 0.15; //Velocidad de 0.1
}, 0);
