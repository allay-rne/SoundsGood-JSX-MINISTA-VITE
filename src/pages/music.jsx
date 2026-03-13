import ArtistBanner from "@/sections/ArtistBanner";
import Collections from "@/sections/Collections";

export const metadata = {
  title: 'Music & Artist',
}

export default function () {
  return (
    <>
      <ArtistBanner />
      <Collections />
    </>
  )
}


