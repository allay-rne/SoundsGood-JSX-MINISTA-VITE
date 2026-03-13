import './Books.scss'
import AccordionGroup from "@/components/AccordionGroup";
import bookItems from "@/components/Books/bookItems";
import Accordion from "@/components/Accordion";
import ChaptersCard from "@/components/ChaptersCard";

const Books = () => {

  return(
    <AccordionGroup
      className="books"
      mode="dark"
      isOrderedList={false}
    >
      {bookItems.map(({title, subtitle,  chapters}, index) => (
        <Accordion
        title={title}
        titleLevelClassName="h4"
        subtitle={subtitle}
        id={`book-${index}`}
        name="books"
        isOpen={index === 0}
        key={index}
        isArrowButton
        >
          <ul className="books__list">
            {chapters.map((chapters, index) => (
              <li className="books__item" key={index}>
                <ChaptersCard {...chapters} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Books
