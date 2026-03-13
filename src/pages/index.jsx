import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import Platforms from "@/sections/Platforms";
import Questions from "@/sections/Questions";
import Plans from "@/sections/Plans";

export const metadata = {
  title: 'Home',
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
      <Platforms />
      <Questions />
      <Plans />
    </>
  )
}
