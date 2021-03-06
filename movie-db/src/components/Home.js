import React, { useState } from 'react'

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Components

// Hook

// Image
import noImage from '../images/no_image.jpg'

const Home = (props) => {
  const [state, setState] = useState('daniel')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return <div>Welcome, {state}</div>
}

export default Home
