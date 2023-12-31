import React from 'react'
import './SearchResult.css'

import { FavoriteBorder, StarBorder, StarBorderOutlined} from '@material-ui/icons'

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
  return (
    <div className='searchResult'>
        <img src={img} alt=""/>
        <FavoriteBorder className="search__heart"/>
        <div className='searchResult__info'>
            <div className='searchResult__infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
                
            </div>
            <div className='searchResult__infoBottom'>
                <div className='searchResult__stars'>
                   <StarBorderOutlined className='searchResult__star' />
                   <p><strong>{star}</strong></p> 
                </div>
                <div className='searchResults__Price'>
                    <p>{total}</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SearchResult