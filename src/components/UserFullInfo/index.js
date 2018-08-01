import React from 'react';

export default (props) =>
    <div className="container">
        <div className="row mb-5">
            <div className="col-xl-3">
                <div className="info-item">Nationality</div>
            </div>
            <div className="col-xl-4">
                <div className="info-item">{props.nat}</div>
            </div>
        </div>

        <div className="row mb-5">
            <div className="col-xl-3">
                <div className="info-item">Address</div>
            </div>
            <div className="col-xl-4">
                {
                    props.location &&
                    <div>
                        <div className="info-item">City: {props.toUpperCase(props.location.city)}</div>
                        <div className="info-item">State: {props.toUpperCase(props.location.state)}</div>
                        <div className="info-item">Street: {props.toUpperCase(props.location.street)}</div>
                        <div className="info-item">Postcode: {props.location.postcode}</div>
                    </div>
                }
            </div>
        </div>
        <div className="row  mb-5">
            <div className="col-xl-3">
                <div className="email">Contact info:</div>
            </div>
            <div className="col-xl-4">
                <div className="email">Email: {props.email}</div>
                <div className="email">Phone: {props.phone}</div>
                <div className="email">Cell: {props.cell}</div>
            </div>
        </div>

    </div>