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
puntos.push( new THREE.Vector2(0,100));

var puntos2=[];

for ( var i = 0; i < 10; i ++ ) {
	puntos2.push( new THREE.Vector2( Math.sin( i ) * 10 + 20, ( i - 5 ) * 10 ) );
}

var baseAlfil= new THREE.LatheGeometry(puntos);
var baseAlfilMalla= new THREE.Mesh(baseAlfil);

var gorro= new THREE.LatheGeometry(puntos2);
gorro.translate(0,110,0);
var gorroMalla= new THREE.Mesh(gorro);

var Alfil= new THREE.Geometry();
Alfil.merge(baseAlfilMalla.geometry, baseAlfilMalla.matrix);
Alfil.merge(gorroMalla.geometry, gorroMalla.matrix);

var material= new THREE.MeshNormalMaterial();
var AlfilMalla= new THREE.Mesh(Alfil, material);

AlfilMalla.rotateX(Math.PI/6);
var escena= new THREE.Scene();
escena.add(AlfilMalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z= 400;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
