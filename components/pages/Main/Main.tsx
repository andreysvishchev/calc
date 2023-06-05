import { FC, useEffect, useState } from 'react'
import classes from './Main.module.scss'
import { data } from './data'

export type PropsType = {}

const Main: FC<PropsType> = ({}) => {
	const key = data
	const [expression, setExression] = useState('')
	const [result, setResult] = useState('')

	const onClickHandler = (code: string) => {
		createExp(code)
	}

	const onKeyPressHandler = (e: KeyboardEvent) => {
		console.log(e.keyCode)
	}

	const createExp = (value: string) => {}

	useEffect(() => {
		window.addEventListener('keypress', e => onKeyPressHandler(e))
	}, [])

	return (
		<div className={classes.Wrap}>
			<div className={classes.Value}>{result}</div>
			<div className={classes.Keys}>
				{data.key.map((el, i) => (
					<button
						key={i}
						className={classes.Button}
						dangerouslySetInnerHTML={{ __html: el.label }}
					/>
				))}
			</div>
		</div>
	)
}

export default Main
