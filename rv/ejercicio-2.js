var escena= new THREE.Scene();

var camara= new THREE.PerspectiveCamera();
camara.position.z=50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var forma1= new THREE.CylinderGeometry(3,3,30,64);
var material1= new THREE.MeshBasicMaterial({color: 0x8A4B08});
var cilindro= new THREE.Mesh(forma1,material1);

var forma2= new THREE.SphereGeometry(5,64,64);
var material2= new THREE.MeshBasicMaterial({color: 0x00ff00});
var esfera= new THREE.Mesh(forma2,material2);

escena.add(cilindro);
escena.add(esfera);
renderizador.render(escena,camara);
