import {StaticImageData} from "next/image";

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
