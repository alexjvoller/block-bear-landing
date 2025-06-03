import { IMenuItem, ISocials } from "@/types";
import { menuItems } from "./menuItems";
export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  socials: ISocials;
} = {
  subheading:
    "Empowering athletes at all stages and sports to achieve their goals and start building their progression. Handling all the background admin so you can focus on your training. Blocks that Build. ",
  quickLinks: menuItems,
  email: "alexjvoller@gmail.com",
  socials: {
    instagram: "https://www.instagram.com",
  },
};
