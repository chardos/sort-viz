import React, { Component } from 'react';
import binarySearchGenerator from './algorithm';
import BinarySearchBox from './BinarySearchBox';
import './BinarySearch.scss';

class BinarySearchWrap extends Component {
    constructor(){
        super();
        this.state = {
            searchedValue: 77,
            array: [2, 5, 8, 12 ,15, 45, 75, 77, 88],
            active: [0, 1, 2, 3, 4, 5, 6, 7, 8], //goes by index
            selected: null //goes by index
        }
        this.generator = binarySearchGenerator(this.state.array, this.state.searchedValue)
    }

    next = () => {
        const action = this.generator.next().value;
        if (action.type === 'select'){
            console.log(action.value);
            this.setState({selected: action.value})
        }
        if (action.type === 'update_active'){
            this.setState({
                active: action.value,
                selected: null
            })
        }
        // this.setState({
        //     array: binarySearch(this.state.array)
        // })
    }
    render() {
        var style = {
            width: this.state.array.length * 60 - 10
        }
        return (
            <div className="binary-search">
                <div className="binary-search-wrap" style={style}>
                    {this.state.array.map((number, i) => {
                        const active = this.state.active.indexOf(i) >= 0;
                        const selected = this.state.selected === i;
                        return(
                            <BinarySearchBox
                                active={active}
                                selected={selected}
                                key={number}
                                position={i * 60}
                            >
                                {number}
                            </BinarySearchBox>
                        )
                    })}
                </div>

                <button className="binary-search__sort-button" onClick={this.next}>Next</button>
            </div>
        );
    }
}

export default BinarySearchWrap;
