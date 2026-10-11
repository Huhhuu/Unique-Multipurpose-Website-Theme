import { useState } from 'react'
import AccordionItem from '@/components/molecules/AccordionItem'

export default function AccordionGroup({
  items = [],
  initialOpen = {},
  className = '',
}) {
  const [openItems, setOpenItems] = useState(initialOpen)

  const toggleAccordion = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-6 sm:gap-8 pt-2 ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={Boolean(openItems[item.id])}
          onToggle={toggleAccordion}
        />
      ))}
    </div>
  )
}
