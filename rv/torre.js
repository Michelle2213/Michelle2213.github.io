var puntosreina= [];

    puntosreina.push( new THREE.Vector2(0,0));
    puntosreina.push( new THREE.Vector2(20,0));
    puntosreina.push( new THREE.Vector2(20,10));
    puntosreina.push( new THREE.Vector2(15,10));
    puntosreina.push( new THREE.Vector2(15,15));
    puntosreina.push( new THREE.Vector2(10,15));
    puntosreina.push( new THREE.Vector2(5,60));
    puntosreina.push( new THREE.Vector2(20,60));
    puntosreina.push( new THREE.Vector2(20,65));
    puntosreina.push( new THREE.Vector2(10,65));
    puntosreina.push( new THREE.Vector2(10,70));
    puntosreina.push( new THREE.Vector2(15,70));
    puntosreina.push( new THREE.Vector2(15,80));
    puntosreina.push( new THREE.Vector2(10,80));
    puntosreina.push( new THREE.Vector2(20,100));
    puntosreina.push( new THREE.Vector2(0,100));

var Reina= new THREE.Geometry();

    for(var i=0; i<=6; i++){
    var picoForma = new THREE.ConeGeometry( 5, 10 );
      picoForma.translate(13*(Math.sin(Math.PI*2/6*i)),100,13*(Math.cos(Math.PI*2/6*i)));
    var picoMalla =new THREE.Mesh(picoForma); 
    var picoPunta= new THREE.SphereGeometry(3);
      picoPunta.translate(13*(Math.sin(Math.PI*2/6*i)),100,13*(Math.cos(Math.PI*2/6*i)));
    var picoPuntaMalla =new THREE.Mesh(picoPuntaForma); 
      Reina.merge(picoMalla.geometry, picoMalla.matrix);
      Reina.merge(picoPuntaMalla.geometry, picoPuntaMalla.matrix);
    }

var baseReina= new THREE.LatheGeometry(puntosreina);
var baseReinaMalla= new THREE.Mesh(baseReina);

//var puntitaAlfil = new THREE.SphereGeometry( 5 );
//puntitaAlfil.translate(0,130,0);
//var puntitaAlfilMalla= new THREE.Mesh(puntitaAlfil);


Reina.merge(baseAlfilMalla.geometry, baseAlfilMalla.matrix);
//Alfil.merge(gorroAlfilMalla.geometry, gorroAlfilMalla.matrix);
//Alfil.merge(puntitaAlfilMalla.geometry, puntitaAlfilMalla.matrix);

var material= new THREE.MeshNormalMaterial();
var ReinaMalla= new THREE.Mesh(Reina, material);

//AlfilMalla.rotateX(Math.PI/6);
var escena= new THREE.Scene();
escena.add(ReinaMalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z= 400;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);
