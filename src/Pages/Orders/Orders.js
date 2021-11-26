import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Home/Banner/Banner';
import './Orders.css';

const Orders = () => {
    const { tourId } = useParams();
    const { user } = useAuth();
    console.log(user)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [tour, setTour] = useState({});
    useEffect(() => {
        const url = `https://guarded-crag-94849.herokuapp.com/tours/${tourId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])

    const onSubmit = data => {
        fetch('https://guarded-crag-94849.herokuapp.com/orders', {
            method: "post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(order => {
                if (order.insertedId) {
                    alert('Order Placed Successfully');
                    reset();
                }
            })
    };

    return (
        <>
            <div className="no-banner-section">
                <Banner></Banner>
            </div>

            <Container className="py-lg-5 py-3">
                <Row>
                    <div className="title">
                        <h1>Place Your Order</h1>
                    </div>
                </Row>
                {/* order placing form area  */}
                <Row className="mt-lg-4 mt-2">
                    <div className="travel-form animate__animated animate__fadeInUp">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name", { required: true })} />
                            <input defaultValue={user.uid} {...register("userId", { required: true })} />

                            <input defaultValue={user?.email} placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input defaultValue={tour.name} {...register("orderedTour", { required: true })} />
                            <input defaultValue={tour.fromDate}  {...register("fromDate", { required: true })} />
                            <input defaultValue={tour.toDate}  {...register("toDate", { required: true })} />
                            <input defaultValue={tour.price} {...register("orderedPrice", { required: true })} />

                            <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                            <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                            <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

                            <input className="travel-btn" type="submit" value="Place order" />
                        </form>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Orders;