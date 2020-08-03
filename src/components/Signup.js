import React from 'react'

import axios from 'axios';

import '../assets/Login.css'

class Signup extends React.Component{

    state = {
        username_valid: '',
        password_valid: ''
    }

    onChanheHandler = (e) => {
        e.preventDefault();
        if(e.target.name === "username"){
            if (e.target.value.length < 0){
                this.setState({username_valid: "Please fill username"})
            }
        }
        if(e.target.name === "password"){
            console.log("entered into password")
            if (e.target.value.length < 5){
                this.setState({username_valid: "Password minimum length should be 5 characters"})
            }
            if (e.target.value. length > 5){
                this.setState({username_valid: ""})
            }
            
        }
        
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let usernmae_data = e.target.username.value
        let password_data = e.target.password.value
        if(usernmae_data === '' || usernmae_data === null){
            alert("Please enter username")
        }
        if(password_data === '' || password_data === null){
            alert("Please enter Password")
        }
        axios.post(`https://reqres.in/api/register`, {
            "email": usernmae_data,
            "password":password_data
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })


    }

    render(){
        return(
            <div className='Border'>
                <h3>Signup</h3>
                <form onSubmit={this.onFormSubmit}>
                    Email:<input 
                    type='text' 
                    name="username" 
                    className="UsernameField"
                    onChange={this.onChanheHandler}
                    />
                    <p>{this.state.username_valid}</p>
                    Password:<input 
                    type='password' 
                    name="password" 
                    className="UsernameField"
                    onChange={this.onChanheHandler}
                    />
                    <p>{this.state.password_valid}</p>
                    <button className='LoginButton'>Signup</button>
                </form>
            </div>
        );
    }
}

export default Signup