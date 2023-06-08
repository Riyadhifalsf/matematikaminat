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
      const tempValue = piece1.dataset.value;
      piece1.dataset.value = piece2.dataset.value;
      piece2.dataset.value = tempValue;

      piece1.innerText = piece1.dataset.value;
      piece2.innerText = piece2.dataset.value;
    }

    function checkWin() {
      const values = Array.from(puzzlePieces).map(piece => piece.dataset.value);
      const sortedValues = values.slice(0, values.length - 1).sort();

      if (JSON.stringify(sortedValues) === JSON.stringify(values.slice(0, values.length - 1))) {
        alert('Selamat! Anda menyelesaikan puzzle.');
      }
    }

    function randomizePuzzle() {
      const values = Array.from(puzzlePieces).map(piece => piece.dataset.value);
      const emptyPiece = puzzleContainer.querySelector('[data-value=""]');
      const emptyIndex = Array.from(puzzlePieces).indexOf(emptyPiece);

      for (let i = values.length - 2; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
      }

      values.forEach((value, index) => {
        puzzlePieces[index].dataset.value = value;
        puzzlePieces[index].innerText = value;
      });

      puzzlePieces[emptyIndex].dataset.value = '';
      puzzlePieces[emptyIndex].innerText = '';
    }

    function confirmGiveUp() {
      const confirmation = confirm('Apakah Anda yakin ingin menyerah? Permainan akan diatur ulang ke posisi awal.');

      if (confirmation) {
        giveUp();
      }
    }

    function giveUp() {
      const values = Array.from(puzzlePieces).map(piece => piece.dataset.value);
      const sortedValues = values.slice(0, values.length - 1).sort();

      values.forEach((value, index) => {
        puzzlePieces[index].dataset.value = sortedValues[index];
        puzzlePieces[index].innerText = sortedValues[index];
      });

      const emptyPiece = puzzleContainer.querySelector('[data-value=""]');
      const emptyIndex = Array.from(puzzlePieces).indexOf(emptyPiece);
      puzzlePieces[emptyIndex].dataset.value = '';
      puzzlePieces[emptyIndex].innerText = '';
    }