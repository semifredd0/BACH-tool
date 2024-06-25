# BACH-tool
### BACH: Bitcoin Address Clustering based on multiple Heuristics
A React App that allows you to search for a Bitcoin address and display the graph of the cluster to which the address belongs.<br>
The APIs provided by the [BACH-tool-server](https://github.com/semifredd0/BACH-tool-server) are used to access the database.<br>
The [3D Force-Directed Graph](https://github.com/vasturiano/3d-force-graph) web component is used to visualize the cluster graph.
***
## Homepage
The Homepage presents the tool with a short description, detailing the heuristics used in constructing clusters.<br>
At the bottom of the page, there are examples of discovered clusters.
<p align="center">
<kbd><img src="https://raw.githubusercontent.com/semifredd0/BACH-tool/master/.github/images/Home.PNG" width="800"/></kbd>
</p>

## Display cluster graph
In the NavBar you can paste a Bitcoin address to view the cluster to which it belongs.<br>
This page lists all addresses within the same cluster and shows its 3D graph.<br>
The red node identifies the searched address.
<p align="center">
<kbd><img src="https://raw.githubusercontent.com/semifredd0/BACH-tool/master/.github/images/Graph.PNG" width="800"/></kbd>
</p>

## Display links of an address
By clicking on a node within the graph, you can see all its links to other addresses in the cluster in detail, along with the types of links.
<p align="center">
<kbd><img src="https://raw.githubusercontent.com/semifredd0/BACH-tool/master/.github/images/Links.PNG" width="800"/></kbd>
</p>

***
## Author
Matteo Costantini
***
