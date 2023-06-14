//Loader
$(document).ready(function() {
    $(".bg-loader").hide();
})

//Efek Ngetik
const txtElement = ['Murid Teladan', 'Rajin Mengerjakan Tugas', 'Tidak berkata kasar'];
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

	setTimeout(ngetik, 500);

})();

// Button untuk memindahkan halaman
function showConfirmation() {
	var result = confirm("Tekan selesai dan lanjutkan ke halaman berikutnya");
	if (result) {
	  // Jika pengguna memilih OK
	  window.location.href = "gamepuzzle/index.html";
	}
  }

//   Modal
// Menampilkan modal saat tombol diklik
document.getElementById('openModal').addEventListener('click', function() {
	document.getElementById('myModal').style.display = 'block';
  });
  
  // Menutup modal saat ikon close diklik
  document.getElementById('closeModal').addEventListener('click', function() {
	document.getElementById('myModal').style.display = 'none';
  });
  
  // Menutup modal saat di luar area modal diklik
  window.addEventListener('click', function(event) {
	var modal = document.getElementById('myModal');
	if (event.target === modal) {
	  modal.style.display = 'none';
	}
  });
  
  // Mengirim data ulasan saat formulir dikirim
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
	event.preventDefault();
  
	// Ambil nilai dari isian
	var name = document.getElementById('name').value;
	var message = document.getElementById('message').value;
	var rating = document.querySelector('input[name="rating"]:checked').value;
  
	// Lakukan apa yang Anda inginkan dengan data ulasan
	// Contoh: Kirim ke server menggunakan AJAX, simpan di database, dll.
  
	// Setelah data ulasan dikirim, tutup modal
	document.getElementById('myModal').style.display = 'none';
  });
  
  