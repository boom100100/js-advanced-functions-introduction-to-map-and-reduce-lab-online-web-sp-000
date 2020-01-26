// Your code here

//map-like
function mapToNegativize(array){
  let newArray = [];
  for (let element of array){
    newArray.push(element - (element * 2));
    //wrong. assuming test is correct, solution provided above is better. newArray.push(-Math.abs(element));
  }
  
  return newArray;
}

function mapToNoChange(){}

function mapToDouble(){}

function mapToSquare(){}


//reduce-like
function reduceToTotal(){}
function reduceToAllTrue(){}
function reduceToAnyTrue(){}


