import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../Display/Display.css'
import {deleteimage} from '../../Redux/Action/Action'

function Display() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.image.imageurl)
  // console.log(state)

  const handler = (e)=>{
    const arr = [...state]
    arr.splice(e.target.id, 1)
    dispatch(deleteimage(arr))
  }

  const hold = state.map((elem,id)=>{
    return <div className='imagecard'  key={id} >
      <img src={elem.imageurl} alt="" id={id} onClick={handler} />
    </div>
  })
  return (
    <div className='display'>
      <div className='cards'>
        {state.length > 0 ? hold : <h2>No images</h2>}
      </div>
    </div>
  )
}

export default Display