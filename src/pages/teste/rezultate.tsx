/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'

import { API_1 } from './1'
import { API_2 } from './2'
import { API_3 } from './3'
import { API_4 } from './4'
import { API_5 } from './5'
import { API_6 } from './6'
import { API_7 } from './7'
import { API_8 } from './8'
import { API_9 } from './9'
import { API_10 } from './10'
import { Button, Card } from 'flowbite-react'
import { useRouter } from 'next/router'

const Results = () => {
  const intrebari1 = API_1.getQuestions()
  const usedSet1 = API_1.getUsedState()

  const intrebari2 = API_2.getQuestions()
  const usedSet2 = API_2.getUsedState()

  const intrebari3 = API_3.getQuestions()
  const usedSet3 = API_3.getUsedState()

  const intrebari4 = API_4.getQuestions()
  const usedSet4 = API_4.getUsedState()

  const intrebari5 = API_5.getQuestions()
  const usedSet5 = API_5.getUsedState()

  const intrebari6 = API_6.getQuestions()
  const usedSet6 = API_6.getUsedState()

  const intrebari7 = API_7.getQuestions()
  const usedSet7 = API_7.getUsedState()

  const intrebari8 = API_8.getQuestions()
  const usedSet8 = API_8.getUsedState()

  const intrebari9 = API_9.getQuestions()
  const usedSet9 = API_9.getUsedState()

  const intrebari10 = API_10.getQuestions()
  const usedSet10 = API_10.getUsedState()

  let correctAnswers = 0
  let wrongAnswers = 0
  let intrebari: {
    input: number
    intrebare: string
    raspunsuri: string[]
    raspuns: number
  }[]

  let correctAnswers1 = 0
  let wrongAnswers1 = 0

  let correctAnswers2 = 0
  let wrongAnswers2 = 0

  let correctAnswers3 = 0
  let wrongAnswers3 = 0

  let correctAnswers4 = 0
  let wrongAnswers4 = 0

  let correctAnswers5 = 0
  let wrongAnswers5 = 0

  let correctAnswers6 = 0
  let wrongAnswers6 = 0

  let correctAnswers7 = 0
  let wrongAnswers7 = 0

  let correctAnswers8 = 0
  let wrongAnswers8 = 0

  let correctAnswers9 = 0
  let wrongAnswers9 = 0

  let correctAnswers10 = 0
  let wrongAnswers10 = 0

  let newarr: unknown[] = []
  let unusedSet = 0

  const router = useRouter()
  function checkUsedSet() {
    if (usedSet1 == 1) {
      const wrongIndex1 = new Array(intrebari1.length).fill(0)
      intrebari1.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers1++
        else wrongAnswers1++
        for (let i = 0; i < intrebari1.length; i++) {
          if (intrebari1[i]!.input != intrebari1[i]?.raspuns)
            wrongIndex1[i] = i + 1
        }
      })
      newarr = wrongIndex1.filter((a) => a !== 0)
      intrebari = intrebari1
      correctAnswers = correctAnswers1
      wrongAnswers = wrongAnswers1
    } else if (usedSet2 == 1) {
      const wrongIndex2 = new Array(intrebari2.length).fill(0)
      intrebari2.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers2++
        else wrongAnswers2++
      })

      for (let i = 0; i < intrebari2.length; i++) {
        if (intrebari2[i]!.input != intrebari2[i]?.raspuns)
          wrongIndex2[i] = i + 1
      }
      newarr = wrongIndex2.filter((a) => a !== 0)
      intrebari = intrebari2
      correctAnswers = correctAnswers2
      wrongAnswers = wrongAnswers2
    } else if (usedSet3 == 1) {
      const wrongIndex3 = new Array(intrebari3.length).fill(0)
      intrebari3.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers3++
        else wrongAnswers3++
      })

      for (let i = 0; i < intrebari3.length; i++) {
        if (intrebari3[i]!.input != intrebari3[i]?.raspuns)
          wrongIndex3[i] = i + 1
      }
      newarr = wrongIndex3.filter((a) => a !== 0)
      intrebari = intrebari3
      correctAnswers = correctAnswers3
      wrongAnswers = wrongAnswers3
    } else if (usedSet4 == 1) {
      const wrongIndex4 = new Array(intrebari4.length).fill(0)
      intrebari4.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers4++
        else wrongAnswers4++
      })

      for (let i = 0; i < intrebari4.length; i++) {
        if (intrebari4[i]!.input != intrebari4[i]?.raspuns)
          wrongIndex4[i] = i + 1
      }
      newarr = wrongIndex4.filter((a) => a !== 0)
      intrebari = intrebari4
      correctAnswers = correctAnswers4
      wrongAnswers = wrongAnswers4
    } else if (usedSet5 == 1) {
      const wrongIndex5 = new Array(intrebari5.length).fill(0)
      intrebari5.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers5++
        else wrongAnswers5++
      })

      for (let i = 0; i < intrebari5.length; i++) {
        if (intrebari5[i]!.input != intrebari5[i]?.raspuns)
          wrongIndex5[i] = i + 1
      }
      newarr = wrongIndex5.filter((a) => a !== 0)
      intrebari = intrebari5
      correctAnswers = correctAnswers5
      wrongAnswers = wrongAnswers5
    } else if (usedSet6 == 1) {
      const wrongIndex6 = new Array(intrebari6.length).fill(0)
      intrebari6.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers6++
        else wrongAnswers6++
      })

      for (let i = 0; i < intrebari6.length; i++) {
        if (intrebari6[i]!.input != intrebari6[i]?.raspuns)
          wrongIndex6[i] = i + 1
      }
      newarr = wrongIndex6.filter((a) => a !== 0)
      intrebari = intrebari6
      correctAnswers = correctAnswers6
      wrongAnswers = wrongAnswers6
    } else if (usedSet7 == 1) {
      const wrongIndex7 = new Array(intrebari7.length).fill(0)
      intrebari7.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers7++
        else wrongAnswers7++
      })

      for (let i = 0; i < intrebari7.length; i++) {
        if (intrebari7[i]!.input != intrebari7[i]?.raspuns)
          wrongIndex7[i] = i + 1
      }
      newarr = wrongIndex7.filter((a) => a !== 0)
      intrebari = intrebari7
      correctAnswers = correctAnswers7
      wrongAnswers = wrongAnswers7
    } else if (usedSet8 == 1) {
      const wrongIndex8 = new Array(intrebari8.length).fill(0)
      intrebari8.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers8++
        else wrongAnswers8++
      })

      for (let i = 0; i < intrebari8.length; i++) {
        if (intrebari8[i]!.input != intrebari8[i]?.raspuns)
          wrongIndex8[i] = i + 1
      }
      newarr = wrongIndex8.filter((a) => a !== 0)
      intrebari = intrebari8
      correctAnswers = correctAnswers8
      wrongAnswers = wrongAnswers8
    } else if (usedSet9 == 1) {
      const wrongIndex9 = new Array(intrebari9.length).fill(0)
      intrebari9.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers9++
        else wrongAnswers9++
      })

      for (let i = 0; i < intrebari9.length; i++) {
        if (intrebari9[i]!.input != intrebari9[i]?.raspuns)
          wrongIndex9[i] = i + 1
      }
      newarr = wrongIndex9.filter((a) => a !== 0)
      intrebari = intrebari9
      correctAnswers = correctAnswers9
      wrongAnswers = wrongAnswers9
    } else if (usedSet10 == 1) {
      const wrongIndex10 = new Array(intrebari10.length).fill(0)
      intrebari10.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers10++
        else wrongAnswers10++
      })

      for (let i = 0; i < intrebari10.length; i++) {
        if (intrebari10[i]!.input != intrebari10[i]?.raspuns)
          wrongIndex10[i] = i + 1
      }
      newarr = wrongIndex10.filter((a) => a !== 0)
      intrebari = intrebari10
      correctAnswers = correctAnswers10
      wrongAnswers = wrongAnswers10
    } else unusedSet = 1
  }
  checkUsedSet()
  if (unusedSet == 0) {
    return (
      <>
        <h1>Intrebari gresite</h1>
        <ul>
          {newarr.map((index: any) => (
            <>
              <li>{intrebari[index - 1]?.intrebare}</li> {/*intrebare*/}
              <li>
                {/*raspuns corect */}
                {
                  intrebari[index - 1]?.raspunsuri[
                    intrebari[index - 1]!.raspuns - 1
                  ]
                }{' '}
                ✓
              </li>
              <li>
                {' '}
                {/*raspuns user */}
                {
                  intrebari[index - 1]?.raspunsuri[
                    intrebari[index - 1]!.input - 1
                  ]
                }{' '}
                X
              </li>
            </>
          ))}
        </ul>
      </>
    )
  } else
    return (
      <>
        <div className="absolute grid h-[90%] w-screen overflow-hidden z-100">
          <div className="mx-auto my-auto flex h-1/2 w-1/5 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 z-50 relative grid">
            <div className="h-8 absolute z-1 w-auto text-center font-bold text-xl mt-4 my-auto inset-x-0 top-0">Nu ai dat niciun test!</div>
            <div className="h-12 w-1/2 mx-auto mt-24 text-center">Trebuie să parcurgeți un test înainte de a vedea rezultatele.</div>
            <div className="h-12 mb-16 w-3/4 mx-auto text-center">Click mai jos pentru a ajunge la cuprinsul de teste sau pe pagina principală.</div>
          <div className="flex inline-block justify-between mx-12">
          <Button
            className="w-1/3 rounded-xl text-green-900 bg-[#59CE8F] border border-green-200 enabled:hover:bg-[#59CE8Fad] focus:ring-2 focus:ring-green-200"
            onClick={() => {
              void router.push('/teste')
            }}
          >Teste</Button>
          <Button
            className="w-1/3 rounded-xl text-cyan-900 bg-[#3AA6B9] border border-blue-200 enabled:hover:bg-[#3AA6B9ad] focus:ring-2 focus:ring-blue-200	"
            onClick={() => {
              void router.push('/')
            }}
          >Acasa</Button>
          </div>
          </div>
        </div>
      </>
    )
}
export default Results
