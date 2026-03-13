import './Hero.scss'
import Button from "@/components/Button";

const Hero = () => {
  const titleId = 'hero-title'
  const playButtonTitle = 'Play Music'

  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button className="hero__play-button"
            type="button"
                  aria-label={playButtonTitle}
                  title={playButtonTitle}
          >
            <img
              className="hero__play-button-image"
              alt=""
              src="/play.svg"
              width={470}
              height={470}
            />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title" id={titleId}>
            The Best Streaming Experience
          </h1>
          <div className="hero__description">
            <p>
              SoundsGood is the best streaming service for listening to your favorite music and distributing your hits. Enjoy a vast selection of genres and artists. Create personal playlists and find the perfect mood in seconds. Artists can upload releases to all platforms with one click.
            </p>
            <Button
              className="hero__button"
              iconName="play"
              hasFillIcon
              label="Start Listening Now"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero