/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Button, Card } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

export class test {
  intrebare: string
  raspuns: number
  input: number
  raspunsuri: string[]
  constructor(
    intrebare: string,
    raspuns: number,
    input: number,
    raspunsuri: string[] = []
  ) {
    this.intrebare = intrebare
    this.raspuns = raspuns
    this.input = input
    this.raspunsuri = raspunsuri
  }
}

function shuffleQs(intrebari: test[]) {
  for (let i = intrebari.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[intrebari[i]!.intrebare, intrebari[j]!.intrebare] = [
      intrebari[j]!.intrebare,
      intrebari[i]!.intrebare,
    ]
    ;[intrebari[i]!.input, intrebari[j]!.input] = [
      intrebari[j]!.input,
      intrebari[i]!.input,
    ]
    ;[intrebari[i]!.raspuns, intrebari[j]!.raspuns] = [
      intrebari[j]!.raspuns,
      intrebari[i]!.raspuns,
    ]
    ;[intrebari[i]!.raspunsuri, intrebari[j]!.raspunsuri] = [
      intrebari[j]!.raspunsuri,
      intrebari[i]!.raspunsuri,
    ]
  }
  return intrebari
}
let g_Intrebari: test[]
let g_Answers: any[]
let usedSet: number

export const API_4 = {
  getQuestions: function () {
    return g_Intrebari
  },
  getAnswers: function () {
    return g_Answers
  },
  getUsedState: function () {
    return usedSet
  },
}

