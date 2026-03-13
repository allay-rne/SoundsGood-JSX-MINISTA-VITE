import './Questions.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import Button from "@/components/Button";
import AccordionGroup from "@/components/AccordionGroup";
import questions from "@/sections/Questions/index";
import Accordion from "@/components/Accordion";

const Questions = () => {
  const questionItems = [
    {
      title: 'What is SoundsGood?',
      content: 'SoundsGood is a music distribution platform that delivers your releases to Spotify, Apple Music, TikTok, VK Music, Yandex Music, YouTube Music, iTunes and 100+ streaming platforms worldwide. Artists keep 100% royalties with fast delivery and detailed analytics.'
    },
    {
      title: 'How much does SoundsGood cost?',
      content: 'Our pricing starts at just $4.49/month for music streaming subscriptions and $9.99/month per releases for distribution to all major platforms. Check our pricing page for subscription plans and special offers for artists.'
    },
    {
      title: 'What content is available on SoundsGood?',
      content: 'SoundsGood distributes all types of original music releases: singles, EPs, albums across genres like Russian Rap, Lo-Fi, Hip-Hop, Rock, and more.'
    },
    {
      title: 'How can I use SoundsGood?',
      content: 'Upload your releases via our web dashboard or desktop app. Select platforms (Spotify, TikTok, etc.), add artwork and metadata. We distribute to 100+ platforms automatically.'
    },
    {
      title: 'How do I sign up for SoundsGood?',
      content: 'Visit SoundsGood.com and click "Sign Up". Fill out the quick artist registration form with your email and create a password. Verify your account and start uploading releases immediately.'
    },
    {
      title: 'What is the SoundsGood free trial?',
      content: 'New artists get their first single distributed free. Test our service with one release to Spotify, Apple Music, and 10 major platforms at no cost. Plus 1 month full access to all music streaming.'
    },
    {
      title: 'How do I contact SoundsGood customer support?',
      content: 'Email support@soundsgood.com or use live chat on our website. Our 24/7 artist support team responds within 2 hours.'
    },
    {
      title: 'What are the SoundsGood payment methods?',
      content: 'We accept credit/debit cards (Visa, Mastercard, MIR), PayPal, Apple Pay, Google Pay, and bank transfers. '
    },
  ]

  return (
  <Section
    title="Frequently Asked Questions"
    tilteId="questions-title"
    description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about SoundsGood."
    actions={(
      <Button
        label="Ask a Question"
        href="/support"
      />
    )}
  >
    <AccordionGroup columns={2}>
      {questionItems.map((item, index) => (
        <Accordion
        title={item.title}
        id={`question-${index}`}
        name="questions"
        isOpen={index === 0}
        key={index}
        >
          <p>{item.content}</p>
        </Accordion>
      ))}
    </AccordionGroup>
  </Section>
  )
}

export default Questions
