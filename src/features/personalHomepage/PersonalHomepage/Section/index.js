import { Content, Item, List, StyledSection, Title } from "./styled";

const Section = ({ title, list }) => (
  <StyledSection>
    <Title>{title}
    </Title>
    <List>
      {list.map(item => (
        <Item key={item}>
          <Content>
            {item}
          </Content>
        </Item>
      ))}
    </List>
  </StyledSection>
);

export default Section;