import React from 'react';

class Buttons extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            incrementor: 1,
            color: 0
        };
    }
    changeColor = () => {
        this.setState({color:this.getRandomColor()})
    }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    incrementNumber = () => {
        let { number } = this.state; //let number = this.state.number;
        let { incrementor } = this.state;
        number += incrementor;
        this.setState({ number });
    }
    incrementIncrementor = () => {
        let { incrementor } = this.state;
        incrementor++;
        this.setState({ incrementor });
    }

    render() {
        return (
            <div>

                <h1 style={{ color: this.state.color }}>{this.state.number}</h1>
                <button className="btn btn-primary" onClick={this.incrementNumber}>Increment Number</button>
                <h1>{this.state.incrementor}</h1>
                <button className="btn btn-primary" onClick={this.incrementIncrementor}>Incrementor</button>
                <button className="btn btn-primary" onClick={this.changeColor}>Change Color</button>
            </div>);
    }
}
export default Buttons;