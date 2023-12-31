import starIcon5 from "public/assets/stars/star-3.png";
import starIcon7 from "public/assets/stars/star-4.png";
import starIcon15 from "public/assets/stars/star-5.png";
import Link from "next/link";

const faqs = [
  {
    question: "What is UofTHacks?",
    answer:
      "UofTHacks is a student-led hackathon, where 500+ students with different experience levels work in teams to ideate, collaborate and build a software or hardware project in 36 hours!",
    star: {
      src: starIcon5,
      cornerPosition: "top-left",
      transformX: "-40%",
      transformY: "-40%",
      width: "4em",
      height: "4em",
      zIndex: 1,
    },
    borderColor: "4px solid var(--Teal, #007d7d)", // this is just an example for what we can do
  },
  {
    question: "When and where is UofTHacks happening?",
    answer:
      "UofTHacks 11 is set to take place from January 26th to January 28th, 2024! This year’s event will be hosted entirely in-person! All participants will be notified of the exact address and venue via email. The exact schedule of all the ceremonies, activities, and workshops will be released in the week leading up to the event!",
    borderColor: "4px solid var(--Orange, #F0A000)",
  },
  {
    question: "Who can participate?",
    answer:
      "This year, UofTHacks is open to a wide range of participants, including high school students and post-secondary students. We encourage students of ALL experience and skill levels to apply. We will provide workshops and mentorship to help you build your project!",
    borderColor: "4px solid var(--Pink, #F0A0C8)",
  },
  {
    question: "Can I attend if I live far away?",
    answer: (
      <p>
        Yes, as long as you registered with UofTHacks, you are more than welcome
        to attend! However, all participants are responsible for getting
        themselves to the event and bringing their own personal essentials for
        an overnight stay. We will have designated spaces at the venue for
        hackers to rest and sleep. Unfortunately, we will not be providing any
        travel reimbursements. <br />
        <br />
        Please note: If you will be attending from outside of Canada, you need
        to ensure you are following the Government of Canada’s travel policies.
        Please contact us by sending a direct message on Instagram or at{" "}
        <Link href="mailto:contact@uofthacks.com">
          contact@uofthacks.com
        </Link>{" "}
        for more information. We’d be happy to help!
      </p>
    ),
    borderColor: "4px solid var(--Blue, #2850A0)",
  },
  {
    question: "Can I join virtually?",
    answer:
      "Unfortunately, we will not have any virtual aspects to this year's event. All members of the team must be in-person to be considered for judging.",
    borderColor: "4px solid var(--Blue, #2850A0)",
  },
  {
    question: "How many hackers per team?",
    answer:
      "Each team can have up to 4 hackers. As long as they are a registered hacker with UofTHacks, there are no restrictions on who can be on your team. However, there may be challenges that have team member requirements to be eligible for specific prizes. More details will be announced during opening ceremonies.",
    borderColor: "4px solid var(--Orange, #F0A000)",
  },
  {
    question: "How do I sign up with my teammates or join a team?",
    answer:
      "Applications will be on an individual basis. You can form your teams before or during the event. We will have a team formation channel in the UofTHacks 11 official Discord Server prior to the event so you can find/fill your team!",
    star: {
      src: starIcon7,
      cornerPosition: "bottom-left",
      transformX: "-50%",
      transformY: "50%",
      width: "2.5em",
      height: "2.5em",
      zIndex: 1,
    },
    borderColor: "4px solid var(--Teal, #007d7d)",
  },
  {
    question:
      "How much does it cost to attend UofTHacks and what should I bring?",
    answer:
      "The event is completely free! We will provide lots of food, snacks, and the venue will remain open for the entirety of the event! We will send a hacker pack with suggested items to bring. If you plan to stay the night, make sure you bring a sleeping bag!",
    borderColor: "4px solid var(--Blue, #2850A0)",
  },
  {
    question: "Do I have to know how to code beforehand?",
    answer:
      "Not at all — The design and business side of a hack are equally as important. UofTHacks is a perfect opportunity to learn something new! Throughout the event we’ll have tons of workshops to help you get set up. We’ll also have mentors floating around to help out whenever you need it!",
    borderColor: "4px solid var(--Teal, #007d7d)",
  },
  {
    question: "Can I work on my project before the event?",
    answer:
      "No. To ensure fairness, and integrity, all work on your project must be done during the event. All submitted projects must link their repository and will be verified manually. Any projects that violate our rules will be disqualified from judging.",
    borderColor: "4px solid var(--Orange, #F0A000)",
  },
  {
    question: "What are your COVID-19 regulations?",
    answer: (
      <span>
        Our policy will reflect the&nbsp;
        <Link
          type={"blue"}
          href="https://www.utoronto.ca/utogether/covid-19-planning-update"
          target="_blank"
        >
          University of Toronto&#39;s
        </Link>
        &nbsp;COVID protocols. The focus will be to ensure the event is a safe
        environment for all participants. We will have hand sanitizer stations,
        masks and disinfectant wipes throughout the venue.
      </span>
    ),
    borderColor: "4px solid var(--Orange, #F0A000)",
  },
  {
    question: "What do Mentors do?",
    answer:
      "At UofTHacks, mentors are excited individuals who want to share technical knowledge and experiences with hackers! This includes providing guidance, mentorship in their future careers, help on their projects and more!",
    borderColor: "4px solid var(--Pink, #F0A0C8)",
  },
  {
    question: "What are the Requirements to be a Mentor?",
    answer:
      "At UofTHacks, a mentor is a working professional who has had experience in the tech industry. Mentors must be 18+, and have technical knowledge. Previous internship experience is not necessary, but is definitely considered a bonus!",
    star: {
      src: starIcon15,
      cornerPosition: "top-right",
      transformX: "20%",
      transformY: "-70%",
      width: "5.2em",
      height: "5.2em",
      zIndex: 1,
    },
  },
  {
    question: "I still have a question…",
    answer: (
      <p>
        We’d be happy to help! You can send us a direct message on Instagram or
        Twitter - @uofthacks. Alternatively, you can send the inquiry over to{" "}
        <Link href="mailto:contact@uofthacks.com">contact@uofthacks.com</Link>{" "}
        and we’ll get back to you as soon as possible.
      </p>
    ),
    borderColor: "4px solid var(--Orange, #F0A000)",
  },
];

export default faqs;
