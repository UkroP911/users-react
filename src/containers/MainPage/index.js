import React, {Component} from 'react';

class MainPage extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <h1 className="text-center py-5">Main</h1>
                    </div>
                    <div className="col-xl-12">
                        <h2 className="text-center mb-2">Used technologies</h2>
                        <p>React.js</p>
                        <p>Redux</p>
                        <p>Firebase</p>
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;