var puntos= [];

puntos.push( new THREE.Vector2(0,0));
puntos.push( new THREE.Vector2(20,0));
puntos.push( new THREE.Vector2(20,10));
puntos.push( new THREE.Vector2(15,10));
puntos.push( new THREE.Vector2(15,15));
puntos.push( new THREE.Vector2(10,15));
puntos.push( new THREE.Vector2(5,60));
puntos.push( new THREE.Vector2(20,60));
puntos.push( new THREE.Vector2(20,65));
puntos.push( new THREE.Vector2(10,65));
puntos.push( new THREE.Vector2(10,70));
puntos.push( new THREE.Vector2(15,70));
puntos.push( new THREE.Vector2(15,80));
puntos.push( new THREE.Vector2(10,80));
puntos.push( new THREE.Vector2(20,100));

var baseRey= new THREE.LatheGeometry(puntos);
var baseReyMalla= new THREE.Mesh( baseRey);

var vertical= new THREE.BoxGeometry(10,20,0);
vertical.translate(0,105,0);
var verticalMalla= new THREE.Mesh(vertical);

var horizontal= new THREE.BoxGeometry(20,10,10);
horizontal.translate(0,105,0);
var horizontalMalla= new THREE.Mesh(horizontal);

var Rey= new THREE.Geometry();
Rey.merge(baseReyMalla.geometry, baseReyMalla.matrix);
Rey.merge(verticalMalla.geometry, verticalMalla.matrix);
Rey.merge(horizontalMalla.geometry, horizontalMalla.matrix);


var material= new THREE.MeshNormalMaterial();
var ReyMalla= new THREE.Mesh(Rey, material);

ReyMalla.rotateX(Math.PI/6);
var escena= new THREE.Scene();
escena.add(ReyMalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z= 300;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
