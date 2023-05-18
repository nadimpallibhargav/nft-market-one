import SliderOne from "assets/images/home/Level Up.png";
import SliderTwo from "assets/images/home/Play Quets.png";
import SliderThree from "assets/images/home/Earn Glory.png";
import SliderFour from "assets/images/home/Featured Games.png";

export const carouselData = [
  {
    image: SliderOne,
    title: "Clan Chief Application",
    description: "Become a leader, earn rewards, and build your own clan.",
    link: "/college-titan",
    linkText: "Join"
  },
  {
    image: SliderTwo,
    title: "Complete Quests",
    description: "Complete Web3 quests and win big rewards.",
    link: "/quests",
    linkText: "Play Now"
  },
  {
    image: SliderThree,
    title: "Live Tournaments",
    description:
      "Win prizes upto 25L for the Bangalore Web3 Championship Tournament.",
    link: "/tournaments",
    linkText: "Compete"
  },
  {
    image: SliderFour,
    title: "Explore Games",
    description: "Explore exciting games featured by IndiGG.",
    link: "/games",
    linkText: "Explore"
  }
];

export const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplay: false,
  className: "slider variable-width",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        slidesToScroll: 1
      }
    }
  ]
};
