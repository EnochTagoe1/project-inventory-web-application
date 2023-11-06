function createNewItem(name, price, stock, brand, color) {
    const li = instrumentTemplate(name, price, stock, brand, color);
    //creating contact template(name, price...etc)
    // const li = document.createElement("li");
    // li.classList.add("instrument");

    
    //get ul list from DOM
    const ul = document.querySelector("ul");

    //append the newly created li or item
    ul.append(li);
                    
    };
        //this will create new li
    function instrumentTemplate(name, price, stock, brand, color) {
        const li = document.createElement("li");
        li.classList.add("instrument");
    

    //create a button(remove)
    const removeButton = document.createElement("button");
    // add text to button
    removeButton.textContent = "Remove Instrument";
    // add event listener to button using remove() to delete item
    removeButton.addEventListener("click", (event) => {
        event.target.closest(".instrument").remove();
    });


    if (name && price && stock && brand && color) {
        li.innerHTML = ` <img src="https://img.freepik.com/free-vector/musical-melody-symbols-yellow-splotch_1308-64213.jpg?w=2000&t=st=1699237678~exp=1699238278~hmac=5c6b4297a05aa790ee6906019371034ccbc0036c4477cbcfb852eb560aef1167" alt="Image">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Price:</strong> ${price}</p>
                    <p><strong>In Stock:</strong> ${stock}</p>
                    <p><strong>Brand:</strong> ${brand}</p>
                    <p><strong>Color:</strong> ${color}</p>`;
                   
    li.append(removeButton);

//return li;

}; 

return li;
    };
