import TypescriptIcon from "../../public/icons/typescript.svg";
import ReactIcon from "../../public/icons/react.svg";
import SassIcon from "../../public/icons/sass.svg";
import NextJsIcon from "../../public/icons/next-js.svg";
import HtmlIcon from "../../public/icons/html.svg";
import CssIcon from "../../public/icons/css.svg";
import JsIcon from "../../public/icons/javascript.svg";
import SpringIcon from "../../public/icons/spring.svg";
import SymfonyIcon from "../../public/icons/symfony.svg";
import PostgresqlIcon from "../../public/icons/postgresql.svg";
import MariadbIcon from "../../public/icons/mariadb.svg";
import BigtableIcon from "../../public/icons/bigtable.svg";
import RabbitMqIcon from "../../public/icons/rabbitMq.svg";
import KafkaIcon from "../../public/icons/kafka.svg";
import KubernetesIcon from "../../public/icons/kubernetes.svg";
import TerraformIcon from "../../public/icons/terraform.svg";
import IstioIcon from "../../public/icons/istio.svg";
import HelmIcon from "../../public/icons/helm.svg";
import JenkinsIcon from "../../public/icons/jenkins.svg";
import GithubIcon from "../../public/icons/github.svg";
import DockerIcon from "../../public/icons/docker.svg";
import PostmanIcon from "../../public/icons/postman.svg";
import NpmIcon from "../../public/icons/npm.svg";
import ScrumIcon from "../../public/icons/scrum.svg";
import ElasticSearchIcon from "../../public/icons/elastic-search.svg";
import RedisIcon from "../../public/icons/redis.svg";

export const THINGS_I_LIKE_TO_DO = [
  'write code.',
  'design complex systems.',
  'create web applications.',
  'conjure Kubernetes magic.',
  'compete in CodinGame.',
  '[Insert random fun fact].',
  'build Arduino robots.',
  'relax and play video-games.',
  'drink coffee and procrastinate.',
  'learn new frameworks and techs.'
];

export interface TechStack {
  icon: any;
  name: string;
  url: string;
}

export const FRONTEND_STACK_ICONS: Array<TechStack> = [
  { icon: <ReactIcon/>, name: 'react', url: 'https://reactjs.org/' },
  { icon: <JsIcon/>, name: 'javascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: <TypescriptIcon/>, name: 'typescript', url: 'https://www.typescriptlang.org/' },
  { icon: <NextJsIcon/>, name: 'nextjs', url: 'https://nextjs.org/' },
  { icon: <HtmlIcon/>, name: 'html', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: <CssIcon/>, name: 'css', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: <SassIcon/>, name: 'sass', url: 'https://sass-lang.com/' }
];

export const BACKEND_STACK_ICONS: Array<TechStack> = [
  { icon: <SpringIcon/>, name: 'spring', url: 'https://spring.io/' },
  { icon: <SymfonyIcon/>, name: 'symfony', url: 'https://symfony.com/' },
  { icon: <PostgresqlIcon/>, name: 'postgresql', url: 'https://www.postgresql.org/' },
  { icon: <MariadbIcon/>, name: 'mariadb', url: 'https://mariadb.org/' },
  { icon: <BigtableIcon/>, name: 'bigtable', url: 'https://cloud.google.com/bigtable' },
  { icon: <ElasticSearchIcon/>, name: 'elasticsearch', url: 'https://www.elastic.co/' },
  { icon: <RedisIcon/>, name: 'redis', url: 'https://redis.io/' },
  { icon: <RabbitMqIcon/>, name: 'rabbitmq', url: 'https://www.rabbitmq.com/' },
  { icon: <KafkaIcon/>, name: 'kafka', url: 'https://kafka.apache.org/' }
];

export const DEVOPS_ICONS: Array<TechStack> = [
  { icon: <KubernetesIcon/>, name: 'kubernetes', url: 'https://kubernetes.io/' },
  { icon: <TerraformIcon/>, name: 'terraform', url: 'https://www.terraform.io/' },
  { icon: <IstioIcon/>, name: 'istio', url: 'https://istio.io/' },
  { icon: <HelmIcon/>, name: 'helm', url: 'https://helm.sh/' },
  { icon: <JenkinsIcon/>, name: 'jenkins', url: 'https://www.jenkins.io/' },
  { icon: <GithubIcon/>, name: 'github', url: 'https://github.com/' },
  { icon: <DockerIcon/>, name: 'docker', url: 'https://www.docker.com/' }
];

export const OTHER_STACK_ICONS: Array<TechStack> = [
  { icon: <PostmanIcon/>, name: 'postman', url: 'https://www.postman.com/' },
  { icon: <NpmIcon/>, name: 'npm', url: 'https://www.npmjs.com/' },
  { icon: <ScrumIcon/>, name: 'scrum', url: 'https://www.scrum.org/resources/what-is-scrum' }
];
