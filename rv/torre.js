var puntos= [];

puntos.push( new THREE.Vector2(0,0));
puntos.push( new THREE.Vector2(20,0));
puntos.push( new THREE.Vector2(20,10));
puntos.push( new THREE.Vector2(15,10));
puntos.push( new THREE.Vector2(15,15));
puntos.push( new THREE.Vector2(10,15));
puntos.push( new THREE.Vector2(5,40));
puntos.push( new THREE.Vector2(20,40));
puntos.push( new THREE.Vector2(20,45));
puntos.push( new THREE.Vector2(10,45));
puntos.push( new THREE.Vector2(10,50));
puntos.push( new THREE.Vector2(15,50));
puntos.push( new THREE.Vector2(15,60));
puntos.push( new THREE.Vector2(10,60));
puntos.push( new THREE.Vector2(20,80));
puntos.push( new THREE.Vector2(0,80));

var puntos2=[];

for ( var i = 0; i < 47; i ++ ) {
	puntos2.push( new THREE.Vector2( Math.sin(i*0.05 -40) * 25, i));
}

var baseAlfil= new THREE.LatheGeometry(puntos);
var baseAlfilMalla= new THREE.Mesh(baseAlfil);

var gorroAlfil= new THREE.LatheGeometry(puntos2);
gorroAlfil.translate(0,80,0);
var gorroAlfilMalla= new THREE.Mesh(gorroAlfil);

var puntitaAlfil = new THREE.SphereGeometry( 10 );
puntitaAlfil.translate(0,120,0);
var puntitaAlfilMalla= new THREE.Mesh(puntitaAlfil);

var Alfil= new THREE.Geometry();
Alfil.merge(baseAlfilMalla.geometry, baseAlfilMalla.matrix);
Alfil.merge(gorroAlfilMalla.geometry, gorroAlfilMalla.matrix);
Alfil.merge(puntitaAlfilMalla.geometry, puntitaAlfilMalla.matrix);

var material= new THREE.MeshNormalMaterial();
var AlfilMalla= new THREE.Mesh(Alfil, material);

//AlfilMalla.rotateX(Math.PI/6);
var escena= new THREE.Scene();
escena.add(AlfilMalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z= 400;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
