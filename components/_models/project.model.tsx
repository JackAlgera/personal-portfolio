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
import cook_em_up_1 from "../../public/cook_em_up/cook_em_up_1.png";
import cook_em_up_2 from "../../public/cook_em_up/cook_em_up_2.png";
import cook_em_up_3 from "../../public/cook_em_up/cook_em_up_3.png";
import cook_em_up_4 from "../../public/cook_em_up/cook_em_up_4.png";
import cook_em_up_5 from "../../public/cook_em_up/cook_em_up_5.png";
import cook_em_up_6 from "../../public/cook_em_up/cook_em_up_6.png";
import cook_em_up_7 from "../../public/cook_em_up/cook_em_up_7.png";
import cook_em_up_8 from "../../public/cook_em_up/cook_em_up_8.png";
import arrow_dance_1 from "../../public/arrow_dance/arrow_dance_1.jpeg";
import arrow_dance_2 from "../../public/arrow_dance/arrow_dance_2.png";
import arrow_dance_3 from "../../public/arrow_dance/arrow_dance_3.png";
import arrow_dance_4 from "../../public/arrow_dance/arrow_dance_4.jpeg";
import arrow_dance_5 from "../../public/arrow_dance/arrow_dance_5.jpeg";
import attack_of_the_squarons_1 from "../../public/attack_of_the_squarons/attack_of_the_squarons_1.png";
import attack_of_the_squarons_2 from "../../public/attack_of_the_squarons/attack_of_the_squarons_2.png";
import attack_of_the_squarons_3 from "../../public/attack_of_the_squarons/attack_of_the_squarons_3.png";
import attack_of_the_squarons_4 from "../../public/attack_of_the_squarons/attack_of_the_squarons_4.png";
import attack_of_the_squarons_5 from "../../public/attack_of_the_squarons/attack_of_the_squarons_5.png";
import attack_of_the_squarons_6 from "../../public/attack_of_the_squarons/attack_of_the_squarons_6.png";
import attack_of_the_squarons_7 from "../../public/attack_of_the_squarons/attack_of_the_squarons_7.png";
import attack_of_the_squarons_8 from "../../public/attack_of_the_squarons/attack_of_the_squarons_8.png";
import please_the_gods_1 from "../../public/please_the_gods/please_the_gods_1.png";
import please_the_gods_2 from "../../public/please_the_gods/please_the_gods_2.png";
import please_the_gods_3 from "../../public/please_the_gods/please_the_gods_3.png";
import the_great_tower_ascent_1 from "../../public/the_great_tower_ascent/the_great_tower_ascent_1.jpeg";
import the_great_tower_ascent_2 from "../../public/the_great_tower_ascent/the_great_tower_ascent_2.jpeg";
import the_great_tower_ascent_3 from "../../public/the_great_tower_ascent/the_great_tower_ascent_3.jpeg";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string;
  image: StaticImageData|null;
  style: ProjectStyleType;
  date: string;
  sections: Section[];
}

export interface Section {
  text: string|null;
  youtubeVideoId: string|null;
  image: StaticImageData|null;
  rowReverse: boolean|null;
  imageGalleryList: StaticImageData[]|null;
  sectionType: SectionType;
}

export enum ProjectStyleType {
  UP,
  DOWN,
  SELECT,
}

