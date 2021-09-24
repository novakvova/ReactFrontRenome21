import React, { Component } from 'react'
import accountService from '../../../services/account.service';
import { withRouter } from "react-router-dom";
import classnames from "classnames";

export class Register extends Component {

    state = {
        email: '',
        password: '',
        errors: {
            password: ''
        }
    };

    //history = useHistory();

    onSubmitHandler = async (e) => {
        e.preventDefault();
        //this.setState({email: "Сало"});
        //console.log("Hello state", this.state);
        try {
            const model = {
                userName: this.state.email,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.password,
            };
            const res = await accountService.register(model);
            
            localStorage.setItem("authToken", token);

            console.log("Усе пройшло добре", res);
            
            this.props.history.push("/");
        } catch(badresponse) {
            const {errors} = badresponse.response.data;
            let problem = {};
            if(errors.Email) {
                //console.log("Email error", errors.Email);
                let str="";
                errors.Email.forEach(message => {
                    str+=message+" ";
                    console.log(message);
                });
                problem.email=str;
            }
            if(errors.Password) {
                console.log("Password error", errors.Password);
                let str="";
                errors.Password.forEach(message => {
                    str+=message+" ";
                    console.log(message);
                });
                problem.password=str;
            }
            if(errors.ConfirmPassword) {
                console.log("ConfirmPassword error", errors.ConfirmPassword);
                let str="";
                errors.ConfirmPassword.forEach(message => {
                    str+=message+" ";
                    console.log(message);
                });
                problem.confirmPassword=str;
            }

            this.setState({errors: problem});
            //console.log("Виникли проблеми", );
        }
        
            
    }

    onChangeHandler = (e) => {
        // console.log("change input ", e.target);
        // console.log("change input ", e.target.name);
        // console.log("change input ", e.target.value);
        this.setState({[e.target.name]: e.target.value});
    } 



    render() {
        const {email, password, errors} = this.state;
        console.log("state - ", this.state);
        //console.log(this.props);
        return (
            <div>
                <h1 className="text-center">Реєстрація</h1>

                <form onSubmit={this.onSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" 
                            className={classnames("form-control",
                                            {"is-invalid": errors.email})}
                            id="email" 
                            name="email"
                            value={email}
                            onChange={this.onChangeHandler}/>

                        {/* <span className="text-danger">{errors.email}</span> */}
                        {!!errors.email && 
                        <div className="invalid-feedback">
                            {errors.email}
                        </div>  
                        }
                        
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

export default withRouter(Register)
