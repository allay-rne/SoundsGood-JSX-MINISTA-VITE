import './PlatformCard.scss'

const PlatformCard = (props) => {
  const {
    title,
    description,
    imgSrc,
  } = props

  return (
    <div className="platform-card">
      <header className="platform-card__header">
        <div className="platform-card__image-wrapper">
          <img
            className="platform-card__image"
            src={imgSrc}
            width={40}
            height={40}
            alt=""
            loading="lazy"
          />
        </div>

        <h3 className="platform-card__title h4">
          {title}
        </h3>
      </header>

      <div className="platform-card__description">
        <p>{description}</p>
      </div>
    </div
      >
  )
}

export default PlatformCard
