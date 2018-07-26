import React from 'react';

export default props =>
    <div className="col-xl-6">
        <div className="input-group mb-3">
            {
                props.isError &&
                <div className="input-group-prepend ">
                    <span className="input-group-text alert alert-danger mb-0" id="inputGroup-sizing-default">No users</span>
                </div>
            }
            <input
                onChange={props.search}
                className={`form-control ${props.isError ? 'is-invalid' : ''}`}
                type="text"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Search user..." >

            </input>
        </div>
    </div>