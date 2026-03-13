import './ArtistBannerCard.scss'
import {Image} from "minista";
import Button from "@/components/Button";
import classNames from "classnames";


const ArtistBannerCard = (props) => {
  const {
    title,
    titleId,
    TitleTag = 'h2',
    description,
    imgSrc,
    isSmallPaddingY = false,
  } = props

  return (
    <div
      className="artist-banner-card"
    >
      <Image
        className="artist-banner-card__image"
        src={imgSrc}
      />
      <div
        className={classNames('artist-banner-card__inner', {
          'artist-banner-card__inner--small-padding-y': isSmallPaddingY
        })}
      >
        <div className="artist-banner-card__body">
          <TitleTag
            className="artist-banner-card__title h3"
            id={titleId}
          >
            {title}
          </TitleTag>
          <div className="artist-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="artist-banner-card__footer">
          <Button
            className="artist-banner-card__play-button"
            iconName="play"
            label="Enjoy now"
            hasFillIcon
          />
          <div className="artist-banner-card__actions">
            <Button
              mode="black-06"
              iconName="heart"
              label="Add to playlist"
              isLabelHidden
              hasFillIcon
            />
            <Button
              mode="black-06"
              iconName="fingerDown"
              label="Don't recommend"
              isLabelHidden
              hasFillIcon
            />
            <Button
              mode="black-06"
              iconName="volume"
              label="Mute"
              isLabelHidden
              hasFillIcon
            />

          </div>
        </footer>
      </div>
    </div>
  )
}

export default ArtistBannerCard