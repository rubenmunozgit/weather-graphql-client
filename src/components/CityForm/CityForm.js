import React, { Component } from 'react'

class CityForm extends Component {
    state = {
        location: ''
    };

    handleSumit = e => {
        e.preventDefault();
        this.setState({
            location: ''
        });
        this.props.handleSumit(this.state.location);
    };

    handleChange = e => {
        this.setState({
            location: e.target.value
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSumit}>
                    <input
                        name="city"
                        type="text"
                        value={this.state.location}
                        onChange={this.handleChange} />
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
}

export default CityForm;


/* import React from 'react'

const CityForm = ({city, handleSumit, handleChange}) => {
    return (
        <div>
            <form onSubmit={handleSumit}>
                <input
                    name="city"
                    type="text"
                    value={city}
                    onChange={handleChange}/>
                <button>Get Weather</button>
            </form>
        </div>
    )
};
export default CityForm
 */