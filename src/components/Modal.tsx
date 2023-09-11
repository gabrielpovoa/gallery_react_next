import { PhotoItem } from '@/types/photoType'
import React from 'react'

interface Props {
    image: PhotoItem,
    closeModal: () => void;
}

export const Modal = ({image, closeModal}: Props) => {
  return <>
    <div className='fixed left-0 right-0 bottom-0 flex justify-center items-center bg-black/90'>
        <img 
            src={`/assets/${image}`} 
            alt="" 
            className='max-w-screen max-h-screen'
            />
    </div>
        <button 
        className='fixed top-2 right-5 bg-slate-600 p-2 rounded text-sm w-10 h-10 '
        onClick={closeModal}>X</button>
    </>
}
