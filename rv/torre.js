var puntos= [];

puntos.push( new THREE.Vector2(0,0));
puntos.push( new THREE.Vector2(20,0));
puntos.push( new THREE.Vector2(20,10));
puntos.push( new THREE.Vector2(15,10));
puntos.push( new THREE.Vector2(15,15));
puntos.push( new THREE.Vector2(10,15));
puntos.push( new THREE.Vector2(5,25));
puntos.push( new THREE.Vector2(5,35));
puntos.push( new THREE.Vector2(15,35));
puntos.push( new THREE.Vector2(0,40));
puntos.push( new THREE.Vector2(0,0));

var baseforma= new THREE.LatheGeometry(puntos);
var basemalla= new THREE.Mesh( baseforma);

var esfera= new THREE.SphereGeometry(10);
esfera.translate(0,55,0);
var esferamalla= new THREE.Mesh(esfera);

var torre= new THREE.Geometry();
torre.merge(basemalla.geometry, basemalla.matrix);
torre.merge(esferamalla.geometry, esferamalla.matrix);

var material= new THREE.MeshNormalMaterial();
var torremalla= new THREE.Mesh(torre, material);

//torremalla.rotateX(Math.PI/6);
var escena= new THREE.Scene();
escena.add(torremalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z= 300;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
