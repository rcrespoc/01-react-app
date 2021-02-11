import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
  
  const [inputValue, setInputValue] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2){
      setCategories(el => [inputValue, ...el]);
      setInputValue('');
    }
  }
  const handlerInputChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <form onSubmit = {handlerSubmit}>
      <input 
        type = "text"
        onChange = {handlerInputChange}
        value = {inputValue}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}