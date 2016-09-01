var puntos= [];

puntos.push( new THREE.Vector2(0,0));
puntos.push( new THREE.Vector2(60,0));
puntos.push( new THREE.Vector2(60,15));
puntos.push( new THREE.Vector2(40,15));
puntos.push( new THREE.Vector2(40,30));
puntos.push( new THREE.Vector2(25,45));
puntos.push( new THREE.Vector2(25,95));
puntos.push( new THREE.Vector2(40,110));
puntos.push( new THREE.Vector2(0,110));
puntos.push( new THREE.Vector2(0,0));

var baseforma= new THREE.LatheGeometry(puntos);

var basematerial= new THREE.MeshNormalMaterial();

var basemalla= new THREE.Mesh( baseforma, basematerial);
basemalla.rotateX(Math.PI/6);

var escena= new THREE.Scene();
escena.add(basemalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z= 500;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
