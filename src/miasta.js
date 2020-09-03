let miasta = [
  {
    nazwa: "Białystok",
    procentLeft: 87.00923787528868,
    procentTop: 29.301533219761456,
  },
  {
    nazwa: "Poznań",
    procentLeft: 27.10899730561969,
    procentTop: 41.629028960817685,
  },
  {
    nazwa: "Toruń",
    procentLeft: 43.210585065434955,
    procentTop: 31.281260647359453,
  },
  {
    nazwa: "Zielona Góra",
    procentLeft: 13.45444572748267,
    procentTop: 49.64873935264048,
  },
  {
    nazwa: "Szczecin",
    procentLeft: 4.2803310238645,
    procentTop: 24.21562180579221,
  },
  {
    nazwa: "Rzeszów",
    procentLeft: 75.93457467282524,
    procentTop: 81.92185689948887,
  },
  {
    nazwa: "Kraków",
    procentLeft: 56.163818321785996,
    procentTop: 81.77712095400334,
  },
  {
    nazwa: "Olsztyn",
    procentLeft: 61.414443802925334,
    procentTop: 18.3947870528109,
  },
  {
    nazwa: "Bydgoszcz",
    procentLeft: 37.53308314087761,
    procentTop: 29.412572402044248,
  },
  {
    nazwa: "Poznań",
    procentLeft: 27.1746728252502,
    procentTop: 41.57516183986374,
  },
  {
    nazwa: "Wrocław",
    procentLeft: 28.199942263279432,
    procentTop: 63.74986371379894,
  },
  {
    nazwa: "Opole",
    procentLeft: 36.74101231716705,
    procentTop: 71.19144804088585,
  },
  {
    nazwa: "Elbląg",
    procentLeft: 50.96699384141646,
    procentTop: 11.8218228279387,
  },
  { nazwa: "Łódź", procentLeft: 51.47436489607389, procentTop: 52.65 },
  {
    nazwa: "Kołobrzeg",
    procentLeft: 14.196179753656649,
    procentTop: 11.483492333901202,
  },
  {
    nazwa: "Lublin",
    procentLeft: 81.41305812163203,
    procentTop: 61.38923339011926,
  },
  {
    nazwa: "Chełm",
    procentLeft: 90.10006735950729,
    procentTop: 63.14950596252127,
  },
  {
    nazwa: "Warszawa",
    procentLeft: 66.4889530408006,
    procentTop: 44.513645655877355,
  },
  {
    nazwa: "Katowice",
    procentLeft: 47.459516936104684,
    procentTop: 78.00838160136286,
  },
  {
    nazwa: "Gdańsk",
    procentLeft: 43.59416859122401,
    procentTop: 8.140408858603099,
  },
];

function ładujMiasta() {
  miasta.forEach(function (miasto) {
    const elementMiasto = document.createElement("div");
    const elementEtykieta = document.createElement("span");
    elementMiasto.classList.add("miastoNaMapie");
    elementEtykieta.classList.add("miastoNaMapieEtykieta");

    elementEtykieta.innerHTML = miasto.nazwa.toUpperCase();
    elementMiasto.style.left = miasto.procentLeft + "%";
    elementMiasto.style.top = miasto.procentTop + "%";
    elementMiasto.appendChild(elementEtykieta);
    elementMiasto.addEventListener("click", function () {
      window.location.hash = "#" + miasto.nazwa;
    });
    document.querySelector(".mapa").appendChild(elementMiasto);
  });

  miasta.forEach(function (miasto) {
    const elementListyMiasto = document.createElement("li");
    const elementListyLink = document.createElement("a");
    elementListyLink.innerText = miasto.nazwa.toUpperCase();
    elementListyLink.href = "#" + miasto.nazwa;
    elementListyMiasto.appendChild(elementListyLink);
    document.querySelector(".listaMiast").appendChild(elementListyMiasto);
  });
}

window.ładujMiasta = ładujMiasta;
