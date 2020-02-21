import React from 'react';
import classNames from 'classnames';
import style from './index.module.css';



class SelectButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isSelect: false,
        }
    }

    selectClick = () => {
        this.setState({
            isSelect: !this.state.isSelect,
    })
    };

    render() {
        if (!this.state.isSelect) {
            return (
                <div onClick={this.selectClick} className={style.selectButton}>
                    <img className={style.selectButton}
                         src="https://marvelapp.com/static/select-property.b3f39f6dd76ceacc66bb3ac6f05879da.svg"
                         alt="select"/>
                </div>
            )
        }
        else{
            return (
                <div onClick={this.selectClick} className={style.selectButton}>
                    <img className={classNames(style.selectButton,style.selected)}
                         src="https://marvelapp.com/static/select-property.b3f39f6dd76ceacc66bb3ac6f05879da.svg"
                         alt="select"/>
                </div>
            )
        }
    }
}

export default SelectButton;