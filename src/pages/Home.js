import React from 'react'
import './Home.css'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  return (
    <div className='home'>
      <Banner/>
      <div className='home__section'>
        <Card
        src="https://a0.muscache.com/im/pictures/miso/Hosting-26040037/original/80a7c958-c7a0-4afd-9f8f-bf3f05e90a21.jpeg?im_w=1200"
        title="Bass Lodge ~ Luxur.."
        description="Enjoy the best water views in Huskisson at Tide, a charming, coastal cottage right on Currambene"
        price="AUD15,000/Night"/>
        <Card
        src="https://a0.muscache.com/im/pictures/miso/Hosting-908810706722021367/original/8180b22d-d11d-4400-98e7-1970b2b20027.jpeg?im_w=720"
        title="Red Rock Hut"
        description="Escape to Red Rock Hut, a tiny house nestled on the picturesque west coast of King Island"
        price="AUD10,00/Night"
        />
        <Card
        src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-729222082598904619/original/a68ff956-07fe-46f9-9c81-8406a9ce944b.jpeg?im_w=960"
        title="The Pole House"
        description="Entire home hosted by Great Ocean Road Holidays"
        price="AUD8,00/Night"/>
      </div>
      <div className='home__section'>
        <Card
        src="https://a0.muscache.com/im/pictures/miso/Hosting-897400605052639917/original/5ebe6564-d39b-403d-bf71-f603a11393f2.jpeg?im_w=960"
        title="Emerald Retreat"
        description="Come stay at our spectacular 'tree house' in Emerald "
        price="AUD5,00/Night"/>
        <Card
        src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-51696815/original/7eeabf9c-ebad-438b-b74e-f9426c435d45.jpeg?im_w=960"
        title="Terranova Bay View"
        description="Terranova Bay View has a gorgeous vista across Port Phillip Bay, it is breathtaking on every level"
        price="AUD18,00/Night"/>
        <Card
        src="https://a0.muscache.com/im/pictures/miso/Hosting-844245675866273357/original/4f5abaaa-8c7d-412b-892a-dde0ab639ab5.jpeg?im_w=960"
        title="Luxury Hunter Valley Estate"
        description="Set on sprawling acreage, Kalani Estate is a sanctuary nestled amongst the trees."
        price="AUD13,00/Night"/>
      </div>
    </div>
  )
}

export default Home