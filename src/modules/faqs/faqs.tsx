import FaqsItem from '@/components/faqs/faqs-item'
import React from 'react'

const Faqs = () => {
  const faqsContent=[
    {
      id:1,
      
      title:"How to play this game?",
      content:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    },
    {
      id:2,
      title:"How to play this game?",
      content:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    }
    ,
    {
      id:3,
      title:"How to play this game?",
      content:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    },
    {
      id:4,
      title:"How to play this game?",
      content:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    },
    {
      id:5,
      title:"How to play this game?",
      content:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive."
    }
  ]
  return (
    <div className='py-14'>
        <h1 className='font-bold text-4xl text-primary text-center'>FAQs</h1>
        <div className='flex justify-center items-center py-4'>
            <FaqsItem  faqsContent={faqsContent}/>
        </div>
    </div>
  )
}

export default Faqs