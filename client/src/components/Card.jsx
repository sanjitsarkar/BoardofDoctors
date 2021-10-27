import React,{ useState,useEffect} from 'react'


const Card = ({doctorInfo}) => {
    const [loading1,setLoading1] = useState(false)
    const [locationName,setLocation] = useState("")
    const [loading2,setLoading2] = useState(false)
    const [specializationName,setSpecializationName] = useState("")

    // const fetchLocationName = async () => {
    //     setLoading1(true)
    //    let response = await fetch("http://localhost:5000/locations/"+doctorInfo.locationId)
    //         response = await response.json();
    //    console.log(response)
    // setLocationName(response)
    //    setLoading1(false)

    // }
    const fetchSpecializationName = async () => {
        setLoading2(true)
       let response = await fetch("http://localhost:5000/specializations/"+doctorInfo.specializationId)
            response = await response.json();
       console.log(response)
       setSpecializationName(response.name)
       setLoading2(false)

    }
    useEffect(() => {
         fetchSpecializationName()
        //  fetchLocationName()
    }, [])
    return (
        <>
        {
            
            loading2 ?<h1>Loading...</h1>:
        <div className="shadow-md bg-white rounded-sm">
           <div className="flex justify-between px-5 py-4 flex-wrap gap-20 ">
               <div className="flex gap-4 items-center">
<img className="rounded-full w-16 h-16" src={doctorInfo.imgUrl} alt={doctorInfo.name} />
<div className="flex flex-col">
    <h1 className="text-DarkBlue">{doctorInfo.name}</h1>
    <div className="mt-1 space-y-.5 text-textDark text-sm">
    <h4>{doctorInfo.experience} years experience</h4>
    <h4>{doctorInfo.degree}</h4>
    <h4>{specializationName}</h4>
    </div>

</div>
               </div>
               <div className="flex items-end">
               ₹{" "}{doctorInfo.fee}
               </div>
           </div>
           <div className="border-t flex flex-wrap px-5 py-4  justify-between">
            <div className="text-textDark text-sm">
           <h5>Next Availability</h5>
           <h4>At {doctorInfo.nextAvailability}</h4>
            </div>
            <button className="outline-none border-none text-secondary">
                SCHEDULE NOW
            </button>
           </div>
        </div>
        }
        </>
    )
}

export default Card
