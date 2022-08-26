import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import './Dashboard.scss'
import Data from './Data'
import Secondmodal from './Secondmodal'

const Dashboard = () => {

  const [st, setSt] = React.useState(null);

  return (
    <div className='dashboard '>
      <Container>
      <Row style={{display:'flex', marginTop: '30px'}}>
        {Data&&Data?.map(item => (
  
         <Col xs={12} lg={6}>
          <div className="box">
          <img src={item.thumbnail.small} className="largeimg" />
            <div className="imgbutton">
            <button className='middle' onClick={()=>setSt(item.id)}> <Secondmodal id = {st} /></button>
             </div>
            <h4 className='title'>{item.title}</h4>
            <p className='content'>{item.content}</p>
            <div className="name">
            <span className='author'>{item.author.name}</span>
            <span className='author'>{item.author.role}</span>
            <span className='date'>{item.date}</span>
            </div>
          </div>
         </Col>
          ))}     
      </Row>  
        
      </Container>
    </div>

  )
}

export default Dashboard