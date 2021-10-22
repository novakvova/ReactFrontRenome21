import React, { Component } from 'react'
import accountService from '../../../services/account.service';
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from 'react-redux';
import { authUser } from '../../../actions/auth';

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
            
            const {token} = res.data;
            localStorage.setItem("authToken", token);
            this.props.dispatch(authUser(token));
            console.log("Усе пройшло добре", res);
            
            this.props.history.push("/");

        } catch(badresponse) {
            const {errors} = badresponse.response.data;
            let problem = {};
            Object.entries(errors).forEach(([key, values]) => {
                
                //values.forEach(text=> message+=text+" ");
                problem[key] =values.map((msg, index) => {
                    return (
                        <li key={index}>{msg}</li>
                    );
                });
            });

            this.setState({errors: problem});
            console.log("Виникли проблеми ", problem);
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
        console.log("regiser props - ", this.props);
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

export default connect(null)(withRouter(Register))
