import './Collections.scss'
import Tabs from "@/components/Tabs";
import collectionGroups from "./collectionGroups";
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import CategoryCards from "@/components/CategoryCards";
import getIdFromTitle from "@/utils/getIdFromTitle";
import MusicCard from "@/components/MusicCard";

const Collections = () => {

  return (

    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionGroups.map((collectionGroups) => ({
        isActive: collectionGroups.isActive,
        title: collectionGroups.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionGroups.title}
            </p>
            {collectionGroups.items.map((collectionItem, index) => {
              const {
                title,
                categoryItems,
                musicItems,
                sliderParams,
              } = collectionItem

              const titleFormatted = `${getIdFromTitle(collectionGroups.title)}-${getIdFromTitle(title)}`
              const titleId = `${titleFormatted}-title`
              const sliderNavigationId = `${titleFormatted}-slider-navigation`

              return (
                <Section
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={(
                    <SliderNavigation
                    id={sliderNavigationId}
                    mode="tile"
                    />
                  )}
                  isActionsHiddenOnMobile
                  key={index}
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    bleedMobileS
                  >
                    {categoryItems?.map((categoryItem, index) => (
                      <CategoryCards
                        {...categoryItem}
                        key={index}
                      />
                    )) ?? musicItems.map((musicItems) => (
                      <MusicCard
                        {...musicItems}
                        key={index}
                      />
                    ))}
                  </Slider>
                </Section>
              )
            })}

          </div>
        )
      }))}
    />
  )
}

export default Collections
