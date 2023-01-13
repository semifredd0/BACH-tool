import '../styles/ClusterGraph.css';
import ForceGraph3D from 'react-force-graph-3d';
import {useHistory} from 'react-router-dom';
import React from "react";

class MyClusterGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: this.props.data1.map((row) => {
                let id = row.address_id;
                let addressHash = row.address_hash;
                let nodeColor;
                if (row.miner_address) nodeColor = "00FF2E";
                else nodeColor = "2F7BFF";
                // Highlight node
                if(row.address_hash === this.props.address) nodeColor = "red";
                return { id: id, addressHash: addressHash, nodeColor: nodeColor};
            }),
            links: this.props.data2.map((row) => {
                let source = row.address_id_1;
                let target = row.address_id_2;
                let linkVisibility = row.link_visible_size <= 20;
                let linkColor;
                if (row.link_type === 0)    linkColor = "green";
                else if (row.link_type === 1)   linkColor = "orange";
                else if (row.link_type === 2)   linkColor = "00FFF6";
                return { source: source, target: target, linkColor: linkColor, linkVisibility: linkVisibility};
            }),
        };
    }

    render() {
        return (
            <div className="graph">
                <ForceGraph3D
                    graphData={this.state}
                    backgroundColor="black"
                    width={700}
                    height={400}
                    nodeRelSize={10}
                    linkWidth={2}
                    linkVisibility="linkVisibility"
                    nodeLabel="addressHash"
                    nodeColor="nodeColor"
                    linkColor="linkColor"
                    enableNodeDrag={false}
                    linkOpacity={0.4}
                    nodeOpacity={0.8}
                    onNodeClick={node => {
                        window.location.href = "http://localhost:3000/info/" + node.addressHash;
                    }} />
            </div>
        );
    }
}

function ClusterGraph({address,data1,data2}) {
    return (
        <div className="section2">
            <MyClusterGraph address={address} data1={data1} data2={data2} />
        </div>
    );
}

export default ClusterGraph;