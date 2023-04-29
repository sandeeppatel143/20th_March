function filterByCategory(products){
    return function(category){
     return products.filter((cate)=>{
        if(cate.category===category){
            return cate
        }
    })
}
}

let products= [
    {name:"Shirt", category:"Clothing"},
    {name:"Pants", category:"Clothing"},
    {name:"Hat", category:"Accessories"},
    {name:"Sunglasses", category:"Accessories"}
]

let clothingproduct=filterByCategory(products)("Clothing")
console.log(clothingproduct);