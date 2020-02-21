
import React from 'react';
import Card from '../Card';
import style from './index.module.css';


class CardList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Brain McCauley',
                    photo: 'person.png',
                    level: 1},
                {
                    id: 2,
                    name: 'Chad Hayes',
                    photo: 'person.png',
                    level: 2},
                {
                    id: 3,
                    name: 'Jeff Buck',
                    photo: 'person.png',
                    level: 2},
                {
                    id: 4,
                    name: 'Kenny Griffin',
                    photo: 'person.png',
                    level: 3},
                {
                    id: 5,
                    name: 'Tom Glover',
                    photo: 'person.png',
                    level: 3}, {
                    id: 1,
                    name: 'Brain McCauley',
                    photo: 'person.png',
                    level: 1},
                {
                    id: 2,
                    name: 'Chad Hayes',
                    photo: 'person.png',
                    level: 2},
                {
                    id: 3,
                    name: 'Jeff Buck',
                    photo: 'person.png',
                    level: 2},
                {
                    id: 4,
                    name: 'Kenny Griffin',
                    photo: 'person.png',
                    level: 3},
                {
                    id: 5,
                    name: 'Tom Glover',
                    photo: 'person.png',
                    level: 3}, {
                    id: 1,
                    name: 'Brain McCauley',
                    photo: 'person.png',
                    level: 1},
                {
                    id: 2,
                    name: 'Chad Hayes',
                    photo: 'person.png',
                    level: 2},
                {
                    id: 3,
                    name: 'Jeff Buck',
                    photo: 'person.png',
                    level: 2},
                {
                    id: 4,
                    name: 'Kenny Griffin',
                    photo: 'person.png',
                    level: 3},
                {
                    id: 5,
                    name: 'Tom Glover',
                    photo: 'person.png',
                    level: 3},

            ],
        }
    }

    render() {

        const items = this.state.items;
        return items.map( item => (
            <Card user={item} key={item.id}/>
        )   ) ;
    }
}

export default CardList;
