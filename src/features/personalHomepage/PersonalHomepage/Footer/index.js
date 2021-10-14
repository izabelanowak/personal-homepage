import Module from "../Module";
import { email } from "../personalData";
import { SocialIcons } from "./SocialIcons";

const Footer = () => (
  <Module
    text="Let's talk!"
    title={email}
    description="I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me"
    footer={true}
    extraContent={<SocialIcons />}
  />
);

export default Footer;