import React, {useState, useEffect} from 'react'
import './Gallery.css'
// import {data} from '../../data'
import {PhotoCard} from '../PhotoCard'
import {Modal} from '../Modal'
import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: 'xTARrFjpms_cJ6oRfTUdlcJqZ1vgGkbmOXY4JSzzbMY',
    headers: { 'X-Custom-Header': 'foo' },
  });

export const Gallery = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        unsplash.search.getPhotos({
            query: 'flowers',
            page: 1,
            perPage: 10,
            color: 'green',
            orientation: 'landscape',
          }).then((res) => {
              console.log(res)
              setData(res.response.results)
          })
    }, [])

    const [currentPhoto, setCurrentPhoto] = useState()

    const onNext = () => {
      setCurrentPhoto({photo: data[currentPhoto.id+1].photo,
     id: currentPhoto.id+1})
    }
    const onEurrent = () => {
        setCurrentPhoto({photo: data[currentPhoto.id-1].photo,
          id: currentPhoto.id-1})
         }

    return  <>
    {currentPhoto && <Modal onNext={onNext} 
                            onEurrent={onEurrent} 
                            setCurrentPhoto={setCurrentPhoto} 
                            currentPhoto={currentPhoto}/>}
    <div className="gallery">
        {
            data.map((obj, id) => {
                return <PhotoCard photo={obj} 
                 setCurrentPhoto={setCurrentPhoto} 
                id={id} key={id} />
            })
        }
    </div>
    </>
}