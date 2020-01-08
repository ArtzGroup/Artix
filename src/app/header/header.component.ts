import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { NgAnimateScrollService } from 'ng-animate-scroll';

declare var particlesJS: any;

@Component({
  selector: "artix-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private animateScrollService: NgAnimateScrollService) {}

  ngOnInit() {
    particlesJS.load(
      "particles-js",
      "../../assets/ParticleJs-Configs/particlesjs-config-header.json",
      null
    );
  }

  gotoHome() {
    this.router.navigate(["/artixhome"]);
    window.scrollTo(0, 0);
  }

  gotoOpportunities() {
    this.router.navigate(["/opportunities"]);
    window.scrollTo(0, 0);
  }

  navigateTocontactUS(duration?:number) {
    if(this.router.url === '/artixhome'){
      this.animateScrollService.scrollToElement('target', duration)
    }
    else{
      this.router.navigate(["/artixhome"]);
      window.scrollTo(200, 400);
    }
}
}
