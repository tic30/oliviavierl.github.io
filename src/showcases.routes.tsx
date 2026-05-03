// import MeetupRedesign from "pages/MeetupRedesign";
import RustyShadow from "pages/RustyShadow";
import ICatcher from "pages/ICatcher";
import colors from "assets/theme/base/colors";

// import cover1 from "assets/img/cover1.jpg";
import cover2 from "assets/img/cover2.jpg";
import cover3 from "assets/img/cover3.jpg";

export default [
  // {
  //   name: "Meetup Redesign",
  //   description: "Polished UI and better experience",
  //   route: "/projects/meetup-design",
  //   component: <MeetupRedesign />,
  //   longDesc:
  //     "Redesign the Meetup app for better user experience. Gather lots of feedback from target users and polish both Ui and Ux design.",
  //   bgImg: cover1,
  //   bgColor: colors.showcaseColors.yellow,
  // },
  {
    name: "iCatcher",
    description: "Catch & Organize inspirations",
    route: "/projects/icatcher",
    component: <ICatcher />,
    longDesc:
      "An app that can gather all the app for catch inspirations together. To build an easy way for managing all the folders from different apps. And also a community that people can share interesting ideas and works to others and make friends.",
    bgImg: cover3,
    bgColor: colors.showcaseColors.grey,
  },
  {
    name: "Rusty Shadow",
    description: "Branding for urban exploration app",
    route: "/projects/rusty-shadow",
    component: <RustyShadow />,
    longDesc:
      "Build a website that not only a platform to buy all the equipments you need for the urban exploration activities, but also a community that people can meet friends, share interesting ideas and works to the world and invite more people to join this group.",
    bgImg: cover2,
    bgColor: colors.showcaseColors.dark,
  },
];
