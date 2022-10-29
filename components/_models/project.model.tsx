import {StaticImageData} from "next/image";
import arrow_dance from "../../public/arrow_dance.png";
import attack_of_the_squarons from "../../public/attack_of_the_squarons.png";
import call_of_muty from "../../public/call_of_muty.png";
import circle_izer from "../../public/circle_izer.png";
import conway_game_of_life from "../../public/conway_game_of_life.png";
import cook_em_up from "../../public/cook_em_up.png";
import newtons_pull from "../../public/newtons_pull.png";
import oystou from "../../public/oystou.png";
import particle_system from "../../public/particle_system.png";
import path_finding_algorithms from "../../public/path_finding_algorithms.png";
import please_the_gods from "../../public/please_the_gods.png";
import predators_vs_prey from "../../public/predators_vs_prey.png";
import probability_simulator from "../../public/probability_simulator.png";
import sorting_algorithms from "../../public/sorting_algorithms.png";
import the_great_tower_ascent from "../../public/the_great_tower_ascent.png";
import trinity_force from "../../public/trinity_force.png";
import word_cloud from "../../public/word_cloud.png";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string;
  image: StaticImageData|null;
  style: ProjectStyleType;
  date: string;
}

export enum ProjectStyleType {
  UP,
  DOWN,
  SELECT,
}

export const PROJECTS: Map<string, Project> = new Map<string, Project>([
  [
    "path_finding_algorithms",
    {
      id: "path_finding_algorithms",
      title: "Path Finding Algorithms",
      shortDescription: "Implemented the BFS and DFS algorithms, with a nice visual representation of each.",
      techStack: "C++ / SFML",
      image: path_finding_algorithms,
      date: '2019',
      style: null
    }
  ],
  [
    "sorting_algorithms",
    {
      id: "sorting_algorithms",
      title: "Sorting Algorithms",
      shortDescription: "Implemented 5 different algorithms (Quick sort, Merge sort, Bucket sort, Radix sort, Bubble sort), with a nice visual representation of each.",
      techStack: "C++ / SFML",
      image: sorting_algorithms,
      date: '2019',
      style: null
    }
  ],
  [
    "global_game_jam_2019",
    {
      id: "global_game_jam_2019",
      title: "Global Game Jam 2019",
      shortDescription: "\"Oystou\" is a small game I created in one weekend with a team of 3 people during the Global Game Jam 2019, that was held at Epitech in Nantes, France.",
      techStack: "Unity / C#",
      image: oystou,
      date: '2019',
      style: null
    }
  ],
  [
    "cook_em_up",
    {
      id: "cook_em_up",
      title: "Cook'em up",
      shortDescription: "\"Cook Em up\" is an android application where you run a fancy restaurant in Paris, and need to prepare the meals following the recipes, but watch out, time runs out quickly !",
      techStack: "Unity / C#",
      image: cook_em_up,
      date: '2019',
      style: null
    }
  ],
  [
    "circle_izer",
    {
      id: "circle_izer",
      title: "Circle-izer",
      shortDescription: "A small program I created that takes an image and transforms it into circles that \"Pop\" as the mouse hovers over revealing the image.",
      techStack: "Unity / C#",
      image: circle_izer,
      date: '2018',
      style: null
    }
  ],
  [
    "arrow_dance",
    {
      id: "arrow_dance",
      title: "Arrow Dance",
      shortDescription: "ArrowDance is a small android application I created that is closely related to the arcade arrow dancing game from back in the day ! Hit the arrows in the correct order and try beat the high score !",
      techStack: "Unity / C#",
      image: arrow_dance,
      date: '2018',
      style: null
    }
  ],
  [
    "attack_of_the_squarons",
    {
      id: "attack_of_the_squarons",
      title: "BlackThornProd Game Jam 2018",
      shortDescription: "\"Attack of the Squarons\" is a small game I created with my brother during a Game Jam organized by BlackThornProd in 2018. It's a small RPG spell-casting game where the player can create his own spells using code !",
      techStack: "Unity / C#",
      image: attack_of_the_squarons,
      date: '2018',
      style: null
    }
  ],
  [
    "please_the_gods",
    {
      id: "please_the_gods",
      title: "Ludum Dare 43 Game Jam 2018",
      shortDescription: "\"Please the Gods\" is a game I created in one weekend with my brother, during the Ludum Dare 43 Game Jam 2018. It's a strategy game where you need to take care of your village while pleasing the Gods to avoid their wrath !",
      techStack: "Unity / C#",
      image: please_the_gods,
      date: '2018',
      style: null
    }
  ],
  [
    "the_great_tower_ascent",
    {
      id: "the_great_tower_ascent",
      title: "The Great Tower Descent",
      shortDescription: "Descent down the great tower, collecting coins and diamonds and upgrading your warrior with speed and cool new looks !",
      techStack: "Unity / C#",
      image: the_great_tower_ascent,
      date: '2018',
      style: null
    }
  ],
  [
    "call_of_muty",
    {
      id: "call_of_muty",
      title: "Call of Muty",
      shortDescription: "\"Call of Muty\" is an online multiplayer shooting game. Avoid the traps, pick up guns and destroy the opposing players !",
      techStack: "Java",
      image: call_of_muty,
      date: '2018',
      style: null
    }
  ],
  [
    "predators_vs_prey",
    {
      id: "predators_vs_prey",
      title: "Predators and Prey",
      shortDescription: "\"Predators and Prey\" is a cellular automaton where the prey (green) try to survive from the predators (red).",
      techStack: "C++ / SFML",
      image: predators_vs_prey,
      date: '2018',
      style: null
    }
  ],
  [
    "probability_simulator",
    {
      id: "probability_simulator",
      title: "Probability simulator",
      shortDescription: "The simulation looks like two sides fighting each other, each trying to gain ground, but the black side has a slightly higher chance of winning, which inevitably brings them victory.",
      techStack: "C++ / SFML",
      image: probability_simulator,
      date: '2017',
      style: null
    }
  ],
  [
    "particle_system",
    {
      id: "particle_system",
      title: "Particle system Simulator",
      shortDescription: "Program that simulates a particle system in a void. Gravity can be changed during the simulation.",
      techStack: "C++ / SFML",
      image: particle_system,
      date: '2017',
      style: null
    }
  ],
  [
    "trinity_force",
    {
      id: "trinity_force",
      title: "Trinity Force",
      shortDescription: "Creates a triangle, then cuts that triangle into 4 smaller triangles, then cuts that triangle into 4 smaller triangles, then... triangle-ception?",
      techStack: "C++ / SFML",
      image: trinity_force,
      date: '2017',
      style: null
    }
  ],
  [
    "word_cloud",
    {
      id: "word_cloud",
      title: "Word Cloud",
      shortDescription: "Program that creates a word cloud from text, where the size of each word depends on how frequently the word appears in the text",
      techStack: "Java",
      image: word_cloud,
      date: '2017',
      style: null
    }
  ],
  [
    "conway_game_of_life",
    {
      id: "conway_game_of_life",
      title: "Game Of Life",
      shortDescription: "Simulates Conway's cellular automaton, called \"Game of Life\"",
      techStack: "C++ / SFML",
      image: conway_game_of_life,
      date: '2017',
      style: null
    }
  ],
  [
    "newtons_pull",
    {
      id: "newtons_pull",
      title: "Newton's pull",
      shortDescription: "This simulates the Newton’s law of universal gravitation. Small satellites or planets (blue circles) are pulled by the bigger planets (yellow circles) as well as other satellites.",
      techStack: "C++ / SFML",
      image: newtons_pull,
      date: '2017',
      style: null
    }
  ]
]);
