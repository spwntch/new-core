import { IContent } from "@spwntch/react-ui";
import { Activity, BarChart2, Package, TrendingUp, Users, UserX } from "lucide-react";

export const PAIN_POINTS: IContent = {
  heading: {
    content: "The Business Challenges We Solve",
    className: "text-3xl",
  },
  body: {
    content: [
      "At The Experience Business (TXB), we understand the complex challenges companies face in delivering exceptional customer and user experiences. We specialize in solving the most pressing pain points for modern businesses:",
    ],
    className: "",
  },
  bullets: [
    {
      icon: <TrendingUp />, // Icon for keeping up with rapidly changing expectations
      heading: "Struggling to Keep Up with Rapidly Changing Customer Expectations?",
      body: [
        "In a world where customer expectations evolve constantly, many businesses struggle to keep up. TXB helps companies stay ahead by using advanced AI and cutting-edge design methodologies to create experiences that not only meet but exceed these expectations.",
      ],
    },
    {
      icon: <UserX />, // Icon for disconnected customer journeys
      heading: "Disconnected Customer Journeys Leading to Missed Opportunities?",
      body: [
        "Fragmented customer journeys result in lost opportunities and frustrated users. Our expertise in mapping and designing seamless, end-to-end customer experiences ensures every interaction is optimized, reducing churn and boosting engagement.",
      ],
    },
    {
      icon: <BarChart2 />, // Icon for turning data into insights
      heading: "Difficulty in Turning Data into Actionable Insights?",
      body: [
        "Many businesses collect massive amounts of data but fail to translate it into meaningful strategies. At TXB, we leverage AI-powered insights to turn raw data into precise, actionable steps that drive measurable business outcomes.",
      ],
    },
    {
      icon: <Activity />, // Icon for outdated product development methods
      heading: "Outdated Product Development Methods?",
      body: [
        "Traditional product development processes are often slow and inefficient, leading to missed market opportunities. TXB introduces lean product development strategies that streamline processes, increase agility, and enable businesses to launch successful products faster.",
      ],
    },
    {
      icon: <Users />, // Icon for lack of personalization in interactions
      heading: "Lack of Personalization in Customer Interactions?",
      body: [
        "Customers today expect personalized experiences. TXB’s AI-driven tools allow businesses to create highly targeted, personalized experiences that resonate deeply with users, fostering loyalty and driving repeat business.",
      ],
    },
    {
      icon: <Package />, // Icon for limited access to cutting-edge solutions
      heading: "Limited Resources to Access Cutting-Edge Solutions?",
      body: [
        "Often, businesses lack the resources to implement the latest in UX, CX, and AI technologies. TXB democratizes access to these tools, making sophisticated solutions available to companies of all sizes, so they can compete and thrive in today’s competitive landscape.",
      ],
    },
  ],
};
