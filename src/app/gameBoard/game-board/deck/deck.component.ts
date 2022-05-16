import { Component, Input, OnInit } from "@angular/core";
import { Card } from "../../../models/Card.model";
@Component({
  selector: "app-deck",
  templateUrl: "./deck.component.html",
  styleUrls: ["./deck.component.scss"],
})
export class DeckComponent implements OnInit {
  @Input() cards: Card[] = [];
  @Input() playerName: string = "";
  constructor() {}
  startDragHaandle(event: any) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.effectAllowed = "move";
  }
  ngOnInit(): void {}
}
