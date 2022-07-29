import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import MedicineService from '../services/MedicineService';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import OrderService from '../services/OrderService';
import useAuth from '../context/useAuth';
export default function Product() {
  const { id } = useParams();
  const {auth}= useAuth();
  const [img,setImg]=useState("holder.js/100px180");
  const navigate=useNavigate();
  const location=useLocation();
  const [medicine, setMedicine] = useState({
    medicineName: "",
    medicineCost: 60.00,
    mfd: "",
    expiryDate: "",
    companyName: "",
    category: ""
  });
  useEffect(()=>{
    MedicineService.getMedicineById(id).then((response)=>setMedicine(response.data)).catch(e=>alert(e));
  },[medicine])
  const handleCart=(e)=> {
    e.preventDefault();
    if(!auth) 
      return navigate("/signin",{replace:true});
    OrderService.createOrder(medicine,auth);
    navigate("/myorder/"+auth.userId,{replace:true});
  }
  return (
    <>
      <Card style={{ width: '28rem' }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{medicine.medicineName}</Card.Title>
          <Card.Text>
            Company : {medicine.companyName}
          </Card.Text>
          <ListGroup.Item>
            Category : {medicine.category}
          </ListGroup.Item>
          <ListGroup.Item>
            Manufacturing date : {medicine.mfd}
          </ListGroup.Item>
          <ListGroup.Item>
            Expiry date : {medicine.expiryDate}
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Price:</Col>
              <Col>
                <strong>Rs.{medicine.medicineCost}</strong>{"  "}<del>Rs.{(medicine.medicineCost+medicine.medicineCost*0.1)}</del>
              </Col>
            </Row>
          </ListGroup.Item>
          <Button variant="primary" onClick={handleCart}>Buy Now</Button>
        </Card.Body>
      </Card>
    </>
  )
}
