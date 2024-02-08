import './book.css'

const Book = ({ title, author, cover, bgColor }) => {
    return (
        <div className='book'>
            <div className='header' style={{backgroundColor: bgColor}}>
                <img src={cover} alt={title}/>
            </div>
            <div className='footer'>
                <h4>{title}</h4>
                <h5>{author}</h5>
            </div>
        </div>
    )

}

export default Book