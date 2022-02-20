import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>About</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="flex-center text">About</h2>
                            <p className="flex-center text">
                              Feel free to reach out through the form or the links below.
                            </p>
                            <div className="flex-center text">
                                <i className="fa fa-html5" />
                                <i className="fa fa-css3" />
                                <i className="fa fa-react" />
                                <i className="fa fa-javascript" />
                                <i className="fa fa-react" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        );
    }
};
