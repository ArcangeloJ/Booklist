import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Category from './components/Category';

function App() {

  const categories = [
    {
      name: 'To be read',
      primaryColor: '#E06B69',
      secondaryColor:'#FDE7E8'
    },
    {
      name: 'Reading',
      primaryColor: '#FF8A29',
      secondaryColor:'#FFEEDF'
    },
    {
      name: 'Read',
      primaryColor: '#DB6EBF',
      secondaryColor:'#FAE9F5'
    }
  ]

  const [books, setBooks] = useState([])

  const onNewBookAdded = (book) => {
    setBooks([...books, book])
  }

  return (
    <div className="App">
      <Banner/>
      <Form categories={categories.map(category => category.name)} onBookAdded={book => onNewBookAdded(book)}/>

      {categories.map(category => <Category
        key={category.name}
        name={category.name}
        primaryColor={category.primaryColor}
        secondaryColor={category.secondaryColor}
        books={books.filter(book => book.category === category.name)}
      />)}
    </div>
  );
}

export default App;