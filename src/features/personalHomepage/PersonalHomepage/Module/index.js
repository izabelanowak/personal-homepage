import { Description, Extra, Text, Title, Wrapper } from "./styled";

const Module = ({ text, title, description, extraContent, footer }) => (
  <Wrapper footer={footer}>
    <Text>{text}</Text>
    <Title footer={footer}>
      {footer
        ? <a href={`mailto: ${title}`}>{title}</a>
        : title
      }
    </Title>
    <Description footer={footer}>{description}</Description>
    <Extra>{extraContent}</Extra>
  </Wrapper >
);

export default Module;