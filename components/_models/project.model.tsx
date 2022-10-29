import {StaticImageData} from "next/image";
import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";
import project3 from "../../public/project3.png";
import project4 from "../../public/project4.png";

export interface Project {
  title: string;
  description: string;
  image: StaticImageData|null;
  style: ProjectStyleType;
}

export enum ProjectStyleType {
  UP,
  DOWN,
  SELECT,
}

export const PROJECTS: Map<number, Project[]> = new Map<number, Project[]>([
  [
    2022,
    [
      { title: "Project 01", description: "This project took a while to do, and is really awesome and sick", image: project1, style: null },
    ]
  ],
  [
    2021,
    [
      { title: "Project 01", description: "This project took a while to do, and is really awesome and sick", image: project1, style: null },
    ]
  ],
  [
    2020,
    [
      { title: "Project 01", description: "This project took a while to do, and is really awesome and sick", image: project1, style: null },
    ]
  ]
]);
