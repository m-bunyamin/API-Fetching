import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ListComponent from './ListComponent'
import './App.css'

const ParentComponent = () => {
    const [data, setData] = useState([])
    const [showData, setShowData] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

 useEffect(() => {
    if (showData){
        setLoading(true)
        setError(null)
        fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => (resp.json())
    .then((result) => { 
        setTimeout(() => {
            setData (result)
            setLoading(false)
        }, 2000)
    

    }))
    .catch((err) => {
        setError("Failed to load Data:", err.message)
        setLoading(false)
    }) 
    }
 }, [showData]) 

  return (
    <div className='wrapper'>
      <div className='Apifetching'>
        <h1>API FETCHING</h1>
        <button onClick={() => {setShowData(true)}}>Fetch Data</button>
      </div>
        {loading && <p className='loading'>Loading...</p>}
        {error && <p className='error'>{error}</p>}
      <ListComponent listData={data}/>
    </div>
  )
}

export default ParentComponent
