import React from 'react'
import { Link } from 'react-scroll'
import Button from '../layout/Button.jsx'
import img from '../assets/don_5.png'

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center">
      <h2 className="text-5xl font-semibold leading-tight">Build God's House </h2>
      <h3 className="text-3xl font-semibold leading-tight text-brightRed ">4 God To Build Your House </h3>
      <span className="text-5xl font-semibold text-brightGreen">eFundraiser</span>

      <p>
        eFundraiser is a getway to the world of blessings 
        “It's not how much we give, but how much love we put into giving.” 
        “Help one another. There's no time like the present, and no present like the time.” 
        “Volunteers are the only human beings on the face of the earth who reflect this nation's compassion, 
        unselfish caring, patience, and just plain loving one another.”
      </p>

      <Link to="payment" spy={true} smooth={true} duration={500}>
        <Button title="Donate" />
      </Link>
      </div>
      <div className="w-full md:w-2/6"> 
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default Home
