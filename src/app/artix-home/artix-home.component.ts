import { Component, OnInit, ElementRef } from "@angular/core";
import anime from "animejs/lib/anime.es.js";

// import "vanilla-tilt";
// declare var VanillaTilt;

declare var particlesJS: any;

@Component({
  selector: "artix-home",
  templateUrl: "./artix-home.component.html",
  styleUrls: ["./artix-home.component.scss"]
})
export class ArtixHomeComponent implements OnInit {
  constructor(public el: ElementRef) {}

  ngOnInit() {
    particlesJS.load(
      "aboutArtix",
      "../../assets/ParticleJs-Configs/particlesjs-config-blueBg.json",
      null
    );

    // var textWrapper = document.querySelector(".welcomeText");
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /\S/g,
    //   "<span class='letter'>$&</span>"
    // );

    // var animation = anime
    //   .timeline({ loop: true })
    //   .add({
    //     targets: ".welcomeText .letter",
    //     scale: [4, 1],
    //     opacity: [0, 1],
    //     translateZ: 0,
    //     easing: "easeOutExpo",
    //     duration: 950,
    //     delay: (el, i) => 70 * i
    //   })
    //   .add({
    //     targets: ".welcomeText",
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000
    //   });
    // setTimeout(() => {
    //   animation.pause();
    // }, 5000);
  }
}
