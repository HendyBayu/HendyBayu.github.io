const anoun = document.querySelector(".anoun");
const anounP = document.querySelector(".anoun p:nth-child(1)");
const anounP1 = document.querySelector(".anoun p:nth-child(2)");
const anounPK = document.querySelector(".anoun p:nth-child(3)");
const ok = document.querySelector(".anoun .ok");
const pValue = document.createElement("i");
anounP.after(pValue);
const pcValue = document.createElement("i");
anounP1.after(pcValue);
const iG = document.querySelectorAll(".border i");
//pilihan komp
function funPilihanKomputer() {
  const pc = Math.random();
  if (pc < 0.34) return "gunting";
  if (pc >= 0.34 && pc < 0.67) return "kertas";
  return "batu";
}

//rule
function funHasil(pc, person) {
  if (person === pc) return "SERI";
  if (person == "gunting") return pc == "kertas" ? "MENANG" : "KALAH";
  if (person == "kertas") return pc == "batu" ? "MENANG" : "KALAH";
  if (person == "batu") return pc == "gunting" ? "MENANG" : "KALAH";
  return "Anda Memilih Pilihan yang Tidak Sesuai";
}
const pilih = document.querySelectorAll(".border .pilih");

for (let i = 0; i < pilih.length; i++) {
  pilih[i].addEventListener("mouseover", function () {
    iG[i].style.transform = "scale(4.1)";
    iG[i].style.color = "#000000";
    pilih[i].addEventListener("mouseout", function () {
      iG[i].style.transform = "scale(3.5)";
      iG[i].style.color = "#525a50";
    });
  });
}

const gunting = document.querySelector(".border .gunting");
gunting.addEventListener("click", function () {
  const pilihanKomputer = funPilihanKomputer();
  const pilihanPerson = gunting.classList.item(1);
  const hasil = funHasil(pilihanKomputer, pilihanPerson);

  if ((anoun.style.display = "none")) {
    anoun.style.display = "flex";
    pValue.setAttribute("class", "fas fa-hand-scissors");
    switch (pilihanKomputer) {
      case "gunting":
        pcValue.setAttribute("class", "fas fa-hand-scissors");
        break;
      case "kertas":
        pcValue.setAttribute("class", "fas fa-hand-paper");
        break;
      case "batu":
        pcValue.setAttribute("class", "fas fa-hand-rock");
    }
    anounPK.innerHTML = "Anda dinyatakan " + hasil;
  } else {
    anoun.style.display = "none";
  }
});
const kertas = document.querySelector(".border .kertas");
kertas.addEventListener("click", function () {
  const pilihanKomputer = funPilihanKomputer();
  const pilihanPerson = kertas.classList.item(1);
  const hasil = funHasil(pilihanKomputer, pilihanPerson);
  if ((anoun.style.display = "none")) {
    anoun.style.display = "flex";
    pValue.setAttribute("class", "fas fa-hand-paper");
    switch (pilihanKomputer) {
      case "gunting":
        pcValue.setAttribute("class", "fas fa-hand-scissors");
        break;
      case "kertas":
        pcValue.setAttribute("class", "fas fa-hand-paper");
        break;
      case "batu":
        pcValue.setAttribute("class", "fas fa-hand-rock");
    }
    anounPK.innerHTML = "Anda dinyatakan " + hasil;
  } else {
    anoun.style.display = "none";
  }
});
const batu = document.querySelector(".border .batu");
batu.addEventListener("click", function () {
  const pilihanKomputer = funPilihanKomputer();
  const pilihanPerson = batu.classList.item(1);
  const hasil = funHasil(pilihanKomputer, pilihanPerson);
  if (anoun.style.display == "none") {
    anoun.style.display = "flex";
    pValue.setAttribute("class", "fas fa-hand-rock");
    switch (pilihanKomputer) {
      case "gunting":
        pcValue.setAttribute("class", "fas fa-hand-scissors");
        break;
      case "kertas":
        pcValue.setAttribute("class", "fas fa-hand-paper");
        break;
      case "batu":
        pcValue.setAttribute("class", "fas fa-hand-rock");
    }
    anounPK.innerHTML = "Anda dinyatakan " + hasil;
  } else {
    anoun.style.display = "none";
  }
});
ok.addEventListener("click", function () {
  anoun.style.display = "none";
});
