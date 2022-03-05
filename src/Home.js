import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home__container"> 
            <img className="home__image" src="https://m.media-amazon.com/images/I/71PdsxjbjPL._SX3000_.jpg" alt=""/>
            <div className="home__row">
            <Product 
                id="01"
                title="See U in C by Ali Karim Sayed (Author)"
                price={4450}
                image="https://m.media-amazon.com/images/I/61LVImuEirL._AC_UL480_FMwebp_QL65_.jpg" 
            
            />
           <Product 
                id="02"
                title="Apple iPhone 13 Mini (256GB) - Midnight"
                price={500}
                image="https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg" 
            
            />
            <Product 
                id="03"
                title="VILLS LAURRENS Analogue Men's Watch (Black Dial Black Colored Strap)"
                price={100}
                image="https://m.media-amazon.com/images/I/71cT6st-7hL._UL1500_.jpg" 
            
            />

            </div>
            <div className="home__row">
            <Product 
                id="04"
                title="Dell Inspiron 3501 15.6 FHD Display Laptop ram 8gb,camera 108"
                price={300}
                image="https://m.media-amazon.com/images/I/61zbf9g+VDS._SL1280_.jpg" 
            
            />
            <Product 
                id="05"
                title="Godrej 185 L 4 Star Inverter Direct-Cool Single Door Refrigerator"
                price={800}
                image="https://images-eu.ssl-images-amazon.com/images/I/417yhZ9Q3FS._SY445_SX342_QL70_FMwebp_.jpg" 
            
            />

            </div>
            <div className="home__row">
            <Product 
                id="06"
                title="
                Symphony Diet 12T Personal Tower Air Cooler 12-litres, Multistage Air Purification, Honeycomb Cooling Pad, Powerful Air Throw (White), Standard"
                price={1100}
                image="https://m.media-amazon.com/images/I/61J2kbra6eL._SL1500_.jpg" 
            
            />
            </div>

            <div className="home__row">
            <Product 
                id="06"
                title="
                Symphony Diet 12T Personal Tower Air Cooler 12-litres, Multistage Air Purification, Honeycomb Cooling Pad, Powerful Air Throw (White), Standard"
                price={1100}
                image="https://m.media-amazon.com/images/I/61J2kbra6eL._SL1500_.jpg" 
            
            />
            </div>
          </div>    
        </div>
    )
}

export default Home
