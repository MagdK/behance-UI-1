function clicked(aLink) {
    // console.log(aLink.target)

    // 1. Remove "active" class
    let links = document.querySelectorAll("header a")
    for (let link of links) {
        link.classList.remove("active")
    }

    // 2. Add "active" class to clicked element
    aLink.target.classList.add("active")
}

let links = document.querySelectorAll("header a")
for (let link of links) {
    link.addEventListener('click', clicked)
}














// // Variables
// var x = 'Magda'
// let xx = 'Magda'
// const xxx = 'Effi'

// // Variables with complex data structures
// let numbers = [1, 2, 3]
// let y = {"name": "Effi", "age": 8}
// let yy = {"name": "Effi", "age": 8, "favouriteNumbers": numbers}

// // Functions
// function functionName() { }

// // Loops
// for (let i = 0; i < 10; i++)  { }
// let manyItems = ["one", "two"]
// for (let item of manyItems) { }