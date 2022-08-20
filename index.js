
var dice_arra=[];
for (let index = 0; index < 6; index++) {
 // const element = array[index];
 var randomNumber = Math.floor(Math.random() * 6) + 1;
dice_arra.push(randomNumber);
console.log(randomNumber);
 var randomImageSource = "images/dice" + randomNumber + ".png";
 
 document.querySelectorAll("img")[index].setAttribute("src", randomImageSource); 
  
}

function count_duplicate(a){
  let counts = {}
  var result='';
  for(let i =0; i < a.length; i++){ 
      if (counts[a[i]]){
      counts[a[i]] += 1
      } else {
      counts[a[i]] = 1
      }
     }  
    //  counts.forEach(element => {
      
    //  });
    var array_count=[];
     for(let prop in counts){
        result +=prop + " : " + counts[prop] + "</br>";
        array_count.push(prop);
        //  if (counts[prop] >= 2){
            

        //  }
     }
   console.log(result);
   document.getElementById("result").innerHTML = result;
   console.log(counts.length);
   console.log(array_count);

   if(array_count.length == 6)
    document.getElementById("result").innerHTML = "Sai BABBA";


 }
 
 count_duplicate(dice_arra);
// console.log(uniqueCount.dice_arra);



//If player 1 wins
//if (randomNumber1 > randomNumber2) {
  //document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
//}
//else if (randomNumber2 > randomNumber1) {
  //document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//}
//else {
  //document.querySelector("h1").innerHTML = "Draw!";
//}
