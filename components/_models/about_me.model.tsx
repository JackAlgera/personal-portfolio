import typescriptIcon from "../../public/icons/typescript.svg";
import reactIcon from "../../public/icons/react.svg";
import sassIcon from "../../public/icons/sass.svg";
import nextJsIcon from "../../public/icons/next-js.svg";
import htmlIcon from "../../public/icons/html.svg";
import cssIcon from "../../public/icons/css.svg";
import jsIcon from "../../public/icons/javascript.svg";
import springIcon from "../../public/icons/spring.svg";
import symfonyIcon from "../../public/icons/symfony.svg";
import postgresqlIcon from "../../public/icons/postgresql.svg";
import mariadbIcon from "../../public/icons/mariadb.svg";
import bigtableIcon from "../../public/icons/bigtable.svg";
import rabbitMqIcon from "../../public/icons/rabbitMq.svg";
import kafkaIcon from "../../public/icons/kafka.svg";
import kubernetesIcon from "../../public/icons/kubernetes.svg";
import istioIcon from "../../public/icons/istio.svg";
import helmIcon from "../../public/icons/helm.svg";
import jenkinsIcon from "../../public/icons/jenkins.svg";
import githubIcon from "../../public/icons/github.svg";
import dockerIcon from "../../public/icons/docker.svg";
import postmanIcon from "../../public/icons/postman.svg";
import npmIcon from "../../public/icons/npm.svg";
import scrumIcon from "../../public/icons/scrum.svg";

export const THINGS_I_LIKE_TO_DO = [
  'write code.',
  'design complex systems.',
  'build Arduino robots.',
  'create web applications.',
  'conjure Kubernetes magic.',
  'compete in CodinGame.',
  'relax and play video-games.',
  'go boldering.',
  'drink coffee and procrastinate.',
  'learn new frameworks and techs.',
  '[Insert random fun fact].'
];

export interface TechStack {
  icon,
  url: string;
}

export const FRONTEND_STACK_ICONS: Array<TechStack> = [
  { icon: reactIcon, url: 'https://reactjs.org/' },
  { icon: jsIcon, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: typescriptIcon, url: 'https://www.typescriptlang.org/' },
  { icon: nextJsIcon, url: 'https://nextjs.org/' },
  { icon: htmlIcon, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: cssIcon, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: sassIcon, url: 'https://sass-lang.com/' }
];

export const BACKEND_STACK_ICONS: Array<TechStack> = [
  { icon: springIcon, url: 'https://spring.io/' },
  { icon: symfonyIcon, url: 'https://symfony.com/' },
  { icon: postgresqlIcon, url: 'https://www.postgresql.org/' },
  { icon: mariadbIcon, url: 'https://mariadb.org/' },
  { icon: bigtableIcon, url: 'https://cloud.google.com/bigtable' },
  { icon: rabbitMqIcon, url: 'https://www.rabbitmq.com/' },
  { icon: kafkaIcon, url: 'https://kafka.apache.org/' }
];

export const CI_CD_ICONS: Array<TechStack> = [
  { icon: kubernetesIcon, url: 'https://kubernetes.io/' },
  { icon: istioIcon, url: 'https://istio.io/' },
  { icon: helmIcon, url: 'https://helm.sh/' },
  { icon: jenkinsIcon, url: 'https://www.jenkins.io/' },
  { icon: githubIcon, url: 'https://github.com/' },
  { icon: dockerIcon, url: 'https://www.docker.com/' }
];

export const OTHER_STACK_ICONS: Array<TechStack> = [
  { icon: postmanIcon, url: 'https://www.postman.com/' },
  { icon: npmIcon, url: 'https://www.npmjs.com/' },
  { icon: scrumIcon, url: 'https://www.scrum.org/resources/what-is-scrum' }
];
