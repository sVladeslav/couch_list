import React from 'react';
import style from './index.module.css';

import Avatar from '../Avatar';
import Body from '../Body';
import SelectButton from '../SelectButton';

class Card extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return <li className={style.card}>
            <Avatar src={this.props.user.photo} alt={this.props.user.name} class='ava'/>
            <Body name={this.props.user.name} level={this.props.user.level}/>
            <SelectButton/>
        </li>
    }
}

export default Card;