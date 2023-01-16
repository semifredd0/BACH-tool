# BACH-tool
### BACH: Bitcoin Address Clustering based on multiple Heuristics
React App that allows you to search for a bitcoin address and display the graph of the cluster to which the address belongs.<br>
The APIs provided by the [BACH-tool-server](https://github.com/semifredd0/BACH-tool-server) is used to access the database.<br>
The [3D Force-Directed Graph](https://github.com/vasturiano/3d-force-graph) web component is used to visualize the cluster graph.
***
## Homepage
In the Homepage is presented the tool with a short description, indicating the heuristics used in the construction of clusters.<br>
Also at the bottom of the page there are some examples of clusters found.
<p align="center">
<kbd><img src="https://raw.githubusercontent.com/semifredd0/BACH-tool/master/.github/images/Home.PNG" width="800"/></kbd>
</p>

## Display cluster graph
In the NavBar you can paste a bitcoin address and view the cluster to which it belongs.<br>
On this page are listed all the addresses that belong to the same cluster and its 3d graph.<br>
The red node identifies the address sought.
<p align="center">
<kbd><img src="https://raw.githubusercontent.com/semifredd0/BACH-tool/master/.github/images/Graph.PNG" width="800"/></kbd>
</p>

## Display links of an address
By clicking on a node inside the graph, you can see in detail all its links to the other addresses of the cluster, with its type used.
<p align="center">
<kbd><img src="https://raw.githubusercontent.com/semifredd0/BACH-tool/master/.github/images/Links.PNG" width="800"/></kbd>
</p>

***
## Author
Matteo Costantini
***
