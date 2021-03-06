import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const { value, name} = event.target;
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an accrount.</h2>
                <span>Sign in with your email and password.</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} label="Email" value={this.state.email} />

                    <FormInput name="password" type="password" handleChange={this.handleChange} label="Password" value={this.state.password} />
                   
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>   
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;