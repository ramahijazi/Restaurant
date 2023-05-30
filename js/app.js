'use strict';


const allfood = [];

// constructor 
function Food(FoodID, FoodName, Type, Price ){

    this.FoodID = FoodID,
    this.FoodName = FoodName,
    this.Type = Type,
    this.Price = 0

} 
    


let Pizza = new Food(X(), "Pizza", "Fat");
let Burger = new Food(X(), "burger", "Fat");
let Apple = new Food(X(), "Apple", "Fruit");

console.log(allfood);

// FoodID
// Food.prototype.FoodID = function () {
//     var a = Math.floor(1006 + Math.random() * 1000)
//     a = a.toString().substring(0, 4);

//     a = parseInt(a);
//     console.log(a);
//     return (a);
// }

function X() {// https://stackoverflow.com/questions/29640432/generate-4-digit-random-number-using-substring
    var a = Math.floor(1006 + Math.random() * 1000)
    a = a.toString().substring(0, 4);

    a = parseInt(a);
    console.log(a);
    return (a);
}



// price

function generateRandom(min, max) {
    let Price = Math.floor(Math.random() * (max - min + 1) + min);
    return Price

}

Food.prototype.calPrice = function (min, max) {
    this.Price = generateRandom(min, max)
};





// render 

Food.prototype.renderFood = function () {

    let food = document.getElementById('Food');

    let trE = document.createElement("tr");
    // // divE.classList.add("card");
    // let main= document.getElementsByTagName("main")[0];
    food.appendChild(trE);

    // // let EmployeeImag = document.createElement("img");
    // // EmployeeImag.src = this.MyImage;
    // // divE.appendChild(EmployeeImag);

    let foodID = document.createElement("td");
    foodID.textContent = this.FoodID;
    trE.appendChild(foodID);


    let foodName = document.createElement("td");
    foodName.textContent =  this.FoodName ;
    trE.appendChild(foodName);

    let foodType = document.createElement("td");
    foodType.textContent = this.Type;
    trE.appendChild(foodType);


    let foodPrice = document.createElement("td");
    foodPrice.textContent = this.Price;
    trE.appendChild(foodPrice);

    //     document.write(`<h1> Employee Name: ${this.FullName}<br>Department: ${this.Department} <br> Employee Salary: ${this.Salary} </h1> `)

    // divE.style.backgroundColor ="#FA9884";
    // divE.style.color="white";
    // divE.style.margin="10px";
    // divE.style.width="450px";
    // divE.style.height="500px";
    // main.style.display="flex";
    // main.style.flexWrap="wrap";
    // divE.style.textAlign="center";
    // main.style.justifyContent="center";
    // divE.style.borderRadius="10";
    // divE.style.lineHeight="1.7";
    // main.style.alignContent="center";
    // // EmployeeImag.style.width="280px";
    // // EmployeeImag.style.height="280px";
    // // EmployeeImag.style.margin="15px";

}
Pizza.calPrice(0.5,10)
Pizza.renderFood()
Burger.calPrice(0.5,10)
Burger.renderFood()
Apple.calPrice(0.5,10)
Apple.renderFood()




function handler(e){

  e.preventDefault();
  let FoodID = e.target.foodID.value;
  let FoodName = e.target.foodName.value;
  let Type = e.target.type.value;

  let food =new Food(FoodID,FoodName,Type);
  food.calPrice(0.5,10)
  food.renderFood()

  console.log(FoodID,FoodName,Type);

}



let saveValues = document.getElementById('Food Form');
saveValues.addEventListener('submit',handler)










