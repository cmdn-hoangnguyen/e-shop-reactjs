import type { JSX, LazyExoticComponent } from 'react';

export interface PageRoute {
	path: string;
	element?: LazyExoticComponent<() => JSX.Element> | LazyExoticComponent<React.FC<any>>;
	isProtected?: boolean;
	redirect?: string;
	children?: PageRoute[];
}
