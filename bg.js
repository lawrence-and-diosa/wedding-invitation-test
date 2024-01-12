
isPortrait=parseInt(window.innerWidth)<parseInt(window.innerHeight);

setTimeout(function(){
renderer.setClearColor(0x000000);

gm=new THREE.BoxGeometry(.1,.1,.1);
gm.translate(.5,-.75,0);
mt=new THREE.MeshBasicMaterial({});
msh=new THREE.Mesh(gm,mt);
scene.add(msh);
msh.F=function(){
scene.overrideMaterial=
new THREE.MeshNormalMaterial({side:THREE.DoubleSide,wireframe:true});

renderer.setClearColor(0x000000);
setTimeout(function(){
scene.overrideMaterial=false;
renderer.setClearColor(0x000000);
},1000*5);
}

pt=new THREE.AmbientLight(0xffffff,.5);
scene.add(pt);
pt=new THREE.PointLight(0xffffff,2,10);
scene.add(pt);
pt.position.set(0,5,5);
doShad=true;//¶
pt.castShadow=doShad;
pt.shadowBias=-.001;
renderer.shadowMapEnabled=doShad;

//camera.fov=40;
if(isPortrait){
controls.enablePan=false;
controls.target.set(0,0,0);
camera.position.set(0,0,9999);
controls.maxDistance=3;
camera.updateProjectionMatrix();
controls.update();
controls.maxDistance=3.5;
}
else{

controls.enablePan=false;
controls.target.set(0,0,0);
camera.position.set(0,0,9999);
controls.maxDistance=1.75;
camera.updateProjectionMatrix();
controls.update();
controls.maxDistance=2;

}

},1000);

















gm=new THREE.PlaneGeometry(3*10,2*10);gm.rotateZ(-Math.PI/2);gm.translate(0,0,-.5);
txd=new THREE.ImageUtils.loadTexture('bg/table.png');
txd.wrapS=txd.wrapT=THREE.RepeatTexture;
txd.repeat.set(10,10);
mt=new THREE.MeshLambertMaterial({map:txd,side:2});//¶
msh=new THREE.Mesh(gm,mt);
scene.add(msh);
msh.receiveShadow=true;



lvs=[];
for(var i=0;i<8;i++){
gm=new THREE.PlaneGeometry(.5,.5);
txd=new THREE.ImageUtils.loadTexture('bg/leaves'+(Math.floor(Math.random()*10)+1)+'.png');
mt=new THREE.MeshBasicMaterial({map:txd,alphaTest:.5});//¶
lvs[i]=new THREE.Mesh(gm,mt);
scene.add(lvs[i]);
xv=(Math.random()-.5)*5
yv=(Math.random()-.5)*10
zv=(Math.random()-.5)*1-.5
lvs[i].position.set(xv,yv,zv);
lvs[i].vang=Math.random()*.01;
}
setInterval(function(){
for(var i=0;i<lvs.length;i++){
lvs[i].position.y-=.005;
lvs[i].rotation.z-=lvs[i].vang;
if(lvs[i].position.y<-5){lvs[i].position.y=5;}
}
})



gm=new THREE.SphereGeometry(.125,8,8);
txd=new THREE.ImageUtils.loadTexture('bg/fb.png');
mt=new THREE.MeshLambertMaterial({map:txd});//¶
ball=new THREE.Mesh(gm,mt);
scene.add(ball);
ball.position.set(0,-.9,.1);
if(!isPortrait){
ball.position.set(.9*1.25,-.5,.1);
}
ball.F=function(){window.location.href=
'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.youtube.com/watch%3Fv%3DdQw4w9WgXcQ&ved=2ahUKEwiNjcvIrdaDAxXI9jgGHaWiA64QwqsBegQIDhAG&usg=AOvVaw2KTqEs1wN8sVojiOfVta96';}
ball.rx=0,ball.ry=0,ball.rz=0;
setInterval(function(){
if(Math.random()<.05){
ball.rx=Math.random()-.5,
ball.ry=Math.random()-.5,
ball.rz=Math.random()-.5;
}
ball.rotation.x+=(ball.rotation.x-ball.rx)*-.25;
ball.rotation.y+=(ball.rotation.y-ball.ry)*-.25;
ball.rotation.z+=(ball.rotation.z-ball.rz)*-.25;
});

txd=new THREE.ImageUtils.loadTexture('bg/bubble.png');
mt=new THREE.SpriteMaterial({map:txd});
spr=new THREE.Sprite(mt);
scene.add(spr);
spr.position.set(0,-.9,.1);
if(!isPortrait){
spr.position.set(.9*1.25,-.5,.1);
}
spr.sz=0;
setInterval(function(){
spr.sz+=(spr.sz-0)*-.0005;
if(spr.sz<.5){spr.sz=1;}
spr.scale.set(spr.sz,spr.sz,spr.sz);});


/*
ballg=new THREE.Group();scene.add(ballg);
ballg.position.copy(ball.position);ballg.lookAt(camera.position);
ballg.position.set(0,0,0);
scene.remove(ball);ballg.add(ball);
*/
