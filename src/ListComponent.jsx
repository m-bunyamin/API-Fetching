import React from 'react'
import './App.css'


const ListComponent = ({listData}) => {
  return (
    <div className='list-Container'>
       <ol>
            {listData.map((item, id) => (
             <li key={id} className='list-item'>{item.body}</li>
            ) )}
        </ol>
    </div>
  )
}

export default ListComponent
