import React, { Component } from 'react';
import fire from './fire';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import { Alert } from 'reactstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode) {
                alert((errorCode) + " " + errorMessage)
            }
        }); 
    } 
        
        
        signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .catch((error) => {
             alert(error);
        }) 
    }

    handleChange(e) {
    this.setState({
         [e.target.name]: e.target.value })
    }   

          
    render() {
        return (
    <Jumbotron body inverse style={{ backgroundColor: '#000', borderColor: '#333' }}>
    
                <Row>
        
        <Col sm="5">
            
            <img src={"https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/20/135/sb10066898m-001.jpg"} />
        
                        {/* <img src={"./img/myImage.jpg"} /> */}
                        {/* <img src={require('./img/myPic2.jpg')} /> */}

                    </Col>
                
                    <Col md="7">
                <Jumbotron body inverse style={{ backgroundColor: '#424242', borderColor: '#333' }}>
                            {/* https://timedotcom.files.wordpress.com/2017/01/men-muscular-obsessed.jpg */}
                            <div className="col-lg-10">
                                <form className="col-lg-12">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address </label>
                                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                                            class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter email" />
                                        <small id="emailHelp" class="form-text text-muted">we'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input value={this.state.password} onChange={this.handleChange} type="password"
                                            name="password" class="form-control" id="exampleInputPassword1" placeholder="password" />
                                    </div>
                                    <Button type="submit" onClick={this.login} className="btn btn-danger">Login</Button>
                                    <Button onClick={this.signup} style={{ marinLeft: "25px" }} outline color="danger">Signup</Button>
                                </form>
                            </div>
                        </Jumbotron>
                    </Col>
                </Row>
            </Jumbotron>

        );
    }
}



// export default Login;