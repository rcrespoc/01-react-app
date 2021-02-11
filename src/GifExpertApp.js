import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['YuGiOh'])

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories = {setCategories}/>
      <hr />
      <ol>
        {categories.map( el => (
          <GifGrid
            key = {el}
            category = {el}
          />
        ))}
      </ol>
    </>
  )
}
