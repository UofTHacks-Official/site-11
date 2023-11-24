// Import sponsor images
import Protocol from "public/assets/sponsors/protocol-labs.svg";
import Cohere from "public/assets/sponsors/cohere.svg";
import Accenture from "public/assets/sponsors/Accenture.svg";
import EngSoc from "public/assets/sponsors/EngSoc.svg";
import UofTCS from "public/assets/sponsors/UofTCS.svg";
import Ubisoft from "public/assets/sponsors/Ubisoft.svg";
import FDMGroup from "public/assets/sponsors/FDM.svg";
import echo3D from "public/assets/sponsors/echo3D.webp";
import Digile from "public/assets/sponsors/Digile.webp";
import WolframAlpha from "public/assets/sponsors/WolframAlpha.webp";
import CSE from "public/assets/sponsors/CSE.webp";
import XYZ from "public/assets/sponsors/XYZ.svg";
import WCSA from "public/assets/sponsors/WCSA.webp";
import CPPIB from "public/assets/sponsors/CPPIB.webp";

// Define sponsor data
export const sponsorsData = {
  //rbc will be the title sponsor.
  diamond: [
    {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
      img: Protocol,
    },
  ],
  // Cohere will be the platinum sponsor.
  platinum: [
    {
      name: "Cohere",
      url: "https://cohere.com/",
      img: Cohere,
    },
  ],
  gold: [
    {
      name: "Digile",
      url: "https://digile.com/",
      img: Digile,
    },
    {
      name: "University of Toronto Department of Computer Science",
      url: "https://web.cs.toronto.edu/",
      img: UofTCS,
    },
  ],
  silver: [
    {
      name: "UbiSoft",
      url: "https://www.ubisoft.com/en-gb/",
      img: Ubisoft,
    },
    {
      name: "CSE",
      url: "https://www.cse-cst.gc.ca/en",
      img: CSE,
    },
  ],
  bronze: [
    {
      name: "FDM Group",
      url: "https://www.fdmgroup.com/",
      img: FDMGroup,
    },
    {
      name: "Accenture",
      url: "https://www.accenture.com/",
      img: Accenture,
    },
    {
      name: "echo3D",
      url: "https://www.echo3d.com/",
      img: echo3D,
    },
    {
      name: "WCSA",
      url: "https://www.mywcsa.com/",
      img: WCSA,
    },
    {
      name: "XYZ",
      url: "https://www.gen.xyz",
      img: XYZ,
    },
    {
      name: "CPPIB",
      url: "https://www.cppinvestments.com/",
      img: CPPIB,
    },

  ],
};
