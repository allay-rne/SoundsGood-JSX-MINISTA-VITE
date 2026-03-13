import './MovieBanner.scss'
import ArtistBannerCard from "@/components/ArtistBannerCard";

const MovieBanner = () => {

  const titleId = 'movie-banner-title'

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <ArtistBannerCard
        title="Boy in striped pajamas"
        titleId={titleId}
        TitleTag="h1"
        description="The commandant's son befriends prisoner Shmuel through the fence. Tragedy."
        imgSrc="/src/assets/images/music-artists/books/films-by-book/1.jpg"
        isSmallPaddingY
      />

    </section>
  )
}

export default MovieBanner
