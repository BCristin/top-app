import cn from 'classnames';
import styles from './About.module.css';
import { AboutProps } from './About.props';

export default function About({ className, ...props }: AboutProps): JSX.Element {
	return (
		<div className={cn(styles.blue)} {...props}>
			About pages
		</div>
	);
}
