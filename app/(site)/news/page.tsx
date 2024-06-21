import cn from 'classnames';
import styles from './News.module.css';
import { NewsProps } from './News.props';

export default function News({ className, ...props }: NewsProps): JSX.Element {
	return (
		<div className={cn(styles.yellow)} {...props}>
			News
		</div>
	);
}
