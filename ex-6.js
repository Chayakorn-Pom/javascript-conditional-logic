
let favoriteBooks = []
function addFavoriteBook(bookName){
 return favoriteBooks.push(bookName)
}

let checkWOrd = favoriteBooks.includes('Beauty')
if(checkWOrd === true){favoriteBooks.push}
else{favoriteBooks.pop}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty")



console.log(favoriteBooks)