const items = [
    {
        id: 1,
        item: "Milk",
        price: 3.99
    },
    {
        id: 2,
        item: "Eggs",
        price: 2.99
    },
    {
        id: 3,
        item: "Sweet Potatoes",
        price: 6.00
    },
    {
        id: 4,
        item: "Kale",
        price: 1.99
    }
]


const addItem = {
    item: "Cereal",
    price: 10.99
}
const addSecondItem = {
    item: "Cooking Spray",
    price: 3.00
}
const addThirdItem = {
    item: "Coffee",
    price: 8.00
}
const addFourthItem = {
    item: "Orange Juice",
    price: 3.00
}
const addFifthItem = {
    item: "Onions",
    price: 8.00
}


const addToShoppingList = (groceryItem) => {
    const lastIndex = items.length - 1
    const currentLastItem = items[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1

    groceryItem.id = idForNewItem
    items.push(groceryItem)
    groceryItem.dateCreated = Date()
}

addToShoppingList(addItem)
addToShoppingList(addSecondItem)
addToShoppingList(addThirdItem)
addToShoppingList(addFourthItem)
addToShoppingList(addFifthItem)
console.log(items)

const findExpensiveGroceries = () => {
    const expensiveGroceries = []
    for (const item of items) {
        if (item.price >= 8.00) {
            expensiveGroceries.push(item)
            console.log(`${item.item} is very spendy because it costs ${item.price}`)
        }
    }
    return expensiveGroceries
}
findExpensiveGroceries()