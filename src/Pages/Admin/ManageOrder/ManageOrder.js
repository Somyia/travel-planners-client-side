import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import Banner from '../../Home/Banner/Banner';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const handleApprove = id => {
        const url = `https://agile-mountain-23601.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "put"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert('Order Approved Successfully');
                }
            })
    }
    useEffect(() => {
        fetch('https://agile-mountain-23601.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);
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
                        <h1>Manage All Orders</h1>
                    </div>
                </Row>
                <Row className="mt-lg-4 mt-2">
                    {
                        orders.length != 0 ?
                            <div className="travel-table animate__animated animate__fadeInUp">
                                <Table responsive="lg">
                                    <thead>
                                        <tr>
                                            <th>Order Name</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Approved</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map(order => <tr key={order._id}>


                                                <td>{order.orderedTour}</td>
                                                <td>{order.fromDate}</td>
                                                <td>{order.toDate}</td>
                                                <td>{order.orderedPrice}</td>
                                                <td>{order.status}</td>
                                                <td><button className="btn travel-btn" onClick={() => handleApprove(order._id)}>Approve</button></td>

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

export default ManageOrder;