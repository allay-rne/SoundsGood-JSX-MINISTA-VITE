import './Platforms.scss'
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import PlatformCard from "@/components/PlatformCard";


const Platforms = () => {
  const platformItems = [
    {
      title: 'Yandex Music',
      description: 'SoundsGood delivers your releases to Yandex Music instantly. Reach millions of Russian listeners on Russia\'s top streaming service.',
      imgSrc: '/platforms/YaMuz.svg'
    },

    {
      title: 'Spotify',
      description: 'SoundsGood delivers your releases to Spotify instantly. Reach over 600 million users worldwide through the global leader in music streaming.',
      imgSrc: '/platforms/Spoty.svg'
    },

    {
      title: 'YouTube Music',
      description: 'SoundsGood delivers your releases to YouTube Music instantly. Reach billions of users through the largest music platform powered by YouTube.',
      imgSrc: '/platforms/YouTubMuz.svg'
    },

    {
      title: 'VK Music',
      description: 'SoundsGood delivers your releases to VK Music instantly. Reach tens of millions of Russian users through the leading social music platform.',
      imgSrc: '/platforms/VKmuz.svg'
    },

    {
      title: 'TikTok',
      description: 'SoundsGood delivers your releases to TikTok instantly. Go viral with billions of creators and fans.',
      imgSrc: '/platforms/TikTok.svg'
    },

    {
      title: 'ITunes',
      description:'SoundsGood delivers your releases to iTunes instantly. Reach premium listeners worldwide through Apple\u2019s iconic music store.',
      imgSrc: '/platforms/Itunse.svg'
    },
  ]

  return (
    <Section
      title="Fast delivery of your releases to Spotify, Apple Music, and other top platforms."
      titleId="platforms-title"
      description="With SoundsGood, you enjoy your favorite music everywhere and always. Also, your releases are guaranteed to reach 100+ music platforms."
      >
        <Grid columns={3}>
          {platformItems.map((platformItems, index) => (
            <PlatformCard {...platformItems} key={index}/>
          ))}
        </Grid>
      </Section>
  )
}

export default Platforms





