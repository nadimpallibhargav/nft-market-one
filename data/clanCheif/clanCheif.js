import TitanOne from "assets/images/clan/titanOne.png";
import Dinesh from "assets/images/clan/dinesh.png";
import Darshan from "assets/images/clan/darshan.png";
import Tarun from "assets/images/clan/tarun.png";
import TitanStories from "assets/images/clan/titanStories.png";

 export const carouselData = [
  {
    image: Dinesh,
    title: "Dinesh",
    college: "B.M.S. College",
    description:
      "I learnt how to manage online gaming events with the IndiGG Clan Chief Program."
  },
  {
    image: Darshan,
    title: "Darshan",
    college: "B.M.S. College",
    description:
      "With IndiGG earning I bought my mother her birthday gift this year."
  },
  {
    image: Tarun,
    title: "Tarun",
    college: "B.M.S. College",
    description:
      "I always wanted to upgrade my GPU and my monitor which was possible thanks to the IndiGG."
  }
];

export const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplaySpeed: 5000,
  autoplay: true,
  className: "slider variable-width clanSlider",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 425,
      settings : {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth : true
      }
    }
  ]
};
