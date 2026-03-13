import './MovieDetails.scss'
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import PersonCard from "@/components/PersonCard";
import Button from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import Icon from "@/components/Icon";
import Tags from "@/components/Tags";
import Ratings from "@/components/Ratings";

const MovieDetails = (props) => {
  const {
    books,
  } = props

  const titleId = 'movie-details-title'
  const castSliderNavigationId = 'movie-card-slider-navigation'

  const castItems = [
    { imgSrc: '/src/assets/images/people/cast1.jpg', imgAlt: 'Asa Butterfield', },
    { imgSrc: '/src/assets/images/people/cast2.jpg', imgAlt: 'Jack Scanlon', },
    { imgSrc: '/src/assets/images/people/cast3.jpg', imgAlt: 'David Thewlis', },
    { imgSrc: '/src/assets/images/people/cast4.jpg', imgAlt: 'Vera Farmiga', },
    { imgSrc: '/src/assets/images/people/cast5.jpg', imgAlt: 'Amber Beattie', },
    { imgSrc: '/src/assets/images/people/cast6.jpg', imgAlt: 'Sheila Hancock', },
    { imgSrc: '/src/assets/images/people/cast7.jpg', imgAlt: 'Richard Johnson', },
    { imgSrc: '/src/assets/images/people/cast8.jpg', imgAlt: 'Cara Horgan', },

    { imgSrc: '/src/assets/images/people/cast9.jpg', imgAlt: 'David Hayman', },
    { imgSrc: '/src/assets/images/people/cast10.jpg', imgAlt: 'Rupert Friend', },
    { imgSrc: '/src/assets/images/people/cast11.jpg', imgAlt: 'Jim Norton', },
    { imgSrc: '/src/assets/images/people/cast12.jpg', imgAlt: 'László Áron', },
    { imgSrc: '/src/assets/images/people/cast13.jpg', imgAlt: 'Charlie Baker', },
    { imgSrc: '/src/assets/images/people/cast14.jpg', imgAlt: 'Attila Egyed', },
    { imgSrc: '/src/assets/images/people/cast15.jpg', imgAlt: 'Mihály Szabados', },
    { imgSrc: '/src/assets/images/people/cast16.jpg', imgAlt: 'Julia Papp', },

  ]

  const reviewItems = [
    {
      name: 'miss alba',
      subtitle: 'Воронеж',
      description: 'Сначала я прочитала книгу. Не знаю почему, но для меня оказалась "переживательной": я всё представляла "в цвете - красках", отходила после её прочтения долго. А фильм... никакой... Не зацепил ни разу. В книге подробно описаны мысли, переживания, поступки Бруно, а фильм - просто оооочень краткий пересказ событий. Жаль потраченного времени, лучше книгу перечитать.',
      ratingValue: 2,
    },
    {
      name: 'Ultra',
      subtitle: 'Undefined',
      description: 'Наш фильм "Иди и смотри" сильнее во стократ: там страшно практически с первого до последнего кадра. А здесь - только последние полчаса. Но поскольку игра главгероев - отца и сына - понравилась, поставила фильму "да".',
      ratingValue: 4,
    },

    {
      name: 'miss alba',
      subtitle: 'Undefined',
      description:'Есть фильмы, которые стирают грань между кинематографом и жизнью. Их невозможно оценить, разобрать детально, потому что они обезоруживают тебя, меняют тебя, переворачивают все внутри. Это один из таких фильмов.',
      ratingValue: 5,
    },
    {
      name: 'елена Прокопьева',
      subtitle: 'Москва',
      description: 'я тоже смотрела этот фильм.никогда не забуду и название и сюжет.есть фильмы посмотрел и забыл.но только не этот и прошу сделайте фильм бесплатным...',
      ratingValue: 5,
    },

    {
      name: 'Аккаунт',
      subtitle: 'Новосибирск',
      description: 'Я пребываю в шоке, какое то время, после окончания фильма дышать трудно было. Глубокий смысл. Страшная война. Слёзы. Респект создателям фильма.',
      ratingValue: 5,
    },
    {
      name: 'natel77',
      subtitle: 'Челябинск',
      description: 'Отличный фильм, нужно в старших классах показывать, чтоб поколение не забывало ужасы войны.',
      ratingValue: 5,
    },

    {
      name: 'Сергей Макаров',
      subtitle: 'Минск',
      description: 'очень тежолый фильм',
      ratingValue: 4,
    },
    {
      name: 'miss alba',
      subtitle: 'Грозный',
      description: 'Прекрасный фильм об ужасном. Весь просмотр переполняют тяжелые эмоции. Однозначно рекомендую к просмотру',
      ratingValue: 4.5,
    },

  ]

  return (
    <section
      className="movie-details container"
      aria-labelledby={titleId}
    >
      <h2
        className="visually-hidden"
        id={titleId}
      >
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        {books && (
          <div className="movie-details__panel--books">
            <div className="movie-details__group movie-details__group--big-gap-y">
              <h3 className="h4">Books and Chapters</h3>
              {books}
            </div>
          </div>
        )}

        <div className="movie-details__panel movie-details__panel--description">
          <div className="movie-details__group">
            <h3 className="movie-details__title">
              Description
            </h3>
            <div className="movie-details__description">
              <p>"The Boy in the Striped Pajamas" — a tragic 2008 drama about Bruno, the son of a concentration camp commandant, who befriends Jewish boy Shmuel through the fence. Their innocent wartime friendship ends in heartbreaking catastrophe, showing the horrors of war through a child's eyes.</p>
            </div>
          </div>
        </div>

        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">
              Cast
            </h3>

            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination = {false}
              mode="rounded"
              buttonMode="black-08"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              }
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard {...castItem} key={index}/>
            ))}
          </Slider>
        </div>

        <div className="movie-details__panel movie-details__panel--large-gap-y">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">
              Reviews
            </h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add Your Review"
              href="/StreamVibeReviews"
            />
          </header>

          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  allowTouchMove: false,
                  spaceBetween: 20,
                },
              },
            }}
          >
            {reviewItems.map((reviewItem, index) => (
              <ReviewCard {...reviewItem} key={index}/>
            ))}
          </Slider>
        </div>
      </div>

      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__groups">
              <h3 className="movie-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className="h6" dateTime="2008">2008</time>
              </div>
            </div>

            <div className="movie-details__groups">
              <h3 className="movie-details__title">
                <Icon name="translate" />
                <span>Available Languages</span>
              </h3>
              <Tags
                items={['Russia','English', 'Hindi', 'Tamil', 'Telegu', 'Kannada']}
              />
            </div>

            <div className="movie-details__groups">
              <h3 className="movie-details__title">
                <Icon name="star" />
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  {title: 'IMDb', ratingValue: 4 },
                  {title: 'Streamvibe', ratingValue: 4.5 },

                ]}
              />
            </div>

            <div className="movie-details__groups">
              <h3 className="movie-details__title">
                <Icon name="genres" />
                <span>Genres</span>
              </h3>
              <Tags
                items={['Drama','War']}
              />
            </div>

            <div className="movie-details__groups">
              <h3 className="movie-details__title">
                Director
              </h3>
              <PersonCard
                name="Mark Herman"
                subtitle="From United Kingdom"
                imgSrc="/src/assets/images/people/castDir.jpg"
              />
            </div>

            <div className="movie-details__groups">
              <h3 className="movie-details__title">
                Author
              </h3>
              <PersonCard
                name="John Boyne"
                subtitle="From Ireland"
                imgSrc="/src/assets/images/people/autor.jpg"
              />
            </div>

          </div>
        </div>
      </aside>

    </section>
  )
}
export default MovieDetails
