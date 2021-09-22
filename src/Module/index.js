import { Description, Extra, Text, Title, Wrapper } from "./styled";

const Module = ({ text, title, description, extraContent, footer }) => (
    <Wrapper>
        <Text>{text}</Text>
        <Title footer={footer}>{title}</Title>
        <Description footer={footer}>{description}</Description>
        <Extra>{extraContent}</Extra>
    </Wrapper>
);

export default Module;