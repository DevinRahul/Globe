import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from '../components/SearchResult'

function SearchPage() {
  return (
    <div className='search'>
        <div className='searchPage__info'>
            <p>62 stays . 26 auguest to 30 auguest . 2 guest</p>
            <h1>Stays nearby</h1>
            <Button variant='outlined'>Cancellation Flexibility</Button>
            <Button variant='outlined'>Type of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and beds</Button>
            <Button variant='outlined'>More Filters</Button>
        </div>
        <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-885385282630647867/original/12e30bd5-cb85-4901-8367-35677f520c0d.jpeg?im_w=960"
        location="Cape Paterson, Victoria, Australia"
        title="Ocean Paddock, Cape Paterson."
    description="If you want to relax watching Bass Straight waves roll in then visit Ocean Paddock. It is off grid and peaceful."
    star="5.0"
    price="AUD 2,772"
    total="AUD 2,772"
        />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/41268b9e-8239-440f-835b-87ad8be16b44.jpg?im_w=720"
        location="Beaconsfield Upper, Victoria, Australia"
        title="Escape to a Haven in the Hills"
    description="Jabulani Getaway is a beautiful Tiny House that is situated on their stunning equestrian property in the foothills of the Dandenong Ranges."
    star="5.0"
    price="AUD 1,772"
    total="AUD 1,772"
        />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/03b6cb80-e1a3-43c6-8a7a-a04e7205caa5.jpg?im_w=720"
        location="Balamban, Central Visayas, Philippines"
        title="Treehouse De Valentine"
    description="Nature and rustic luxury in one self-contained space best describes Treehouse de Valentine. Unconventional for the right reasons,"
    star="4.0"
    price="AUD 2,562"
    total="AUD 2,562"
        />
        </div>
  )
}

export default SearchPage

