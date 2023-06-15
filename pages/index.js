import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Botryoidal_Purple_Grape_Agate_Chalcedony_from_Indonesia.jpg/570px-Botryoidal_Purple_Grape_Agate_Chalcedony_from_Indonesia.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m1",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Botryoidal_Purple_Grape_Agate_Chalcedony_from_Indonesia.jpg/570px-Botryoidal_Purple_Grape_Agate_Chalcedony_from_Indonesia.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   //   //fetch data from an  API
//   //   //getServerSideProps is a reserved name, and it prepars the props to this component
//   //   //It always returns an object { }
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch data from an  API
  //getStaticProps is a reserved name, and it prepars the props to this component
  //It always returns an object { }
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10
  };
}

export default HomePage;
