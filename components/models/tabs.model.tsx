export interface ExperienceTabEntity {
  company: string;
  location: string;
  position: string;
  from: string;
  to: string;
  description: string;
}

export const EXPERIENCE_TABS: Map<string, ExperienceTabEntity> = new Map<string, ExperienceTabEntity>([
  [
    'blablacar',
    {
      company: "BlaBlaCar",
      location: "Paris, France",
      position: "Backend Software Engineer",
      description: `Splitting a monolith (PHP/Symfony) into microservices (Java/Spring for the backend, React/TypeScript for the frontend).\n
        One of BlaBlaCar’s philosophies is "You build it, you own it,  you run it!", I've worked on automating and improving my team’s global observability and alerting via Terraform, and implementing generic CI/CI pipelines and Helm charts for the team.\n
        I'm also the team's Scrum master, starting only a couple of weeks after I joined the company in August.`,
      from: "Aug. 2021",
      to: "Now"
    }
  ],
  [
    'zalando',
    {
      company: "Zalando",
      location: "Dortmund, Germany",
      position: "Junior Backend Software Engineer",
      description: `Helped implementing new backend microservices (Spring MVC and Kotlin/Java) and handling the team's infrastructure and DevOps (Docker, Kubernetes, AWS, Nakadi,Kafka, PostgreSQL, ElasticSearch).\n
        Also participating in Scrum practices to deliver continuous improvements for our stakeholders.\n
        Unfortunately, due to personal reasons I had to move back to France, interrupting my time at Zalando early`,
      from: "Jan. 2021",
      to: "Aug. 2021"
    }
  ],
  [
    'airbus',
    {
      company: "Airbus Helicopters",
      location: "Marignane, France",
      position: "Fullstack Software Engineer Intern",
      description: `Migrated an existing Airbus internal service to a Spring(backend) and React(frontend) based stack, which led to better overall app performance, latency and less bugs.\n
        I was also in constant communication with the stakeholders, where I moderated meetings, prepared pre-reads and demos (Scrum).`,
      from: "Apr. 2020",
      to: "Oct 2020"
    }
  ],
  [
    'amazon',
    {
      company: "Amazon",
      location: "Cape Town, South Africa",
      position: "Backend Software Engineer Intern",
      description: `Implemented a new AWS internal microservice, that's used by the AWS support engineers to contact my engineering team, which led to improved response times and less interruptions for AWS engineers.\n 
        I also plugged in a chat about (AWS Lex) around the API Gateway.`,
      from: "Jun. 2019",
      to: "Oct. 2019"
    }
  ],
  [
    'femto-st',
    {
      company: "FEMTO-ST",
      location: "Besançon, France",
      position: "Robotics Research Intern",
      description: `Modelling and planning of a soft continuous robot with 3 fingers on a millimetric scale for ear surgery.\n
          Created theoretical and 3D CAD models of the robot, as well as experimental and simulated tests with finite element simulations.`,
      from: "Sep. 2017",
      to: "Feb. 2018"
    }
  ]
]);
