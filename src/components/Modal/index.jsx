import React from 'react'
import './Modal.css'

export const Modal = ({currentPhoto, setCurrentPhoto, onNext, onEurrent}) => {
    return <div className="modal">
        <div className="img" style={{backgroundImage: `url(${currentPhoto.photo})`}}>
            <div>
                <button onClick={() => {setCurrentPhoto()}} className="modal1">x</button>
            </div>
            { currentPhoto.id !== 0 && 
                <button className="button" onClick={onEurrent}>←</button>
            }
            { currentPhoto.id !== 9 && 
                <button className="button" onClick={onNext} style={{ marginLeft: `630px`}}>→</button>
            }
        </div>
    </div>
}