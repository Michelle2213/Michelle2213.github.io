function Pieza(){
  THREE.Object3D.call(this);
  this.piernaIzq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.piernaIzq,this.piernaDer,cuerpo);
  this.piernaIzq.position.z=-2;
  this.piernaIzq.position.y=-2.5;
  this.piernaDer.position.z=-2;
  this.piernaDer.position.y=-2.5;
  cuerpo.position.z=2.5;
}

Pieza.prototype=new THREE.Object3D;

function setup(){
  pieza= new Pieza();
  escena= new THREE.Scene();
   
   camara= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
   camara.position.z=5;
   
   renderizador= new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
   renderizador.setSize(window.innerWidth,window.innerHeight);
  }

function loop(){
  requestAnimationFrame(Pieza.loop);
 
  if(Pieza.malla !== undefined){
    Pieza.malla.rotateX(0.01);
    Pieza.malla.rotateY(0.01);
    }
  Pieza.renderizador.render(Pieza.escena, Pieza.camara);
}

Pieza.setup();
Pieza.loop();