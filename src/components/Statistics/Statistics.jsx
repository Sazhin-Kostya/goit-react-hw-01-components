import { List, Container, Item } from './Statistics.styled';

export default function Statistics({ data }) {
  return (
    <>
      <Container>
        <h2>Upload stats</h2>

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
