// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

FULL_HEART.class = '.activated-heart'
console.log(FULL_HEART)

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

  const hearts = document.querySelectorAll("span.like-glyph")
  console.log(hearts)

  //hearts.forEach(hearts => hearts.className= "activate-heart"
  hearts.forEach(hearts => hearts.addEventListener("click", likeCallback))

  function likeCallback(hearts){
    console.log (hearts.target)
    mimicServerCall()
    .then(() =>{
      if (hearts.target.innerText === EMPTY_HEART){
        hearts.target.innerText = FULL_HEART
        //hearts.classList.add("activated-heart")
      }
      else if (hearts.target.innerText ===FULL_HEART){
        hearts.target.innerText = EMPTY_HEART
      }
    })
    .catch(() => {
      const errorMessage = document.getElementById("modal")
      console.log(errorMessage)
      errorMessage.className = "show"

      setTimeout(() => {
        const errorMessage = document.getElementById("modal")
        console.log(errorMessage)
        errorMessage.className = "hidden"}, 3000)}
      )}
    })
  




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
