
function displayBooks(bookArray){
    const booksContainer = document.getElementById('books');
    booksContainer.innerHTML='';
    bookArray.forEach((book) => {
      const li =  document.createElement("li");
      li.innerHTML=`
        <span>${book.title} - $${book.price}</span>

      `
        booksContainer.appendChild(li);
    });
}
// }function filtro(e){
//     const genre= e.target.value
//     console.log(genre);
// }


function orderBooks(books){

    const orderBooks = books.sort((a,b)=> a.price-b.price);
    displayBooks(orderBooks);

}


// function orderId(books){

//     const orderBooks = books.sort((a,b)=> a.price-b.price);
//     displayBooks(orderBooks);

// }

export {displayBooks, orderBooks, };