import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';

export default function Sidebar({ className, ...props }: SidebarProps): JSX.Element {
	return (
		<div className={cn(className)} {...props}>
			<Menu />
		</div>
	);
}
