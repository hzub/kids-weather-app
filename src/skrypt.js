function wyświetlMapę() {
  document.querySelector(".modułPrognoza").classList.remove("aktywny");
  document.querySelector(".modułMapa").classList.add("aktywny");
}

function sprawdźŚcieżkę() {
  let ścieżka = window.location.hash.substr(1);
  if (ścieżka.length > 0) {
    pobierzPogodę(window.location.hash.substr(1));
  } else {
    wyświetlMapę();
  }
}

window.addEventListener("hashchange", sprawdźŚcieżkę);

ładujMiasta();
sprawdźŚcieżkę();
