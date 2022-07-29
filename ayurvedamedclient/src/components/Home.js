import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import a, { b, c, d } from '../assets/images';
import './home.css';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard';
export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/medi/readAll').then(res => res.data).then(data => setProducts(data)).catch(e => alert(e));
    }, [products]);
    const musu = (
        <Row>
            {products.map((product) => (
                <Col key={product.medicineId} sm={12} md={6} lg={4} xl={3}>
                    <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    );
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 wall"
                        src={b}
                        width={'800'}
                        height={'400'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Ayur</h3>
                        <p>When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 wall"
                        src={c}
                        width={'800'}
                        height={'400'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ayur</h3>
                        <p>Ayurveda teaches us to cherish our innate-nature “to love and honor who we are”, not as what people think or tell us, “who we should be.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 wall"
                        src={d}
                        width={'800'}
                        height={'400'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Ayur</h3>
                        <p>
                            Life (ayu) is the combination (samyoga) of body, senses, mind, and reincarnating soul.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {products.length == 0 ? <div>No medicine found</div> : musu }
        </div>
    )
}
