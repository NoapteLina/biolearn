import React from "react";
import { useRouter } from "next/router";
function Cuprins (){
    const router = useRouter()
    return (
        <>
            <div className="container">
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>1. Țesuturi vegetale</button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>2. Țesuturi animale</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>3. Nutriția și digestia</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>4. Respirația</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>5. Circulația</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>6. Excreția</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>7. Funcțiile de relație</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>8. Sistemul nervos la mamifere</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>9. Reproducerea la plante</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}>10. Reproducerea la om</button></p> 
            </div>
        </>
    )
}
export default Cuprins