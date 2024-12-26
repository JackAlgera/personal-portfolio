import {StaticImageData} from "next/image";
import arrow_dance from "../../public/arrow_dance/arrow_dance.png";
import advent_of_code_2024 from "../../public/adventOfCode/advent_of_code_2024.png";
import advent_of_code_2023 from "../../public/adventOfCode/advent_of_code_2023.png";
import advent_of_code_2022 from "../../public/adventOfCode/advent_of_code_2022.png";
import attack_of_the_squarons from "../../public/attack_of_the_squarons/attack_of_the_squarons.png";
import call_of_muty from "../../public/call_of_muty/call_of_muty.png";
import circle_izer from "../../public/circle_izer/circle_izer.png";
import conway_game_of_life from "../../public/conway_game_of_life/conway_game_of_life.png";
import cook_em_up from "../../public/cook_em_up/cook_em_up.png";
import newtons_pull from "../../public/newtons_pull/newtons_pull.png";
import oystou from "../../public/oystou/oystou.png";
import particle_system from "../../public/particle_system/particle_system.png";
import path_finding_algorithms from "../../public/path_finding_algorithms/path_finding_algorithms.png";
import please_the_gods from "../../public/please_the_gods/please_the_gods.png";
import predators_vs_prey from "../../public/predators_vs_prey/predators_vs_prey.png";
import probability_simulator from "../../public/probability_simulator/probability_simulator.png";
import sorting_algorithms from "../../public/sorting_algorithms/sorting_algorithms.png";
import the_great_tower_ascent from "../../public/the_great_tower_ascent/the_great_tower_ascent.png";
import trinity_force from "../../public/trinity_force/trinity_force.png";
import word_cloud from "../../public/word_cloud/word_cloud.png";
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
import call_of_muty_1 from "../../public/call_of_muty/call_of_muty_1.png";
import call_of_muty_2 from "../../public/call_of_muty/call_of_muty_2.png";
import word_cloud_1 from "../../public/word_cloud/word_cloud_1.png";
import personal_portfolio from "../../public/personal_portfolio/personal_portfolio.jpg";
import personal_wedding_site from "../../public/personal_wedding_site/personal_wedding_site.jpg";
import fire_extinguisher_layout_creator from "../../public/fire_extinguisher_layout_creator/fire_extinguisher_layout_creator.jpg";
import newtification from "../../public/newtification/newtification.jpg";
import connected_coffee_machine from "../../public/connect_coffee_machine/connected_coffee_machine.jpg";
import connected_coffee_machine_1 from "../../public/connect_coffee_machine/connected_coffee_machine_1.jpg";
import connected_coffee_machine_2 from "../../public/connect_coffee_machine/connected_coffee_machine_2.jpg";
import slang_up from "../../public/slang_up/slang_up.png";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string;
  image: StaticImageData | null;
  style: ProjectStyleType | null;
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
  UP = "up-animation",
  DOWN = "down-animation",
  SELECT = "select-animation",
}

export enum SectionType {
  TLDR,
  VIDEO,
  TEXT_WITHOUT_IMAGE,
  IMAGE_GALLERY
}

