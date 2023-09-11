"use client"

import { Photo} from "@/components/PhotoItem"
import { photoList } from "./data/photoList"
import { useState } from "react"
import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/types/photoType";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState<PhotoItem>();

  const openPhoto = (id: number) => {
    const photo = photoList.find(item => item.id === id)
    if(photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="text-white mx-2">
      <h1 className="text-center p-8 font-bold">🚀 - Photos</h1>
      
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((item) => (
          <Photo 
            key={item.id}
            picture={item}
            onClick={() => openPhoto(item.id)}
          />
        ))}
      </section>

      {showModal && 
        <Modal 
          image={imageOfModal}
          closeModal={closeModal}
        />
      }
    </div>
  )
}
