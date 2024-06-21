import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LoginProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}
