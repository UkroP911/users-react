import React from 'react';

export default ({sort, reset}) =>
    <div className="d-flex justify-content-end pb-2 col-xl-6">
        <div className="col-xl-4">
            <button
                type="button"
                className="btn btn-default"
                onClick={() => sort('name')}
            >
                by name
            </button>
        </div>
        <div className="col-xl-4">
            <button
                type="button"
                className="btn btn-default"
                onClick={() => sort('age')}
            >
                by age
            </button>
        </div>
        <div className="col-xl-4">
            <button
                type="button"
                className="btn btn-dark"
                onClick={() => reset()}
            >
                reset filters
            </button>
        </div>
    </div>

