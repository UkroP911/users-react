import React from 'react';

export default () =>
    <form className="justifu-content-center d-flex flex-column">
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter email">
            </input>

        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
            </input>
        </div>
        <button type="submit" className="btn btn-primary d-block mx-auto">Submit</button>
    </form>