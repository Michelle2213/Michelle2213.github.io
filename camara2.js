var cubo= new THREE.Mesh(new THREE.BoxGeometry(2,2,2), new THREE.MeshNormalMaterial());
cubo.rotateY(Math.PI/4);

var esfera1= new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial());
esfera1.position.x=5;

var esfera2= new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial());
esfera2.position.x=-5;
esfera2.position.z=-10;
