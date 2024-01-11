
let camera,scene,renderer,container,controls;
camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.001,800);
scene=new THREE.Scene();
renderer=new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
container=document.createElement('div'); 
document.body.appendChild(container);
container.appendChild(renderer.domElement);
controls=new THREE.OrbitControls(camera,renderer.domElement);
render=function(){
requestAnimationFrame(render);
controls.update();
renderer.render(scene,camera);
}
render();