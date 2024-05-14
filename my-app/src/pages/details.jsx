import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pokemon from "pokemontcgsdk";
pokemon.configure({ apiKey: "2ac9a9d0-ee95-4167-a7ac-fab8dfe9731c" });

export default function Detail() {
  const [card, setCard] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  
  useEffect(() => {
    pokemon.card
    .find(id)
    .then((result) => {
      setCard(result)
      const footer = document.querySelector('footer')
        if (footer)  {footer.style.bottom = 'auto';}
        })
        .catch((error) => {
            setError(error);
        });
    }, [id]);

    if (error) return <h1>{error.message}</h1>;
    if(!card) return <div>Loading</div>
    const { images, tcgplayer } = card;

  return (
    <div className="row single">
      <div className="col-xl-7 col-xs-12">
          <h1>{card.name}</h1>
        {card && card.images && (
          <img src={images.large} alt={card.name} />
        )}
      </div>
      <div className="col-xl-3 col-xs-12">
        {card && card.tcgplayer && card.tcgplayer.url && (
          <a href={card.tcgplayer.url}>Buy From Player</a>
        )}
          <p>Released By: {card.set.releaseDate}</p>
          <p>Last Updated: {card.tcgplayer.updatedAt}</p>
          {card && card.tcgplayer && card.tcgplayer.prices && card.tcgplayer.prices.normal && (
            <div className="row">
            <div className="col-sm-3 col-xs-6">
            <p>Normal Market</p>
            <h2 className='market'>${tcgplayer.prices.normal.market}</h2>
            </div>
            <div className="col-sm-3 col-xs-6">
            <p>Normal Low</p>
            <h2 className="low">${tcgplayer.prices.normal.low}</h2>
            </div>
            <div className="col-sm-3 col-xs-6">
            <p>Normal Mid</p>
            <h2 className='mid'>${tcgplayer.prices.normal.mid}</h2>
            </div>
            <div className="col-sm-3 col-xs-6">
            <p>Normal High</p>
            <h2 className='high'>${tcgplayer.prices.normal.high}</h2>
            </div>
            </div>
        )}
          
        {card && card.tcgplayer && card.tcgplayer.prices && card.tcgplayer.prices.holofoil && (
            <div className="row">
            <div className="col-sm-3 col-xs-6">
            <p>Holofoil Market</p>
            <h2 className='market'>${tcgplayer.prices.holofoil.market}</h2>
            </div>
            <div className="col-sm-3 col-xs-6">
            <p>Holofoil Low</p>
            <h2 className="low">${tcgplayer.prices.holofoil.low}</h2>
            </div>
            <div className="col-sm-3 col-xs-6">
            <p>Holofoil Mid</p>
            <h2 className='mid'>${tcgplayer.prices.holofoil.mid}</h2>
            </div>
            <div className="col-sm-3 col-xs-6">
            <p>Holofoil High</p>
            <h2 className='high'>${tcgplayer.prices.holofoil.high}</h2>
            </div>
            </div>
        )}
        {card && card.tcgplayer && card.tcgplayer.prices && card.tcgplayer.prices.reverseHolofoil && (
            <div className="row">
            <div className="col-sm-3 col-xs-6">
            <p>ReverseHolofoil Market</p>
            <h2 className='market'>${tcgplayer.prices.reverseHolofoil.market}</h2>
            </div>
            <div className="col-sm-3 col-xs-6">
            <p>ReverseHolofoil Low</p>
            <h2 className="low">${tcgplayer.prices.reverseHolofoil.low}</h2>
            </div>
            <div className="col-sm-3 col-xs-6">
            <p>ReverseHolofoil Mid</p>
            <h2 className='mid'>${tcgplayer.prices.reverseHolofoil.mid}</h2>
            </div>
            <div className="col-sm-3 col-xs-6">
            <p>ReverseHolofoil High</p>
            <h2 className='high'>${tcgplayer.prices.reverseHolofoil.high}</h2>
            </div>
            </div>
        )}
      </div>
    </div>
  );
}
