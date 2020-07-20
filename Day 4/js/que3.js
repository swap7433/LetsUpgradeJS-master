var shoppingList=["milk","mangoes","curd","shampoo","soap"]
console.log("Shopping list: "+shoppingList)
document.write("Shopping list: "+shoppingList+"<br/>")

var shoppingBasket=shoppingList
console.log("Shopping basket: "+shoppingBasket)
document.write("Shopping basket: "+shoppingBasket+"<br/>")

var no=window.prompt("How many items do u want to add to basket?")

while(no--)
{
   var item=window.prompt("Add item !")
   shoppingBasket.push(item)
}
console.log("Shopping basket after adding items: "+shoppingBasket)
document.write("Shopping basket after adding items: "+shoppingBasket+"<br/>")