import React from 'react'
import Card from './Card'

const Container = () => {
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
        <div className="flex gap-4 flex-wrap mt-5 mx-10">
            <Card doctorInfo={doctorInfo}/>
            <Card doctorInfo={doctorInfo}/>
            <Card doctorInfo={doctorInfo}/>
            <Card doctorInfo={doctorInfo}/>
            <Card doctorInfo={doctorInfo}/>
            <Card doctorInfo={doctorInfo}/>

        </div>
    )
}

export default Container
