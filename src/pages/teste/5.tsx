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

export const API_5 = {
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

const Test5 = () => {
  const [usedTSet, setUsedSet] = useState(0)
  const [intrebari, setIntrebari] = useState([
    new test('Gameții feminini se formează prin diviziunea:', 4, -1, [
      'ovulului',
      'mitotică',
      'testiculului',
      'meiotică',
    ]),

    new test('Sindromul Down reprezintă:', 1, -1, [
      'trisomia 21',
      'trisomia 18',
      'trisomia 13',
      'trisomia 22',
    ]),

    new test('Este plantă dicotiledonată:', 2, -1, [
      'porumbul',
      'crizantema',
      'ceapa',
      'gladiola',
    ]),

    new test('Mamifer digitigrad este:', 2, -1, [
      'ariciul',
      'pisica',
      'oaia',
      'calul',
    ]),

    new test('Trombocitele au rol în:', 3, -1, [
      'transportul gazelor',
      'fagocitoza microbilor',
      'coagularea sângelui',
      'imunitatea organismului',
    ]),

    new test('Peștii au:', 4, -1, [
      'respirație branhială',
      'dezvoltare prin metamorfoză',
      'înotătoare codală pereche',
      'nutriție heterotrofă',
    ]),

    new test('Fermentația alcoolică este produsă de:', 1, -1, [
      'drojdii',
      'flagelate',
      'mucegaiuri',
      'protiste',
    ]),

    new test('Seismonastiile sunt:', 3, -1, [
      'induse cu forța gravitațională',
      'mișcări orientate ale plantelor',
      'prezente la frunzele de mimoză',
      'provocate de variații termice',
    ]),

    new test('Respirația cutanee la vertebrate:', 2, -1, [
      'este prezentă la reptilele acvatice și terestre',
      'este completată de alte tipuri de respirație',
      'se face printr-un sistem de tuburi',
      'presupune existența unui tegument uscat',
    ]),

    new test('Sunt organite celulare cu rol în respirație:', 3, -1, [
      'cloroplastele',
      'oleoplastele',
      'mitocondriile',
      'plstidele',
    ]),

    new test(
      'Variabilitatea reprezintă însușirea organismelor care aparțin specii de a:',
      3,
      -1,
      [
        'deține aceeași informație genetică',
        'realiza un permanent schimb cu mediul',
        'se deosbi unele de celelalte',
        'transmite caractere la descendenți',
      ]
    ),

    new test('Cerebelul:', 3, -1, [
      'are rol în înregistrarea temperaturii',
      'este situat în canalul vertebral',
      'prezintă substanță albă la interior',
      'recepționează informații vizuale',
    ]),

    new test('Animal ocrotit în Delta Dunării este:', 4, -1, [
      'tisa',
      'crapul',
      'râsul',
      'lopătanul',
    ]),

    new test('Au rol în digestia intracelulară:', 2, -1, [
      'centriolii',
      'lizozomii',
      'nucleolii',
      'ribozomii',
    ]),

    new test('Prezintă corp acoperit cu pene:', 3, -1, [
      'amfibienii',
      'mamiferele',
      'păsările',
      'reptilele',
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
export default Test5
