const jmeno = "Michal"
const elZprava = document.querySelector("#zprava")
let vek 
console.log(jmeno.length)
console.log(elZprava)
console.log(vek)

vek = 20
console.log(vek)
//null vypln neboli nedefinovana hodnota
if(elZprava === null) {
  console.log("pozadovany element neni nalezen")
} else {
  console.log(elZprava)
}
// undefined nedefinovana hodnota
if(vek === undefined) {
  vek = Number(prompt("zadej svuj vek"))
} else {
  console.log(vek)
}
const jeSude = (cislo) => {
  if(cislo % 2 === 0) {
    return true 
  } else {
    return false
  }
}

// druha verze zapisu kratsi
const jeSude2 = (cislo) => {
  return cislo % 2 === 0 ? true : false 
}
// pokud tam neni vice kodu a vraci jen tohle
const jeSude3 = (cislo) => cislo % 2 === 0 ? true : false 

//pokud ma pouze jeden parametr, bez parametru musi byt prazdne zavorky
const jeSude4 = cislo => cislo % 2 === 0 ? true : false 

console.log(jeSude(2))

const generujNahodneCislo = () => {
  return Math.floor(Math.random() * 100)
}

const generujNahodneCislo2 = () => Math.floor(Math.random() * 100)

console.log(generujNahodneCislo2())

const produkt = {
  nazev: "mikrovlnka",
  cena: 500,
  kategorie: "domaci sportrebice"
}

const zobrazProdukt = produkt => {
  document.body.innerHTML = `
  <h2>${produkt.nazev}</h2>
  <p>cena: ${produkt.cena}</p>
  <p>kategorie: ${produkt.kategorie}</p>
  `
}

const zprava = "Vitejte na strance"
const vek1 = 18
//lokalni podminka můze mit stejny nazev protoze plati jen v podmince kde je napsana, globalni nemuze
if(vek >= 18) {
  document.body.innerHTML = zprava
  const preference1 = prompt("zadej oblibeny alkohol")
  const preference = "vino"
 if(preference === "vino") {
  const sleva = 0.1
 }
} else {
  zprava = "nemuzes vstoupit"
  document.body.innerHTML = zprava
}

