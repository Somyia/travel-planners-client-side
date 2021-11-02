import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Banner from '../../Home/Banner/Banner';
import './NewService.css';

const NewService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://agile-mountain-23601.herokuapp.com/tours', {
            method: "post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(order => {
                if (order.insertedId) {
                    alert('New Tour Added Successfully');
                    reset();
                }
            })
    };
    return (
        <>
            <div className="no-banner-section">
                <Banner></Banner>
            </div>

            <Container className="py-5">
                <Row>
                    <div className="title" >
                        <h1>Add A New Tour</h1>
                    </div>
                </Row>
                <Row className="mt-4">
                    <div className="travel-form animate__animated animate__fadeInUp">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Tour Name : </label><br />
                                <input defaultValue="" placeholder="Tour Name" {...register("name", { required: true })} />
                            </div>
                            <div>
                                <label>From : </label><br />
                                <input placeholder="From" type="date" defaultValue="" {...register("fromDate", { required: true })} />

                            </div>
                            <div>
                                <label>To : </label><br />
                                <input placeholder="To" type="date" defaultValue="" {...register("toDate", { required: true })} />
                            </div>
                            <div>
                                <label>Price : </label><br />
                                <input defaultValue="" {...register("price", { required: true })} />
                            </div>
                            <div>
                                <label>Description : </label> <br />
                                <textarea defaultValue="" {...register("desc", { required: true })} ></textarea>
                            </div>
                            <div>
                                <label>Image Url : </label><br />
                                <input defaultValue="" placeholder="Tour Picture Url" {...register("img", { required: true })} />
                            </div>
                            <input className="travel-btn" type="submit" value="Add New Tour" />
                        </form>
                    </div>
                </Row>
            </Container >
        </>
    );
};

export default NewService;