import Module from "../Module";
import { GitHubLogo, LinkedinLogo } from "./styled";

const Footer = () => (
    <Module
        text="Let's talk!"
        title="nowak.izabela.ni@gmail.com"
        description="I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me"
        footer={true}
        extraContent={
            <>
                <GitHubLogo />
                <LinkedinLogo />
            </>
        }
    />
);

export default Footer;