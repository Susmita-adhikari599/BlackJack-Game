

let hasBlackJack=false

let sum=0
let cards=[ ]
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
// let sumEL=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")


let playerEl=document.getElementById("player-el")

let player={
      name: "Susmita",
      chips: 300
}

playerEl.textContent=player.name+" :$" +player.chips
console.log(messageEl)
console.log(sumEl)
console.log(cardEl)
console.log(cards)
//  console.log(hasBlackJack)
// console.log(isAlive)

// console.log(message)
function startGame() {
      isAlive=true
      let firstCard=getRandomCard()
      let secondCard=getRandomCard()
      cards=[firstCard,secondCard]
      sum=firstCard+secondCard
      renderGame()
}
function renderGame(){
     

      cardEl.textContent="Cards: "
      for(let i=0;i<cards.length;i++){
           cardEl.textContent +=(cards[i])+" "
      }
      sumEl.textContent="Sum"+" "+sum
      if(sum<=20){
            message=("Do you want to draw  a new card?")
              
        }else if(sum ===21){
              message=("You have won!")
              hasBlackJack=true
        }else {
              message= ("youre out of the game , sorry ")
              isAlive=false
        }
        messageEl.textContent=message

}

function newCard(){
      // console.log("Drawing new card from the deck...")
      if(isAlive===true &&  hasBlackJack===false ) {
            let newCard=getRandomCard()
            sum+=newCard
            cards.push(newCard)
            renderGame() 
      }
      
     
}
function getRandomCard(){
      let num=Math.floor((Math.random()*13)+1)
      if(num===1){
            return 11
      }else if(num>=11 && num<=13){
            return 10
      }
      else{
            return num
      }
      
}