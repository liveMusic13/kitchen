import { FC, PropsWithChildren } from 'react';
import { IPropsLayout } from '../../types/layout.types';
import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<IPropsLayout>> = ({
	children,
	bgColor,
	justifyContent,
}) => {
	return (
		<div
			className={styles.wrapper_layout}
			style={{ backgroundColor: bgColor, justifyContent: justifyContent }}
		>
			{children}
		</div>
	);
};

export default Layout;
