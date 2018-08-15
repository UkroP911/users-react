import React from 'react';



export default () =>
    <div className="" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        // onClick={onClose}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">

                    <form onSubmit={onSubmit}>


                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Name"
                                   // onChange={onInputChange}
                                   // value={stateValue}
                                   ref={input => this.nameInput = input}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Age</label>
                            <input type="number" min="1" max="3" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Age"
                                   // onChange={onInputChange}
                                   // value={stateValue}
                                   ref={input => this.ageInput = input}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Phone</label>
                            <input type="number"  className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Phone"
                                   // onChange={onInputChange}
                                   // value={stateValue}
                                   ref={input => this.phoneInput = input}>
                            </input>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                // onClick={onClose}
                            >Close</button>
                            <input type="submit" className="btn btn-primary" value="Save changes"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

