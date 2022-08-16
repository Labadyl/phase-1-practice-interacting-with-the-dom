const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const likesBox = document.querySelector('ul.likes')
const from = document.getElementById('comment-form')
const commentsBox = document.querySelector( 'div.comments' )
const pauseBtn = document.getElementById('pause')

heart.addEventListener('click', ()=>{
  const cNumber = counter.innerText
  const likesElement = document.getElementById(`likes-${cNumber}`)
  if(!likesElement){
  const li = document.createElement('li')
  li.id = `likes-${cNumber}`
  const string =`${counter.innerText} has been liked <span>1</span> time`
  li.innerHTML = string
  likesBox.append(li)
  
  }else{
     
    const innerSpanElement = likesElement.querySelector('span')
    const currentLikeNumString =innerSpanElement.textContent
    const likesNum = parseInt(currentLikeNumString)
    innerSpanElement.textContent = likesNum + 1
  }
})

minus.addEventListener('click',()=> {
  const startingCounter = (counter.textContent)
  const num = parseInt(startingCounter)
  counter.textContent = num - 1
})

plus.addEventListener('click',goingUp)

from.addEventListener('submit', (e)=> {
  e.preventDefault()
  const userInput = (e.target.comment.value)
  const p = document.createElement('p')
  p.innerText = userInput
  commentsBox.append(p)
  e.target.reset()

})

let paused = false

let timerId = setInterval(()=>{
  goingUp()
}, 1000)

pauseBtn.addEventListener('click',()=>{
  if (paused){
    timerId = setInterval(()=>{
      goingUp()
    }, 1000)
    }else{
      clearInterval(timerId)
    }
    paused = !paused
  })

function goingUp(){
  const startingCounter = (counter.textContent)
  const num = parseInt(startingCounter)
  counter.textContent = num + 1
}