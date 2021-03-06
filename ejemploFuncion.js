function init(p){
  malla= new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
  escena= new THREE.Scene();
  escena.add(malla);
  camara= new THREE.PerspectiveCamera();
  camara.position.z=5*p;
  renderizador= new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild( renderizador.domElement );
  step=0.05;
  }
  
/*var main= function(p){
  p(1);
  renderizador.render(escena,camara);
  }
*/
  
var loop= function(){
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
  malla.rotateX(0.01);
  malla.rotateY(0.01);
  malla.rotateZ(0.01);
  if (Math.abs(malla.position.x)>=2){
    step=-step;
  }
  malla.position.x+=step;
  
}

var escena, camara, renderizador,malla,step;
init(1);
loop();
//main(init)
//init(1);
//main(2);
