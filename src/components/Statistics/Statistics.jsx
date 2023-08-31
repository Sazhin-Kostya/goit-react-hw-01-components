import { List, Container, Item, Title } from './Statistics.styled';

export default function Statistics({ data }) {
  return (
    <>
      <Container>
        <Title>Upload stats</Title>

        <List>
          {data.map(item => (
            <Item key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}</span>
            </Item>
          ))}
        </List>
      </Container>
    </>
  );
}
