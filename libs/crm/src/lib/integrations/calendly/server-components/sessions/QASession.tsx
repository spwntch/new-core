import SessionTemplate from './SessionTemplate';


type Props = {
  downsizeHeading? : boolean;
}

const QASession = ({downsizeHeading}: Props) => {
  const header = {
    heading: `Your Personalised Q&A Session`,
    body: `Engage and Explore with Interact RDT, obligation free.`,
    downsizeHeading
  };

  const agenda = {
    intro: `Join us for a 15-minute Q&A session online, where you can directly engage with the experts at Interact RDT. Here's what we'll cover:`,
    items: [
      {
        emoji: `🔍`,
        title: `Tailored Problem-Solving:`,
        body: `Share your unique challenges and get customized, in-depth solutions drawing from our 20 years of expertise.`,
      },
      {
        emoji: `🌐`,
        title: `Expertise in Action:`,
        body: `Understand our approach through real-world examples and insights, showcasing our extensive global experience.`,
      },
      {
        emoji: `🚀`,
        title: `Insightful Strategy Development:`,
        body: `Discover how our comprehensive CX, UX, and market research services can strategically address your specific needs.`,
      },
      {
        emoji: `🎯`,
        title: `Personalised Expert Consultation:`,
        body: `Engage directly with our experts to learn best practices and next steps tailored to your business context and objectives.`,
      },
    ],
    outro: `Let's have a meaningful conversation. Together, we'll uncover the best path forward for your business.`,
  };

 

  return <SessionTemplate header={header} agenda={agenda} />;
};

export default QASession;
