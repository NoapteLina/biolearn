import React from "react";
import { useRouter } from "next/router";
function Cuprins (){
    const router = useRouter()
    return (
        <>
            <div className="container">
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Țesuturi vegetale</button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Țesuturi animale</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Nutriția-digestia</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Sistemul digestiv </button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Sucurile digestive </button></p>
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Respirația anaerobă</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Sistemul respirator</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Mediul intern</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Sistemul circulator</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Excreția la plante</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Sistemul excretor</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Sensibilitatea și mișcarea</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Ochiul</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Urechea</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Limba</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Sistemul nervos la mamifere</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Reproducerea la plante</button></p> 
                <p className="container1 text-black"><button onClick={()=>void router.push('/')}> Reproducerea la om</button></p> 
            </div>
        </>
    )
}
export default Cuprins