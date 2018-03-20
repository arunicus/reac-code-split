import React, { Component } from 'react';
import './Inventions.css';
import gtInventionsUseCase from '../../usecases/get_inventions';
import Loading from '../Loading';
import Invention from './Invention';

class Inventions extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        gtInventionsUseCase({}, {observer: this})
    }

    noData(){
        
    }

    success(data){
        console.log(data);
        this.setState({data})
    }

    error(){
        alert('errrrr')
    }

    render() {
        return (
            <div className="Inventions">
                {this.state.data ? this.state.data.map(it =>  <Invention name={it.name} />) : <Loading />}
            </div>
        );
    }
}

export default Inventions;