export const PROJECTS: Map<string, Project> = new Map<string, Project>([
  [
    "advent_of_code_2024",
    {
      id: "advent_of_code_2024",
      title: "AdventOfCode 2024",
      shortDescription: "Another coding challenge ; AdventOfCode 2024",
      techStack: "Java",
      image: advent_of_code_2024,
      date: '2024',
      style: null,
      sections: [
        {
          text: `Waking up early each December to tackle the Advent of Code challenge has become a rewarding tradition, combining persistence with the thrill of problem-solving.`,
          image: advent_of_code_2024,
          sectionType: SectionType.TLDR
        } as Section,
        {
          text: `This December, I once again embarked on the Advent of Code challenge, where participants solve two coding puzzles each day from December 1st to the 25th. It's a test of persistence, problem-solving, and sometimes, sheer determination. While the festive spirit usually calls for cozy mornings, I found myself waking up early each day, coffee in hand, ready to tackle the puzzles before diving into my regular workday.

          There were moments when the task felt tedious—sacrificing those precious hours of sleep during the coldest, darkest month of the year to decipher yet another tricky algorithm or debug a frustrating edge case. But each solved puzzle brought its own rush of satisfaction, and seeing my progress accumulate day by day made the effort worthwhile.
          
          Now that the challenge is over, I can finally relax and reflect with a sense of pride. Completing Advent of Code for yet another year is not just about the achievement; it’s a celebration of growth, resilience, and the joy of coding. It’s been a tiring but rewarding tradition, and I’m already looking forward to the puzzles of 2025!
          
          All my solutions are available on GitHub:
          
          https://github.com/JackAlgera/CodingChallenges/tree/main/AdventOfCode
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
    }
  ],
  [
    "slang_up",
    {
      id: "slang_up",
      title: "Slang-up",
      shortDescription: "Created a small web application to display silly slang words",
      techStack: "Typescript/React/NextJs",
      image: slang_up,
      date: '2023',
      style: null,
      sections: [
        {
          text: `Created a small web application to display silly slang words.
          
          The entire project was built with TypeScript and React, using the Next.js framework, and seamlessly deployed on Vercel.
          
          The web application is available here:
          https://www.slang-up.com/
          `,
          image: slang_up,
          sectionType: SectionType.TLDR
        } as Section,
        {
          text: `
          I like taking the train to travel around France, which gives me a bunch of free time on my trips.
          
          I thought it'd be cool to see how fast I could make something new from scratch, so I built a little web app that shows funny slang words. It grabs these words from the Urban Dictionary using their API and sticks them in a database that only updates once a day (the first time you use it each day).
          
          I used a SQL database (Supabase) to store the words, and I built the web app with Next.js. I hosted it on Vercel and got a custom domain name from Google Domains.
          
          The whole thing took me the whole round trip—about 6 hours—plus a few tweaks here and there.
          
          The web application is available here:
          https://www.slang-up.com/
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
    }
  ],
  [
    "advent_of_code_2023",
    {
      id: "advent_of_code_2023",
      title: "AdventOfCode 2023",
      shortDescription: "Another coding challenge ; AdventOfCode 2023",
      techStack: "Java",
      image: advent_of_code_2023,
      date: '2023',
      style: null,
      sections: [
        {
          text: `Completing Advent of Code 2023 was a rewarding test of persistence and problem-solving, pushing me to grow with each daily challenge.`,
          image: advent_of_code_2023,
          sectionType: SectionType.TLDR
        } as Section,
        {
          text: `In December 2023, I dove into the Advent of Code challenge, solving two coding puzzles every day from December 1st to 25th. It’s always a mix of excitement and exhaustion—early mornings with coffee in hand, pushing through the cold, dark days of winter to crack another problem before my day really began.

          Though the early hours and late-night coding sessions were tough, each completed challenge fueled a sense of accomplishment, and seeing my progress unfold kept me going. It wasn’t always easy, but the satisfaction of overcoming tricky algorithms and edge cases made it all worth it.
          
          As the challenge came to a close, I felt a deep sense of pride. Finishing Advent of Code 2023 wasn’t just about completing the puzzles—it was about growth, perseverance, and the joy of solving problems. It’s been a rewarding experience, and I’m already anticipating next year’s challenges.
          
          All my solutions are available on GitHub:
          
          https://github.com/JackAlgera/CodingChallenges/tree/main/AdventOfCode
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
    }
  ],
  [
    "personal_portfolio",
    {
      id: "personal_portfolio",
      title: "Personal Portfolio",
      shortDescription: "Created a portfolio where I showcase my work",
      techStack: "Typescript/React/NextJs",
      image: personal_portfolio,
      date: '2022',
      style: null,
      sections: [
        {
          text: `Created a personal portfolio where I showcase my personal projects.
          
          The entire project was built with TypeScript and React, using the Next.js framework, and seamlessly deployed on Vercel.
          
          The web application is available here:
          https://www.jackalgera.me/
          `,
          image: personal_portfolio,
          sectionType: SectionType.TLDR
        } as Section,
        {
          text: `Previously, I hosted my portfolio on Adobe Portfolio, taking advantage of a subscription that included Photoshop.

          When I canceled the subscription, I still wanted a platform to showcase my work. Instead of opting for another online portfolio tool, I decided to take the developer’s approach and build one myself.
          
          I chose TypeScript and React to bring the design to life, leveraging Next.js to dive deeper into frontend frameworks. The entire project—from design to implementation—was built from scratch by me.
          
          Throughout the process, I honed my skills in HTML, CSS/SCSS, and learned some nifty techniques for creating smooth animations and a polished final product. This project was a great opportunity to grow as a developer while crafting something uniquely my own.
          
          The web application is available here:
          https://www.jackalgera.me/ 
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
    }
  ],
  [
    "advent_of_code_2022",
    {
      id: "advent_of_code_2022",
      title: "AdventOfCode 2022",
      shortDescription: "Another coding challenge ; AdventOfCode 2022",
      techStack: "Java",
      image: advent_of_code_2022,
      date: '2022',
      style: null,
      sections: [
        {
          text: `Waking up early each December to tackle the Advent of Code challenge has become a rewarding tradition, combining persistence with the thrill of problem-solving.`,
          image: advent_of_code_2022,
          sectionType: SectionType.TLDR
        } as Section,
        {
          text: `In December 2022, I took on the Advent of Code challenge, solving two coding puzzles each day from December 1st to 25th. It’s a blend of persistence, problem-solving, and determination, where the usual holiday relaxation is replaced by early mornings with coffee, tackling puzzles before starting my regular workday.

          Though there were moments when the challenge felt draining—losing precious sleep during the cold, dark mornings to untangle tricky algorithms and edge cases—the sense of accomplishment after each solved puzzle made it all worthwhile. Watching my progress build day by day kept me motivated to push through.
          
          Finishing Advent of Code 2022 brought a great sense of pride and reflection. It’s more than just solving puzzles—it’s about growth and perseverance. This rewarding experience is one I’ll cherish, and I’m already looking forward to next year’s challenge.
          
          All my solutions are available on GitHub:
          
          https://github.com/JackAlgera/CodingChallenges/tree/main/AdventOfCode
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
    }
  ],
  [
    "personal_wedding_site",
    {
      id: "personal_wedding_site",
      title: "Personal Wedding Site",
      shortDescription: "Created my personal wedding website !",
      techStack: "Typescript/React/NextJs",
      image: personal_wedding_site,
      date: '2022',
      style: null,
      sections: [
        {
          text: `Created the website that was used for my wedding !
          
          The entire project was built with TypeScript and React, using the Next.js framework, and seamlessly deployed on Vercel.
          It has an API layer that's plugged into a, sorry for this...Google Sheet dAtABasE...
          `,
          image: personal_wedding_site,
          sectionType: SectionType.TLDR
        } as Section,
        {
          text: `When brainstorming with my fiancée about how we wanted our website to look, I had the classic developer thought: 'I can build this myself.'
          
          To bring our vision to life, I chose TypeScript and React for the UI, as I wanted to deepen my understanding of frontend frameworks. Staying with popular choices, I also opted for Next.js, which offered built-in backend capabilities—a perfect fit for this project.
          
          For the backend, I plugged in an API layer over a...yes, a Google Sheets database (it was practical, I promise!). The Google Sheet was used to track guest RSVPs, making it the most convenient option for everyone involved.
          
          My fiancée and I collaborated on the design and mock-ups, and I implemented everything from scratch. This project gave me hands-on experience with frontend patterns and frameworks, and it was a rewarding way to blend creativity with functionality..
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
    }
  ],
  [
    "connected_coffee_machine",
    {
      id: "connected_coffee_machine",
      title: "Connected Coffee machine",
      shortDescription: "Android project, where I connect my coffee machine to the internet !",
      techStack: "Arduino",
      image: connected_coffee_machine,
      date: '2022',
      style: null,
      sections: [
        {
          text: `Like any normal person, I value efficiency (or maybe I’m just lazy). So, I happily spent 10 hours creating a project to save 20 seconds each morning making coffee.

          I deployed a web server on an Arduino board, which now controls my coffee machine with ease.
          `,
          image: connected_coffee_machine,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "LV6myKYN9r4",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `Like many, I enjoy starting my day with a good cup of coffee. Recently, we got a new coffee machine that makes some seriously gucci coffee!

          However, the process to make coffee involved turning on the machine, waiting 20 seconds, and then pressing another button. To me, this felt like '20 seconds wasted just waiting for my coffee machine to warm up.' Naturally, I did what any developer would do (right?)—I spent 10 hours creating a project that lets me start the coffee machine with a single press of a button... from my bed.
          
          The setup uses an Arduino connected to the coffee machine through relays, simulating the physical button presses without the need for clunky robot fingers. On top of that, I deployed a web server on the Arduino that exposes endpoints, allowing me to schedule coffee-making times down to the minute.
          
          Now, mornings are smoother, and my coffee is ready just when I need it!
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          imageGalleryList: [
            connected_coffee_machine_1, connected_coffee_machine_2
          ],
          sectionType: SectionType.IMAGE_GALLERY
        } as Section,
      ]
    }
  ],
  [
    "newtification",
    {
      id: "newtification",
      title: "Newtification - Android application",
      shortDescription: "Android app that allows my cat, called Newt, to send us notifications when he wants to go outside.",
      techStack: "Java/Firebase/Arduino",
      image: newtification,
      date: '2021',
      style: null,
      sections: [
        {
          text: `I have an outside cat, called Newt, that would often bother us and meow non stop in front of our door to go outside.
          
          And of course, as any decent engineer, I made an application so we know when the cat wants to go outside. I used Java and the Android Studio framework, plugged on top of Firebase to handle the notifications.
          `,
          image: newtification,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "3_ckHaPXMQ4",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `So we have a cat, called Newt, that is an outside cat. Which means, often, he would stand in front of the door, and meow until we open it for him.
          
          We used to hang this funny angel shaped object on our door, and surprisingly enough, Newt would Meow to get our attention, but also hit the angel slightly.
          
          So of course, as any decent engineer, I decided to spend 15h creating an application with a Java web server deployed on an Arduino board that sends us notifactions whenever he hits the angel.
          
          The Arduino is running a Jave/Spring based web server, that has a button/trigger that when pressed, sends a HTTP request to Firebase. I then created an application, hosted on Google Play Store, that has two 2 buttons allowing us to plug into Firebase events, which get triggered from the Arduino. And of course, each trigger creates a notification for anyone subscribed.
          
          Was a super fun and interesting project, and we got a lot of good laughs out of it, as in the end, it actually worked quite well !
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
    }
  ],
  [
    "fire_extinguisher_layout_creator",
    {
      id: "fire_extinguisher_layout_creator",
      title: "Fire Extinguisher - Layout Creator",
      shortDescription: "Confinement project ; a Java application for a friend's dad to help him with his daily work-related tasks.",
      techStack: "Java/JavaFx",
      image: fire_extinguisher_layout_creator,
      date: '2020',
      style: null,
      sections: [
        {
          text: `To help out a friend's dad with his daily manual tasks, I created an application to improve his workflow quite a lot !
          
          For this project I tried to create a fully stand alone Java application ; no magic Rest APIs, queues or cloud computing, just plain old Java.
          Everything was done using Java for the business logic and JavaFx for the UI components.
          `,
          image: fire_extinguisher_layout_creator,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "QfghSyqb70Q",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `COVID-19 forced everyone to stay in theirs homes for a couple of lengthy confinements. In France, the first one lasted for a couple of weeks, and of course I had to find something to keep me busy !   
          
          After telling a friend that I needed help brainstorming some ideas of projects I could do during the confinement, he jokingly suggested I create something to help out his dad. When you can have fun creating a new project, and at the same time help someone out, I think there's no better way to spend your confinement ! 
          
          Previously, his dad would work on the layout of a building and determine where to place fire extinguisher to follow various norms and security protocols. This was done manually and took ages.
          
          The idea is to generate a PDF with various layouts, fire extinguishers and zones mapped out, as well generate an Excel doc that's used in his final report.
          
          The project was created with Java for the business logic, and JavaFx for the frontend UI components. I wanted to try create something without using any fancy REST endpoints, Queues or anything cloud-computing related !
          
          This project boosted my friend's dad's efficiency tenfold, and after using it for around 2 years, surprisingly enough he has not found any bugs yet (which is super surprising for me, but good to see it worked out well !) 
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
      ]
    }
  ],
  [
    "path_finding_algorithms",
    {
      id: "path_finding_algorithms",
      title: "Path Finding Algorithms",
      shortDescription: "Implemented the BFS and DFS algorithms, with a nice visual representation of each",
      techStack: "C++/SFML",
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
      shortDescription: "Implemented 5 different algorithms, with a nice visual representation of each",
      techStack: "C++/SFML",
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
      shortDescription: "\"Oystou\" is a game I created in one weekend with a team of 3 people during the Global Game Jam 2019",
      techStack: "Unity/C#",
      image: oystou,
      date: '2019',
      style: null,
      sections: [
        {
          text: `"Oystou" is a small game I created in one weekend with a team of 3 people during the Global Game Jam 2019, that was held at Epitech at Nantes, France.

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
      shortDescription: "\"Cook Em up\" is an android application where you run a fancy restaurant in Paris",
      techStack: "Unity/C#",
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
          
          This application is meant to be my first real android project that I would someday like to fully develop. It’s still in alpha and needs a lot of work before it's finished, but the video gives us an idea of what the game could be later. I created the code and the visuals myself, but there is still a lot left to do !
          
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
      shortDescription: "\"Circle-izer\" takes an image and transforms it into circles that \"pop\" as the mouse hovers over, revealing the image",
      techStack: "Unity/C#",
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
      shortDescription: "\"Arrow Dance\" is an android application that is closely related to the arcade arrow dancing game from back in the day !",
      techStack: "Unity/C#",
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
      shortDescription: "\"Attack of the Squarons\" is a game I created with my brother during the BlackThornProd Game Jam in 2018",
      techStack: "Unity/C#",
      image: attack_of_the_squarons,
      date: '2018',
      style: null,
      sections: [
        {
          text: `"Attack of the Squarons" is a small game I created with my brother during the BlackThornProd Game Jam in 2018 (13/10/2018 to 20/10/2018). It's a small RPG spell-casting game where the player can create his own spells using code !

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
      shortDescription: "\"Please the Gods\" is a game I created in one weekend with my brother, during the Ludum Dare 43 Game Jam in 2018",
      techStack: "Unity/C#",
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
      shortDescription: "In \"The Great Tower Descent\" you must, well... descent the great tower !",
      techStack: "Unity/C#",
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
      shortDescription: "\"Call of Muty\" is an online multiplayer shooting game",
      techStack: "Java",
      image: call_of_muty,
      date: '2018',
      style: null,
      sections: [
        {
          text: `"Call of muty" is a school project I created with a team of 5 members using the Scrum method, as me taking on the role of Scrum Master.
          `,
          image: call_of_muty,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "9k0J1RxUb2k",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `"Call of muty" is a school project I created with a team of 5 members using the Scrum method, as me taking on the role of Scrum Master. we created the game over 3 months, creating everything from the code, the game sounds and the visuals. The only thing we didn’t have time to create was the tile map.
          
          We created an online multiplayer top down shooting game. As a player, you can choose between a couple of game modes (like weapons spawning randomly, 1 hp, battle royal etc.), as well as choosing a skin for your character. The game is played when you are the last player left standing.
          
          The game is played with up to 6 players online, via a SQL server. It is of course not the best method of creating an online multiplayer game, but we were just learning how to set up and handle a SQL server. 
          
          As Scrum master, I was tasked with creating the different user stories and assigning them to the other team members. I participated in the coding, creating the game visuals and animations as well as helping the other team members if they ever had trouble with their code.
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          imageGalleryList: [
            call_of_muty_1, call_of_muty_2
          ],
          sectionType: SectionType.IMAGE_GALLERY,
        } as Section
      ]
    }
  ],
  [
    "predators_vs_prey",
    {
      id: "predators_vs_prey",
      title: "Predators and Prey",
      shortDescription: "\"Predators and Prey\" is a cellular automaton where the prey (green) try to survive from the predators (red)",
      techStack: "C++/SFML",
      image: predators_vs_prey,
      date: '2018',
      style: null,
      sections: [
        {
          text: `"Predators and Prey" is a cellular automaton where the prey (green) try to survive from the predators (red).
          `,
          image: predators_vs_prey,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "R1WexKiulxI",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `I created another cellular automaton called “Predators and Prey”. The prey (green cells) try to survive and reproduce while being hunted by the predators (red cells). The rules are as follow :
          
          1) Each living cell has a certain time alive. As they become older, their colour either greys out (for predators) or becomes brighter (for prey).
          
          2) If a prey cell becomes fully aged (bright green) they reproduce on an empty cell.
          
          3) If a predator cell becomes fully aged (dark red) they die.
          
          4) Predators reproduce by eating prey and producing off spring based on the life left of the prey they ate.
          
          I created this simulation using the C++ library SFML, which just simplifies the OPENGL commands for creating a visual canvas.
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
      shortDescription: "This cellular automaton simulates two armies fighting each other, with black having a slight advantage",
      techStack: "C++/SFML",
      image: probability_simulator,
      date: '2017',
      style: null,
      sections: [
        {
          text: `This cellular automaton simulates two armies fighting each other, each trying to gain ground, but the black side has a slightly higher chance of winning, which inevitably brings them victory.
          `,
          image: probability_simulator,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "HfpxXPA4KEI",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `This cellular automaton simulates two sides fighting each other, each trying to gain ground, but the black side has a slightly higher chance of winning, which inevitably brings them victory.
          
          The simulation works by checking the amount of blue and black tiles around a given tile. The more tiles you own, the higher your chances are of “winning the battle” and gaining more ground. 
          
          I created this simulation using the C++ library SFML, which just simplifies the OPENGL commands for creating a visual canvas.
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
      shortDescription: "Program that simulates a particle system in a void. Gravity can be changed during the simulation",
      techStack: "C++/SFML",
      image: particle_system,
      date: '2017',
      style: null,
      sections: [
        {
          text: `Program that simulates a particle system in a void. Gravity can be changed during the simulation.
          `,
          image: particle_system,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "WVwZZb3UXdM",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `I created this simulation using the C++ library SFML, which just simplifies the OPENGL commands for creating a visual canvas. I had a lot of fun creating the particles and applying different forces on them. Each particle has its own mass, position, speed and acceleration.
          
          By clicking with the mouse, you can create an explosion of particles that shoot out in different angles. Learned a lot during this project, especially list-wise and handling a lot of data at the same time.
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
      techStack: "C++/SFML",
      image: trinity_force,
      date: '2017',
      style: null,
      sections: [
        {
          text: `Creates a triangle, then cuts that triangle into 4 smaller triangles, then cuts that triangle into 4 smaller triangles, then... triangle-ception?
          `,
          image: trinity_force,
          sectionType: SectionType.TLDR
        } as Section,
        {
          text: `Although it is not used very often in the industry, I wanted to work on my recursive programming skills nevertheless ! Had loads of fun working on this project.
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
      shortDescription: "Program that creates a word cloud from text, where the size of each word depends on how often it appears in the text",
      techStack: "Java",
      image: word_cloud,
      date: '2017',
      style: null,
      sections: [
        {
          text: `Program that creates a word cloud from text, where the size of each word depends on how frequently the word appears in the text
          `,
          image: word_cloud,
          sectionType: SectionType.TLDR
        } as Section,
        {
          text: `This was a school project that I created with a friend. We were tasked with creating a word cloud, given a certain text. The more frequently a word appears in the text, the bigger it appears in the word cloud.
          
          We added a few extra functions to our program that allows us to choose random colors or one main color.
          
          We had a lot of fun creating this project. We used a text from WW2 in the example photos
          `,
          sectionType: SectionType.TEXT_WITHOUT_IMAGE
        } as Section,
        {
          imageGalleryList: [
            word_cloud, word_cloud_1
          ],
          sectionType: SectionType.IMAGE_GALLERY,
        } as Section
      ]
    }
  ],
  [
    "conway_game_of_life",
    {
      id: "conway_game_of_life",
      title: "Game Of Life",
      shortDescription: "Simulates Conway's cellular automaton, called \"Game of Life\"",
      techStack: "C++/SFML",
      image: conway_game_of_life,
      date: '2017',
      style: null,
      sections: [
        {
          text: `Simulates Conway's cellular automaton, called "Game of Life"
          `,
          image: conway_game_of_life,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "tXSnXxI3Is8",
          sectionType: SectionType.VIDEO
        } as Section,
        {
          text: `I have always been fascinated with cellular automaton simulations, so naturally I’d end up creating Conway’s game of life. It works by checking the number of cells around each cell, depending on how many living cells there are (black cells), the cell can either die (go white), reproduce (go black) or stay unchanged. The rules are as follow :
          
          1) Any live cell with fewer than two live neighbors dies, as if by underpopulation.
          
          2) Any live cell with two or three live neighbors lives on to the next generation.
          
          3) Any live cell with more than three live neighbors dies, as if by overpopulation.
          
          4) Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
          
          I created this simulation using the C++ library SFML, which just simplifies the OPENGL commands for creating a visual canvas.
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
      shortDescription: "This simulates the Newton’s law of universal gravitation",
      techStack: "C++/SFML",
      image: newtons_pull,
      date: '2017',
      style: null,
      sections: [
        {
          text: `This simulates the Newton’s law of universal gravitation. Small satellites or planets (blue circles) are pulled by the bigger planets (yellow circles) as well as other satellites.
          `,
          image: newtons_pull,
          sectionType: SectionType.TLDR
        } as Section,
        {
          youtubeVideoId: "hgpBKOLH4_M",
          sectionType: SectionType.VIDEO
        } as Section
      ]
    }
  ]
]);
