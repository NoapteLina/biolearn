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

export const API_10 = {
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

const Test10 = () => {
  const [usedTSet, setUsedSet] = useState(0)
  const [intrebari, setIntrebari] = useState([
    new test('Este suc digestiv:', 2, -1, [
      'amilaza',
      'bila',
      'lactaza',
      'pepsina',
    ]),

    new test('Hemofilia se caracterizează prin:', 1, -1, [
      'deficiențe de coagulare a sângelui ',
      'incapacitatea de a distinge culoarea roșie de culoarea verde',
      'prezența în sânge a hematiilor în formă de seceră',
      'prezența unui heterozom suplimentar',
    ]),

    new test('Sângele este adus în atriul drept al inimii prin:', 3, -1, [
      'artera aortă',
      'artera pulmonară',
      'venele cave',
      'venele pulmonare',
    ]),

    new test('Plastidele sunt organite celulare întâlnite la:', 3, -1, [
      'bacterii',
      'bazidiomicete',
      'monocotiledonate',
      'urodele',
    ]),

    new test('Are corpul reprezentat de corm:', 3, -1, [
      'bacilul fânului',
      'cornul secarei',
      'laricele (zada)',
      'sbârciogul',
    ]),

    new test('Centrozomii se găsesc în: ', 3, -1, [
      'centromer',
      'lizozom',
      'nucleu',
      'ribozom',
    ]),

    new test('Foveea centralis:', 4, -1, [
      'asigură acomodarea pentru distanță',
      'este o componentă a coroidei',
      'face parte din sistemul optic',
      'se găsește la nivelul petei galbene',
    ]),

    new test('Inima, la om, este un organ:', 2, -1, [
      'respirator',
      'muscular',
      'pereche',
      'tricameral',
    ]),

    new test('Stomacul produce:', 3, -1, [
      'bilă',
      'salivă',
      'suc gastric',
      'suc pancreatic',
    ]),

    new test('Sindromul Turner:', 1, -1, [
      'reprezintă o monosomie',
      'este o trisomie laterală',
      'prezintă cariotipul 2n = 47 + XXX',
      'se transmite de la mamă la băieți',
    ]),

    new test('Venele cave se deschid în:', 1, -1, [
      'atriul drept',
      'atriul stâng',
      'ventriculul stâng',
      'ventriculul drept',
    ]),

    new test('George Emil Palade a descoperit:', 3, -1, [
      'cloroplastele',
      'lizozomii',
      'ribozomii',
      'vacuolele',
    ]),

    new test('Are corpul reprezentat de corm:', 1, -1, [
      'tisa',
      'bacilul tetanosului',
      'drojdia',
      'lichenul de piatră',
    ]),

    new test(
      'Știința care studiază clasificarea organismelor se numește:',
      4,
      -1,
      ['citologie', 'evoluționism', 'histologie', 'sistematică']
    ),

    new test(
      'Țesutul alcătuit din neuroni și celule gliale (nevroglii) se numește:',
      3,
      -1,
      ['cartilaginos', 'muscular', 'nervos', 'osos spongios']
    ),
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
export default Test10
