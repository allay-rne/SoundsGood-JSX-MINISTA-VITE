import './ArtistBanner.scss'
import classNames from 'classnames'
import Slider from "@/components/Slider";
import ArtistBannerCard from "@/components/ArtistBannerCard";

const ArtistBanner = () => {
  const titleId = 'movies-banner-title'

  const artistCards = [
    {
      title: 'XXXMANERA',
      description: 'XXXMANERA works with mood and atmosphere.\n' +
        'Dark sound, dense production, and focus on the state, not the image.\n' +
        'No extra noise or explanations — just tracks that hit at the right moment.\n' +
        'Turn it on and stay in it.',
      imgSrc: '/src/assets/images/artist-banner/xxxmanera.jpeg'
    },

    {
      title: 'AllAY',
      description: 'AllAY — about space, emotions, and sound as landscape.\n' +
        'Meditative melodies, deep drones, and soft textures that create mood without rush.\n' +
        'Chill beats, ambient, and downtempo where every detail sounds like breath, not aggression — works not just with ears, but with the body.',
      imgSrc: '/src/assets/images/artist-banner/allayrnw.jpg'
    },

    {
      title: 'ROCKET',
      description: 'ROCKET — about sticky vibe, rhythm, and street atmosphere.\n' +
        'Deep flow, characterful production, and a crisp beat that hooks from the first seconds.\n' +
        'No extra words — tracks that work instantly and set the mood.\n' +
        'Just hit play on ROCKET and soak in the sound.',
      imgSrc: '/src/assets/images/artist-banner/rocket.jpg'
    },

    {
      title: 'KIZARU',
      description: 'KIZARU — about style, flow, and confidence in sound.\n' +
        'Cold vibe, crisp rhythm, and focus on moving forward.\n' +
        'No explanations or excuses — just what works.\n' +
        'Hit play and stay in the flow.',
      imgSrc: '/src/assets/images/artist-banner/kizaru.jpg'
    },

    {
      title: 'BIG BABY TAPE',
      description: 'Big Baby Tape — about flow, energy, and details in sound.\n' +
        'Bright production, crisp rhythm, and focus on mood.\n' +
        'No extra explanations — tracks that work right away.\n' +
        'Just hit play.',
      imgSrc: '/src/assets/images/artist-banner/BBT.jpg'
    },
  ]

  return (
    <section
      className="artist-banner container"
      aria-labelledby={titleId}
    >
      <h1 className="visually-hidden" id={titleId}>
        Music & Artists
      </h1>

      <Slider
        sliderParams={{
          sliderPerView: 1,
          breakpoint: {
            1024: {
              allowTouchMove: false,
            },
          },
        }}
        navigationPosition="abs-bottom"
        hasScrollbarOnMobile={false}
        >
        {artistCards.map((artistCards, index) => (
          <ArtistBannerCard
            {...artistCards}
            key={index}
          />
        ))}
      </Slider>

    </section>
  )

}


export default ArtistBanner
