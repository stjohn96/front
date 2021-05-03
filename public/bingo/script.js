//Joker position in array = 12 (starting counting from 0)

function randomArray() {
  arr = []
  while (arr.length < 25) {
    var r = Math.floor(Math.random() * 75) + 1
    if (arr.indexOf(r) === -1) arr.push(r)
  }
  arr[12] = ''
  return arr
}

function printCard() {
  html2canvas(document.querySelector('#container')).then(canvas => {
    saveAs(canvas.toDataURL(), 'KoalaBingoCard.png')
  })
}

function refresh() {
  generateCard()
}

function saveAs(uri, filename) {
  var link = document.createElement('a')
  if (typeof link.download === 'string') {
    link.href = uri
    link.download = filename

    //Firefox requires the link to be in the body
    document.body.appendChild(link)

    //simulate click
    link.click()

    //remove the link when done
    document.body.removeChild(link)
  } else {
    window.open(uri)
  }
}

/* Coordinates

 1st = 230px,150px
 next X = 60px , next Y = 55px
 */

const img = document.getElementById('koala_bingo_img')
const body = document.getElementsByTagName('body')[0]
const container = document.getElementById('container')
const print_button = document.getElementById('print-button')
const reload_button = document.getElementById('reload-button')

function generateCard() {
  var xAxis = 230
  var yAxis = 160
  var bingo_index = 0

  var bingo_numbers = randomArray()

  container.innerHTML = ''

  for (i = 0; i < 5; i++) {
    xAxis = 220
    for (j = 0; j < 5; j++) {
      let p = document.createElement('p')

      p.innerText = bingo_numbers[bingo_index]
      p.style.position = 'absolute'
      p.style.left = xAxis + 'px'
      p.style.top = yAxis + 'px'
      container.appendChild(p)
      xAxis += 58
      bingo_index++
    }
    yAxis += 55
  }
}

generateCard()
print_button.addEventListener('click', printCard)
reload_button.addEventListener('click', refresh)

/* countdown */
const end = new Date('May 9, 2021 16:00:00') // UTC
const human_countdown = document.getElementById('human-countdown')
const dayEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
let localTime = end.getTime()
let localOffset = end.getTimezoneOffset() * 60000
let utc = localTime - localOffset
let offset = 0
let userDate = utc + (3600000 * offset)

let utcDate = new Date(userDate)
human_countdown.innerHTML = 'Your local time: ' + utcDate.toLocaleString()

const seconds = 1000
const minutes = seconds * 60
const hours = minutes * 60
const days = hours * 24

const x = setInterval(function() {
  let nowTime = new Date().getTime()
  let nowOffset = end.getTimezoneOffset() * 60000
  let utc = nowTime + nowOffset
  let offset = 0
  let nowDate = utc + (3600000 * offset)
  const now = new Date(nowDate)

  const difference = end.getTime() - now.getTime()
  if (difference < 0) {
    clearInterval(x)
    return
  }

  dayEl.innerText = Math.floor(difference / days)
  hoursEl.innerText = Math.floor((difference % days) / hours)
  minutesEl.innerText = Math.floor((difference % hours) / minutes)
  secondsEl.innerText = Math.floor((difference % minutes) / seconds)

}, seconds)