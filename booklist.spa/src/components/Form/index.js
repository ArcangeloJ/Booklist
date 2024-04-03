import './Form.css'
import TextField from '../TextField'
import DropDownList from '../DropDownList'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')
    const [category, setCategory] = useState('')

    const addBook = (book) =>
        fetch('/api/book/add', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        }).then(response => response.json());

    const onAddBook = (event) => {
        event.preventDefault();
        
        if (!title || !author || !category) {
            alert('Invalid Data!');
            return;
        }

        const bookObj = {
            title: title,
            author: author,
            cover: cover,
            category: category   
        };

        addBook(bookObj).then(bookResponse => {
            alert('Book added');
            props.onBookAdded(bookResponse);
            setTitle('');
            setAuthor('');
            setCover('');
            setCategory('');
        });
    }

    return (
        <section className="book-form">
            <form onSubmit={onAddBook}>
                <h3>Fill the form to add book</h3>
                <TextField
                    label='Title'
                    placeholder="Type the book title"
                    vlu={title}
                    onAltered={vlu => setTitle(vlu)}
                />
                <TextField
                    label='Author'
                    placeholder="Type the book author"
                    vlu={author}
                    onAltered={vlu => setAuthor(vlu)}
                />
                <TextField
                    label='Cover'
                    placeholder="Type the book cover url"
                    vlu={cover}
                    onAltered={vlu => setCover(vlu)}
                />
                <DropDownList
                    label='Category'
                    itens={props.categories}
                    vlu={category}
                    onAltered={vlu => setCategory(vlu)}
                />
                <Button>
                    Add book
                </Button>
            </form>
        </section>
    )
}

export default Form