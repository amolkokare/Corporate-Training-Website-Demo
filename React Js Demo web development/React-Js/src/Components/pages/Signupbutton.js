import React, { Component } from 'react'
import SignUpForm from '../../Components/SignUpForm'
import { Button, ButtonToolbar } from 'react-bootstrap'


export default class Signupbutton extends Component {

    constructor(props) {
        super(props);
        this.state = { st: [], addModalShow: false }
    }
    render() {
        const { st } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <div>
                <div className="banner">
                    
                    <div className="banner_content">
                        <div className="container">
                            <div className="banner_text">
                            </div>
                            <ButtonToolbar>
                    <Button 
                        onClick={() => this.setState({ addModalShow: true })}>Register</Button>
                    <SignUpForm show={this.state.addModalShow}
                        onHide={addModalClose}></SignUpForm>
                </ButtonToolbar>                 
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}