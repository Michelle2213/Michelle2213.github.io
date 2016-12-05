var shape= new THREE.Shape();

    shape.moveTo(7.7,0);
    shape.lineTo(4.0,3.2);
    shape.lineTo(2.0,20.5);
    shape.lineTo(12.0,40.2);
    shape.lineTo(23.7,41.2);
    shape.lineTo(27.3,45.0);
    shape.lineTo(28.1,38.4);
    shape.lineTo(37.2,25.0);
    shape.lineTo(32.2,20.6);
    shape.lineTo(29.4,23.4);
    shape.lineTo(21.5,22.3);
    shape.lineTo(20.5,26.3);
    shape.lineTo(18.5,26.1);
    shape.lineTo(17.6,22.4);
    shape.lineTo(30.7,9.7);
    shape.lineTo(30.9,3.0);
    shape.lineTo(28.3,0);
    shape.lineTo(7.7,0);

var perfilCaballo= new THREE.ExtrudeGeometry(shape,50);
perfilCaballo.translate(0,15,0);
var perfilCaballoMalla= new THREE.Mesh(perfilCaballo);

var puntoscaballo= [];

    puntoscaballo.push( new THREE.Vector2(0,0));
    puntoscaballo.push( new THREE.Vector2(20,0));
    puntoscaballo.push( new THREE.Vector2(20,10));
    puntoscaballo.push( new THREE.Vector2(15,10));
    puntoscaballo.push( new THREE.Vector2(15,15));
    puntoscaballo.push( new THREE.Vector2(0,15));

var baseCaballo= new THREE.LatheGeometry(puntoscaballo);
var baseCaballoMalla= new THREE.Mesh(baseCaballo);

var Caballo= new THREE.Geometry();
Caballo.merge(perfilCaballoMalla.geometry, perfilCaballoMalla.matrix);
Alfil.merge(baseCaballoMalla.geometry, baseCaballoMalla.matrix);

var material= new THREE.MeshNormalMaterial();
var CaballoMalla= new THREE.Mesh(Caballo, material);

CaballoMalla.rotateX(Math.PI/6);
var escena= new THREE.Scene();
escena.add(CaballoMalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z= 1500;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
