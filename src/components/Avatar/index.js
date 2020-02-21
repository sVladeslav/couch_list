import React from 'react';


class Avatar extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return <img src={this.props.src} alt={this.props.name}/>
    }
}

export default Avatar;