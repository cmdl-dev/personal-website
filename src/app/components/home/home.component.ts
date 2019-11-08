import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/Project";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  projects: Project[] = [
    {
      name: "Kornerstore",
      thumbnail: "https://imgur.com/hJMMmbO.jpg",
      url: "#",
      codeUrl: "https://github.com",
      technologies: [
        {
          name: "React.js",
          icon: "Some Icon",
        },
        {
          name: "Blade Template",
          icon: "Some Icon",
        },
        {
          name: "PHP/Laravel",
          icon: "Some Icon",
        },
      ],
      description:
        "age editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      name: "Real Estate Concept",
      thumbnail: "https://imgur.com/qjOflZE.jpg",
      url: "#",
      codeUrl: "https://github.com",
      technologies: [
        {
          name: "PHP",
          icon: "Some Icon",
        },
      ],
      description:
        "age editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      name: "timeclassicmovies",
      thumbnail: "https://imgur.com/yJ0qcuS.jpg",
      url: "#",
      codeUrl: "https://github.com",
      technologies: [
        {
          name: "PHP",
          icon: "Some Icon",
        },
      ],
      description:
        "age editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
