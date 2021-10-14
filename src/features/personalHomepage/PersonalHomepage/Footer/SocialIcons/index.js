import { socials } from "./socials";
import { Item, Link, List } from "./styled";

export const SocialIcons = () => (
  <List>
    {socials.map(({ name, url, Icon }) => (
      <Item key={name}>
        <Link href={url} title={name} rel="noreferrer" target="_blank">
          <Icon />
        </Link>
      </Item>
    ))}
  </List>
);