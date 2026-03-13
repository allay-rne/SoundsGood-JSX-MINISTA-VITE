import './ChaptersCard.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const ChaptersCard = (props) => {
  const {
    number,
    title,
    description,
    duration,
    video,
  } = props

const playButtonTitle = 'Play audio'

  return (
    <div className="chapters-card">
      <div className="chapters-card__number">
        {number}
      </div>

      <div className="chapters-card__player" data-js-video-player="">
        <video
          className="chapters-card__video"
          src={video.src}
          poster={video.poster}
          width={172}
          height={118}
          data-js-video-player-video=""
        />
        <button
          className="chapters-card__play-button is-active"
          type="button"
          aria-label={playButtonTitle}
          title={playButtonTitle}
          data-js-video-player-play-button=""
        >
          <Icon
            className="chapters-card__play-button-icon"
            name="play-circle"
          />
        </button>
      </div>

      <div className="chapters-card__body">
        <div className="chapters-card__info">
          <h4 className="chapters-card__title h6">{title}</h4>
          <div className="chapters-card__duration">
            <Icon
              name="clock"
              ariaLabel="Duration"
            />
            <span>{duration}</span>
          </div>
        </div>
        <div className="chapters-card__description hidden-mobile">
          <p>{description}</p>
        </div>
      </div>

    </div>
  )
}

export default ChaptersCard