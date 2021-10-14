import { styleIcon } from "./styled";
import { ReactComponent as GitHubLogo } from "./icons/github.svg";
import { ReactComponent as LinkedinLogo } from "./icons/linkedin.svg";
import { githubURL, linkedinURL, username } from "../../personalData";

export const socials = [
  {
    name: "GitHub",
    url: `${githubURL}${username}`,
    Icon: styleIcon(GitHubLogo),
  },
  {
    name: "LinkedIn",
    url: linkedinURL,
    Icon: styleIcon(LinkedinLogo),
  },
];