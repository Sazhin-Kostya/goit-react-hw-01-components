import { List, Item, Photo, Text, IsOnline } from './Friends.styled';

export default function FriendsList({ friends }) {
  return (
    <>
      <List>
        {friends.map(item => (
          <Item key={item.id}>
            <IsOnline Status={item.isOnline}></IsOnline>
            <Photo src={item.avatar} alt="User avatar" width="48" />
            <Text>{item.name}</Text>
          </Item>
        ))}
      </List>
    </>
  );
}
