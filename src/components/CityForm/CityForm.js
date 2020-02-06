import React from 'react'

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
