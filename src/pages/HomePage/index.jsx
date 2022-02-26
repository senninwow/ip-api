import React, {Component, useContext} from 'react';

//import { AuthContext } from "../../contexts/auth";

import api from '../../api';

class HomePage extends Component{

    state= {
        ip: [],
    }

    async componentDidMount(){
        const response = await api.get('');

        console.log(response.data);

        this.setState({ ip: response.data } )
    }


    render() {

        const { ip } = this.state;

        return(
            <div>
                <h1>HAREGUEL sei que tu mora em {ip.city} e teu ip eh {ip.query} mula</h1>
                {console.log(ip)}

                        <h2>

                        </h2>
            </div>
        )
    }
}

/*const HomePage = () => {
    const { authenticated, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }
    return (
        <>
            <h1>HomePage</h1>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}*/


export default HomePage