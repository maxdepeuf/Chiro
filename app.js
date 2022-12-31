var a=0;
function change_text(){
      a=a+1;
switch (a) {
  case 1:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur1
        document.getElementById("demo").innerHTML = "Test Genoux";
		document.getElementById("myImageId").src="hip.png";
    break;
  case 2:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Test Nuque";
		document.getElementById("myImageId").src="neck.png";
    break;
	  case 3:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Test Poitrine";
		document.getElementById("myImageId").src="chest.png";
    break;
	  case 4:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Test coude";
		document.getElementById("myImageId").src="chest.png";
    break;
	  case 5:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Test main";
		document.getElementById("myImageId").src="shoulder.png";
    break;
	  case 6:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
        document.getElementById("demo").innerHTML = "Test Pied";
		document.getElementById("myImageId").src="knee.png";
    break;
  }
  if (a==7){
  document.getElementById("titre").innerHTML = "Phase2";
  }

}
