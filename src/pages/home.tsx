import React from "react"
import Navbar from "~/components/navbar"
import IconPencil from "~/components/icons/IconPencil"
export default function Home() {
    return(
        <div>
            <Navbar/>
            <h1 className="mt-[24%] text-center">Home</h1>
            <div className="text-center">This is the home page</div>
            <IconPencil className="ml-[24%]"/>
        </div>
    )
}