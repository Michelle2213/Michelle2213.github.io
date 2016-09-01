var puntos= [];

puntos.push( new THREE.Vector2(0,0));
puntos.push( new THREE.Vector2(60,0));
puntos.push( new THREE.Vector2(60,15));
puntos.push( new THREE.Vector2(40,15));
puntos.push( new THREE.Vector2(40,30));
puntos.push( new THREE.Vector2(25,45));
puntos.push( new THREE.Vector2(25,95));
puntos.push( new THREE.Vector2(40,110));
puntos.push( new THREE.Vector2(50,110));
puntos.push( new THREE.Vector2(50,125));
puntos.push( new THREE.Vector2(0,125));
puntos.push( new THREE.Vector2(0,0));

var baseforma= new THREE.LatheGeometry(puntos);
var basemalla= new THREE.Mesh( baseforma);

var picos= new THREE.BoxGeometry(10,20,10);
picos.translate(0,125,0);
var picosmalla= new THREE.Mesh(picos);

var torre= new THREE.Geometry();
torre.merge(basemalla.geometry, basemalla.matrix);
torre.merge(picosmalla.geometry, picosmalla.matrix);

var material= new THREE.MeshNormalMaterial();
var torremalla= new THREE.Mesh(torre, material);

torremalla.rotateX(Math.PI/6);

var escena= new THREE.Scene();
escena.add(torremalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z= 500;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
