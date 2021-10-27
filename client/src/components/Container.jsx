import React, { useState,useEffect } from 'react'
import Card from './Card'
// import FilterSection from './FilterSection'
const Container = () => {
const [appointments,setAppointments] = useState([])
const [loading,setLoading] = useState([])
const [locations,setLocations] = useState([])
const [loading1,setLoading1] = useState(false)
const [specializations,setSpecializations] = useState([])
const [specializationId,setSpecializationId] = useState()
const [availabilty,setAvailabilty] = useState()

const [locationId,setLocationId] = useState()

const [loading2,setLoading2] = useState(false)
    const fetchLocations = async () => {
        setLoading1(true)
       let response = await fetch("http://localhost:5000/locations")
            response = await response.json();
       console.log(response)
    setLocations(response)
    // setLocationId(response[0]._id)
       setLoading1(false)
    }
    const fetchSpecializations = async () => {
        setLoading2(true)
       let response = await fetch("http://localhost:5000/specializations")
            response = await response.json();
       console.log(response)
       setSpecializations(response)
// setSpecializationId(response[0]._id)

       setLoading2(false)

    }
    useEffect(() => {
        fetchLocations()
        fetchSpecializations()
    }, [])
    useEffect(() => {
        fetchAppointments()
        console.log(locationId,specializationId,availabilty)
    }, [locationId,specializationId,availabilty])

    const fetchAppointments = async () => {
        setLoading(true)
        let response
        if((locationId===undefined || locationId==="") && (specializationId===undefined || specializationId==="") && (availabilty===undefined || availabilty==="") )
        {
            response= await fetch("http://localhost:5000/appointments")
            response =  await response.json();

        }
        else{
       
            const query=`locationId=${locationId}&specializationId=${specializationId}&isAvailable=${availabilty}`
            response= await fetch("http://localhost:5000/appointments/search?"+query)
            response =  await response.json();
        
    
        }
       console.log("Response",response)
       setAppointments(response)
       setLoading(false)

    }
    useEffect(() => {
        fetchAppointments()
    }, [])
    const doctorInfo = {
        // "imgUrl":"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a4/a41795f375124be120574af0d23951887c1ef9b9_full.jpg",
        "imgUrl":"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/09/09f4a824f2df9507b2789f166fd37923aca0beb6_full.jpg",
        "name":"Dr. S. Raja Sabapathy",
        "experience":20,
        "degree":"MD",
        "specialization":"Dermatologist",
        "fee":500,
        "nextAvailability":"5:30 PM"
    }
    return (
        <>
     <div className="py-5 bg-white shadow-md px-10">
            <form className=" flex gap-5">
                <select name="" id=""  onChange={(e)=>setSpecializationId(e.target.value)} className="bg-transparent border-collapse cursor-pointer outline-none text-lg">
                <option value="undefined" key="All">All</option>
                {specializations.map((specialization)=>(<option  value={specialization._id} key={specialization._id}>{specialization.name}</option>))}
               

                </select>
                <select name="" id="" onChange={(e)=>setAvailabilty(e.target.value)} className="bg-transparent border-collapse cursor-pointer border-b-2 border-textGray border-opacity-60 text-textGray  p-2 outline-none">
                <option value="undefined">Availabilty</option>
                <option value="true" >Available</option>
                <option value="false">Unavailable</option>

                </select>
                <select name="" id="" onChange={(e)=>setLocationId(e.target.value)} className="bg-transparent border-collapse cursor-pointer border-b-2 border-textGray border-opacity-60 text-textGray  p-2 outline-none">
                    <option value="undefined" key="All">All</option>
                {
                
                locations.map((location)=>(<option value={location._id} key={location._id}>{location.name}</option>))}

                

                </select>
            </form>
        </div>

        <div className="flex gap-4 flex-wrap mt-5 mx-10">
{loading ?<h1>Loading....</h1>:
            appointments.length==0 ? <h1>Not Available</h1>:
            
                appointments.map((appointment)=>(<Card doctorInfo={appointment} key={appointment._id}/>))
                
}
          
            

        </div>
        </>
    )
}

export default Container
