import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../../Home/Banner/Banner';
import './MyOrder.css';


const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const handleCancleOrder = id => {
        const url = `https://agile-mountain-23601.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "delete"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Order Cancelled Successfully');
                }
            })
    }
    useEffect(() => {
        fetch('https://agile-mountain-23601.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    const myOrders = orders.filter(order => order.userId == user.uid);
    if (orders.length == 0) {
        return <div className="loading">
            <div class="center">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </div>
    }
    return (
        <>
            <div className="no-banner-section">
                <Banner></Banner>
            </div>

            <Container className="py-lg-5 py-3">
                <Row>
                    <div className="title">
                        <h1>My Orders</h1>
                    </div>
                </Row>
                <Row className="mt-lg-4 mt-2">
                    {
                        orders.length != 0 ?


                            <div className="travel-table animate__animated animate__fadeInUp">
                                <Table responsive="lg" hover>
                                    <thead>
                                        <tr>
                                            <th>Order Name</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Price</th>
                                            <th>Cancel Order</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            myOrders.map(order => <tr>


                                                <td>{order.orderedTour}</td>
                                                <td>{order.fromDate}</td>
                                                <td>{order.toDate}</td>
                                                <td>{order.orderedPrice}</td>
                                                <td><button className="btn travel-btn" onClick={() => handleCancleOrder(order._id)}>Cancle</button></td>

                                            </tr>)
                                        }
                                    </tbody>
                                </Table>

                            </div>
                            :
                            <div>
                                <h1>No order placed</h1>
                            </div>
                    }
                </Row>

            </Container>
        </>
    );
};

export default MyOrder;