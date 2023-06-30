/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { useState } from 'react'
import { API } from './1'

const Results = () => {
  const ansArray = API.getAnswers()
  const intrebari = API.getQuestions()
  const wrongIndex = new Array(intrebari.length).fill(0)
  let correctAnswers = 0
  let wrongAnswers = 0
  ansArray.forEach((element) => {
    if (element === 1) {
      correctAnswers++
    } else {
      wrongAnswers++
    }
  })
  for (let i = 0; i < intrebari.length; i++) {
    if (ansArray[i] === 0) {
      wrongIndex[i] = i + 1
    }
  }
  const newarr = wrongIndex.filter(a => a !== 0)
  function renderWrongQuestions() {
    return (
      <>
        <h1>Intrebari gresite</h1>
        <ul>
          {newarr.map((index) => (
            <>
              <li key={index}>{intrebari[index - 1]?.intrebare}</li>
              <li key={'raspuns' + index}>
                {
                  intrebari[index - 1]?.raspunsuri[
                    intrebari[index - 1]?.raspuns - 1
                  ]
                } ✓
              </li>
              <li key={'user' + index}>
                {
                  intrebari[index - 1]?.raspunsuri[
                    intrebari[index - 1]?.input - 1
                  ]
                } 𐄂
              </li>
            </>
          ))}
        </ul>
      </>
    )
  }

  return (
    <div>
      <h1>Rezultate</h1>
      <h2>Corecte: {correctAnswers}</h2>
      <h2>Gresite: {wrongAnswers}</h2>
        {renderWrongQuestions()}
    </div>
  )
}
export default Results
