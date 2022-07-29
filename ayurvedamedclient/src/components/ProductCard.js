import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const ProductCard = ({ product }) => {
  return (
    <div>
     <Card className='my-3 p-3 rounded'>
       <Link to={`/product/${product.medicineId}`}>
         <Card.Img src={product.image} variant='top' />
       </Link>

       <Card.Body>
         <Link to={`/product/${product.medicineId}`}>
           <Card.Title as='div'>
             <strong>{product.medicineName}</strong>
           </Card.Title>
         </Link>

         <Card.Text as='div'>
           {product.category}
         </Card.Text>

         <Card.Text as='h3'>Rs. {product.medicineCost}</Card.Text>
       </Card.Body>
     </Card>
    </div>
  )
}

export default ProductCard;