import React from 'react'
import './Form.css'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {addimage} from '../../Redux/Action/Action'

function Form() {

  const dispatch = useDispatch()
  const {register, handleSubmit, errors} = useForm()

    const submitHandler = (data)=> {
      dispatch(addimage(data))
    }
  
  return (
    <div className='container1'>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input type="text" name='imageurl' placeholder='Enter image url' {...register("imageurl")}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form