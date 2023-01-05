var scanP1=1;
var reslutP1=[];
var reslutP2=[];
var scanP2=1;
var Phase=1;
const nameTest=["Flexion Cervicale","Extention Cervicale","Rotation Cervicale D","Rotation Cervicale G","Apley Superieur D","Apley Superieur G","Apley Inferieur D","Apeley Inferieur G","Flexion Multi-Segmentaire","Extension Multi-Segmentaire","Rotation Multi-Segmentaire D","Rotation Multi-Segmentaire G","SLS","Squat"];
const nameFigu=["FlexCer.png","ExCer.png","RotCerD.png","RotCerG.png","ASD.png","ASG.png","AID.png","AIG.png","FMS.png","EMS.png","RMSD.png","RMSG.png","SLS.png","Squat.png"];
function but_FD(){
	  if (Phase==1){
	reslutP1[scanP1-1]="FD";
	  }
	  	  if (Phase==2){
	reslutP1[scanP2-1]="FD";
	  }
	  
	change_text();
}

function but_NFND(){
	  if (Phase==1){
	reslutP1[scanP1-1]="NFND";
	  }
	  	  	  if (Phase==2){
	reslutP1[scanP2-1]="NFND";
	  }
	change_text();
}

function but_NFD(){
	  if (Phase==1){
	reslutP1[scanP1-1]="NFD";
	  }
	  	  	  if (Phase==2){
	reslutP1[scanP2-1]="NFD";
	  }
	change_text();
}

function but_FND(){
	  if (Phase==1){
	reslutP1[scanP1-1]="FND";
	  }
	  	  	  if (Phase==2){
	reslutP1[scanP2-1]="FND";
	  }
	change_text();
}

function change_text(){
      scanP1=scanP1+1;
	  if (Phase==1){
switch (scanP1) {
  case 1:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur1
        document.getElementById("demo").innerHTML = nameTest[0];
		document.getElementById("myImageId").src=nameFigu[0];
    break;
  case 2:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[1];
		document.getElementById("myImageId").src=nameFigu[1];
    break;
	  case 3:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[2];
		document.getElementById("myImageId").src=nameFigu[2];
    break;
	  case 4:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[3];
		document.getElementById("myImageId").src=nameFigu[3];
    break;
	  case 5:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[4];
		document.getElementById("myImageId").src=nameFigu[4];
    break;
	  case 6:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[5];
		document.getElementById("myImageId").src=nameFigu[5];
    break;
		  case 7:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[6];
		document.getElementById("myImageId").src=nameFigu[6];
    break;
		  case 8:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[7];
		document.getElementById("myImageId").src=nameFigu[7];
    break;
			  case 9:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[8];
		document.getElementById("myImageId").src=nameFigu[8];
    break;
				  case 10:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[9];
		document.getElementById("myImageId").src=nameFigu[9];
    break;
					  case 11:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[10];
		document.getElementById("myImageId").src=nameFigu[10];
    break;
						  case 12:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[11];
		document.getElementById("myImageId").src=nameFigu[11];
    break;
						  case 13:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[12];
		document.getElementById("myImageId").src=nameFigu[12];
    break;
						  case 14:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = nameTest[13];
		document.getElementById("myImageId").src=nameFigu[13];
    break;
  }
  if (scanP1==15){
  document.getElementById("titre").innerHTML = "TEST SFMA: Phase 2";
  Phase=2;
  reslutP2=reslutP1;
  }
	  }
    if (Phase==2){
	while (reslutP1[scanP2]=="FND"){
		scanP2=scanP2+1;
	}
	document.getElementById("demo").innerHTML = nameTest[scanP2];
	document.getElementById("myImageId").src=nameFigu[scanP2];
	document.getElementById("namt").innerHTML = scanP2;
	document.getElementById("numt").innerHTML = reslutP1;
	scanP2=scanP2+1;
	if(scanP2==15){
		Phase=3;
	document.getElementById("titre").innerHTML = "TEST SFMA: Fini";
	document.getElementById("namt").innerHTML = reslutP2;
	document.getElementById("myImageId").src="smile.png";
	document.getElementById("demo").innerHTML = "Ok";
  }
	}
  
  
}

function scode(){
window.location = 'chiro_test_start.html';
}

