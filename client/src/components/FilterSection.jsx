import React from 'react'

const FilterSection = () => {
    return (
        <div class="py-5 bg-white shadow-md px-10">
            <form className=" flex gap-5">
                <select name="" id="" className="bg-transparent border-collapse cursor-pointer outline-none text-lg">
                <option value="">Nuerology</option>
                <option value="">Dentistry</option>
                <option value="">Virology</option>
                <option value="">Cardiology</option>

                </select>
                <select name="" id="" className="bg-transparent border-collapse cursor-pointer border-b-2 border-textGray border-opacity-60 text-textGray  p-2 outline-none">
                <option value="">Availabilty</option>
                <option value="">Available</option>
                <option value="">Unavailable</option>

                </select>
                <select name="" id="" className="bg-transparent border-collapse cursor-pointer border-b-2 border-textGray border-opacity-60 text-textGray  p-2 outline-none">
                <option value="">Bangalore</option>
                <option value="">Delhi</option>
                <option value="">Mumbai</option>
                <option value="">Pune</option>
                <option value="">Guwahati</option>


                </select>
            </form>
        </div>
    )
}

export default FilterSection
