import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

declare var particlesJS: any;

@Component({
  selector: "artix-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    particlesJS.load(
      "particles-js",
      "../../assets/ParticleJs-Configs/particlesjs-config-header.json",
      null
    );
  }

  gotoHome() {
    this.router.navigate(["/artixhome"]);
  }

  gotoOpportunities() {
    this.router.navigate(["/opportunities"]);
  }
}
