import classes from './Container.module.css'

const Container = (props) => {
    return (
        <div className={classes.layout}>
            {props.children}
        </div>
    )

}

export default Container;