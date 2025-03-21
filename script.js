console.log("Hello World!")

function getComputerChoice () {

   const randomNum = Math.floor(Math.random() * 3);

   switch (randomNum) {
    case 0:
        return "rock";
    case 1:
        return "papers";
    case 2:
        return "scissors";
   }
}

console.log(getComputerChoice())
/*



*/