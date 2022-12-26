import '../styles/ClusterGraph.css';
import ForceGraph2D from 'react-force-graph-2d';
import React from "react";

class MyClusterGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nodes:[],links:[]};
    }

    componentWillMount() {
        this.loadData();
    }

    loadData = async () => {
        let nodes = this.props.data1.map(row => {
            let id = row.address_id;
            let addressHash = row.address_hash;
            let nodeColor;
            if(row.miner_address)
                nodeColor="blue";
            else
                nodeColor="purple";
            return {id:id,addressHash:addressHash,nodeColor:nodeColor};
        });
        let links = this.props.data2.map(row => {
            let source = row.address_id_1;
            let target = row.address_id_2;
            let linkColor;
            switch (row.link_type) {
                case 0:
                    linkColor="green";
                    break;
                case 1:
                    linkColor="red";
                    break;
                case 2:
                    linkColor="cyan";
                    break;
            }
            return {source:source,target:target,linkColor:linkColor};
        });
        this.setState({nodes:nodes,links:links});
    }

    render() {
        return (
            <div className="graph">
                <ForceGraph2D
                    graphData={this.state}
                    backgroundColor="white"
                    height={400}
                    width={700}
                    nodeId="id"
                    nodeLabel="addressHash"
                    nodeColor="nodeColor"
                    linkColor="linkColor" />
            </div>
        );
    }
}

function ClusterGraph({data1,data2}) {
    return (
        <div className="section2">
            <MyClusterGraph data1={data1} data2={data2} />
        </div>
    );
}

export default ClusterGraph;