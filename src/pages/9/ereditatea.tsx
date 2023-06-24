import React from "react"
export default function Ereditatea() {
    return(
        <>
        <div className="" >
            <h1 className=" text-center text-3xl">EREDITATEA ȘI VARIABILITATEA LUMII VII</h1>
            <div className="mt-4 ml-1">
                LEGILE EREDITĂȚII <br/>
                1. Legea purității gameților <br/>
                2. Legea segregării independente a perechilor de caractere <br/>
                - Au fost formulate de Gregor Mendel în urma experimentelor de hibridare la mazăre. <br/>
                - El e a arătat că transmiterea caracterelor ereditare se realizează prin intermediul unor factori ereditari (gene), care se găsesc sub formă 
                de pereche în celulele corpului și sub formă simplă în gameți. <br/>
                MONOHIBRIDAREA <br/>
                - Încrucișarea organismelor care se deosebesc printr-o singură pereche de caractere ereditare. <br/>
                Mendel a încrucișat două varietăți de mazăre: <br/>
                - mazăre cu bob neted (AA) x mazăre cu bob zbârcit (aa) <br/>
                - Caracterul bob neted = Dominant (AA) <br/>
                - Caracterul cu bob zbârcit = Recesiv (aa) <br/>
                Organismele care prezintă factori ereditari identici în fiecare pereche sunt pure genetic (HOMOZIGOTE). <br/>
                Organismele care prezintă factori ereditari diferiți cel puțin într-o pereche sunt impure genetic (HETEROZIGOTE). <br/>
                Prin <span className="underline">autopolenizarea</span> plantelor hibride (heterozigote) - Aa din F1, în F2 au rezultat 75% plante cu bob neted și 25% plante cu bob zbârcit. <br/>
                Segregarea după fenotip fiind în raport de 3:1 (75%:25%) ={">"} plante cu bob neted:plante cu bob zbârcit. <br/>
                Conform primei legi, legea purității gameților, gameții sunt întotdeauna puri, adică nu conțin decât unul din factorii ereditari pereche. <br/>
                <span className="font-extrabold">Genotip</span> = totalitatea factorilor ereditari care intră în structura genetică a unui organism <br/>
                <span className="font-extrabold">Fenotip</span> = totalitatea trăsăturilor morfologice, fiziologice, biochimice și de comportament, ce sunt rezultatul interacțiunii dintre genotip și mediu. <br/>
                DIHIBRIDAREA <br/>
                Constă în încrucișarea a două organisme ce se deosebesc prin două perechi de caractere ereditare. <br/>
                Mendel a încrucișat două varietăți de mazăre ce se deosebeau prin două perechi de caractere ereditare. <br/>
                - mazăre cu bob neted și galben (AABB) x mazăre cu bob zbârcit și verde (aabb) <br/>
                - Organismele hibride (heterozigote) produc patru categorii de gameți: AB, Ab, aB, ab, feminini și masculini, 
                prin a căror combinare rezultă 16 categorii de indivizi. <br/>
                Segregare în F2 după fenotip = 9:3:3:1 <br/>
                - 9/16 DD (dominant dominant) - neted, galben <br/>
                - 3/16 DR (dominant recesiv) - neted, verde <br/>
                - 3/16 RD (recesiv dominant) - zbârcit, galben <br/>
                - 1/16 RR (recisiv reicisiv) - zbârcit, galben <br/>
                - Conform celei de a II-a legi, legea segregării independente de altă pereche de factori ereditari, astfel încât, în F2, 
                raportul de segregare după fenotip, pentru o pereche de factori ereditari, este de 3:1, iar pentru două perechi este de 9:3:3:1. <br/>
                ABATERI DE LA LEGILE MENDELIENE <br/>
                <span className="font-extrabold">Codominanța</span> = fenomenul de interacțiune dintr două gene, ambele distincte, care, împreună, duc la apariția unui nou fenotip: grupa de sânge AB(IV).
            </div>
        </div>
        </>
    )
}