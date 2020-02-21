import React from 'react';
import style from './index.module.css'

class Body extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={style.container}>
            <h2 className={style.name}>{this.props.name}</h2>
            <h4 className={style.level}>level {this.props.level}</h4>
        </div>
    }
}

export default Body;