import React from 'react'
import { Link , Outlet} from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <h1>Home</h1>
       <Link to={'/feature'}>Feature</Link>
       <Outlet/>
    </div>
  )
}

export default Home
