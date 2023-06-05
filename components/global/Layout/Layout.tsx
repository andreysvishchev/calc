import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import classes from './Layout.module.scss'

type PropsType = {
	title: string
	keywords: string
	description: string
}

const Layout: FC<PropsWithChildren<PropsType>> = ({ title, keywords, description, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				{keywords ? (
					<meta
						name='keywords'
						content={keywords}
					/>
				) : null}
				{description ? (
					<meta
						name='description'
						content={description}
					/>
				) : null}
			</Head>

			<div className={classes.Wrap}>
				<main className={classes.Main}>{children}</main>
			</div>
		</>
	)
}

export default Layout
