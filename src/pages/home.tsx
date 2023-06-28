import React from "react"
import Navbar from "~/components/navbar"
import IconPencil from "~/components/icons/IconPencil"
import { Icon10 } from "~/components/icons/Icon10"
import BioLearnLogo from "~/components/icons/logo/BioLearnLogo"
export default function Home() {
    return(
        <>
        <div className="bg-[#ffaaff]" >
            <Navbar/>
            <h1 className="mt-[24%] text-center">Home</h1>
            <div className="text-center">This is the home page</div>
            <IconPencil className="ml-[24%]"/>
            <Icon10/>
            <BioLearnLogo/>
        </div>
        </>
    )
}