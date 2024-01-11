raycaster=new THREE.Raycaster();
pointer=new THREE.Vector2();
document.addEventListener('pointerdown',function(e){
pointer.x=(e.clientX/window.innerWidth)*2-1;
pointer.y=-(e.clientY/window.innerHeight)*2+1;
raycaster.setFromCamera( pointer, camera );
const intersects = raycaster.intersectObjects( scene.children,true );
if(intersects.length>0&&intersects[0].object&&intersects[0].object.F){
intersects[0].object.F();
}
});
