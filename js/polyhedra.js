POLYHEDRA = {

/* Platonic Solids */

Tetrahedron : {
"name":"Tetraeder",
"category":["Platonischer Körper"],
"description":["Das Tetraeder besteht aus <b>4</b> Flächen, <b>4</b> Ecken und <b>6</b> Kanten. Durch die <b>12</b> Drehungen der Tetraedergruppe enstehen <b>14</b> Pole. Die Pole, die durch Seitenflächen enstanden sind haben die Ordnung <b>3</b>, Pole die durch Kanten entstanden sind haben die Ordnung <b>2</b> und Pole die durch Eckpunkte enstanden sind haben ebenfalls die Ordnung <b>2</b>. Deshalb besteht die Tetraedergruppe aus <b>3</b> Bahnen, mit der jeweils beschriebenen Ordnung."],
"vertex":[[0,0,1.732051],[1.632993,0,-0.5773503],[-0.8164966,1.414214,-0.5773503],[-0.8164966,-1.414214,-0.5773503]],
"edge":[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],
"face":[[0,1,2],[0,2,3],[0,3,1],[1,3,2]],
"orbits":[4,3],
"axis":[[[0,1,2],[3]],[[0,2,3],[1]],[[1,2,3],[0]],[[0,1,3],[2]],
    [[0,2],[3,1]],[[2,1],[0,3]],[[0,1],[2,3]]]},

Cube: {
"name":"Hexaeder",
"category":["Platonischer Körper"],
"description":["<p>Das Hexaeder besteht aus <strong>6</strong> Fl&auml;chen, <strong>8</strong> Ecken und <strong>12</strong> Kanten. Durch die <strong>24</strong> Drehungen der Hexaedergruppe enstehen <strong>26</strong> Pole. Die <strong><span style='color:#FF8C00'>Pole</span></strong>, die durch Seitenfl&auml;chen enstanden sind haben die Ordnung <strong>4</strong>, <span style='color:#00FF00'><strong>Pole</strong></span> die durch Kanten entstanden sind haben die Ordnung <strong>2</strong>&nbsp;und <span style='color:#0000FF'><strong>Pole</strong></span> die durch Eckpunkte enstanden sind haben die Ordnung <strong>3</strong>. Deshalb besteht die Hexaedergruppe aus <strong>3</strong> Bahnen, mit der jeweils beschriebenen Ordnung.</p>"],
"vertex":[[0,0,1.224745],[1.154701,0,0.4082483],[-0.5773503,1,0.4082483],[-0.5773503,-1,0.4082483],[0.5773503,1,-0.4082483],[0.5773503,-1,-0.4082483],[-1.154701,0,-0.4082483],[0,0,-1.224745]],
"edge":[[0,1],[0,2],[0,3],[1,4],[1,5],[2,4],[2,6],[3,5],[3,6],[4,7],[5,7],[6,7]],
"face":[[0,1,4,2],[0,2,6,3],[0,3,5,1],[1,5,7,4],[2,4,7,6],[3,6,7,5]],
"orbits":[4,6,3],
"axis":[[[3],[4]],[[7],[0]],[[1],[6]],[[5],[2]],
    [[0,1],[6,7]],[[3,5],[4,2]],[[0,2],[5,7]],[[6,3],[1,4]],[[2,6],[1,5]],[[4,7],[0,3]],
    [[0,1,2,4],[3,5,7,6]],[[1,4,5,7],[0,2,3,6]],[[2,4,6,7],[0,1,3,5]]]},

Octahedron: {
"name":"Oktaeder",
"category":["Platonischer Körper"],
"description":["<p>Das Oktaeder besteht aus <strong>8</strong> Fl&auml;chen, <strong>6</strong>&nbsp;Ecken und <strong>12</strong> Kanten. Durch die <strong>24</strong> Drehungen der Oktaedergruppe enstehen <strong>26</strong> Pole. Die <strong><span style='color:#FF8C00'>Pole</span></strong>, die durch Seitenfl&auml;chen enstanden sind haben die Ordnung <strong>3</strong>, <span style='color:#00FF00'><strong>Pole</strong></span> die durch Kanten entstanden sind haben die Ordnung <strong>2</strong>&nbsp;und <span style='color:#0000FF'><strong>Pole</strong></span> die durch Eckpunkte enstanden sind haben ebenfalls die Ordnung <strong>4</strong>. Die Oktaedergruppe ist identisch mit der Hexaedergruppe.</p>"],
"vertex":[[0,0,1.414214],[1.414214,0,0],[0,1.414214,0],[-1.414214,0,0],[0,-1.414214,0],[0,0,-1.414214]],
"edge":[[0,1],[0,2],[0,3],[0,4],[1,2],[1,4],[1,5],[2,3],[2,5],[3,4],[3,5],[4,5]],
"face":[[0,1,2],[0,2,3],[0,3,4],[0,4,1],[1,4,5],[1,5,2],[2,5,3],[3,5,4]],
"orbits":[3,6,4],
"axis":[[[1],[3]],[[2],[4]],[[5],[0]],
    [[0,2],[5,4]],[[2,5],[0,4]],[[2,3],[1,4]],[[3,5],[0,1]],[[3,4],[1,2]],[[3,0],[1,5]],
    [[2,3,5],[0,1,4]],[[0,2,3],[1,4,5]],[[0,1,2],[3,4,5]],[[1,2,5],[0,3,4]]]},

Dodecahedron: {
"name":"Dodekaeder",
"category":["Platonischer Körper"],
"description":["<p>Das Dodekaeder&nbsp;besteht aus <strong>12</strong> Fl&auml;chen, <strong>20</strong>&nbsp;Ecken und <strong>30</strong> Kanten. Durch die <strong>60</strong> Drehungen der Dodekaedergruppe enstehen <strong>62</strong> Pole. Die <strong><span style='color:#FF8C00'>Pole</span></strong>, die durch Seitenfl&auml;chen enstanden sind haben die Ordnung <strong>5</strong>, <span style='color:#00FF00'><strong>Pole</strong></span> die durch Kanten entstanden sind haben die Ordnung <strong>2</strong>&nbsp;und <span style='color:#0000FF'><strong>Pole</strong></span> die durch Eckpunkte enstanden sind haben ebenfalls die Ordnung <strong>3</strong>. Deshalb besteht die Dodekaedergruppe aus <strong>3</strong> Bahnen.</p>"],
"vertex":[[0,0,1.070466],[0.7136442,0,0.7978784],[-0.3568221,0.618034,0.7978784],[-0.3568221,-0.618034,0.7978784],[0.7978784,0.618034,0.3568221],[0.7978784,-0.618034,0.3568221],[-0.9341724,0.381966,0.3568221],[0.1362939,1,0.3568221],[0.1362939,-1,0.3568221],[-0.9341724,-0.381966,0.3568221],[0.9341724,0.381966,-0.3568221],[0.9341724,-0.381966,-0.3568221],[-0.7978784,0.618034,-0.3568221],[-0.1362939,1,-0.3568221],[-0.1362939,-1,-0.3568221],[-0.7978784,-0.618034,-0.3568221],[0.3568221,0.618034,-0.7978784],[0.3568221,-0.618034,-0.7978784],[-0.7136442,0,-0.7978784],[0,0,-1.070466]],
"edge":[[0,1],[0,2],[0,3],[1,4],[1,5],[2,6],[2,7],[3,8],[3,9],[4,7],[4,10],[5,8],[5,11],[6,9],[6,12],[7,13],[8,14],[9,15],[10,11],[10,16],[11,17],[12,13],[12,18],[13,16],[14,15],[14,17],[15,18],[16,19],[17,19],[18,19]],
"face":[[0,1,4,7,2],[0,2,6,9,3],[0,3,8,5,1],[1,5,11,10,4],[2,7,13,12,6],[3,9,15,14,8],[4,10,16,13,7],[5,8,14,17,11],[6,12,18,15,9],[10,11,17,19,16],[12,13,16,19,18],[14,15,18,19,17]],
"orbits":[10,15,6],
"axis":[[[13],[8]],[[2],[17]],[[0],[19]],[[5],[12]],[[11],[6]],[[16],[3]],[[1],[18]],[[10],[9]],[[14],[7]],[[4],[15]],
    [[12,13],[8,5]],[[2,0],[17,19]],[[13,16],[3,8]],[[4,7],[15,14]],[[0,1],[18,19]],[[6,9],[10,11]],[[16,19],[0,3]],[[1,5],[12,18]],[[4,10],[9,15]],[[8,14],[7,13]],[[10,16],[3,9]],[[2,7],[14,17]],[[2,6],[11,17]],[[1,4],[15,18]],[[5,11],[6,12]],
    [[2,7,6,12,13],[5,8,11,14,17]],[[12,13,16,18,19],[0,1,3,5,8]],[[0,2,3,6,9],[10,11,16,17,19]],[[14,15,17,18,19],[0,1,2,4,7]],[[1,4,5,10,11],[6,9,15,12,18]],[[3,8,9,14,15],[4,7,10,13,16]]]},



Icosahedron : {
"name":"Ikosaeder",
"category":["Platonischer Körper"],
"description":["<p>Das Ikosaeder bestehet aus <strong>20</strong> Fl&auml;chen, <strong>12</strong>&nbsp;Ecken und <strong>30</strong> Kanten. Durch die <strong>60</strong> Drehungen der Ikosaedergruppe enstehen <strong>62</strong> Pole. Die <strong><span style='color:#FF8C00'>Pole</span></strong>, die durch Seitenfl&auml;chen enstanden sind haben die Ordnung <strong>3</strong>, <span style='color:#00FF00'><strong>Pole</strong></span> die durch Kanten entstanden sind haben die Ordnung <strong>2</strong>&nbsp;und <span style='color:#0000FF'><strong>Pole</strong></span> die durch Eckpunkte enstanden sind haben ebenfalls die Ordnung <strong>5</strong>. Die Ikosaedergruppe ist identisch mit der Dodekaedergruppe.</p>"],
"vertex":[[0,0,1.175571],[1.051462,0,0.5257311],[0.3249197,1,0.5257311],[-0.8506508,0.618034,0.5257311],[-0.8506508,-0.618034,0.5257311],[0.3249197,-1,0.5257311],[0.8506508,0.618034,-0.5257311],[0.8506508,-0.618034,-0.5257311],[-0.3249197,1,-0.5257311],[-1.051462,0,-0.5257311],[-0.3249197,-1,-0.5257311],[0,0,-1.175571]],
"edge":[[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[1,5],[1,6],[1,7],[2,3],[2,6],[2,8],[3,4],[3,8],[3,9],[4,5],[4,9],[4,10],[5,7],[5,10],[6,7],[6,8],[6,11],[7,10],[7,11],[8,9],[8,11],[9,10],[9,11],[10,11]],
"face":[[0,1,2],[0,2,3],[0,3,4],[0,4,5],[0,5,1],[1,5,7],[1,7,6],[1,6,2],[2,6,8],[2,8,3],[3,8,9],[3,9,4],[4,9,10],[4,10,5],[5,10,7],[6,7,11],[6,11,8],[7,10,11],[8,11,9],[9,11,10]],
"orbits":[6,10,15],
"axis":[[[0],[11]],[[4],[6]],[[7],[3]],[[1],[9]],[[2],[10]],[[5],[8]],
    [[0,3],[7,11]],[[3,9],[1,7]],[[9,10],[2,1]],[[10,5],[8,2]],[[0,5],[11,8]],[[2,3],[7,10]],[[6,11],[0,4]],[[3,4],[6,7]],[[10,11],[0,2]],[[5,1],[8,9]],[[1,6],[9,4]],[[6,2],[4,10]],[[5,7],[8,3]],[[5,4],[6,8]],[[1,0],[9,11]],
    [[1,6,7],[4,9,3]],[[1,5,7],[3,9,8]],[[8,9,11],[0,1,5]],[[2,3,8],[5,7,10]],[[4,5,10],[2,6,8]],[[1,2,6],[4,9,10]],[[0,2,3],[7,10,11]],[[9,10,11],[0,1,2]],[[0,4,5],[6,8,11]],[[6,7,11],[0,3,4]]]
}
};
