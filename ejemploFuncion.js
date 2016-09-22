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
  malla.position.x=i++;
  malla.position.y=j++;
  if (i>=700){
    i=0;
    j=0;
  }
}

var escena, camara, renderizador;
var i=0,j=0;
init(1);
loop();
//main(init)
//init(1);
//main(2);
