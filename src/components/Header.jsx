import React from 'react'
import { GoPrimitiveDot } from "react-icons/go";
import { RiCopperCoinLine } from 'react-icons/ri';
import { BsShieldFillCheck } from "react-icons/bs";
const Header = () => {
  return (
    <div className='container mx-auto pt-5'>
         <div  className='flex justify-between'>
            <h1 className='items-start font-bold uppercase'>Loaded Gain</h1>
            <button className='border-blue-400 border px-4 py-1 text-blue-400 '>Distribute</button>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 space-x-10 justify-between items-center'>
            <div className='shadow-transpent rounded-xl shadow-xl w-full h-full p-5'>
                <h2 className='font-bold uppercase pt-3'>weekly Trades For Week 26/04/21-30/04/21</h2>
                <div className='flex justify-between pt-3 pb-3'>
                    <p className='text-xs text-gray-600'>Total Trade Value</p>
                    <h6 className='text-blue-700 font-bold text-xl'>$831,750</h6>
                </div>

                <hr className=''/>

                <div className='items-center justify-center flex p-5'>
                    <div className='rounded-full border-8 border-gray-100 border-spacing-5 p-20'>
                        <h3 className='font-bold text-green-700 text-xl'>+7.20%</h3>
                        <p className='text-xl  text-gray-500 pl-3'>Gain</p>
                    </div>
                </div>
                <div className='flex justify-between pb-3'>
                    <div className='flex'>
                    <GoPrimitiveDot fontSize={18} className='mt-1 text-gray-400'/>
                    <div className='pl-2 text-gray-500'>
                    <p>Margin</p>
                    <p>$831,750</p>
                    </div>
                    </div>
                    <div  className='flex'>
                    <GoPrimitiveDot fontSize={18} className='mt-1 text-purple-400'/>
                    <div className='pl-2 text-gray-500'>
                    <p>Gain</p>
                    <p>$63,470</p>
                    </div>
                    </div>
                </div>
                <hr/>
                <p className='p-5 text-blue-400 text-xl'>View Full Report</p>
            </div>
            <div className='shadow-transpent rounded-xl shadow-xl h-full p-5'>
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
            <h3 className='bg-gray-500 text-white font-bold p-3 rounded-sm text-xl'>Net Gain $59,903</h3>
            <p className='text-xl'><span className='font-bold'>Version:  </span>v12.005</p>
            </div>
            <div className='space-y-5 pt-5'>
                <div className='shadow-transpent rounded-xl shadow-xl p-5'>
                    <h1 className='font-bold text-xl'>Total Traded Volume</h1>
                    <div className='flex justify-between pt-2'>
                    <p className='text-gray-500'>Total Traded Value</p>
                    <p className='text-blue-400 font-bold text-xl'>$831,750</p>
                    </div>
                </div>
                <div className='shadow-transpent rounded-xl shadow-xl p-5'>
                    <h1 className='font-bold text-xl'>Total Gain</h1>
                    <div className='text-end'>
                    <p className=' text-green-700 font-bold text-xl'>$63,470</p>
                    </div>
                </div>
                <div className='shadow-transpent rounded-xl shadow-xl p-5'>
                <h1 className='font-bold text-xl'>Total Loss</h1>
                    <div  className='text-end'>
                    <p className='text-rose-700 font-bold text-xl'>$3567</p>
                    </div>
                </div>
                <div className='shadow-transpent rounded-xl shadow-xl p-5'>
                <h1 className='font-bold text-xl'>Net Gain</h1>
                    <div  className='text-end '>
                    <p className='text-green-700 font-bold text-xl'>$59,903</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between space-x-5 '>
                <div className='shadow-transpent rounded-xl shadow-xl p-5'>
                <h6 className='font-bold text-xl flex justify-between gap-4'>Lincensed Broker<BsShieldFillCheck fon className='text-green-700'/> </h6>
                <p className='pt-3 text-gray-600'>AHTGSFSJSKJLSAUGGV</p>
                </div>
                <div className='shadow-transpent rounded-xl shadow-xl w-full p-5 flex space-x-5'>
            
                <img     
                 className="rounded-full h-20 w-20 object-cover"
                 src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/me/IMG-4060.JPG"
                 alt="user-profile"
                 />
              
                <div>
                <p className='font-bold text-xl'>My Name</p>
                <p  className='  text-gray-600'><span className='font-bold text-black'>ID: </span>2343544? </p>   
                </div> 
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header