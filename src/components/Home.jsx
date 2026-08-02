import React from 'react'
import './Home.css'
import Aalogobi from '../assets/Aalogobi.jpeg'
import Aalosabji from '../assets/Aalosabji.jpeg'
import bhakari from '../assets/bhakari.jpeg'
import Chikanbiryani from '../assets/Chikanbiryani.jpeg'
import Cholebhature from '../assets/Cholebhature.jpeg'
import poha from "../assets/poha.jpeg"
import Dalkhichadi from '../assets/Dalkhichadi.jpeg'
import Dalrice from '../assets/Dalrice.jpeg'
import dosa from '../assets/dosa.jpeg'
import Fish from '../assets/Fish.jpeg'
import Grilledfish from '../assets/Grilledfish.jpeg'
import idali from '../assets/idali.jpeg'
import Jirarice from '../assets/Jirarice.jpeg'
import menduvada from '../assets/menduvada.jpeg'
import Muttonbiryani from '../assets/Muttonbiryani.jpeg'
import Palakpanir from '../assets/Palakpanir.jpeg'
import Rajamachaval from '../assets/Rajamachaval.jpeg'
import shabudana from '../assets/shabudana.jpeg'
import upma from '../assets/upma.jpeg'
import uttapa from '../assets/uttapa.jpeg'
import Vegbiryani from '../assets/Vegbiryani.jpeg'
import paratha from '../assets/paratha.jpeg'
import Panirbuttor from '../assets/Panirbuttor.jpeg'
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer'


const Home = ({cart,setCart}) => {
let cardData = [
    {
      id: 1,
    name:"Aalosabji",
    image:Aalosabji,
    price:80
  },
    {
      id: 2,
    name:"Bhakari",
    image:bhakari,
    price:60
  },
    {
      id: 3,
    name:"Chikanbiryani",
    image:Chikanbiryani,
    price:50
  },
    {
      id: 4,
    name:"Dalkhichadi",
    image:Dalkhichadi,
    price:100
  },
    {
      id: 5,
    name:"Dalrice",
    image:Dalrice,
    price:40
  },
    {
      id: 6,
    name:"Dosa",
    image:dosa,
    price:80
  },
    {
      id: 7,
    name:"Fish",
    image:Fish,
    price:70
  },
    {
      id: 8,
    name:"Grilledfish",
    image:Grilledfish,
    price:200
  },
    {
      id: 9,
    name:"Idali",
    image:idali,
    price:20
  },
    {
      id: 10,
    name:"Jirarice",
    image:Jirarice,
    price:90
  },
    {
      id: 11,
    name:"Menduvada",
    image:menduvada,
    price:120
  },
    {
      id: 12,
    name:"Muttonbiryani",
    image:Muttonbiryani,
    price:130
  },
    {
      id: 13,
    name:"Palakpanir",
    image:Palakpanir,
    price:150
  },
    {
      id: 14,
    name:"Panirbuttor",
    image:Panirbuttor,
    price:180
  },
    {
      id: 15,
    name:"paratha",
    image:paratha,
    price:38
  },
      {
      id: 16,
    name:"poha",
    image:poha,
    price:40
  },
      {
      id: 17,
    name:"Rajamachaval",
    image:Rajamachaval,
    price:70
  },
      {
      id: 18,
    name:"shabudana",
    image:shabudana,
    price:20
  },
      {
      id: 19,
    name:"upma",
    image:upma,
    price:40
  },
      {
      id: 20,
    name:"uttapa",
    image:uttapa,
    price:90
  },
      {
      id: 21,
    name:"Vegbiryani",
    image:Vegbiryani,
    price:30
  }
]
return (
    <div>
      
    <Card cardData={cardData} cart={cart} setCart = {setCart}/>
    </div>
  )
}

export default Home
