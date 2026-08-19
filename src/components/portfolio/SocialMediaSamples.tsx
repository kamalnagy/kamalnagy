import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SocialMediaPost {
  image: string;
  caption: string;
  platform?: string;
}

const socialMediaPosts: SocialMediaPost[] = [
  {
    image: '/lovable-uploads/4f1644fd-6337-410b-aa11-4bd15ca33db1.png',
    caption: 'Healthcare Campaign - "Rest Well at Home" Medical Care Services',
    platform: 'Shefaa'
  },
  {
    image: '/lovable-uploads/0cf944b9-338a-4113-8c3b-75f439cd81c2.png',
    caption: 'Medical Imaging Campaign - "Get X-Ray Yourself" Radiology Services',
    platform: 'Shefaa'
  },
  {
    image: '/lovable-uploads/54624388-17b4-40c0-a06e-5a08b44a799e.png',
    caption: 'Tech Company Post - "Your App from Idea to Reality" by Devolum',
    platform: 'Devolum'
  },
  {
    image: '/lovable-uploads/a5c9bf8a-39ca-465c-97e2-f29a41a7d859.png',
    caption: 'Web Development Services - "Your Website... Your Gateway to Success"',
    platform: 'Devolum'
  },
  {
    image: '/lovable-uploads/1805208b-2842-4ccd-9f3b-1fa12a3ddaa8.png',
    caption: 'Maternity Care Campaign - "Your Baby Deserves Care" Prenatal Services',
    platform: 'Shefaa'
  },
  {
    image: '/lovable-uploads/89a2317f-6d2f-4b02-8878-d42b85624837.png',
    caption: 'Pregnancy Care Services - "Pregnancy Symptoms" Educational Content',
    platform: 'Shefaa'
  },
  {
    image: '/lovable-uploads/0129373c-7404-43af-9b65-feabf09fbddd.png',
    caption: 'Heart Health Campaign - "Your Heart from the First Day" Cardiology',
    platform: 'Shefaa'
  },
  {
    image: '/lovable-uploads/57ae8b56-645b-4797-a4af-9853bd9eddac.png',
    caption: 'Ultrasound Services - "Design Your Baby" Prenatal Imaging',
    platform: 'Shefaa'
  },
  {
    image: '/lovable-uploads/353790ea-e84e-4627-8d07-24fa0bea89cc.png',
    caption: 'Medical Equipment Campaign - "Listen to Your Baby" Doppler Services',
    platform: 'Shefaa'
  },
  {
    image: '/lovable-uploads/4579617d-985c-4140-ad33-544a20dcd740.png',
    caption: 'Coming Soon Campaign - "Get Ready" Teaser Post',
    platform: 'Shefaa'
  }
];

export const SocialMediaSamples = () => {
  return (
    <div id="social-samples" className="space-y-6 md:space-y-8 scroll-mt-24">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
          Samples of Social Media Work
        </h3>
        <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto">
          Creative social media campaigns across healthcare, technology, and various industries
        </p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-social',
            nextEl: '.swiper-button-next-social',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-social',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="!pb-12"
        >
          {socialMediaPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img loading="lazy" decoding="async" src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {post.platform && (
                    <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md">
                      <span className="text-xs font-medium text-foreground">
                        {post.platform}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-social absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center transition-all hover:bg-background hover:scale-110 -translate-x-1/2 md:translate-x-0">
          <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next-social absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center transition-all hover:bg-background hover:scale-110 translate-x-1/2 md:translate-x-0">
          <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Custom Pagination */}
        <div className="swiper-pagination-social flex justify-center gap-1.5 mt-6"></div>
      </div>

    </div>
  );
};