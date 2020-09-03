function wyświetlPrognozę(obiektZPrognozą, któraPrognoza) {
  document.querySelector(".prognoza_" + któraPrognoza + " .ikonka").src =
    "ikony/" + obiektZPrognozą.ikonka + ".png";
  document.querySelector(
    ".prognoza_" + któraPrognoza + " .temperatura_wartość"
  ).innerText = obiektZPrognozą.temperatura;
}

function wyświetlPogodę(pogoda) {
  document.querySelector(".modułMapa").classList.remove("aktywny");
  document.querySelector(".modułPrognoza").classList.add("aktywny");

  document.querySelector(".nazwa_miasta").innerText = pogoda.miasto;
  document.querySelector(".ikonka_teraz").src =
    "ikony/" + pogoda.teraz.ikonka + ".png";

  document.querySelector(".temperatura_wartość_teraz").innerText =
    pogoda.teraz.temperatura;

  document.querySelector(".opis_teraz").innerText = pogoda.teraz.opis;
  document.querySelector(".wiatr_teraz").innerText = pogoda.teraz.wiatrPrędkość;
  document.querySelector(".wschód_teraz").innerText = pogoda.teraz.wschódSłońca;
  document.querySelector(".zachód_teraz").innerText = pogoda.teraz.zachódSłońca;
  document.querySelector(".zachmurzenie_teraz").innerText =
    pogoda.teraz.zachmurzenie;

  wyświetlPrognozę(pogoda.prognoza.dziś, "dziś");
  wyświetlPrognozę(pogoda.prognoza.jutro, "jutro");
  wyświetlPrognozę(pogoda.prognoza.pojutrze, "pojutrze");
}

function pobierzPogodę(miasto) {
  fetch("http://wowapi.pl/pogoda/prognoza/?miasto=" + miasto)
    .then(function (odpowiedź) {
      return odpowiedź.json();
    })
    .then(function (pogoda) {
      wyświetlPogodę(pogoda);
    });
}

window.pobierzPogodę = pobierzPogodę;
