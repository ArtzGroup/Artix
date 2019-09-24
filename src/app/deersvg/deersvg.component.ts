import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-deersvg",
  templateUrl: "./deersvg.component.html",
  styleUrls: ["./deersvg.component.scss"]
})
export class DeersvgComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  currentClass: string = "front";
  cubeface: string[] = ["top", "bottom", "left", "right", "front", "back"];
}
