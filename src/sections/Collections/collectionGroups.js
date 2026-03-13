import categoryItems from "@/sections/Categories/categoryItems";

const collectionGroups = [
  {
    isActive: true,
    title: 'Music',
    items: [
      {
        title: 'Genres',
        categoryItems,
      },

      {
        title: 'Popular Top 8 In Genres',
        categoryItems: [
          {
            title: 'Russian Rap',
            badge: 'Top 8 In',
            images: [
              '/src/assets/images/categories/RussianRap/1.jpg',
              '/src/assets/images/categories/RussianRap/2.jpg',
              '/src/assets/images/categories/RussianRap/3.jpg',
              '/src/assets/images/categories/RussianRap/4.jpg',
            ],
          },
          {
            title: 'Lo-Fi',
            badge: 'Top 8 In',
            images: [
              '/src/assets/images/categories/LoFi/1.jpg',
              '/src/assets/images/categories/LoFi/2.jpg',
              '/src/assets/images/categories/LoFi/3.jpg',
              '/src/assets/images/categories/LoFi/4.jpg',
            ],
          },
          {
            title: 'Upbeat',
            badge: 'Top 8 In',
            images: [
              '/src/assets/images/categories/UpBeat/1.jpg',
              '/src/assets/images/categories/UpBeat/2.jpg',
              '/src/assets/images/categories/UpBeat/3.jpg',
              '/src/assets/images/categories/UpBeat/4.jpg',
            ],
          },
          {
            title: 'Hip-Hop/Rap',
            badge: 'Top 8 In',
            images: [
              '/src/assets/images/categories/HipHop/1.jpg',
              '/src/assets/images/categories/HipHop/2.jpg',
              '/src/assets/images/categories/HipHop/3.jpg',
              '/src/assets/images/categories/HipHop/4.jpg',
            ],
          },

          {
            title: 'Opium',
            badge: 'Top 8 In',
            images: [
              '/src/assets/images/categories/Opium/miracle.png',
              '/src/assets/images/categories/Opium/2.jpg',
              '/src/assets/images/categories/Opium/3.jpg',
              '/src/assets/images/categories/Opium/4.jpg',
            ],
          },
          {
            title: 'Cloud Rap',
            badge: 'Top 8 In',
            images: [
              '/src/assets/images/categories/CloudRap/1.jpg',
              '/src/assets/images/categories/CloudRap/2.jpg',
              '/src/assets/images/categories/CloudRap/3.jpg',
              '/src/assets/images/categories/CloudRap/4.jpg',
            ],
          },
          {
            title: 'Drill',
            badge: 'Top 8 In',
            images: [
              '/src/assets/images/categories/Drill/1.jpg',
              '/src/assets/images/categories/Drill/2.jpg',
              '/src/assets/images/categories/Drill/3.jpg',
              '/src/assets/images/categories/Drill/4.jpg',
            ],
          },
          {
            title: 'Phonk',
            badge: 'Top 8 In',
            images: [
              '/src/assets/images/categories/Phonk/1.jpg',
              '/src/assets/images/categories/Phonk/2.jpg',
              '/src/assets/images/categories/Phonk/3.jpg',
              '/src/assets/images/categories/Phonk/4.jpg',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0:{
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          },
        }
      },

      {
        title: 'Artists for you',
        musicItems: [
          {
            title: 'xxxmanera',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/1.jpg',
            artist: 'xxxmanera',
            auditions:'1.3M'
          },
          {
            title: 'bones',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/2.png',
            artist: 'BONES',
            auditions:'1.2M'
          },
          {
            title: 'Mnogoznaal',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/3.jpg',
            artist: 'Mnogoznaal',
            auditions:'726K'
          },
          {
            title: 'ROCKET',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/4.png',
            artist: 'ROCKET',
            auditions:'1.3M'
          },
          {
            title: 'MAYOT',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/5.jpg',
            artist: 'MAYOT',
            auditions:'2.4M'
          },

          {
            title: 'Цинк Уродов',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/6.jpg',
            artist: 'Цинк Уродов',
            auditions:'1.1M'
          },
          {
            title: 'AllAY',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/7.jpg',
            artist: 'AllAY',
            auditions:'200K'
          },
          {
            title: 'madk1d',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/8.jpg',
            artist: 'madk1d',
            auditions:'2.8M'
          },
          {
            title: 'ARCHI',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/9.jpg',
            artist: 'ARCHI',
            auditions:'1.7M'
          },
          {
            title: 'Джизус',
            imgSrc: '/src/assets/images/music-artists/music/artists-for-you/10.jpg',
            artist: 'Джизус',
            auditions:'1M'
          },
        ],
        sliderParams: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 30,
          breakpoints: {
            0:{
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          },
        }

      },

      {
        title: 'New Premiere',
        musicItems: [
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/1.jpg',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/2.png',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/3.jpg',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/4.jpg',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/5.jpg',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },

          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/6.jpg',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/7.jpg',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/8.jpg',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/9.jpg',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/premiere/10.jpg',
            released: {
              label: '20 February 2026',
              dateTime: '2026-02-20',
            },
          },
        ],
        sliderParams: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 30,
          breakpoints: {
            0:{
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          },
        }

      },

      {
        title: 'Clips',
        musicItems: [
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/1.jpg',
            artist: 'xxxmanera',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/2.png',
            artist: 'OG Buda',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },

          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/3.jpg',
            artist: 'Kizaru',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/4.jpg',
            artist: 'Bushido Zho',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },

          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/5.png',
            artist: 'HEROWOTER',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/6.jpg',
            artist: 'GORILLAZ',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },

          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/7.png',
            artist: 'Элджей',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/8.jpg',
            artist: 'Mnogoznaal',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },

          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/9.jpg',
            artist: 'PHARAOH',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },
          {
            title: 'They know',
            imgSrc: '/src/assets/images/music-artists/music/clips/10.png',
            artist: 'Boulvard Depo',
            rating: {
              value: 4.5,
              label: '1M',
            }
          },

        ],
        sliderParams: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          breakpoints: {
            0:{
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          },
        },

      },

    ],
  },

  {
    title: 'Other',
    items: [
      {
        title: 'Audio book collections',
        categoryItems: [
          {
            title: 'Adventures',
            images: [
              '/src/assets/images/music-artists/books/audio-books/adventures/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/adventures/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/adventures/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/adventures/4.jpg',
            ],
          },
          {
            title: 'Childrens',
            images: [
              '/src/assets/images/music-artists/books/audio-books/childrens/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/childrens/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/childrens/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/childrens/4.jpg',

            ],
          },
          {
            title: 'Detective',
            images: [
              '/src/assets/images/music-artists/books/audio-books/detective/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/detective/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/detective/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/detective/4.jpg',
            ],
          },
          {
            title: 'Documentary',
            images: [
              '/src/assets/images/music-artists/books/audio-books/documentary/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/documentary/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/documentary/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/documentary/4.jpg',
            ],
          },
          {
            title: 'Thriller',
            images: [
              '/src/assets/images/music-artists/books/audio-books/thriller/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/thriller/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/thriller/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/thriller/4.jpg',
            ],
          },

          {
            title: 'Fantasy',
            images: [
              '/src/assets/images/music-artists/books/audio-books/fantasy/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/fantasy/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/fantasy/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/fantasy/4.jpg',
            ],
          },
          {
            title: 'Horror',
            images: [
              '/src/assets/images/music-artists/books/audio-books/horror/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/horror/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/horror/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/horror/4.jpg',
            ],
          },
          {
            title: 'Novel',
            images: [
              '/src/assets/images/music-artists/books/audio-books/novel/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/novel/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/novel/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/novel/4.jpg',
            ],
          },
          {
            title: 'Science',
            images: [
              '/src/assets/images/music-artists/books/audio-books/science/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/science/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/science/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/science/4.jpg',
            ],
          },
          {
            title: 'Self-development',
            images: [
              '/src/assets/images/music-artists/books/audio-books/self-development/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/self-development/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/self-development/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/self-development/4.jpg',
            ],
          },

        ],
      },

      {
        title: 'Popular Top 8 In Genres',
        categoryItems: [
          {
            title: 'Horror',
            images: [
              '/src/assets/images/music-artists/books/audio-books/horror/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/horror/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/horror/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/horror/4.jpg',
            ],
          },
          {
            title: 'Self-development',
            images: [
              '/src/assets/images/music-artists/books/audio-books/self-development/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/self-development/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/self-development/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/self-development/4.jpg',
            ],
          },
          {
            title: 'Detective',
            images: [
              '/src/assets/images/music-artists/books/audio-books/detective/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/detective/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/detective/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/detective/4.jpg',
            ],
          },
          {
            title: 'Fantasy',
            images: [
              '/src/assets/images/music-artists/books/audio-books/fantasy/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/fantasy/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/fantasy/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/fantasy/4.jpg',
            ],
          },

          {
            title: 'Novel',
            images: [
              '/src/assets/images/music-artists/books/audio-books/novel/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/novel/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/novel/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/novel/4.jpg',
            ],
          },
          {
            title: 'Science',
            images: [
              '/src/assets/images/music-artists/books/audio-books/science/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/science/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/science/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/science/4.jpg',
            ],
          },
          {
            title: 'Documentary',
            images: [
              '/src/assets/images/music-artists/books/audio-books/documentary/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/documentary/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/documentary/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/documentary/4.jpg',
            ],
          },
          {
            title: 'Childrens',
            images: [
              '/src/assets/images/music-artists/books/audio-books/childrens/1.jpg',
              '/src/assets/images/music-artists/books/audio-books/childrens/2.jpg',
              '/src/assets/images/music-artists/books/audio-books/childrens/3.jpg',
              '/src/assets/images/music-artists/books/audio-books/childrens/4.jpg',

            ],
          },

        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0:{
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          },
        }
      },

      {
        title: 'Children\'s stories',
        musicItems: [
          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/1.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/2.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/3.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/4.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/5.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },


          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/6.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/7.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/8.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/9.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Children Book',
            imgSrc: '/src/assets/images/music-artists/books/childrens-stories/10.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },

        ],
        sliderParams: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 30,
          breakpoints: {
            0:{
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          },
        }

      },

      {
        title: 'Popular books',
        musicItems: [
          {
            title: 'Popular',
            imgSrc: '/src/assets/images/music-artists/books/popular-books/1.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Popular',
            imgSrc: '/src/assets/images/music-artists/books/popular-books/2.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Popular',
            imgSrc: '/src/assets/images/music-artists/books/popular-books/3.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Popular',
            imgSrc: '/src/assets/images/music-artists/books/popular-books/4.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Popular',
            imgSrc: '/src/assets/images/music-artists/books/audio-books/horror/1.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },


          {
            title: 'Popular',
            imgSrc: '/src/assets/images/music-artists/books/audio-books/horror/3.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Popular',
            imgSrc: '/src/assets/images/music-artists/books/audio-books/horror/2.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Popular',
            imgSrc: '/src/assets/images/music-artists/books/audio-books/novel/3.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'Popular',
            imgSrc: '/src/assets/images/music-artists/books/audio-books/thriller/2.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },
          {
            title: 'JS',
            imgSrc: '/src/assets/images/music-artists/books/audio-books/self-development/4.jpg',
            duration: '2h 5min',
            auditions:'1.3M',
            href: '/book'
          },


        ],
        sliderParams: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 30,
          breakpoints: {
            0:{
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          },
        }

      },

      {
        title: 'Films by book',
        musicItems: [
          {
            title: 'Boy in striped pajamas',
            imgSrc: '/src/assets/images/music-artists/books/films-by-book/1.jpg',
            duration: '1h 34min',
            rating: {
              value: 4.7,
              label: '1M',
            }
          },
          {
            title: 'The perks of Being a Wallflower',
            imgSrc: '/src/assets/images/music-artists/books/films-by-book/2.jpg',
            duration: '1h 45min',
            rating: {
              value: 3.5,
              label: '1M',
            }
          },

          {
            title: 'Harry Potter and the Philosopher\'s Stone',
            imgSrc: '/src/assets/images/music-artists/books/films-by-book/3.jpg',
            duration: '2h 32min',
            rating: {
              value: 4.8,
              label: '1M',
            }
          },
          {
            title: 'IT',
            imgSrc: '/src/assets/images/music-artists/books/films-by-book/4.jpg',
            duration: '2h 15min',
            rating: {
              value: 4.3,
              label: '1M',
            }
          },

          {
            title: 'The Green Mile',
            imgSrc: '/src/assets/images/music-artists/books/films-by-book/5.jpg',
            duration: '3h 9min',
            rating: {
              value: 4.7,
              label: '1M',
            }
          },
          {
            title: 'The Avengers',
            imgSrc: '/src/assets/images/music-artists/books/films-by-book/6.jpg',
            duration: '2h 27min',
            rating: {
              value: 4.9,
              label: '1M',
            }
          },
        ],
        sliderParams: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          breakpoints: {
            0:{
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          },
        },

      },

    ],
  }

]

export default collectionGroups