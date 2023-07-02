/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react'
import { API_1 } from './1'
import { API_2 } from './2'

const Results = () => {
  const ansArray1 = API_1.getAnswers()
  const intrebari1 = API_1.getQuestions()
  const usedSet1 = API_1.getUsedState()
  const ansArray2 = API_2.getAnswers()
  const intrebari2 = API_2.getQuestions()
  const usedSet2 = API_2.getUsedState()
  let correctAnswers = 0
  let wrongAnswers = 0
  let intrebari = []
  let correctAnswers1 = 0
  let wrongAnswers1 = 0
  let correctAnswers2 = 0
  let wrongAnswers2 = 0
  let newarr: unknown[] = []

  function checkUsedSet() {
    if (usedSet1 == 1) {
      const wrongIndex1 = new Array(intrebari1.length).fill(0)
      intrebari1.forEach((element) => {
        if (element.raspuns == element.input) correctAnswers1++
        else wrongAnswers1++
        for (let i = 0; i < intrebari1.length; i++) {
          if (intrebari1[i].input != intrebari1[i].raspuns)
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
        if (intrebari2[i].input != intrebari2[i].raspuns) wrongIndex2[i] = i + 1
      }
      newarr = wrongIndex2.filter((a) => a !== 0)
      intrebari = intrebari2
      correctAnswers = correctAnswers2
      wrongAnswers = wrongAnswers2
    }
  }
  checkUsedSet()
  return (
    <>
      <h2>Corecte: {correctAnswers}</h2>
      <h2>Gresite: {wrongAnswers}</h2>
      <h1>Intrebari gresite</h1>
      <ul>
        {newarr.map((index) => (
          <>
            <li>{intrebari[index - 1]?.intrebare}</li> {/*intrebare*/}
            <li>{/*raspuns corect */}
              {
                intrebari[index - 1]?.raspunsuri[
                  intrebari[index - 1]?.raspuns - 1
                ]
              }{' '}
              ✓
            </li>
            <li> {/*raspuns user */}
              {
                intrebari[index - 1]?.raspunsuri[
                  intrebari[index - 1]?.input - 1
                ]
              }{' '}
              X
            </li>
          </>
        ))}
      </ul>
    </>
  )
}
export default Results
