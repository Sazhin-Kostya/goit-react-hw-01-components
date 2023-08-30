import { Profilee, Card, Photo, Text, List, Item } from './Profile.styled';

export default function Profile({ user }) {
  return (
    <>
      <Profilee>
        <Card>
          <Photo src={user.avatar} alt="User avatar" />
          <Text>{user.username}</Text>
          <Text>{user.tag}</Text>
          <Text>{user.location}</Text>
        </Card>

        <List>
          <Item>
            <span>Followers</span>
            <span>{user.stats.followers}</span>
          </Item>
          <Item>
            <span>Views</span>
            <span>{user.stats.views}</span>
          </Item>
          <Item>
            <span>Likes</span>
            <span>{user.stats.likes}</span>
          </Item>
        </List>
      </Profilee>
    </>
  );
}