export enum SectionType {
  TLDR,
  TEXT_WITH_IMAGE,
  VIDEO,
  TEXT_WITHOUT_IMAGE,
  IMAGE_GALLERY
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
      style: null,
      sections: [
        {
          text: `Implemented 2 different pathfinding algorithms in C++ :
          
          * Breadth First Search (BFS)
          * Depth First Search (DFS)
          
          Used SFML for the visuals
          `,
          image: path_finding_algorithms,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "2-7dpWj4Lg8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `For this project, I wanted to experiment with pathfinding algorithms and try familiarize myself more with them. Two of the most common algorithms are BFS (Breadth First Search) and DFS (Depth First Search). The most commonly used one in video games is A* (A-Star), which is the most efficient among the 3 I mentioned. But to start things of, I wanted to try implement the first two first, then later add the A* one.

          The simulation shows how each algorithm is working its magic and trying to find a path to the exit (red square in the corner) starting from the initial green square. I used an online maze generator that generated a nice .txt file filled with 0’s and 1’s, where 1 is a wall tile and 0 is a walkable path tile.

          I really like the visual effect we get from this project, gives us a nice insight of how the computer is “thinking” and trying to find the exit to a, rather, complicated maze !
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: `Implemented 5 different sorting algorithms in C++ :
          
          * Quick Sort
          * Merge Sort
          * Bucket Sort
          * Radix Sort
          * Bubble Sort
          
          Used SFML for the visuals
          `,
          image: sorting_algorithms,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "Jl_rBV0iIxI",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Decided to try my hand at creating some common sorting algorithms ; Quick sort, Merge sort, Bucket sort, Radix sort and Bubble sort.
          
          I really like the visual representation, it's based on a video I saw a couple of years back and really shows how each algorithm is tackling the sorting problem.
          
          For some of these algorithms (Bubble and Merge) I used recursive programming. I have always found recursive programming incredibly elegant ; being able to create complex algorithms using only a couple lines of code is amazing.
          
          Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: `"Oystou" is a small game I created in one weekend with a team of 2 people during the Global Game Jam 2019, that was held at Epitech at Nantes, France.

          Link to download and play the game :
          https://globalgamejam.org/2019/games/oystou
          `,
          image: oystou,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "9_ZoQjgH0kc",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `"Oystou" is a game I created in one weekend with a team of 2 people during the Global Game Jam 2019. The theme this year was: "What does home mean to you?"
          
          When we were thinking of a name for the game, we wanted to come up with something original. In my mother tongue Afrikaans, "Huis toe" means coming/going home, so we decided to create an English / French spelling of the word, and thus the game was named.
          
          The story behind our game is that you, the player, has lost everything; your memories, your loved ones and your gems. Home, for us, is a safe haven, where we can find our loved ones, and keep our valuable earthly possessions safe!
          
          Explore the world and find the missing pieces. But don't stay away for too long, you might become a little homesick.
          
          As per usual, we split the coding between my brother and myself, while I did the game art and my brother did the game sounds and music. we had a third member that had the role of game dev, which really made the whole game creation process smoother !
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: `"Cook Em up" is an android application where you run a fancy restaurant in Paris, and need to prepare the meals following the recipes, but watch out, time runs out quickly !
          `,
          image: cook_em_up,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "4cXFNXmnGoc",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `The story goes that you run a very fancy restaurant in Paris, and people from all over the world come to eat there and you need to meet their strange food needs by creating strange new recipes.
          
          As the different ingredients appear, you need to quickly choose the correct ones in the correct order, but watch out, mistakes cost you valuable time !
          
          This application is meant to be my first real android project that I would someday like to fully develop. It’s still in alpha, but the video gives us an idea of what the game could be later. I created the code and the visuals myself, but there is still a lot left to do !
          
          Had a lot of fun creating the different ingredients in PhotoShop, learnt a couple of new tricks.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          imageGalleryList: [
            cook_em_up_1, cook_em_up_2, cook_em_up_3, cook_em_up_4, cook_em_up_5, cook_em_up_6, cook_em_up_7, cook_em_up_8
          ],
          sectionType: SectionType.IMAGE_GALLERY
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: `A small program I created that takes an image and transforms it into circles that "Pop" as the mouse hovers over revealing the image.
          `,
          image: circle_izer,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "25QzFXpsc7s",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `The Idea behind the program is that it takes an image and creates a single circle that has the average colour of the entire image. As you hover the mouse over the circle, it "pops" and divides itself into 4 smaller circles. This goes on and on, eventually revealing the image hidden behind !

          This was a fun little project I created after seeing some artwork where people would create giant images using only common objects with different colour shades (like creating the Mona Lisa using only different shades of coffee !).
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          youtubeVideoId: "5c5S-FKz6hI",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `I made a timelapse of me coding the project (next video). It gives a really interesting perspective of how I encountered problems and found ways to fix them. It's impossible to code anything perfect the first time around, but as long as you keep learning from your mistakes, it's ok to make errors !
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          youtubeVideoId: "B5rQJRrXU38",
          sectionType: SectionType.VIDEO
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: `ArrowDance is a small android application I created that is closely related to the arcade arrow dancing game from back in the day ! Hit the arrows in the correct order and try beat the high score !

          Link to download and play the game :
          https://play.google.com/store/apps/details?id=com.JacksGames.ArrowDance&hl=en
          `,
          image: arrow_dance,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "Zipcdk269YY",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Arrow Dance is a small android application I created at the end of 2018 one weekend. I often take the TGV train in France to go visit my parents or my girlfriend, and I tend to read, study, create games and think a lot during these trips. 
          
          I got the idea to create this game after seeing a silly video on Facebook called “Things from 2000” and the arcade dancing game where you need to hit the correct arrows as they appear on the screen came on. That’s where I got the idea to create a mobile version.

          Had a great timing creating this application, I wanted to try and create my own music, but I clearly don’t have enough experience to remotely make something that people would want to listen too ! Nevertheless I learned a lot C#-wise and Photoshop-wise.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          imageGalleryList: [
            arrow_dance_1, arrow_dance_2, arrow_dance_3, arrow_dance_4, arrow_dance_5
          ],
          sectionType: SectionType.IMAGE_GALLERY
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: `"Attack of the Squarons" is a small game I created with my brother during the last Game Jam organized by BlackThornProd (13/10/18 to 20/10/18). It's a small RPG spell-casting game where the player can create his own spells using code !

          Link to download and play the game : https://amusedsandpaper.itch.io/attack-of-the-squaronsv2
          `,
          image: attack_of_the_squarons,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "xrpvk2m3lwY",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Me and my brother participated in the Black Thorn Prod Game Jam (13/10/18 to 03/11/18) and created the game "Attack of the Squarons" in one week. Sadly the player animations stopped working right at the end of the jam !!
          
          The game jam’s theme was “Game Development”, so we decided to create a game where the player would be able to “code” his own spells, using different functions that we created. He could then preview what he had made, using various shapes and spell effects, to create some nice-looking magic !
          
          The background story of the game was that the current king, a square dude, orders you, a young square mage knight, to go kill the alleged evil Trianglons. Through-out the game, the player realises that the current king is the evil one that has been lying to his people from the very start and the Trianglons are actually a civilized and kind people.
          
          As per usual, we split the coding between us, while I did the game art and my brother did the game sounds and music.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          imageGalleryList: [
            attack_of_the_squarons_1, attack_of_the_squarons_2, attack_of_the_squarons_3, attack_of_the_squarons_4, attack_of_the_squarons_5, attack_of_the_squarons_6, attack_of_the_squarons_7, attack_of_the_squarons_8
          ],
          sectionType: SectionType.IMAGE_GALLERY
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: `"Please the Gods" is a game I created in one weekend with my brother, Pieter Algera, during the Ludum Dare 43 Game Jam 2018. It's a strategy game where you need to take care of your village while pleasing the Gods to avoid their wrath !
          
          Check out the game here : https://amusedsandpaper.itch.io/please-the-gods
          `,
          image: please_the_gods,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "4SZWp3VQiQc",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `"Please the Gods" is a game I created in one weekend with my brother, Pieter Algera, during the Ludum Dare 43 Game Jam 2018.
          
          This year’s theme was "Sacrifices must be made". we immediately started the Jam out with a 2-hour brain storming session, using a mind map to lay out all our ideas. We usually start our game jams this way as it pumps us up for an intense weekend of coding and drawing !
          
          We decided to create a strategy / Survival game where you need to gain resources to increase your temple but still need to keep your favour high with the Gods, so that they don't bring their wrath unto you ! The more temples you have, the happier the Gods are, and if they ever tend to become too angry… you can always opt to sacrifice a small portion of your population to keep them happy !
          
          We had a lot of fun creating this game, I implemented an I.A system for the villagers to idly move around and perform activities. We also had the Gods bring forth storms and Death plagues, if ever they weren’t satisfied with the tribe !
          
          As per usual, we split the coding between us, while I did the game art and my brother did the game sounds and music.
          
          I Decided to timelapse the entire game jam. Sadly the software i was using stopped working a couple of times, so there are some gaps in the timelapse.
          
          Enjoy !
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          youtubeVideoId: "LHt26OIH4NM",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          imageGalleryList: [
            please_the_gods_1, please_the_gods_2, please_the_gods_3
          ],
          sectionType: SectionType.IMAGE_GALLERY
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: `Descent down the great tower, collecting coins and diamonds and upgrading your warrior with speed and cool new looks !

          Check out the application here : https://play.google.com/store/apps/details?id=com.JacksGames.TowerDescent
          `,
          image: the_great_tower_ascent,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "VY-g1ihdHe0",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `As the player, the objective of the game is to descent the tower, avoiding the traps hidden within. It’s a side scroller where the screen slowly moves down and the player needs to stay on screen by moving left and right, but falling down too quickly (going of the screen) would cause you to fall to your death !
          
          You can collect coins and diamonds, that can later be used to unlock new scarfs for your ninja warrior. Bonuses can also be unlocked, like increasing the frequency of objects appearing and starting lower down the tower. You can choose between two different ways of playing the game ; by moving left and right by clicking on buttons or having the player follow your finger on the screen.
          
          I created this game as a first try of creating a proper android application. I implemented the ad system provided by unity. It was really fun, and I learned a lot program-wise. I also had a blast trying to create some pixel art for the game.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          imageGalleryList: [
            the_great_tower_ascent_1, the_great_tower_ascent_2, the_great_tower_ascent_3
          ],
          sectionType: SectionType.IMAGE_GALLERY
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: "\"Call of Muty\" is an online multiplayer shooting game. Avoid the traps, pick up guns and destroy the opposing players !",
          image: call_of_muty,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "2-7dpWj4Lg8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Decided to try my hand at creating some common sorting algorithms ; Quick sort, Merge sort, Bucket sort, Radix sort and Bubble sort.
          
          I really like the visual representation, it's based on a video I saw a couple of years back and really shows how each algorithm is tackling the sorting problem.
          
          For some of these algorithms (Bubble and Merge) I used recursive programming. I have always found recursive programming incredibly elegant ; being able to create complex algorithms using only a couple lines of code is amazing.
          
          Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: "\"Predators and Prey\" is a cellular automaton where the prey (green) try to survive from the predators (red).",
          image: predators_vs_prey,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "2-7dpWj4Lg8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Decided to try my hand at creating some common sorting algorithms ; Quick sort, Merge sort, Bucket sort, Radix sort and Bubble sort.
          
          I really like the visual representation, it's based on a video I saw a couple of years back and really shows how each algorithm is tackling the sorting problem.
          
          For some of these algorithms (Bubble and Merge) I used recursive programming. I have always found recursive programming incredibly elegant ; being able to create complex algorithms using only a couple lines of code is amazing.
          
          Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: "The simulation looks like two sides fighting each other, each trying to gain ground, but the black side has a slightly higher chance of winning, which inevitably brings them victory.",
          image: probability_simulator,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "2-7dpWj4Lg8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Decided to try my hand at creating some common sorting algorithms ; Quick sort, Merge sort, Bucket sort, Radix sort and Bubble sort.
          
          I really like the visual representation, it's based on a video I saw a couple of years back and really shows how each algorithm is tackling the sorting problem.
          
          For some of these algorithms (Bubble and Merge) I used recursive programming. I have always found recursive programming incredibly elegant ; being able to create complex algorithms using only a couple lines of code is amazing.
          
          Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: "Program that simulates a particle system in a void. Gravity can be changed during the simulation.",
          image: particle_system,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "2-7dpWj4Lg8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Decided to try my hand at creating some common sorting algorithms ; Quick sort, Merge sort, Bucket sort, Radix sort and Bubble sort.
          
          I really like the visual representation, it's based on a video I saw a couple of years back and really shows how each algorithm is tackling the sorting problem.
          
          For some of these algorithms (Bubble and Merge) I used recursive programming. I have always found recursive programming incredibly elegant ; being able to create complex algorithms using only a couple lines of code is amazing.
          
          Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: "Creates a triangle, then cuts that triangle into 4 smaller triangles, then cuts that triangle into 4 smaller triangles, then... triangle-ception?",
          image: trinity_force,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "2-7dpWj4Lg8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Decided to try my hand at creating some common sorting algorithms ; Quick sort, Merge sort, Bucket sort, Radix sort and Bubble sort.
          
          I really like the visual representation, it's based on a video I saw a couple of years back and really shows how each algorithm is tackling the sorting problem.
          
          For some of these algorithms (Bubble and Merge) I used recursive programming. I have always found recursive programming incredibly elegant ; being able to create complex algorithms using only a couple lines of code is amazing.
          
          Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: "Program that creates a word cloud from text, where the size of each word depends on how frequently the word appears in the text",
          image: word_cloud,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "2-7dpWj4Lg8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Decided to try my hand at creating some common sorting algorithms ; Quick sort, Merge sort, Bucket sort, Radix sort and Bubble sort.
          
          I really like the visual representation, it's based on a video I saw a couple of years back and really shows how each algorithm is tackling the sorting problem.
          
          For some of these algorithms (Bubble and Merge) I used recursive programming. I have always found recursive programming incredibly elegant ; being able to create complex algorithms using only a couple lines of code is amazing.
          
          Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: "Simulates Conway's cellular automaton, called \"Game of Life\"",
          image: conway_game_of_life,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "2-7dpWj4Lg8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Decided to try my hand at creating some common sorting algorithms ; Quick sort, Merge sort, Bucket sort, Radix sort and Bubble sort.
          
          I really like the visual representation, it's based on a video I saw a couple of years back and really shows how each algorithm is tackling the sorting problem.
          
          For some of these algorithms (Bubble and Merge) I used recursive programming. I have always found recursive programming incredibly elegant ; being able to create complex algorithms using only a couple lines of code is amazing.
          
          Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
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
      style: null,
      sections: [
        {
          text: "This simulates the Newton’s law of universal gravitation. Small satellites or planets (blue circles) are pulled by the bigger planets (yellow circles) as well as other satellites.",
          image: newtons_pull,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "2-7dpWj4Lg8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Decided to try my hand at creating some common sorting algorithms ; Quick sort, Merge sort, Bucket sort, Radix sort and Bubble sort.
          
          I really like the visual representation, it's based on a video I saw a couple of years back and really shows how each algorithm is tackling the sorting problem.
          
          For some of these algorithms (Bubble and Merge) I used recursive programming. I have always found recursive programming incredibly elegant ; being able to create complex algorithms using only a couple lines of code is amazing.
          
          Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
    }
  ]
]);
