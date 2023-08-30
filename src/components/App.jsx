import Profile from './Profile/Profile';
import User from 'user.json';
import Statistics from './Statistics/Statistics';
import Data from 'data.json';
import FriendsList from './Friends/FriendsList';
import Friends from 'friends.json';
import TransactionsList from './Transactions/Transactions';
import Transactions from 'transactions.json';
export const App = () => {
  return (
    <>
      <Profile user={User} />
      <Statistics data={Data} />
      <FriendsList friends={Friends} />
      <TransactionsList transactions={Transactions} />
    </>
  );
};
