//Loader
$(document).ready(function() {
    $(".bg-loader").hide();
})

//Efek Ngetik
const txtElement = ['Murid Teladan', 'Web Developer', 'Blogger'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 1000);

})();

// Button untuk memindahkan halaman
function showConfirmation() {
	var result = confirm("Apakah Anda yakin?");
	if (result) {
	  // Jika pengguna memilih OK
	  window.location.href = "gamepuzzle/index.html";
	}
  }