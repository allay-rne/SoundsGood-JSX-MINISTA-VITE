import './MusicCard.scss'
import {Image} from "minista";
import Badge from "@/components/Badge";
import RatingView from "@/components/RatingView";

const MusicCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    auditions,
    artist,
    released,
    /*

    */
    href = '/artistCard',
    rating,
  } = props

  return(
    <a
      className="music-card"
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        className="music-card__image"
        src={imgSrc}
      />
      <div className="music-card__body">

        {duration && (
          <Badge
            iconName="clock"
            iconAriaLabel="Duration"
            hasFillIcon
          >
            {duration}
          </Badge>
        )}

        {artist && (
          <Badge
            iconName="artist"
            iconLabel="Artist"
            hasFillIcon
          >
            {artist}
          </Badge>
        )}

        {rating &&(
          <Badge
            className="music-card__rating-badge"
          >

          <RatingView {...rating} />

          </Badge>
        )}

        {auditions && (
          <Badge
            iconName="auditions"
            iconLabel="Auditions"
            hasFillIcon
          >
            {auditions}
          </Badge>
        )}

        {released && (
          <Badge
            className="music-card__released-badge"
          >
            SOON: <time
            className="music-card__released-badge-label"
            dateTime={released.dateTime}>{released.label}</time>
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MusicCard