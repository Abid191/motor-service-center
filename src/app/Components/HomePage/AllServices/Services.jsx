import React from 'react'
import DataCards from '../../DataCards/DataCards'
import { allServiceData } from '@/Services/Get-All-Api/Api'

export default async function Services() {

    const motorData = await allServiceData()

    return (
        <div className='mt-32 '>
            <h2 className="text-orange-400 text-2xl text-center font-bold">Service</h2>
            <h1 className="text-4xl font-bold text-center mt-5">Our Service Area</h1>
            <p className="text-center mt-5"> the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-y-5 lg:ml-16">
                {
                    motorData.services?.map((service)=> (<DataCards 
                    key={service.id}
                    service = {service}
                    ></DataCards>))
                }
            </div>
        </div>
    )
}
