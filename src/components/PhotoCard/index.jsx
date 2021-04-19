import React from 'react';
import './PhotoCard.css'

export const PhotoCard = ({photo, id,  setCurrentPhoto}) => {
    return <div onClick={() => {setCurrentPhoto({photo,id})
                    setCurrentPhoto({
                        photo: photo.urls.full,id
                      
                    })
                }} 
                className="photo-card" 
                style={{backgroundImage: `url(${photo.urls.thumb})`}}>
    </div>
}