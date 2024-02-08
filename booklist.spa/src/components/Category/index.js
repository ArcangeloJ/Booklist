import './category.css'
import Book from '../Book'

const Category = (props) => {
    const css = {backgroundColor: props.secondaryColor}
    return(
        (props.books.length > 0) ? <section className='category' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='books'>
                {props.books.map(book => <Book bgColor={props.primaryColor} key={book.title} title={book.title} author={book.author} cover={book.cover}/>)}
            </div>
        </section>
        : ''
    )
}

export default Category