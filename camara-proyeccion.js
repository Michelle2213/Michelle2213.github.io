
var campoVision=45; //grados
var relacionAspecto= window.innerWidth / window.innerHeight;
var planoCercano=1;
var planoLejano=1000;

var camara= new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);

camara.position.z=15;