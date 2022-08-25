const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    return this.indexOf(oldName, 0);
    // Change code above this line
  },
};

console.log(bookShelf.updateBook);
