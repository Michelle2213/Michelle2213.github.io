function init(p){
  malla= new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
  escena= new THREE.Scene();
  escena.add(malla);
  camara= new THREE.PerspectiveCamera();
  camara.position.z=5*p;
  renderizador= new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild( renderizador.domElement );
  }
  
/*var main= function(p){
  p(1);
  renderizador.render(escena,camara);
  }
*/
  
var loop= function(){
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
  malla.rotateY(0.01);
}

var escena, camara, renderizador;
init(1);
loop();
//main(init)
//init(1);
//main(2);