const Test4 = () => {
  const [usedTSet, setUsedSet] = useState(0)
  const [intrebari, setIntrebari] = useState([
    new test(
      'Exemplu de fruct uscat indehiscent, întâlnit la angiosperme, este:',
      2,
      -1,
      ['capsula', 'cariospa', 'păstaia', 'silicva']
    ),

    new test('Celulele cu conuri sunt:', 4, -1, [
      'absente în pata galbenă',
      'celule chemosensibile',
      'componente ale nervului optic',
      'localizate în retină',
    ]),

    new test('La plante, fotosinteza:', 2, -1, [
      'are loc în absența pigmenților asimilatori',
      'este un tip de nutriție autotrofă',
      'eliberează energie luminoasă',
      'sintetizează substanțe anorganice',
    ]),

    new test(
      'La realizarea funcției de nutriție a organismelor participă sistemele:',
      1,
      -1,
      [
        'circulator, digestiv, excretor',
        'digestiv, muscular, osos',
        'excretor, nervos, muscular',
        'respirator, osos, muscular',
      ]
    ),

    new test(
      'Fiecare dintre celulele-fiice, formate prin diviziunea mitotică a unei celule-mamă cu 2n = 28 cromozomi, are:',
      2,
      -1,
      [
        '2n  = 28 cromozomi',
        '2n = 14 cromozomi',
        'n = 28 cromozomi',
        'n = 14 cromozomi',
      ]
    ),

    new test('Insuficiența renală cronică este o boală a sistemului:', 3, -1, [
      'circulator',
      'digestiv',
      'excretor',
      'respirator',
    ]),

    new test(
      'Glanda anexă, componentă a sistemului digestiv al mamiferelor este:',
      3,
      -1,
      ['esofagul', 'faringele', 'pancreasul', 'stomacul']
    ),

    new test('La plante, fotosinteza:', 4, -1, [
      'are sediul în mitocondrie',
      'are loc în absența pigmenților clorofilieni',
      'descompune apa în faze de întuneric',
      'se poate evidenția după O2 produs',
    ]),

    new test(
      'Fiecare dintre celulele-fiice formate prin diviziunea meiotică a unei celule-mamă cu 2n = 36 cromozomi are:',
      4,
      -1,
      [
        '2n = 36 cromozomi',
        '2n = 18 cromozomi',
        'n = 36 cromozomi',
        'n = 18 cromozomi',
      ]
    ),

    new test('Boală cu transmitere sexuală este:', 2, -1, [
      'astigmatismul',
      'candidoza',
      'epilepsia',
      'gastrita',
    ]),

    new test('Cale respiratorie a mamiferelor este:', 4, -1, [
      'alveola pulmonară',
      'esofagul',
      'pleura',
      'laringele',
    ]),

    new test('La mamifere, ureterele', 4, -1, [
      'alcătuiesc zona medulară a rinichilor',
      'au formă de pâlnie cu baza spre hilul renal',
      'sunt localizate între vezica urinară și uretră',
      'transportă urina către vezica urinară',
    ]),

    new test('La plante, fotosinteza:', 2, -1, [
      'eliberează CO2 în prezența luminii',
      'necesită prezența pigmenților asimilatori',
      'poate fi evidențiată după O2 absorbit',
      'produce o cantitate mare de energie',
    ]),

    new test('Din grupul protistelor fac parte:', 4, -1, [
      'briatele',
      'eubacteriile',
      'filicatele',
      'sporozoarele',
    ]),

    new test('Anurele sunt:', 3, -1, [
      'anelide',
      'artropode',
      'cordate',
      'reptile',
    ]),
  ])
  const [shouldRender, setRender] = useState(false)
  const tempAns = new Array(intrebari.length).fill(0)
  const [ansArray, setAnsarray] = useState(new Array(intrebari.length).fill(0))
  useEffect(() => {
    setIntrebari(shuffleQs(intrebari))
    setRender(true)
    g_Intrebari = intrebari
  }, [intrebari])
  useEffect(() => {
    g_Answers = ansArray
  }, [ansArray])
  useEffect(() => {
    usedSet = usedTSet
  }, [usedTSet])
  const router = useRouter()
  let currAns = -1
  const [counter, setCounter] = useState(0)
  const [currWord, setWord] = useState('Next')
  const activateButton = (id: number) => {
    currAns = id
    document.getElementById(id.toString())?.classList.add('outline')
    for (let i = 1; i <= 4; i++) {
      if (i != id)
        document.getElementById(i.toString())?.classList.remove('outline')
    }
  }
  const submit = () => {
    intrebari[counter]!.input = currAns
    if (currAns === intrebari[counter]?.raspuns) {
      tempAns[counter] = 1
    }
    setUsedSet(1)
    setCounter((count) => count + 1)
    document.getElementById(currAns.toString())?.classList.remove('outline')
    if (counter >= intrebari.length - 2) {
      setWord('Finish')
      console.log(usedSet)
    }
    if (counter == intrebari.length - 1) {
      setAnsarray(tempAns)
      setRender(false)
      void router.push('/teste/rezultate')
    }
  }
  function renderQuestions() {
    if (shouldRender) {
      return (
        <>
          <Card className="max-w-sm">
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {intrebari[counter]?.intrebare}
            </h5>
            <Card>
              <Button
                pill
                gradientDuoTone="tealToLime"
                id="1"
                onClick={() => activateButton(1)}
              >
                {intrebari[counter]?.raspunsuri[0]}
              </Button>
              <Button
                pill
                gradientDuoTone="tealToLime"
                id="2"
                onClick={() => activateButton(2)}
              >
                {intrebari[counter]?.raspunsuri[1]}
              </Button>
              <Button
                pill
                gradientDuoTone="tealToLime"
                id="3"
                onClick={() => activateButton(3)}
              >
                {intrebari[counter]?.raspunsuri[2]}
              </Button>
              <Button
                pill
                gradientDuoTone="tealToLime"
                id="4"
                onClick={() => activateButton(4)}
              >
                {intrebari[counter]?.raspunsuri[3]}
              </Button>
            </Card>
            <Button pill gradientDuoTone="greenToBlue" onClick={() => submit()}>
              {currWord}
            </Button>
          </Card>
        </>
      )
    } else return <div></div>
  }

  return <div>{renderQuestions()}</div>
}
export default Test4
