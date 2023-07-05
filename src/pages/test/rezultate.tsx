/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react'

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
import { arrowParens } from 'prettier.config.cjs'
import { ClipboardDocumentListIcon, HomeIcon } from '@heroicons/react/24/outline'

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
  let corrArr: unknown[] = []
  let unusedSet = 0

  const router = useRouter()
  function checkUsedSet() {
    if (usedSet1 == 1) {
      const wrongIndex1 = new Array(intrebari1.length).fill(0)
      const correctIndex = new Array(intrebari1.length).fill(0)
      intrebari1.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers1++
        else wrongAnswers1++
        for (let i = 0; i < intrebari1.length; i++) {
          if (intrebari1[i]!.input != intrebari1[i]?.raspuns)
            wrongIndex1[i] = i + 1
        }
      })
      for (let i = 0; i < intrebari1.length; i++) {
        if (intrebari1[i]!.input == intrebari1[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex1.filter((a) => a !== 0)
      intrebari = intrebari1
      correctAnswers = correctAnswers1
      wrongAnswers = wrongAnswers1
    } else if (usedSet2 == 1) {
      const wrongIndex2 = new Array(intrebari2.length).fill(0)
      const correctIndex = new Array(intrebari2.length).fill(0)
      intrebari2.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers2++
        else wrongAnswers2++
      })

      for (let i = 0; i < intrebari2.length; i++) {
        if (intrebari2[i]!.input != intrebari2[i]?.raspuns)
          wrongIndex2[i] = i + 1
      }
      for (let i = 0; i < intrebari2.length; i++) {
        if (intrebari2[i]!.input == intrebari2[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex2.filter((a) => a !== 0)
      intrebari = intrebari2
      correctAnswers = correctAnswers2
      wrongAnswers = wrongAnswers2
    } else if (usedSet3 == 1) {
      const wrongIndex3 = new Array(intrebari3.length).fill(0)
      const correctIndex = new Array(intrebari3.length).fill(0)
      intrebari3.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers3++
        else wrongAnswers3++
      })

      for (let i = 0; i < intrebari3.length; i++) {
        if (intrebari3[i]!.input != intrebari3[i]?.raspuns)
          wrongIndex3[i] = i + 1
      }
      for (let i = 0; i < intrebari3.length; i++) {
        if (intrebari3[i]!.input == intrebari3[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex3.filter((a) => a !== 0)
      intrebari = intrebari3
      correctAnswers = correctAnswers3
      wrongAnswers = wrongAnswers3
    } else if (usedSet4 == 1) {
      const wrongIndex4 = new Array(intrebari4.length).fill(0)

      const correctIndex = new Array(intrebari4.length).fill(0)
      intrebari4.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers4++
        else wrongAnswers4++
      })

      for (let i = 0; i < intrebari4.length; i++) {
        if (intrebari4[i]!.input != intrebari4[i]?.raspuns)
          wrongIndex4[i] = i + 1
      }
      for (let i = 0; i < intrebari4.length; i++) {
        if (intrebari4[i]!.input == intrebari4[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex4.filter((a) => a !== 0)
      intrebari = intrebari4
      correctAnswers = correctAnswers4
      wrongAnswers = wrongAnswers4
    } else if (usedSet5 == 1) {
      const wrongIndex5 = new Array(intrebari5.length).fill(0)

      const correctIndex = new Array(intrebari5.length).fill(0)
      intrebari5.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers5++
        else wrongAnswers5++
      })

      for (let i = 0; i < intrebari5.length; i++) {
        if (intrebari5[i]!.input != intrebari5[i]?.raspuns)
          wrongIndex5[i] = i + 1
      }
      for (let i = 0; i < intrebari5.length; i++) {
        if (intrebari5[i]!.input == intrebari5[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex5.filter((a) => a !== 0)
      intrebari = intrebari5
      correctAnswers = correctAnswers5
      wrongAnswers = wrongAnswers5
    } else if (usedSet6 == 1) {
      const wrongIndex6 = new Array(intrebari6.length).fill(0)

      const correctIndex = new Array(intrebari6.length).fill(0)
      intrebari6.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers6++
        else wrongAnswers6++
      })

      for (let i = 0; i < intrebari6.length; i++) {
        if (intrebari6[i]!.input != intrebari6[i]?.raspuns)
          wrongIndex6[i] = i + 1
      }
      for (let i = 0; i < intrebari6.length; i++) {
        if (intrebari6[i]!.input == intrebari6[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex6.filter((a) => a !== 0)
      intrebari = intrebari6
      correctAnswers = correctAnswers6
      wrongAnswers = wrongAnswers6
    } else if (usedSet7 == 1) {
      const wrongIndex7 = new Array(intrebari7.length).fill(0)

      const correctIndex = new Array(intrebari7.length).fill(0)
      intrebari7.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers7++
        else wrongAnswers7++
      })

      for (let i = 0; i < intrebari7.length; i++) {
        if (intrebari7[i]!.input != intrebari7[i]?.raspuns)
          wrongIndex7[i] = i + 1
      }
      for (let i = 0; i < intrebari7.length; i++) {
        if (intrebari7[i]!.input == intrebari7[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex7.filter((a) => a !== 0)
      intrebari = intrebari7
      correctAnswers = correctAnswers7
      wrongAnswers = wrongAnswers7
    } else if (usedSet8 == 1) {
      const wrongIndex8 = new Array(intrebari8.length).fill(0)

      const correctIndex = new Array(intrebari8.length).fill(0)
      intrebari8.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers8++
        else wrongAnswers8++
      })

      for (let i = 0; i < intrebari8.length; i++) {
        if (intrebari8[i]!.input != intrebari8[i]?.raspuns)
          wrongIndex8[i] = i + 1
      }
      for (let i = 0; i < intrebari8.length; i++) {
        if (intrebari8[i]!.input == intrebari8[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex8.filter((a) => a !== 0)
      intrebari = intrebari8
      correctAnswers = correctAnswers8
      wrongAnswers = wrongAnswers8
    } else if (usedSet9 == 1) {
      const wrongIndex9 = new Array(intrebari9.length).fill(0)

      const correctIndex = new Array(intrebari9.length).fill(0)
      intrebari9.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers9++
        else wrongAnswers9++
      })

      for (let i = 0; i < intrebari9.length; i++) {
        if (intrebari9[i]!.input != intrebari9[i]?.raspuns)
          wrongIndex9[i] = i + 1
      }
      for (let i = 0; i < intrebari9.length; i++) {
        if (intrebari9[i]!.input == intrebari9[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex9.filter((a) => a !== 0)
      intrebari = intrebari9
      correctAnswers = correctAnswers9
      wrongAnswers = wrongAnswers9
    } else if (usedSet10 == 1) {
      const wrongIndex10 = new Array(intrebari10.length).fill(0)

      const correctIndex = new Array(intrebari10.length).fill(0)
      intrebari10.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers10++
        else wrongAnswers10++
      })

      for (let i = 0; i < intrebari10.length; i++) {
        if (intrebari10[i]!.input != intrebari10[i]?.raspuns)
          wrongIndex10[i] = i + 1
      }
      for (let i = 0; i < intrebari10.length; i++) {
        if (intrebari10[i]!.input == intrebari10[i]?.raspuns)
          correctIndex[i] = i + 1
      }
      corrArr = correctIndex.filter((a) => a !== 0)
      newarr = wrongIndex10.filter((a) => a !== 0)
      intrebari = intrebari10
      correctAnswers = correctAnswers10
      wrongAnswers = wrongAnswers10
    } else unusedSet = 1
  }
  checkUsedSet()
  function DividerBar(index: any, arr: any[]) {
    if (index < Math.max(...arr))
      return (
        <div className="mx-auto mt-10 max-w-2xl gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none" />
      )
    else return <div />
  }
  function renderWrongCard() {
    return (
      <>
        {
          <div className="display: block">
          <div className="text-2xl font-bold text-center text-green-900">
            Raspunsuri gresite
          </div>
          <Card className="h-max max-w-md max-h-[50vh] overflow-y-scroll border-lime-500 bg-gradient-to-tr from-lime-200 to-green-300">

            <ul>
              {newarr.map((index: any) => (
                <>
                  <li>
                    {index}
                    {'. '}
                    {intrebari[index - 1]?.intrebare}
                  </li>
                  <br />
                  <li className="text-green-500">
                    {
                      intrebari[index - 1]?.raspunsuri[
                        intrebari[index - 1]!.raspuns - 1
                      ]
                    }{' '}
                    ✓
                  </li>
                  <li className="text-red-500">
                    {' '}
                    {
                      intrebari[index - 1]?.raspunsuri[
                        intrebari[index - 1]!.input - 1
                      ]
                    }{' '}
                    X{DividerBar(index, newarr)}
                  </li>
                </>
              ))}
            </ul>
          </Card>
          </div>
        }
      </>
    )
  }
  function renderCorrectCard() {
    return (
      <>
        {
          <div className="display: block">
            <div className="text-2xl font-bold text-center text-green-900">
              Raspunsuri corecte
            </div>
          <Card className="h-max max-w-md max-h-[50vh] overflow-y-scroll border-lime-500 bg-gradient-to-tr from-lime-200 to-green-300 object-right">
            <ul>
              {corrArr.map((index: any) => (
                <>
                  <li>
                    {index}
                    {'. '}
                    {intrebari[index - 1]?.intrebare}
                  </li>
                  <br />
                  <li className="text-green-500">
                    {
                      intrebari[index - 1]?.raspunsuri[
                        intrebari[index - 1]!.raspuns - 1
                      ]
                    }{' '}
                    ✓
                    {DividerBar(index, corrArr)}
                  </li>
                </>
              ))}
            </ul>
          </Card>
          </div>
        }
      </>
    )
  }
  const [currWordG, setCurrWordG] = React.useState('Raspunsuri')
  const [currWordC, setCurrWordC] = React.useState('Raspunsuri')
  function changeWord(){
    if(correctAnswers == 1) setCurrWordC('1 Raspuns Corect')
    else if(correctAnswers == 0) setCurrWordC('Niciun Raspuns Corect')
    else setCurrWordC(correctAnswers + ' Raspunsuri Corecte') 
    if(wrongAnswers == 1) setCurrWordG('1 Raspuns Gresit')
    else if(wrongAnswers == 0) setCurrWordG('Niciun Raspuns Gresit')
    else setCurrWordG(wrongAnswers + ' Raspunsuri Gresite')
  }
  useEffect(() => {
    changeWord()
  }, [correctAnswers, wrongAnswers])
  function renderCorWroCounter(){
    //create me a small card with centered text that shows the number of correct and wrong answers
    //correct in green and wrong in red
    return(
      <>
        <Card className="h-max max-w-md max-h-[50vh] mt-8  border-lime-500 bg-gradient-to-tr from-lime-200 to-green-300 object-right">
          <ul>
            <li className="text-green-500">
              {currWordC}
            </li>
            <li className="text-red-500">
              {currWordG}
            </li>
          </ul>
        </Card>
      </>
    )
  }
  if (unusedSet == 0) {
    return (
      <>
        <h1 className='text-center mt-20 text-4xl font-extrabold'>Rezultate</h1>
        <div className=" mt-20 w-auto  ml-[50%] translate-x-[-50%] grid grid-cols-3 gap-4">
          {renderWrongCard()}
          {renderCorWroCounter()} 
          {renderCorrectCard()}
        </div>
              <Button
                className=" rounded-xl border-lime-500 bg-gradient-to-tr from-lime-200 to-green-300 flex justify-center mx-auto -mt-48 text-black"
                onClick={() => {
                  void router.push('/test/cuprins')
                }}
              >
                Teste <ClipboardDocumentListIcon className='w-6 h-6 ml-1'/>
              </Button>
              <Button
                className=" rounded-xl border-lime-500 bg-gradient-to-tr from-lime-200 to-green-300 flex justify-center mx-auto mt-8 text-black"
                onClick={() => {
                  void router.push('/')
                }}
              >
                Acasa  <HomeIcon className='w-6 h-6 ml-1'/>
              </Button>
              <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[1200/1100] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-lime-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div><div
            className="absolute inset-x-0 -top-16 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
            aria-hidden="true"
    >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1100/500] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-lime-300 to-lime-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div><div
            className="absolute inset-x-0 -top-12 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
        >
            <div
                className="relative right-[calc(0%+11rem)] aspect-[1100/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-green-900 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div>
      </>
    )
  } else
    return (
      <>
        <div className="z-100 absolute grid h-[90%] w-screen overflow-hidden">
          <div className="relative z-50 mx-auto my-auto flex grid h-1/2 w-1/5 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="z-1 absolute inset-x-0 top-0 my-auto mt-4 h-8 w-auto text-center text-xl font-bold">
              Nu ai dat niciun test!
            </div>
            <div className="mx-auto mt-24 h-12 w-1/2 text-center">
              Trebuie să parcurgeți un test înainte de a vedea rezultatele.
            </div>
            <br/>
            <div className="mx-auto mb-12 h-12 w-3/4 text-center">
              Click mai jos pentru a ajunge la cuprinsul de teste sau pe pagina
              principală.
            </div>
            <div className="mx-12 inline-block flex justify-between">
              <Button
                className="w-1/3 rounded-xl border border-green-200 bg-[#59CE8F] text-green-900 focus:ring-2 focus:ring-green-200 enabled:hover:bg-[#59CE8Fad]"
                onClick={() => {
                  void router.push('/test/cuprins')
                }}
              >
                Teste
              </Button>
              <Button
                className="w-1/3 rounded-xl border border-blue-200 bg-[#3AA6B9] text-cyan-900 focus:ring-2 focus:ring-blue-200 enabled:hover:bg-[#3AA6B9ad]	"
                onClick={() => {
                  void router.push('/')
                }}
              >
                Acasa
              </Button>
              <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[16/9] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div><div
            className="absolute inset-x-0 -top-70 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
            aria-hidden="true"
    >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[16/9] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-300 to-yellow-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div><div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
        >
            <div
                className="relative right-[calc(0%+11rem)] aspect-[16/9] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-green-900 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div>
            </div>
          </div>
        </div>
      </>
    )
}
export default Results
