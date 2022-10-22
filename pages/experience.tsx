import {ExperienceTab} from "../components/experience/experience-tab";
import {useState} from "react";
import {ExperienceTabEntity} from "../components/models/tabs.model";

export default function Experience() {
  const tabList = ["Femto-ST", "Amazon", "Airbus", "Zalando", "BlaBlaCar"];

  const [tab, setTab] = useState<ExperienceTabEntity>({
    company: "Amazon",
    from: "Jul 2020",
    description: `Splitting a monolith (PHP/Symfony) into microservices (Java/Spring for the backend, React/TypeScript for the frontend).\n
    One of BlaBlaCar’s philosophies is "You build it, you own it,  you run it!", I've worked on automating and improving my team’s global observability and alerting via Terraform, and implementing generic CI/CI pipelines and Helm charts for the team.\n
    I'm also the team's Scrum master, starting only a couple of weeks after I joined the company in August.`,
    location: "South Africa",
    to: "Jun 2021"
  });

  return (
    <section>
      <h2 className="numbered-heading">Experience</h2>
      <div className="inner experience">
        <div className="horizontal-tab-list">
          <button>Femto-ST</button>
          <button>Amazon</button>
          <button>Airbus</button>
          <button>Zalando</button> {/* But unfortunately I had to leave the company to move back to France bla bla */}
          <button>BlaBlaCar</button>
        </div>
        <ExperienceTab tab={tab}/>
      </div>
    </section>
  );
}
