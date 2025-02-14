// our-domain.com/new-meetup
import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandlerPage(enteredMeetupData) {
    const response = await fetch("/api/apiHandlerNewMeetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandlerPage} />
    </Fragment>
  );
}

export default NewMeetupPage;
