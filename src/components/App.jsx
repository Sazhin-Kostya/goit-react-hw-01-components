import Profile from './Profile/Profile';
import User from 'user.json';
import Statistics from './Statistics/Statistics';
import Data from 'data.json';
import FriendsList from './Friends/FriendsList';
import Friends from 'friends.json';
import TransactionsList from './Transactions/Transactions';
import Transactions from 'transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
export const App = () => {
  return (
    <Layout>
      <Profile user={User} />
      <Statistics data={Data} />
      <FriendsList friends={Friends} />
      <TransactionsList transactions={Transactions} />
      <GlobalStyle />
    </Layout>
  );
};
