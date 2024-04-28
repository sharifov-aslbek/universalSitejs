const p = document.querySelector(".text .container .leftContent h1 span")
const text = p.textContent
let topLine = document.querySelector(".line")
let box22 = document.querySelectorAll('.box-section .container .boxs .box')
let boxImg = document.querySelectorAll(".box-section .container .boxs .box .topContent img")
let li = document.querySelectorAll(".head .container .navbar .menu .btns li")
let lineLi = document.querySelectorAll(".head .container .navbar .menu .btns li .line")
let boxWidth = document.querySelector(".boxWidth")
let toTop = document.querySelector(".totop")
p.textContent = ""
let count = 0
let interval = null
let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
let timeRightBlock = document.querySelector(".aboutTime .rightBlock")
let clockAboutTime = document.querySelector(".aboutTime .left")
function typingText() {
  p.textContent += text.charAt(count)
  count++
  
  if (text.length === count) {
    clearInterval(interval)

    setTimeout(() => {
      p.textContent = ""
      count = 0
      setIntv()
    }, 2500);
  }
}

function setIntv() {
  interval = setInterval(typingText, 200)
}

setIntv()

let boxToh3 = document.querySelectorAll(".box-section .container .boxs .box .topContent h3")
let boxToP = document.querySelectorAll(".box-section .container .boxs .box .topContent p")
console.log(boxToh3);
window.addEventListener("scroll" , () => {
   let scrollY = window.scrollY
   if(scrollY > 200) {
    box22.forEach(item => {
      item.classList.add("active")
    })
    boxToh3.forEach(item => {
      setTimeout(() => {
        item.classList.add("active")
      }, 800);
    }) 

    boxToP.forEach(item => {
      setTimeout(() => {
        item.classList.add("active")
      }, 1100);
    })
   } else {
    box22.forEach(item => {
      item.classList.remove("active")
    })
    boxToh3.forEach(item => {
      item.classList.remove("active")
    })

    boxToP.forEach(item => {
      item.classList.remove("active")
    })
   }
   topLine.style.width = `${scrollY / 2}px`
   
   if(scrollY > 150) {
    toTop.classList.add("active")
   } else {
    toTop.classList.remove("active")
   }

   toTop.addEventListener("click" , () => {
    scrollTo({
      top: 0,
      behavior: "smooth"
    })
   })

   if(scrollY > 910) {
      timeRightBlock.classList.add("active")
      clockAboutTime.classList.add("active")
   } else {
    timeRightBlock.classList.remove("active")
    clockAboutTime.classList.remove("active")
   }
   
})

li.forEach((item , index) => {
  item.addEventListener("mouseenter" , () => {
      lineLi[index].classList.add("active")
    })
    item.addEventListener("mouseleave" , () => {
      lineLi[index].classList.remove("active")
    })
  })


box22.forEach((item) => {
  item.addEventListener("mouseenter" , () => {
    item.style.transform = "scale(1.1)"
  })
  item.addEventListener("mouseleave" , () => {
    item.style.transform = "scale(1)"
  })
})

let sectionLoader = document.querySelector(".loaderSec")
let loaderLine = document.querySelector(".loaderSec .line")
// let spanWriter = document.querySelector(".text .container .leftContent h1 span")
let bgImg = document.querySelector(".text .container .right img")
window.addEventListener("DOMContentLoaded" , () => {
  bgImg.classList.add("active")
  // function loaderDisplay () {
  //   sectionLoader.classList.add("active")
  // }

  // // loaderDisplay()

  // setTimeout(loaderDisplay, 2000);
  // setTimeout(() => {
  //   clearInterval(loadintv)
  // } , 2000)
})

// let countLoad = 0
// let loadintv = null
//  loadintv = setInterval(() => {
//   countLoad++
//   loaderLine.style.width = countLoad + "px"



let aboutTextHour = document.querySelector(".aboutTime .left .time .hour")
let aboutTextMinute = document.querySelector('.aboutTime .left .time .minute')
let aboutTextSecond = document.querySelector(".aboutTime .left .time .second")

setInterval(() => {
   d = new Date();
   hr = d.getHours();
   min = d.getMinutes();
   sec = d.getSeconds();
   hr_rotation = 30 * hr + min / 2;
   min_rotation = 6 * min;
   sec_rotation = 6 * sec;

   hour.style.transform = `rotate(${hr_rotation}deg)`
   minute.style.transform = `rotate(${min_rotation}deg)`
   second.style.transform = `rotate(${sec_rotation}deg)`
  aboutTextHour.textContent = hr
  aboutTextMinute.textContent = min
  aboutTextSecond.textContent = sec

}, 1000);


