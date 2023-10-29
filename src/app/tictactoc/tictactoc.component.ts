import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoc',
  templateUrl: './tictactoc.component.html',
  styleUrls: ['./tictactoc.component.css'],
})
export class TictactocComponent {
  roundWon: any;
  cells: string[] = ['', '', '', '', '', '', '', '', ''];
  statustext = "X's Turn";
  win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  currentplayer = 'X';
  running = true;

  cellClick(index: number) {
    if (this.cells[index] !== '' || !this.running) {
      return;
    }
    this.updateCell(index);
    this.checkWinner();
  }

  updateCell(index: number) {
    this.cells[index] = this.currentplayer;
  }

  changePlayer() {
    this.currentplayer = this.currentplayer === 'X' ? 'O' : 'X';
    this.statustext = `${this.currentplayer}'s Turn`;
  }

  checkWinner() {
    // let roundWon=false;
    this.roundWon = false;
    for (let i = 0; i < this.win.length; i++) {
      const [a, b, c] = this.win[i];
      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        // roundWon=true;
        this.roundWon = true;
        break;
      }
    }
    // if(roundWon){}
    if (this.roundWon) {
      this.statustext = `${this.currentplayer} WIN!!!`;
      this.running = false;
    } else if (!this.cells.includes('')) {
      this.statustext = 'Draw!';
      this.running = false;
    } else {
      this.changePlayer();
    }
  }

  restart() {
    this.currentplayer = 'X';
    this.cells = ['', '', '', '', '', '', '', '', ''];
    this.statustext = `${this.currentplayer}'s Turn`;
    this.running = true;
  }
}
