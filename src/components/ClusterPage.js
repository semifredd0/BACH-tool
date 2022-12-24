import React, {Fragment, useEffect, useState} from "react";
import AddressList from "./AddressList";
import ClusterGraph from "./ClusterGraph";
import axios from "axios";

function ClusterPage(props) {
    const [cluster, setCluster] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const address = props.match.params.addressHash;
        const response = await axios.get('http://localhost:5000/', {
            params: {address: address}
        });
        const data = await response.data;
        setCluster(data);
    }

    return (
        <div key={props.match.params.id}>
            <Fragment>
                <AddressList data={cluster} />
                <ClusterGraph />
            </Fragment>
        </div>
    );
}

export default ClusterPage;