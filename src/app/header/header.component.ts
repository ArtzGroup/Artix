import { Component, OnInit } from "@angular/core";

declare var particlesJS: any;

@Component({
  selector: "artix-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    particlesJS.load(
      "particles-js",
      "../../assets/ParticleJs-Configs/particlesjs-config-header.json",
      null
    );
  }
}
