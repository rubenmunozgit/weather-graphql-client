import React, { Component } from 'react';
import Current from '../Current/Current';
import CityForm from '../CityForm/CityForm';
import './Weather.css';

export default class Weather extends Component {
    state = {
        cityCountry: '',
        inputValue: ''
    }
    render() {
        const {cityCountry} = this.state;
        console.log(cityCountry)
        const handleSumit = e => {
            e.preventDefault();
            this.setState({
                cityCountry: this.state.inputValue,
                inputValue: ''
            })
        };
        const handleChange = e => {
            console.log(e.target.value)
            const value = e.target.value;
            this.setState({
                cityCountry: '',
                inputValue: value
            });
        };

        return (
            <React.Fragment>
                <CityForm 
                    handleSumit={handleSumit} 
                    handleChange={handleChange} 
                    city={this.state.inputValue}/>
                {cityCountry && <Current 
                    city={this.state.cityCountry}/>}
            </React.Fragment>
        );
    }
}
