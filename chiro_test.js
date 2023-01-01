var a=1;
function change_text(){
      a=a+1;
switch (a) {
  case 1:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur1
        document.getElementById("demo").innerHTML = "Flexion Cervicale";
		document.getElementById("myImageId").src="FlexCer.png";
    break;
  case 2:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Extention Cervicale";
		document.getElementById("myImageId").src="ExCer.png";
    break;
	  case 3:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Rotation Cervicale D";
		document.getElementById("myImageId").src="RotCerD.png";
    break;
	  case 4:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Rotation Cervicale G";
		document.getElementById("myImageId").src="RotCerG.png";
    break;
	  case 5:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Apley Superieur D";
		document.getElementById("myImageId").src="ASD.png";
    break;
	  case 6:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Apley Superieur G";
		document.getElementById("myImageId").src="ASG.png";
    break;
		  case 7:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Apeley Inferieur D";
		document.getElementById("myImageId").src="AID.png";
    break;
		  case 8:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Apeley Inferieur G";
		document.getElementById("myImageId").src="AIG.png";
    break;
			  case 9:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Flexion Multi-Segmentaire";
		document.getElementById("myImageId").src="FMS.png";
    break;
				  case 10:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Extension Multi-Segmentaire";
		document.getElementById("myImageId").src="EMS.png";
    break;
					  case 11:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Rotation Multi-Segmentaire D";
		document.getElementById("myImageId").src="RMSD.png";
    break;
						  case 12:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Rotation Multi-Segmentaire G";
		document.getElementById("myImageId").src="RMSG.png";
    break;
						  case 13:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "SLS";
		document.getElementById("myImageId").src="SLS.png";
    break;
						  case 14:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Squat";
		document.getElementById("myImageId").src="Squat.png";
    break;
  }
  if (a==15){
  document.getElementById("titre").innerHTML = "TEST SFMA: Phase 2";
  }

}

function scode(){
window.location = 'chiro_test_start.html';
}

