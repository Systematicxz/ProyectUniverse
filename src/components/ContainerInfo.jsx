import React from 'react'
import Button from './Button'

const ContainerInfo = ({quote, handleNewQuote}) => {
    

  return (
  

    <section className='ContainerInfo'>
    <h1 className='containerInfo__title'>The infinite Universe</h1>

    <Button handleNewQuote={handleNewQuote}/>

    <article className='ContainerInfo_phrase'>
      <article className='ContainerInfo_phrase2' > 
      <p>{quote.phrase}</p>
      </article>
      {/* <p>{quote.phrase}</p> */}
    </article>

    <article className='ContainerInfo_author'>
     <h4>Fuente: {quote.author}</h4>
    </article>
  </section>

  )
}

export default ContainerInfo