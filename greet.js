let person={
      name:"susmita",
      age:21,
      country:"India"
}
function logData() {
      console.log(persone.name+"is+" + person.age+"years old who lives in"+"person.county")
}


// let largeCountries =["china","india","usa","indonesia","pakistan"]

// let largeCountries =["Tuvalu","india","usa","indonesia","Monaco"]

// largeCountries.shift()
// largeCountries.unshift("china")
// largeCountries.pop()
// largeCountries.push("pakistan")
// console.log(largeCountries)

// let dayofM= 13
// let weekeday= "friday"

// if(dayofM===13 && weekeday==="friday"){
//       console.log("🤬")
// }

// let hands=["rock","paper","scissors"]

// function randomes(){
//       let randomIndex= Math.floor((3*Math.random()))
//       return hands[randomIndex]
// }

// console.log( randomes() )


let fruits=["🍎","🍊","🍎","🍊","🍎","🍎","🍊"]
let apple =document.getElementById("apple-el")
let orange =document.getElementById("orange-el")

shelf()

function shelf(){
      for(let i=0;i<fruits.length;i++){
            if(fruits[i]==="🍎"){
                  apple.textContent+=fruits[i]
            }else{
                  orange.textContent+=fruits[i]
            }
      }
}