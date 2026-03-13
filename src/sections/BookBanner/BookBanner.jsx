import './BookBanner.scss'
import classNames from 'classnames'
import ArtistBannerCard from "@/components/ArtistBannerCard";

const BookBanner = () => {
  const titleId = 'show-banner-title'

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <ArtistBannerCard
        title='Harry Potter'
        titleId={titleId}
        TitleTag="h1"
        description='J.K. Rowlings Harry Potter series (7 books) follows a boy wizard who learns about magic and attends Hogwarts. Along with his friends Ron and Hermione, Harry fights evil throughout his years at Hogwarts.'
        imgSrc="/src/assets/images/music-artists/books/banner-book/1.jpg"
        isSmallPaddingY
      />
    </section>
  )
}

export default BookBanner