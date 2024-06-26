import cn from 'classnames';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

export default function Header({ ...props }: HeaderProps): JSX.Element {
	return (
		<header className={cn(styles)} {...props}>
			Header
		</header>
	);
}
