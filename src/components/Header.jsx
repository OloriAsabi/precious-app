import React from 'react'
import { RiCopperCoinLine } from 'react-icons/ri';
import { BsShieldFillCheck } from "react-icons/bs";
// import { useNavigate, useParams } from 'react-router-dom';
import DonutChart from 'react-donut-chart';

const Header = ({ data }) => {

    const dataItems = [
        {
            label: "Gain",
            name: "Gain",
            value:`${data?.gain_percentage}`,
            borderWidth: '1',
            backgroundColor: '#0606d9',
        },
        {
          label: "Margin",
          name: "Margin",
          value: 3,
          borderWidth: '1',
          backgroundColor: '#0606d9',
        },
      ];

      const legend = {
            display: true,
            position: "bottom",
            usePointStyle: "true",
            labels: {
              fontSize: 12,
              padding: 25,
              fontColor: "#6D7278",
            }
      };

  return (
    <div className='container mx-auto pt-5'>
         <div  className='flex loaded cursor-pointer mb-10'>
            <h1 className='items-start font-bold uppercase'>Loaded Gain</h1>
            <button className='border-blue-400 border px-4 py-1 text-blue-400 '>Distribute</button>
        </div>
    
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 space-x-10 justify-between items-center'>
            <div className='shadow-transpent rounded-xl border border-10 w-full h-full p-5'>
                <h2 className='font-bold uppercase pt-3'>weekly Trades For Week {data?.week_start} - {data?.week_end}</h2>
                <div className='flex justify-between pt-3 pb-3'>
                    <p className='text-xs text-gray-600'>Total Trade Value</p>
                    <h6 className='text-blue-700 font-bold text-xl'>{data?.total_trade_value}</h6>
                </div>

                <hr className=''/>

                <DonutChart
                data={dataItems}
                height={250}
                width={380} 
               colors={['#0606d9', '#b7b7b7']}
               className='ml-auto mr-auto mt-12 mb-12 text-xl '
               legend={legend}
               />   
              <hr/>
                <p className='p-5 text-blue-400 text-xl'>View Full Report</p>
            </div>
            <div className='shadow-transpent rounded-xl border border-10 h-full p-5'>
                
            <p className='font-bold text-gray-600 pt-3 text-xl'>Top traded position for the week</p>


            <hr className=''/>

            <ul className='space-y-5 pt-5'>
                <li className='flex gap-x-10 text-xl font-bold uppercase text-gray-500'><RiCopperCoinLine fontSize={28} className='text-start bg-green-700 rounded-full text-white'/>Gold</li>
                <hr className=''/>
                <li className='flex gap-x-10 text-xl font-bold uppercase text-gray-500'><RiCopperCoinLine  fontSize={28} className='text-start bg-green-700 rounded-full text-white'/>USDCAD</li>
                <hr className=''/>
                <li className='flex gap-x-10 text-xl font-bold uppercase text-gray-500'><RiCopperCoinLine  fontSize={28} className='text-start bg-rose-700 rounded-full text-white'/>DE30</li>
                <hr className=''/>
                <li className='flex gap-x-10 text-xl font-bold uppercase text-gray-500'><RiCopperCoinLine  fontSize={28} className='text-start bg-green-700 rounded-full text-white' />US100</li>
                <hr className=''/>
                <li className='flex gap-x-10 text-xl font-bold uppercase text-gray-500'><RiCopperCoinLine  fontSize={28} className='text-start bg-green-700 rounded-full text-white' />EURUSD</li>
                <hr className=''/>
            </ul>
            </div>

            <div className='h-full'>
            <div className='flex justify-between pt-5'>
            <h3 className='bg-gray-500 text-white font-bold p-3 rounded-sm text-xl'>Net Gain {data?.net_gain}</h3>
            <p className='text-xl'><span className='font-bold'>Version:  </span>{data?.version}</p>
            </div>
            <div className='space-y-5 pt-5'>
                <div className='shadow-transpent rounded-xl border border-10 p-5'>
                    <h1 className='font-bold text-xl'>Total Traded Volume</h1>
                    <div className='flex justify-between pt-2'>
                    <p className='text-gray-500'>Total Traded Value</p>
                    <p className='text-blue-400 font-bold text-xl'>{data?.total_trade_value}</p>
                    </div>
                </div>
                <div className='shadow-transpent rounded-xl border border-10 p-5'>
                    <h1 className='font-bold text-xl'>Total Gain</h1>
                    <div className='text-end'>
                    <p className=' text-green-700 font-bold text-xl'>{data?.total_gain}</p>
                    </div>
                </div>
                <div className='shadow-transpent rounded-xl border border-10 p-5'>
                <h1 className='font-bold text-xl'>Total Loss</h1>
                    <div  className='text-end'>
                    <p className='text-rose-700 font-bold text-xl'>{data?.total_loss}</p>
                    </div>
                </div>
                <div className='shadow-transpent rounded-xl border border-10 p-5'>
                <h1 className='font-bold text-xl'>Net Gain</h1>
                    <div  className='text-end '>
                    <p className='text-green-700 font-bold text-xl'>{data?.net_gain}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-10 space-x-5 '>
                <div className='shadow-transpent rounded-xl  border border-10 p-5'>
                <h6 className='font-bold text-xl flex justify-between gap-4'>Lincensed Broker<BsShieldFillCheck fontSize={28} className='text-green-700'/> </h6>
                <p className='pt-3 text-gray-600'>{data?.broker_license_id}</p>
                </div>
                <div className='shadow-transpent rounded-xl border border-10 w-full p-5 flex space-x-5'>
            
                <img     
                 className="rounded-full h-20 w-20 object-cover"
                 src={data?.broker_photo}
                 alt="user-profile"
                 />
              
                <div>
                <p className='font-bold text-xl'>My Name</p>
                <p  className='  text-gray-600'><span className='font-bold text-black'>ID: </span>{data?.broker_id}</p>   
                </div> 
                </div>
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Header