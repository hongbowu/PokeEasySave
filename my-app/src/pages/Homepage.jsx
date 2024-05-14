import {useState} from 'react';
import { Link } from 'react-router-dom';
import pokemon from 'pokemontcgsdk';
pokemon.configure(
  {apiKey:'2ac9a9d0-ee95-4167-a7ac-fab8dfe9731c'}
)

export default function HomePage() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState(null);
  const [error, setError] = useState('');

  function handleChange (e) {
    setInput(e.target.value)
  }
  
  const footer = document.querySelector('footer')
  function fetchData () {
    if (!input) return;
    
    setError('');
    
    pokemon.card.where({ q: `name:${input}` })
    .then(result => {
      setData(result.data)
      footer.style.bottom='auto';
    })
    .catch(error=>{
      setError(error)
    })
  }

  

    return (
      <div id='mid-container' className='row'>
        <div className='searchBar'>
          <input type='text' onChange={handleChange} placeholder='search by name' />
          <button onClick={fetchData}>Search</button>
        </div>
      { error?
        <div>Error: {error.message}</div>
      : !data?
        <div>Loading...</div>
      :
        data.map((card, index) => (
        <div className='col-3 cards' key={index}>
          <Link to={`PokeEasySave/detail/${card.id}`}>
          {card && card.images && card.images.small && (
          <img src={ card.images.small } alt={card.name}/>
          )}
          </Link>
        <p>Released By: {card.set.releaseDate}</p>
        </div>
      ))
      }
      </div>
    )
}