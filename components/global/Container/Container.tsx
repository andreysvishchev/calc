import {FC, PropsWithChildren, ReactNode} from 'react'
import classes from './Container.module.scss'

type PropsType = {}

const Container: FC<PropsWithChildren<PropsType>> = ({children}) => {
    return (
        <div className={classes.Wrap}>
            {children}
        </div>
    )
}

export default Container