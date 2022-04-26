import React, { Component } from 'react'
import {
    Card,
    Button,
    Container,
    Row,
    Col,
    CardTitle,
    CardBody
} from 'reactstrap';
import "./mcqstyle.css";
import { Routes, Route, Link } from "react-router-dom";
import pic1 from "D:/hedi docs 2/docs/ensi docs/year1/project/AlgoGraphes-master/src/Components/Images/ImagesForExercice/qcm29-1.jpg";

class QCM29 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "rSelected": "",
            "setRSelected": "",
            "response": "",
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ response: e.target.name });
        console.log(e.target.name);
        if (this.state.response.localeCompare("4") == 0) {
            //  alert("true"); 
            let c = parseInt(localStorage.getItem("sc"));
            c += 1;
            localStorage.setItem("sc", c);
            alert("True");
        }
        else
            alert("False");
    }

    render() {

        return (

            <div className="grid">
                <Card className="cardpostion mcqstyle">
                    <CardBody>
                        <CardTitle className="textstyleheader">
                            <h2>Q9. Identifier la contraint decrite par le graphe suivant :</h2>
                            <br />
                        </CardTitle>
                        <Row>
                            <Col>
                                <Row>
                                    <Button
                                        className="buttonstyle" value={this.state.response} name="1" onClick={this.onChange}
                                    >
                                        1. tj &gt;= dj <br/>
                                        &emsp; tj &gt;= tdp + dj
                                    </Button>

                                </Row>
                                <br />
                                <Row style={{ paddingTop: "5px" }}>
                                    <Button

                                        className="buttonstyle" value={this.state.response} name="2" onClick={this.onChange}
                                    >
                                        2. tj &gt;= ti +di
                                    </Button>
                                </Row>

                                <br />
                                <Row style={{ paddingTop: "5px" }}>
                                    <Button

                                        className="buttonstyle" value={this.state.response} name="3" onClick={this.onChange}
                                    >
                                        3. tj &lt;= dj <br />
                                        &emsp; tj - dj &lt;= tdp
                                    </Button>
                                </Row>
                                <br />
                                <Row style={{ paddingTop: "5px" }}>
                                    <Button

                                        className="buttonstyle" value={this.state.response} name="4" onClick={this.onChange}
                                    >
                                        4. tj &gt;= ti + di*0.5 ààà
                                    </Button>
                                </Row>
                                <br />
                                {/* <p className="buttonstyle">You Selected: </p> */}
                            </Col>
                            <Col>
                                <br /><br />
                                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                                <img src={pic1} /></Col>
                        </Row>
                    </CardBody>
                    <Row>
                        <Col sm="4" xs="6" className="bg-light border" ></Col>
                        <Col sm="4" xs="6">  </Col>
                        <Col sm="4" className="bg-light border">  </Col>
                        <br />
                        <div style={{ width: "300px", right: "100px" }} >
                            <nav>
                                <Link to="/chapter2/about210" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                            </nav>
                        </div>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default QCM29;