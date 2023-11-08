import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'


function Home() {
    const[restaurants,setRestaurants]=useState([])

const fetchData=async()=>{
    const result=await axios.get('/restaurants.json')
setRestaurants(result.data.restaurants);


}

useEffect(()=>{
fetchData()

},[])


console.log(restaurants);


  return (
<div  className='w-100%' >  

<Row   className='mt-5 p-5' >
<Col>
<h1   className='mt-3 mb-5 text-danger' >Find the best Restaurant with us!!</h1>
<p  className='fs-4' >Many of us are foodies on the Wanderlog team, so naturally we’re always on the hunt to eat at the most popular spots anytime we travel somewhere new. With favorites like Steve, Emiljy, and The Dutchj and more, get ready to experience the best flavors</p>

</Col>



<Col>
<img  style={{width:'100%'}} className='ms-3' src="https://i.postimg.cc/7Ly3pYXL/top-view-of-various-fast-food-on-a-wooden-table-Y3-XK7-J8.jpg" alt="" />
</Col>





</Row>






    <Row     >
{




restaurants.map(i=>(

<Col  className='ps-3 mt-3 p-2  pb-5'    lg={3} md={4}  sm={6} > 
     <RestCard    item={i}></RestCard>
     </Col>
))



}





    </Row>
    </div>
  )
}

export default Home