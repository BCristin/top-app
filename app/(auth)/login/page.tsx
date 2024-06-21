import cn from 'classnames';
import { LoginProps } from './Login.props';
import styles from './login.module.css';

export default function login({ className, ...props }: LoginProps): JSX.Element {
	return (
		<div className={cn(styles)} {...props}>
			Login
		</div>
	);
}
