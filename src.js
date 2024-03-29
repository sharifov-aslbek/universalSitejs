const p = document.querySelector(".text .container .leftContent h1 span")
const text = p.textContent
let topLine = document.querySelector(".line")
let box22 = document.querySelectorAll('.box-section .container .boxs .box')
let li = document.querySelectorAll(".head .container .navbar .menu .btns li")
let lineLi = document.querySelectorAll(".head .container .navbar .menu .btns li .line")
let toTop = document.querySelector(".totop")
p.textContent = ""
let count = 0
let interval = null

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


window.addEventListener("scroll" , () => {
   let scrollY = window.scrollY
   if(scrollY > 200) {
    box22.forEach(item => {
      item.classList.add("active")
    })
   } else {
    box22.forEach(item => {
      item.classList.remove("active")
    })
   }
   topLine.style.width = `${scrollY}px`
   
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
