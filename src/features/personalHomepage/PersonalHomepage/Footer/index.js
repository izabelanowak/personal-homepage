import Module from "../Module";
import { email, githubURL, linkedinURL, username } from "../personalData";
import { GitHubLogo, LinkedinLogo } from "./styled";

const Footer = () => (
  <Module
    text="Let's talk!"
    title={email}
    description="I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me"
    footer={true}
    extraContent={
      <>
        <a href={`${githubURL}${username}`} rel="noreferrer noopener" target="_blank">
          <GitHubLogo />
        </a>
        <a href={linkedinURL} rel="noreferrer noopener" target="_blank">
          <LinkedinLogo />
        </a>
      </>
    }
  />
);

export default Footer;