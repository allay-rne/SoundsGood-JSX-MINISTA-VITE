import BookBanner from "@/sections/BookBanner";
import MovieDetails from "@/sections/MovieDetails";
import Books from "@/components/Books";

export const metadata = {
  title: 'Book - Harry Potter',
}

export default function () {
  return (
    <>
      <BookBanner />
      <MovieDetails
        books={<Books />}
      />
    </>
  )
}


