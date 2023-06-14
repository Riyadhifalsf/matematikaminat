const puzzleContainer = document.querySelector('.puzzle-container');
const puzzlePieces = puzzleContainer.querySelectorAll('.puzzle-piece');
const randomButton = document.getElementById('randomButton');
const giveUpButton = document.getElementById('giveUpButton');

puzzlePieces.forEach(piece => {
  piece.addEventListener('click', () => {
    const emptyPiece = puzzleContainer.querySelector('[data-value=""]');
    const pieceIndex = Array.from(puzzlePieces).indexOf(piece);
    const emptyIndex = Array.from(puzzlePieces).indexOf(emptyPiece);
    const rowDiff = Math.floor(pieceIndex / 3) - Math.floor(emptyIndex / 3);
    const colDiff = pieceIndex % 3 - emptyIndex % 3;

    if ((rowDiff === 0 && Math.abs(colDiff) === 1) || (colDiff === 0 && Math.abs(rowDiff) === 1)) {
      swapPieces(piece, emptyPiece);
      checkWin();
    }
  });
});

randomButton.addEventListener('click', () => {
  randomizePuzzle();
});

giveUpButton.addEventListener('click', () => {
  confirmGiveUp();
});

function swapPieces(piece1, piece2) {
  const tempStyle = piece1.style.backgroundImage;
  piece1.style.backgroundImage = piece2.style.backgroundImage;
  piece2.style.backgroundImage = tempStyle;
}

function checkWin() {
  const values = Array.from(puzzlePieces).map(piece => piece.style.backgroundImage);
  const sortedValues = values.slice(0, values.length - 1).sort();

  if (JSON.stringify(sortedValues) === JSON.stringify(values.slice(0, values.length - 1))) {
    alert('Selamat! Anda menyelesaikan puzzle.');
  }
}

function randomizePuzzle() {
  const values = Array.from(puzzlePieces).map(piece => piece.style.backgroundImage);
  const emptyPiece = puzzleContainer.querySelector('[data-value=""]');
  const emptyIndex = Array.from(puzzlePieces).indexOf(emptyPiece);

  for (let i = values.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }

  values.forEach((value, index) => {
    puzzlePieces[index].style.backgroundImage = value;
  });

  puzzlePieces[emptyIndex].style.backgroundImage = '';
}

function confirmGiveUp() {
  const confirmation = confirm('Apakah Anda yakin ingin menyerah? Permainan akan diatur ulang ke posisi awal.');

  if (confirmation) {
    giveUp();
  }
}

function giveUp() {
  const values = Array.from(puzzlePieces).map(piece => piece.style.backgroundImage);
  const sortedValues = values.slice(0, values.length - 1);

  values.forEach((value, index) => {
    puzzlePieces[index].style.backgroundImage = sortedValues[index];
  });

  const emptyPiece = puzzleContainer.querySelector('[data-value=""]');
  const emptyIndex = Array.from(puzzlePieces).indexOf(emptyPiece);
  puzzlePieces[emptyIndex].style.backgroundImage = '';
}




    // untuk mengirim ke spread
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault(); // Menghentikan pengiriman form default
      
      // Ambil data dari form
      var nama = document.querySelector('input[name=nama]').value;
      var email = document.querySelector('input[name=email]').value;
      var pesan = document.querySelector('textarea[name=pesan]').value;
      
      // Lakukan pengiriman data ke endpoint yang ditentukan
      fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQEwbU2ewdeoSAfpVdtCHGs98Kv1UqV9KfsAaLdFCCHc2pzTG-78JfwaYpKSD-K5s3IFpBgYX7XGplb/submit', {
        method: 'POST',
        body: JSON.stringify({ nama: nama, message: message, star1: star1, star2: star2, star3: star3, star3: star3, star4: star4, star5: star5})
      }).then(function(response) {
        // Handle respon dari server (jika diperlukan)
      }).catch(function(error) {
        // Handle error (jika diperlukan)
      });
    });
  
  
  
  
  
  
  