// index.js

//  import the crypto module



//  get a commands using process.argv


// complete the  function

let a=0;
let b=0;
let c=0;

const problem = "5 * 5";
const calculator = opr =>{
  const [a,operation,b]=opr.split(" ");
switch (operation) {
    case "add" && "+": 
    return +a + +b;

    case "sub" && "-" :
      return a-b;
    
    case "multi" && "*":
      return a*b;

    case "devide" && "/":
      return a/b;
    
    // case "sin" :
    //   return a
  default:
    (0 &&
    console.log("Error"));
}
}
console.log(calculator(problem));
