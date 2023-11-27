import styles from './tech-stack.module.scss';
import {TechStack} from '../models/about_me.model';
import {StatefulLink} from '../components/stateful/stateful-link';

interface TechStackProps {
  label: string;
  icons: Array<TechStack>;
}

export const TechStackRow = (props: TechStackProps) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <p>{props.label}</p>
      <div className={styles.techStackContainer}>
        {props.icons.map((techStack, index) => (
          <StatefulLink key={techStack.name + '-' + index} href={techStack.url}>
            {techStack.icon}
          </StatefulLink>
        ))}
      </div>
    </div>
  );
}
