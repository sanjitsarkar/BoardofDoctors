// import React,{ useState,useEffect} from 'react'

// const FilterSection = ({}) => {
    
//     return (
//         <div className="py-5 bg-white shadow-md px-10">
//             <form className=" flex gap-5">
//                 <select name="" id=""  className="bg-transparent border-collapse cursor-pointer outline-none text-lg">
//                 {specializations.map((specialization)=>(<option onClick={setSpecializationId(specialization._id)} value={specialization._id} key={specialization._id}>{specialization.name}</option>))}
               

//                 </select>
//                 <select name="" id="" className="bg-transparent border-collapse cursor-pointer border-b-2 border-textGray border-opacity-60 text-textGray  p-2 outline-none">
//                 <option value="">Availabilty</option>
//                 <option value="true" onClick={setAvailabilty(true)}>Available</option>
//                 <option value="false" onClick={setAvailabilty(false)}>Unavailable</option>

//                 </select>
//                 <select name="" id="" className="bg-transparent border-collapse cursor-pointer border-b-2 border-textGray border-opacity-60 text-textGray  p-2 outline-none">
//                 {locations.map((location)=>(<option onClick={setLocationId(location._id)}  value={location._id} key={location._id}>{location.name}</option>))}

                

//                 </select>
//             </form>
//         </div>
//     )
// }

// export default FilterSection
