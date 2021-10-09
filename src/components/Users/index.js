import { useEffect, useState } from "react";
import { getUsers } from "../../actions/users";
import http from "../../http-common";
import EclipseWidget from '../common/eclipse';
import { useDispatch, useSelector } from 'react-redux';

const UsersPage = () => {


    const [loading, setLoading] = useState(true);
    //const [list, setList] = useState([]);
    const dispatch = useDispatch();
    const list = useSelector(state => state.users.list);

    useEffect(() => {
        dispatch(getUsers());
        // async function fetchMyAPI() {
        //     try {
        //         const response = await http.get("api/Users");
        //         setList(response.data);
        //     }
        //     catch (badresponse) {
        //         console.log("bad request");
        //     }
        //     finally {
        //         setLoading(false);
        //     }
        // }
        // fetchMyAPI();
        setLoading(false);
        console.log("Request to server");
    },[]);

    console.log("Render component users")
    return (
        <>
            <h1>Список користувачів</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Фото</th>
                        <th scope="col">Пошта</th>
                    </tr>
                </thead>
                <tbody>
                    {list &&
                        list.map((item, index) =>
                            <tr key={index}>
                                <td>
                                    <img src={http.defaults.baseURL+item.image} alt="my image" />
                                </td>
                                <td>{item.email}</td>
                            </tr>)}
                </tbody>
            </table>

            {loading && <EclipseWidget />}
        </>

    );
}

export default UsersPage;