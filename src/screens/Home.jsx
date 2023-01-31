import React from 'react'
import NavBar from '../components/NabBar'

import { PropertyCard } from '../components/PropertyCard'
import { Filter } from '../components/filter';
function Home() {
  const data = [
    {
      'price': '1000',
      'bed': '2',
      'bath': '2',
      'image': 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80.jpg'
    }, {
      'price': '200,000',
      'bed': '4',
      'bath': '3',
      
      'image': 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mike-b-112460.jpg&fm=jpg.jpg'
    }, {
      'price': '400,000',
      'bed': '3',
      'bath': '4',
      'image': 'https://st.depositphotos.com/1177973/2218/i/450/depositphotos_22188263-stock-photo-beautiful-colorful-shelves-with-different.jpg'
    }, {
      'price': '1000',
      'bed': '2',
      'bath': '2',
      'image': 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80.jpg'
    }, 
  ];
  return (

    <div>
      <NavBar />

     <Filter/>



      <div className='banner-area'>
        <div className='banner-item flex-1'>
          <h5>Blair Owens</h5>
          <h1>Our Properties</h1>
        </div>

        <div className='banner-item flex-2'>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tellus felis, vulputate id eleifend sit amet, varius non ipsum.
          </p> */}
        </div>

      </div>




      <div className='container'>
        <div className='properties'>
          {data.map((item, index) => {
            return (
              <PropertyCard  price={item.price} bath={item.bath} bed={item.bed} img={item.image} />
            );
          })
        }
        </div>
      </div>
    </div>

  )

}
export default Home