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
                <p className="container1 text-black"><button onClick={()=>void router.push('/9/celula')}>1. Celula și compoziția ei chimică</button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>2. Celula procariotă</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>3. Celula eucariotă</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>4. Peretele celular + Membrana celulară</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>5. Citoplasma</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>6. Organitele celulare</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>7. Cromozomii</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>8. Diviziunea celulara</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>9. Mitoza.Meioza</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>10. Ereditatea și variabilitatea lumii vii</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>11. Grupe de sânge. Determinismul cromozomilor sexelor. Influența mediului asupra eredității.</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>12. Genetica umană</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>13. Diversitatea lumii vii</button></p> 
            </div>
        </>
    )
}
export default Cuprins