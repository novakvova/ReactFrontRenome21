import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import http from "../../http-common";
import EclipseWidget from '../common/eclipse';


export class Home extends Component {

    state = {
        loading: true,
        list: []
    }
    async componentDidMount() {
        try {
            const response = await http.get('WeatherForecast');
            this.setState({list: response.data, loading: false});
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            console.log("result list server " + time, response);

        } catch (badresponse) {
            this.setState({loading: false});
            if(badresponse.response.status==401) {
                this.props.history.push("/login");
            }
            console.log("problem", badresponse.response);
        }

    }

    render() {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log("component render home page " + time);
        const { list, loading } = this.state;
        const data = list.map((item, index) =>
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.summary}</td>
                            <td>{item.temperatureC}</td>
                        </tr>
            );
        return (
            <div>
                <h1>Головна сторінка</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Дата</th>
                            <th scope="col">summary</th>
                            <th scope="col">Температура</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>

                {loading && <EclipseWidget/> }
            </div>
        )
    }
}

export default withRouter(Home)
