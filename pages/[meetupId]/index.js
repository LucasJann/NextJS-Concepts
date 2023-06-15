import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Botryoidal_Purple_Grape_Agate_Chalcedony_from_Indonesia.jpg/570px-Botryoidal_Purple_Grape_Agate_Chalcedony_from_Indonesia.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Botryoidal_Purple_Grape_Agate_Chalcedony_from_Indonesia.jpg/570px-Botryoidal_Purple_Grape_Agate_Chalcedony_from_Indonesia.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
