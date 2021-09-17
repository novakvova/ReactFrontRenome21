import React, { Component } from 'react'

export class Register extends Component {

    state = {
        email: '',
        password: '',
        errors: {
            password: ''
        }
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        //this.setState({email: "Сало"});
        console.log("Hello state", this.state);
    }

    onChangeHandler = (e) => {
        // console.log("change input ", e.target);
        // console.log("change input ", e.target.name);
        // console.log("change input ", e.target.value);
        this.setState({[e.target.name]: e.target.value});
    } 



    render() {
        const {email, password, errors} = this.state;
        return (
            <div>
                <h1 className="text-center">Реєстрація</h1>

                <form onSubmit={this.onSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            value={email}
                            onChange={this.onChangeHandler}/>

                        <span className="text-danger">{errors.email}</span>
                        {/* {!!errors.email && <span className="text-danger">{errors.email}</span>} */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="password"
                            name="password"
                            value={password}
                            onChange = {this.onChangeHandler} />

                        {!!errors.password &&<span className="text-danger">{errors.password}</span> }
                    </div>
                    <button type="submit" className="btn btn-primary">Реєстурватися</button>
                </form>
            </div>
        )
    }
}

export default Register
