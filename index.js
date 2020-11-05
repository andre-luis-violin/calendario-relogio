const calendar = JSDate()
// Pegar os elementos no DOM e alterar o seu conteúdo
document.querySelector("#monthName").innerHTML = calendar.monthName
document.querySelector("#dayName").innerHTML = calendar.dayName
document.querySelector("#dayNumber").innerHTML = calendar.dayNumber
document.querySelector("#year").innerHTML = calendar.year

setInterval(() => {
  document.querySelector("#clock").innerHTML = JSClock()
}, 1000)

function JSClock() {
  const time = new Date() // data/hora atual
  const hour = time.getHours() // hora atual
  const minute = time.getMinutes() // minutos
  const second = time.getSeconds() // segundos
  let clock = "" + (hour > 12 ? hour - 12 : hour)
  if (hour == 0) {
    clock = "12"
  }
  clock += (minute < 10 ? ":0" : ":") + minute
  clock += (second < 10 ? ":0" : ":") + second
  clock += hour >= 12 ? " P.M." : " A.M."
  return clock // 12:49:17
}

function JSDate() {
  // Descobrir o idioma utilizado no navegador (português, inglês...)
  const lang = navigator.language
  // Pega a data atual 
  let date = new Date()

  const calendar = {
    dayNumber: date.getDate(),
    dayName: date.toLocaleString(lang, { weekday: "long" }), // quinta-feira
    monthName: date.toLocaleString(lang, { month: "long" }), // novembro
    year: date.getFullYear(), // 2020
  }

  return calendar
}
