import MovieBanner from "@/sections/MovieBanner";
import MovieDetails from "@/sections/MovieDetails";

export const metadata = {
  title: 'Movie - Boy in striped pajamas',
}

export default function () {
  return (
    <>
      <MovieBanner />
      <MovieDetails />
    </>
  )
}


