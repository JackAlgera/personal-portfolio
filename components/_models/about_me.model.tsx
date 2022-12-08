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
  icon;
  name: string;
  url: string;
}

export const FRONTEND_STACK_ICONS: Array<TechStack> = [
  { icon: reactIcon, name: 'react' ,url: 'https://reactjs.org/' },
  { icon: jsIcon, name: 'javascript' ,url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: typescriptIcon, name: 'typescript' ,url: 'https://www.typescriptlang.org/' },
  { icon: nextJsIcon, name: 'nextjs' ,url: 'https://nextjs.org/' },
  { icon: htmlIcon, name: 'html' ,url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: cssIcon, name: 'css' ,url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: sassIcon, name: 'sass' ,url: 'https://sass-lang.com/' }
];

export const BACKEND_STACK_ICONS: Array<TechStack> = [
  { icon: springIcon, name: 'spring' ,url: 'https://spring.io/' },
  { icon: symfonyIcon, name: 'symfony' ,url: 'https://symfony.com/' },
  { icon: postgresqlIcon, name: 'postgresql' ,url: 'https://www.postgresql.org/' },
  { icon: mariadbIcon, name: 'mariadb' ,url: 'https://mariadb.org/' },
  { icon: bigtableIcon, name: 'bigtable' ,url: 'https://cloud.google.com/bigtable' },
  { icon: rabbitMqIcon, name: 'rabbitmq' ,url: 'https://www.rabbitmq.com/' },
  { icon: kafkaIcon, name: 'kafka' ,url: 'https://kafka.apache.org/' }
];

export const CI_CD_ICONS: Array<TechStack> = [
  { icon: kubernetesIcon, name: 'kubernetes' ,url: 'https://kubernetes.io/' },
  { icon: istioIcon, name: 'istio' ,url: 'https://istio.io/' },
  { icon: helmIcon, name: 'helm' ,url: 'https://helm.sh/' },
  { icon: jenkinsIcon, name: 'jenkins' ,url: 'https://www.jenkins.io/' },
  { icon: githubIcon, name: 'github' ,url: 'https://github.com/' },
  { icon: dockerIcon, name: 'docker' ,url: 'https://www.docker.com/' }
];

export const OTHER_STACK_ICONS: Array<TechStack> = [
  { icon: postmanIcon, name: 'postman' ,url: 'https://www.postman.com/' },
  { icon: npmIcon, name: 'npm' ,url: 'https://www.npmjs.com/' },
  { icon: scrumIcon, name: 'scrum' ,url: 'https://www.scrum.org/resources/what-is-scrum' }
];
