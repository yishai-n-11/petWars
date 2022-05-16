import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor() {}
  dragoverHandle(ev: any) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  dropHandler(event: any) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
  }
  ngOnInit(): void {}
}
