function filterByCategory(products) {
    return function (category) {
        return products.filter(function (product) {
            return product.category === category;
        });
    }
}

const products = [
    { name: "Shirt", category: "Clothing"},
    { name: "Pants", category: "Clothing"},
    { name: "Hat", category: "Accesories"},
    { name: "Sunglasses", category: "Accesories"},
]

const ClothingProducts = filterByCategory(products)("Clothing")

console.log(ClothingProducts);