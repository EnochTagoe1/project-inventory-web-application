function createNewItem(name, price, stock, brand, color) {
    //creating contact template(name, price...etc)
    const li = document.createElement("li");
    li.classList.add("instrument");

    //this will create new li
    if (name && price && stock && brand && color) {
        li.innerHTML = ` <img src="https://media.istockphoto.com/id/905799290/photo/plan.jpg?s=612x612&w=is&k=20&c=0ahrWa3K53x41E_P7f7_2yH9QnGD-8APHNSoghgJx9U=" alt="grand piano">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Price:</strong> ${price}</p>
                    <p><strong>In Stock:</strong> ${stock}</p>
                    <p><strong>Brand:</strong> ${brand}</p>
                    <p><strong>Color:</strong> ${color}</p>`;

    //get ul list from DOM
    const ul = document.querySelector("ul");

    //append the newly created li or item
    ul.append(li);
                    
    };
};




// <!-- <li class="Piano">
//             <img src="https://media.istockphoto.com/id/905799290/photo/plan.jpg?s=612x612&w=is&k=20&c=0ahrWa3K53x41E_P7f7_2yH9QnGD-8APHNSoghgJx9U=" alt="grand piano">
//             <p><strong>Name:</strong> Grand Piano</p>
//             <p><strong>Price:</strong> $55000</p>
//             <p><strong>In Stock:</strong> Yes</p>
//             <p><strong>Brand:</strong> Yokohama</p>
//             <p><strong>Color:</strong> Black</p>
//             <button>Remove Instrument</button>
            
//         </li> -->