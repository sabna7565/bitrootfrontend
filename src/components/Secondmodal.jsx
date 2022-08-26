import React, { useState } from 'react'
import './Secondmodal.scss'
import Modal from 'react-modal'
import svgclose from '../components/images/svgclose.jpg'
import Data from './Data'

 const Secondmodal = ({id}) => {
  console.log("id", id)
  const [modalIsOpen, setModalIsOpen]  = useState(false)

  var items = Data.find(item => item.id === id);
  console.log("sabna", items)
  
  return (
    <div>
   <button className="btn-modal" onClick={() => setModalIsOpen(true)}>Learn More</button>
    <Modal className="modalbox" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>
     <div className='svgclosediv'><img src={svgclose} className='svgclose' onClick={() => setModalIsOpen(false)} /></div>
    <img src={items&&items?items.thumbnail.small : ''} className="largeimgs" />
    <h2 className="modtitle">{items&&items?items.title : ''}</h2>
    <p className="modpara">{items&&items?items.content : ''}</p>
    <div className="names">
    <img src={items&&items?items.author.avatar : ''} className="propic" alt='nopic'/>
    <span className='author'>{items&&items?items.author.name : ''}</span>
    <span className='author'>{items&&items?items.author.role : ''}</span>
    </div>
      {/* <div>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </div> */}
    </Modal>

        <div className="modal">
            <div className="overlay">
                
            </div>
        </div>
    </div>
  )
}

export default Secondmodal