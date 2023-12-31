//console.log("connected")
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

// console.log("Name", event.target.name.value);    
// console.log("Price", event.target.price.value);
// console.log("In Stock", event.target.stock.value);
// console.log("Brand", event.target.brand.value);
// console.log("Color", event.target.color.value);

// Destructure target.value to simplify
const { name, price, stock, brand, color} = event.target;

//call the fx and plug the above values as arguments to create a new list item
createNewItem(name.value, price.value, stock.value, brand.value, color.value);
console.log(count)
// update the count
count++;

//call the addCount fx to update the DOM
addCount(count);

//reset the form
form.reset();

});

const listItems = document.querySelectorAll("li");
for (let item of listItems) {
    item.addEventListener("click", (event) => {
        event.target.closest(".instrument").remove();
    });
};

// select rest button and add event listener "click"
const resetButton = document.querySelector(".button-reset")
resetButton.addEventListener("click", () => {
form.reset();
});