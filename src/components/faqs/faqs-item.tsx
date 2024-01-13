'use client'
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
type FaqsData={
  id:number,
  title:string,
  content:string
}
interface Props {
  faqsContent:FaqsData[];
}
const FaqsItem = ({faqsContent}:Props) => {
  return (
    <div>
        <Accordion.Root
    className="bg-mauve6 w-full lg:w-[600px] rounded-md shadow-[0_2px_10px] shadow-black/5 space-y-4 divide-y-2 "
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {
      faqsContent.map((item)=>(
        <Accordion.AccordionItem value={`item-${item.id}`} key={item.id} className='my-2'>
        <Accordion.AccordionTrigger className='flex justify-between w-full items-center font-bold text-base' >{item.title}
          <ChevronDownIcon className="w-5 h-5 text-black/50" />
        </Accordion.AccordionTrigger>
        <Accordion.AccordionContent className='font-normal text-sm text-[#777777]'> {item.content}</Accordion.AccordionContent>
      </Accordion.AccordionItem>

      ))
    }

  </Accordion.Root>
    </div>
  )
}

export default FaqsItem