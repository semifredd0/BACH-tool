import React, {Fragment, useEffect, useState} from "react";
import AddressList from "./AddressList";
import ClusterGraph from "./ClusterGraph";
import axios from "axios";

function ClusterPage(props) {
    const [cluster, setCluster] = useState([]);
    const [subCluster, setSubCluster] = useState([]);

    useEffect(() => {
        fetchData1();
        fetchData2();
    },[]);

    const fetchData1 = async () => {
        const address = props.match.params.addressHash;
        const response = await axios.get('http://localhost:5000/', {
            params: {address: address}
        });
        const data = await response.data;
        setCluster(data);
    }

    const fetchData2 = async () => {
        const address = props.match.params.addressHash;
        const response = await axios.get('http://localhost:5000/sub/', {
            params: {address: address}
        });
        const data = await response.data;
        setSubCluster(data);
    }

    return (
        <div key={props.match.params.id}>
            <Fragment>
                <AddressList data={cluster} />
                <ClusterGraph data1={cluster} data2={subCluster} />
            </Fragment>
        </div>
    );
}

export default ClusterPage;