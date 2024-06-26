import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export default function Footer({ className, ...props }: FooterProps): JSX.Element {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href="#" target="_blank" className="">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank" className="">
				конфиденциальности
			</a>
		</footer>
	);
}
