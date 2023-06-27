import React from "react";
import { useRouter } from "next/router";
import BioLearnLogo from "~/components/icons/logo/BioLearnLogo";
function Cuprins (){
    const router = useRouter()
    return (
        <>
            <div className="line"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
            <div className="container">
                <p className="container1 text-black"><button onClick={()=>void router.push('/9/celula')}> Celula și compoziția ei chimică</button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Celula procariotă</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Celula eucariotă</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Peretele celular + Membrana celulară</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Citoplasma</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Organitele celulare</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Cromozomii</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Diviziunea celulara</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Mitoza.Meioza</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Ereditatea și variabilitatea lumii vii</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Grupe de sânge. Determinismul cromozomilor sexelor. Influența mediului asupra eredității.</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Genetica umană</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Diversitatea lumii vii</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Virusuri</button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Regnul Monera</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Regnul Protista</button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Regnul Fungi</button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Regnul Plante</button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Regnul Animal</button></p>
            </div>
        </>
    )
}
export default Cuprins