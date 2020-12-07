function Products (name,price,piece) {
    this.name = name;
    this.price = price;
    this.piece = piece;
 
}

const productFrance = new Products("France", 15, 4);
const productAnimal = new Products("Animals", 25, 4);
const productCountry = new Products("Pays", 200, 4);

let products = [];

products.push(productFrance, productAnimal, productCountry);

function postProductList(){
    let listOfProducts = "";
    
    products.forEach(prod => 
        listOfProducts += `
        <p>Collection ${prod.name}</p>
        <p>${prod.price} Euros</p>
        <p>${prod.piece} Pieces</p>`
        ) 

        document.getElementById('productList').innerHTML = listOfProducts;
}