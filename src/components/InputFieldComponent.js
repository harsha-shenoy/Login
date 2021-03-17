import React from 'react'
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Col, Button , Row, Label} from 'reactstrap';
import { Card } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class InputField extends React.Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
            isPasswordShown: false,
            isModalOpen: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
      }

  

      togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
      };

      

      handleLogin(values) {
        alert(values);
      }
      
      handleLogout() {
        alert('logout')
    }

    render() {
        const { isPasswordShown } = this.state;
        return (
            
            <>
                <Card style={{borderRadius: '15%', backgroundColor: 'white',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', paddingTop:'20px' }}>
                <LocalForm onSubmit={(values) => this.handleLogin(values)}>
                            <Row className="form-group">
                                <Col xs={{size:8, offset: 2}} style={{textAlign:'center'}}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Username"
                                        className="form-control input-area"
                                        style={{textAlign:'center', height:'45px'}}
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs={{size:8, offset: 2}}>
                                    <Control.text model=".password" id="password" name="password"
                                        placeholder="Your Password"
                                        className="form-control fa fa-eye input-area"
                                        type={isPasswordShown ? "text" : "password"}
                                        style={{textAlign:'center', height:'45px'}}
                                         />
                                        
                                </Col >
                                <Col xs={2}>
                                <i
                                            className={`fa ${isPasswordShown ? "fa-eye-slash ": "fa-eye" } password-icon `}
                                            onClick={this.togglePasswordVisiblity} style={{color:'#15F4EE'}}
                                        />
                          
                                </Col>
                                </Row>
                            <Row className="form-group">
                                <Col xs={{size:5, offset: 3}}>
                                    <Button type="submit" value="submit" block color="primary">Login</Button>
                                </Col>
                            </Row>
                            {/* <LoginStatus status={this.props.auth.success}/> */}
                            <Row className="form-group">
                                <Col xs={{size:5, offset: 4}}>
                                    {/* <Link to='/forgotpassword' onClick={this.toggleModal} style={{  color:'floralwhite',textDecoration: 'none' }}> Forgot Password?</Link> */}
                                    <p>Forgot Password ?</p>
                                </Col>
                            </Row>   
                          
                            <hr style={{borderColor:"grey",width:'80%'}} />
                            {/* <SignUp signupUser = {this.props.signupUser} signup ={this.props.signup} signup_after_success={this.props.signup_after_success} />   */}
                             <Row className="form-group">
                                <Col xs={{size:6, offset: 3}}>
                                    {/* <Link to='/forgotpassword' onClick={this.toggleModal} style={{  color:'floralwhite',textDecoration: 'none' }}> Forgot Password?</Link> */}
                                    <p style={{color:'#15F4EE'}}>SignUp to create a New Account</p>
                                </Col>
                            </Row>   
                           
                            </LocalForm>

                </Card>
            </>
        );
    }
}

export default InputField;