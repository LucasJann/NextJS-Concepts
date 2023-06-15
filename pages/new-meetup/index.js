import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add meetup.");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Add your own meetups!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}
export default NewMeetupPage;
