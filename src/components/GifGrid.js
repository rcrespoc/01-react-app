import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Spinner } from './Spinner' 

export const GifGrid = ({category}) => {
  
  const {data, loading} = useFetchGifs(category);

  return (
    <>
    <h3 className="text-center">{category}</h3>
    {loading && <Spinner />}
    <div className="card-grid">
      {data.map(img => {
        return <GifGridItem 
          key = {img.id}
          {...img}
        />
      })}
    </div>
    </>
  )
}
