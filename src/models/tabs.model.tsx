export interface ExperienceTabEntity {
  company: string;
  location: string;
  position: string;
  description: string;
  from: string;
  to: string;
  url: string;
}

export const EXPERIENCE_TABS: Map<string, ExperienceTabEntity> = new Map<string, ExperienceTabEntity>([
  [
    'blablacar',
    {
      company: "BlaBlaCar",
      location: "Paris, France",
      position: "Backend Software Engineer",
      description: `Backend Software Engineer at BlaBlaCar, the world's leading carpooling platform, where I help transition a monolithic application (PHP and Symfony) to microservices using Java, Spring, TypeScript, and React.
        
        One of BlaBlaCar’s philosophies is "You build it, you own it, you run it!", so I find myself working across frontend, infrastructure, and DevOps, using Docker, Kubernetes, Terraform, Jenkins, Datadog, Helm, and Istio to ensure scalability and reliability.
        
        As the team’s Scrum Master, I facilitate agile practices and continuous improvement.`,
      from: "Aug. 2021",
      to: "Now",
      url: "https://www.blablacar.fr/"
    }
  ],
  [
    'zalando',
    {
      company: "Zalando",
      location: "Dortmund, Germany",
      position: "Junior Backend Software Engineer",
      description: `Helped implementing new backend microservices (Spring MVC and Kotlin/Java) and handling the team's infrastructure and DevOps (Docker, Kubernetes, AWS, Kafka, PostgreSQL).
      
        I also participated in Scrum practices to deliver continuous improvements for our stakeholders.
        
        Unfortunately, due to personal reasons I had to move back to France, interrupting my time at Zalando early.`,
      from: "Jan. 2021",
      to: "Aug. 2021",
      url: "https://www.zalando.fr/"
    }
  ],
  [
    'airbus',
    {
      company: "Airbus",
      location: "Marignane, France",
      position: "Fullstack Software Engineer Intern",
      description: `Migrated an existing Airbus internal service to a Spring(backend) and React(frontend) based stack, which led to better overall app performance, latency and less bugs.
      
        I was also in constant communication with the stakeholders, where I moderated meetings, prepared pre-reads and demos (Scrum).`,
      from: "Apr. 2020",
      to: "Oct 2020",
      url: "https://www.airbus.com/en/products-services/helicopters/"
    }
  ],
  [
    'amazon',
    {
      company: "Amazon",
      location: "Cape Town, South Africa",
      position: "Backend Software Engineer Intern",
      description: `Implemented a new AWS internal microservice, that's used by the AWS support engineers to contact my engineering team, which led to improved response times.
       
        I also plugged in a chat about (AWS Lex) around the API Gateway.`,
      from: "Jun. 2019",
      to: "Oct. 2019",
      url: "https://aws.amazon.com/"
    }
  ],
  [
    'femto-st',
    {
      company: "Femto-ST",
      location: "Besançon, France",
      position: "Robotics Research Intern",
      description: `Modelling and planning of a soft continuous robot with 3 fingers on a millimetric scale for ear surgery.
      
        Created theoretical and 3D CAD models of the robot, as well as experimental and simulated tests with finite element simulations.`,
      from: "Sep. 2017",
      to: "Feb. 2018",
      url: "https://www.femto-st.fr/en"
    }
  ]
]);
