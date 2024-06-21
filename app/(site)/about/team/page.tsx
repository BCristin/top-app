import cn from 'classnames';
import styles from './Team.module.css';
import { TeamProps } from './Team.props';

export default function Team({ className, ...props }: TeamProps): JSX.Element {
	return (
		<div className={cn(styles)} {...props}>
			Team
		</div>
	);
}
