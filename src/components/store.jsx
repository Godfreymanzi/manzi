import React, { Component } from 'react';
import countryData from '../database/data.json';
//import { Dropdown } from 'rsuite';
//import 'rsuite/dist/rsuite.min.css';

class store extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchQuery:'',
      isDarkMode: false // add state for light/dark mode
    };
  }

  componentDidMount() {
    this.setState({countries: countryData})
  }

  searchHandler = (e) => {
    const searchQuery = e.target.value.toLocaleLowerCase();
    this.setState({searchQuery: searchQuery})
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  }

  selectCountry = (country) => {
    this.setState({ selectedCountry: country });
  }
  render() {
    const { isDarkMode } = this.state;
  
    const filteredCountries = countryData.filter(country => {
      return country.name.toLocaleLowerCase().includes(this.state.searchQuery)
    });
  
    return (
      <div className={`grid grid-cols-4 m-3 mt-40 justify-end p-9 flex backdrop-opacity-10${isDarkMode ? 'bg-black text-white' : 'bg-white text-black' }`}>
        <div className="fixed mt-0 top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center flex-wrap border border-gray-500 p-4">
          <input type="text" className='h-6 bg-white-600 m-3 mt-20 bi bi search text-sm text-black' placeholder='search for a country' onChange={this.searchHandler}/>
        </div>
        {filteredCountries.length === 0 ?
          <div className="m-3">Country not found</div>
          :
          filteredCountries.map((country)=>(
            <div className='shadow-2xl m-3 bg-zinc-700 hover:bg-sky-700 grid-rows-6 shadow-2xl mt-3 border border-gray-500 p-4 rounded-lg gap-x-px gap-y-1.5 space-x-1.5'>
              <img src={country.flag} className='h-20 p-3'></img>
              <p>{country.name}</p>
              <p>population:{country.population}</p>
              <p>region:{country.region}</p>
              <p>capital:{country.capital}</p>
            </div>
          ))
        }
        <div className="sidebar fixed top-0 bottom-0 lg:right-0 p-2 w-[300px] overflow-y-auto text-center ">
          <button onClick={this.toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      </div>
    )
  }
  
}

export default store;