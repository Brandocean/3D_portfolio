import React from 'react'

import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const TechPhone = () => {
    return (
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
                {technologies.map((technology) => (
                    <div
                        key={technology.name}
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${technology.style} flex flex-col items-center justify-center`}
                    >
                        <img src={technology.icon} alt="" className={`w-20 mx-auto`}/>
                        <p className="mt-4 text-[17px] max-w-3xl leading-[30px]">{technology.name}</p>
                    </div>
                ))}
            </div>
    )
}

export default SectionWrapper(TechPhone, "")