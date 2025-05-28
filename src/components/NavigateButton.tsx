import type { JSX } from 'react';

interface NavigateButtonProps {
	label: string | JSX.Element;
	href: string;
	className?: string;
	isButtonRole?: boolean;
}

export const NavigateButton = ({
	label,
	href,
	className,
	isButtonRole = false,
}: NavigateButtonProps) => {
	const role = isButtonRole ? 'button' : 'link';

	const classes = [isButtonRole ? 'button button-navigation' : 'action-item-content', className]
		.filter(Boolean)
		.join(' ');

	return (
		<a className={classes} href={href} role={role}>
			{label}
		</a>
	);
};
