import { Component, OnInit } from "@angular/core";

declare var particlesJS: any;
@Component({
  selector: "artix-home",
  templateUrl: "./artix-home.component.html",
  styleUrls: ["./artix-home.component.scss"]
})
export class ArtixHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    particlesJS.load(
      "particle-js",
      "../../assets/ParticleJs-Configs/particlesjs-config-blueBg.json",
      null
    );
  }
}
