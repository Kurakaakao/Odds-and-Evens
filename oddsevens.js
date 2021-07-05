function OddsEvens() {
	let num1 = parseInt(document.getElementById("loNum").value);
	let num2 = parseInt(document.getElementById("hiNum").value);
	let bool = document.getElementById("odevn").checked;
	let arr = [];
	for (let i = num1; i <= num2; i++) {
  	let oddevens;
	// Jos checkbox on valittu, palautetaan parilliset arvot
		if (bool === true) {
  		oddevens = i % 2 === 0;
  	} else {
  		oddevens = i % 2 != 0;
  	}
  	if (oddevens) {
		arr.push(i);
		//console.log(i);
		document.getElementById("screen").innerHTML=arr;
    }
  }
}

// OddsEvens(lowNro, hiNro, true);
// function OddsEvens(num1, num2, bool=true) 