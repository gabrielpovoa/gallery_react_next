import { PhotoItem } from '@/types/photoType'
import React from 'react'

interface Props {   
    picture: PhotoItem,
    onClick: () => void;
}

export const Photo = ({picture, onClick}: Props) => {
  return (
    <div 
    onClick={onClick}
    className='cursor-pointer hover:placeholder-opacity-80'>
        <img 
        src={`/assets/${picture.url}`} 
        alt="" 
        className='w-full rounded-sm border-2 border-white p-3'/>
    </div>
  )
}
