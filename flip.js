
mp=new Audio();
mp.src='page/page.mp3';
mp.play2=function(){
this.currentTime=0;
this.play();
}

var pgs=[];var num=-1;
PAGE=function(str){
i=pgs.length;
gm=new THREE.PlaneGeometry(1,1*1.25,2,1);
gm.translate(.5,0,0);
gmm=new THREE.PlaneGeometry(1,1*1.25,2,1);
gmm.translate(.5,0,0);
gm.merge(gmm);
gm.verticesNeedUpdate=true;
gm.computeVertexNormals();
for(var ii=0;ii<3;ii++){gm.faces[ii].materialIndex=0;}
for(var ii=4;ii<8;ii++){gm.faces[ii].materialIndex=1;}
txd=new THREE.ImageUtils.loadTexture(str);
mt=new THREE.MeshPhongMaterial({map:txd,side:0});//¶
mtt=new THREE.MeshPhongMaterial({color:0xffffff,side:THREE.BackSide });//¶
mt.normalMap=new THREE.ImageUtils.loadTexture('page/norm.png');
mtt.normalMap=new THREE.ImageUtils.loadTexture('page/norm2.png');
pgs[i]=new THREE.Mesh(gm,[mt,mtt]);
pgs[i].receiveShadow=true;
pgs[i].castShadow=true;
pgs[i].sw=-1,pgs[i].ang=0,pgs[i].ang2=0;
pgs[i].F=function(){
if(this.sw==-1){num=pgs.indexOf(this);}
if(this.sw==1){num=pgs.indexOf(this)-1;}
mp.play2();
}
return pgs[i]
}
setInterval(function(){
for(var i=0;i<pgs.length;i++){
if(pgs[i].sw==1){pgs[i].ang+=(pgs[i].ang-(-Math.PI))*-.0125;}
if(pgs[i].sw==-1){pgs[i].ang+=(pgs[i].ang-0)*-.0125;}
pgs[i].ang2+=(pgs[i].ang2-pgs[i].ang)*-.025;
pgs[i].rotation.y=pgs[i].ang;
pgs[i].sw=-1;
pgs[i].position.z+=((pgs[i].position.z-(-i*.01))*-.05)+(num*.001);
if(i<=num){
pgs[i].sw=1;
pgs[i].position.z+=((pgs[i].position.z-(i*.01))*-.05)-(num*.001);
}
pgs[i].geometry.vertices[1].z=pgs[i].geometry.vertices[4].z=(pgs[i].ang2-pgs[i].ang)*.25
pgs[i].geometry.vertices[2].x=pgs[i].geometry.vertices[5].x=1+(((pgs[i].ang2-pgs[i].ang)*-pgs[i].sw)*.1)
pgs[i].geometry.vertices[7].z=pgs[i].geometry.vertices[10].z=(pgs[i].ang2-pgs[i].ang)*.25
pgs[i].geometry.vertices[8].x=pgs[i].geometry.vertices[11].x=1+(((pgs[i].ang2-pgs[i].ang)*-pgs[i].sw)*.1)
pgs[i].geometry.verticesNeedUpdate=true;
pgs[i].geometry.computeVertexNormals();
}
});

grp=new THREE.Group();scene.add(grp);grp.translateX(-.5);
for(var i=0;i<6;i++){
v=PAGE('page/'+(i+1)+'.png');grp.add(v);
}
setInterval(function(){
v=0;
if(isPortrait){v=-.4}
if(num<=-1){
grp.position.x+=(-.5-grp.position.x)*.05;
}
if(num>-1&&num<pgs.length-1){
grp.position.x+=(v-grp.position.x)*.05;
}
if(num>=pgs.length-1){
grp.position.x+=(.5-grp.position.x)*.05;
}
});



