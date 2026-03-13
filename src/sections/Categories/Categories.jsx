import Section from "@/layouts/Section";
import './Categories.scss'
import CategoryCards from "@/components/CategoryCards";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import categoryItems from "./categoryItems";

const Categories = () => {


  const sliderNavigationId = 'catigories-slider-navigation'

  return (
    <Section
      title="Explore our wide variety of genres"
      titleId="catigories-title"
      description="Whether you're looking for upbeat tracks to lift your mood, chill music for relaxation, or experimental genres for new discoveries"
      actions={(
        <SliderNavigation
          mode="tile"
          id={sliderNavigationId}
        />
      )}
      isActionsHiddenOnMobile
    >

      <Slider
        navigationTargetElementId={sliderNavigationId}
        bleedMobileS
      >
        {categoryItems.map((categoryItems, index) => (
          <CategoryCards
            {...categoryItems}
            key={index}
          />
        ))}
      </Slider>
    </Section>
  );
}

export default Categories