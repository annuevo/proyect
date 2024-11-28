
import { displayBooks,orderBooks} from "./util.js";

const Pelicula = {
    id:1,
 title: 'El padrino',
 genero: 'Accion',
 price: 25.99,
}

const books = [
    Pelicula,
    {id:2, title:'Cien años de soledad', genre:'fiction', price:'30.45'},
    {id:3, title:'sapiens', genre:'no-fiction', price:'10.25'},
    {id:4, title:'El hobbit', genre:'fantasy', price:'12.99'},
    {id:5, title:'1999', genre:'fiction', price:'21.39'},
    {id:6, title:'La ciudad de los perros', genre:'no-fiction', price:'15.49'},
]

const [elemento1,...resto] = ["hola","como","estas"];

console.log(elemento1);

const booksContainer = document.getElementById('books');
const filterGenre = document.getElementById('filter-genre');
const sortPriceButton = document.getElementById('sort-price');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const sortId = document.getElementById('sort-id');


sortPriceButton.addEventListener('click',()=> orderBooks(books));

// sortId.addEventListener('click',()=> orderId(books));

filterGenre.addEventListener('change',(e)=>{
    // console.log(e.target.value)
    const genre = e.target.value;
    let filterBooks;
    if(genre ==='all'){
        filterBooks = books;
    }else{
        filterBooks = books.filter(book => book.genre === genre);
    }
    displayBooks(filterBooks);
})

displayBooks(books);
