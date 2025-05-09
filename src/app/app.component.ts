import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Pieces: string[] = [
    "b",
    "n",
    "r",
    "q",
    "k",
    "p",
  ];

  DisabledPieces: string[] = [];

  DisableablePieces: string[] = this.Pieces.filter(piece => piece !== "k");

  Player_Color: string = "w";

  CurrentPiece: string = "";

  constructor() {
  }

  ngOnInit() {
    this.Player_Color = "w";
  }

  ChangePlayerColor() {
    this.Player_Color = (this.Player_Color == "w") ? "b" : "w";
  }

  GiveRandomPiece(){
    this.CurrentPiece = "";
    setTimeout(() => {
      var AvailablePieces = this.Pieces.filter(piece => !this.DisabledPieces.includes(piece));
      let randomIndex = Math.floor(Math.random() * AvailablePieces.length);
      this.CurrentPiece = this.Player_Color + AvailablePieces[randomIndex];
    }, 30);
  }

  Reset(){
    this.DisabledPieces = [];
    this.DisableablePieces = this.Pieces.filter(piece => piece !== "k");
    this.CurrentPiece = "";
    this.Player_Color = "w";
  }

  DisablePiece(piece: string){
    if (this.DisabledPieces.includes(piece)) {
      //this.DisabledPieces = this.DisabledPieces.filter(p => p !== piece);
    } else {
      this.DisabledPieces.push(piece);
      this.DisableablePieces = this.DisableablePieces.filter(p => p !== piece);
    }
  }
}
