import { HiOutlineHome } from 'react-icons/hi'
import { BsCalendar, BsSuitHeart } from 'react-icons/bs'
import { AiOutlinePlusSquare } from 'react-icons/ai'
export const PropertyCard = ({ price,bed,bath,square,img,newl }) => {
    return (
        <div className='property-container'>
            <div className='top-img' style={{
                background: `url(${img})`,
            }}>
              <div className='property-icons'>
                <div className='icon'><HiOutlineHome /></div>
                <div className='flex gap-10'>
                  <div className='icon'><BsSuitHeart /></div>
                  <div className='icon'><AiOutlinePlusSquare /></div>
                </div>
              </div>

            </div>
            <div className='divider'></div>
            <div>
              <span className='text-xl text-light-blue'>
                RWF {price}
              </span>
              <div className='flex gap-10'>
                <span className='text-sm'>Bed: <b>{bed}</b></span>
                <span className='text-sm'>Bath: <b>{bath}</b></span>
                <span className='text-sm'>Bed: <b>{bed}</b></span>
                
              </div>
            </div>
            <div className='divider'></div>
            <div className='flex items-center justify-between px-10'>
              <div>
                <BsCalendar/>
              </div>
              <span>Trust us</span>
            </div>
          </div>
    )
}