import React from 'react'
import './App.css'


const ListComponent = ({listData}) => {
  return (
    
       <ol className='list-container'>
            {listData.map((item, id) => (
             <li key={id} className='list-item'>{item.body}</li>
            ) )}
        </ol>
    
  )
}

export default ListComponent
