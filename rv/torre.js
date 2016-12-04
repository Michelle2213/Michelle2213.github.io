var shape= new THREE.Shape();

    shape.moveTo(77,0);
    shape.lineTo(40,32);
    shape.lineTo(20,205);
    shape.lineTo(120,402);
    shape.lineTo(237,412);
    shape.lineTo(273,450);
    shape.lineTo(281,384);
    shape.lineTo(372,250);
    shape.lineTo(322,206);
    shape.lineTo(294,234);
    shape.lineTo(215,223);
    shape.lineTo(205,263);
    shape.lineTo(185,261);
    shape.lineTo(176,224);
    shape.lineTo(307,97);
    shape.lineTo(309,30);
    shape.lineTo(283,0);
    shape.lineTo(77,0);

var perfilCaballo= new THREE.ExtrudeGeometry(shape,50);
var perfilCaballoMalla= new THREE.Mesh(perfilCaballo);

var Caballo= new THREE.Geometry();
Caballo.merge(perfilCaballoMalla.geometry, perfilCaballoMalla.matrix);
//Alfil.merge(gorroAlfilMalla.geometry, gorroAlfilMalla.matrix);
//Alfil.merge(puntitaAlfilMalla.geometry, puntitaAlfilMalla.matrix);

var material= new THREE.MeshNormalMaterial();
var CaballoMalla= new THREE.Mesh(Caballo, material);

//CaballoMalla.rotateX(Math.PI/6);
var escena= new THREE.Scene();
escena.add(CaballoMalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z= 400;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
