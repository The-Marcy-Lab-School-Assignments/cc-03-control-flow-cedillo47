//1
function countFromOne(num){ 
    for(let i = 1; i<= num; i++){
        console.log(i)
    }
  
}

//2
function isNegative(num){
 let number = false
 if(Math.sign(num) === 1){
     console.log(number)
 } else {
     number = true;
     console.log(number)
 }
}

isNegative(-1)
//3
function countEveryEven(){
  
}

//4
function countEveryOdd(x){
    for(let i = 1; i < x; i++){
        if ( i % 3 === 0){
            console.log(i)
        }
    }
  
}

//5 
function isAllLowerCase(string){
  if (string === string.toLowerCase()){
      return true 
  } else {
      return false
  }
}

console.log(isAllLowerCase('Hello'))
