console.log("Script running...");
// Task 1: All off button
// Select the all off button and console log to confirm you selected successfully

let allOffButton = document.querySelector("#clear")
let lightbulbs = document.querySelectorAll(".lightbulb")

allOffButton.addEventListener("click",function(event){
  for (let i =0; i<lightbulbs.length; i++){
lightbulbs[i].classList.add("offmode")
}
})
console.log(allOffButton)
 
// Select all the lightbulb p tags and console log the length to confirm you selected successfully


console.log(lightbulbs.length)
// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes black

allOffButton.addEventListener("click", function(event){
lightbulbs.style.backgroundColor = "black"
})




// Task 2: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
// Make sure to add an ID so you can select this button


// Select the body and console log to confirm you selected successfully


// Add an event listener such that when your mouse is over CSH mode button, the background color of body becomes green and the text of the lightbulb tags becomes "💻"


let cshButton = document.querySelector("#cshMode")
let body =document.querySelector("body")

cshButton.addEventListener("mouseover", function(event){
  body.style.backgroundColor = "darkGreen"
  for (let i =0; i<lightbulbs.length; i++){
lightbulbs[i].textContent = "💻"
  }
})



// Add an event listener such that when your mouse is off CSH mode button, the background color of body becomes black again and the text of the lightbulb tags goes back to "💡"

cshButton.addEventListener("mouseout", function(event){
  body.style.backgroundColor = "black"
  for (let i =0; i<lightbulbs.length; i++){
lightbulbs[i].textContent = "💡"
  }
})



// Task 3: On and off features
// Add an event listener to each lightbulb such that when you click it, the background color of that p tag changes to white


for (let i =0; i<lightbulbs.length; i++){
  lightbulbs[i].addEventListener("click",function(event){
    lightbulbs[i].style.backgroundColor ="white"
    lightbulbs[i].classList.toggle("offmode")
  })
}




// Extra credit: use classList and toggle to the lightbulb class to toggle on AND off when you click each lightbulb






