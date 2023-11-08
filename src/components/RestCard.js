import React from 'react';

import Card from 'react-bootstrap/Card';


function RestCard({item}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.photograph} />
      <Card.Body  className='text-black' >
        <Card.Title>{item.name}j</Card.Title>
        <Card.Text>
          {item.address}
        </Card.Text>
      </Card.Body>
    </Card>





    </div>
  )
}

export default RestCard