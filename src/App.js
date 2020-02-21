
import React from 'react';
import CardList from './components/CardList';
import style from './App.module.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        }

    render() {

        return (
            <ul className={style.list}>
                <CardList/>
            </ul>
        );
    }
}

export default App;
