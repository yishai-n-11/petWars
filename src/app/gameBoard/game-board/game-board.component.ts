import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/models/Card.model";
import { LoadPicsService } from "src/app/services/load-pics.service";
import { environment as env } from "src/environments/environment";
@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.scss"],
})
export class GameBoardComponent implements OnInit {
  deck1: Card[] = [];
  deck2: Card[] = [];
  types: string[] = ["dog", "cat", "bird"];
  adjectives: string[] = [
    "powerfull",
    "scary",
    "killer",
    "coward",
    "ferocious",
    "weakling",
    "magestic",
  ];
  constructor(private picsLoader: LoadPicsService) {
    this.generateCards(1);
    this.generateCards(2);
    console.log("deck 1", this.deck1);
    console.log("deck 2", this.deck2);
  }

  ngOnInit(): void {}

  async generateCards(deckNum: number) {
    for (let i = 0; i < env.numOfCardsInDeck; i++) {
      const type: string =
        this.types[Math.floor(Math.random() * this.types.length)];
      let url;
      switch (type) {
        case "dog":
          url = await this.picsLoader.loadDogImg();
          break;
        case "cat":
          url = await this.picsLoader.loadCatImg();
          break;
        case "bird":
          url = await this.picsLoader.loadBirdImg();
          break;
      }
      const name =
        this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
      const power: number = Math.floor(Math.random() * 5) + 1;
      const newCard = new Card(name, type, url, power);
      if (deckNum === 1) {
        this.deck1.push(newCard);
      } else {
        this.deck2.push(newCard);
      }
    }
  }
}
