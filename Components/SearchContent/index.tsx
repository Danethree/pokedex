import React from 'react'
import Button from '../Button'

export default function SearchContent(){return(
    <>
    <form className=" flex justify-center align-center w-full  my-20">
        <input className=" w-96 bg-transparent border border-red-800 rounded  w-full text-gray-700 py-5 px-10 leading-tight focus:outline-red-700" type="text" placeholder="Search Pokémon. Example: Charmander"/>    
        <Button
            name =
             {
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
             }
             onClick={()=>{ }}
        />       
    </form>
    </>
)}