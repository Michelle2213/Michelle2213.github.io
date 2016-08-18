var escena= new THREE.Scene();

var camara= new THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var forma1= new THREE.CylinderGeometry(5,5,40,64);
var material1= new THREE.MeshNormalMaterial({color: 0xffff00});
var cilindro= new THREE.Mesh(forma1,material1);

var forma2= new THREE.SphereGeometry(10,64,64);
var material2= new THREE.MeshNormalMaterial({color: 0xffff00});
var esfera= new THREE.Mesh(forma2,material2);


escena.add(cilindro);
escena.add(esfera);
renderizador.render(escena,camara);
