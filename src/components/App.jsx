import user from './Profile/user.json';
import { ProfileArr } from './Profile/Profile';

import data from './Statistics/data.json';
import { Statistic } from './Statistics/Statistics';

import friends from './FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from './Transactions/transactions.json';
import { TransactionHistory } from './Transactions/Transactions.jsx';

export function App() {
  return (
    <>
      <ProfileArr
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="UPLOAD STATES" dataArr={data} />;
      {/* <Statistic dataArr={data} />; */}
      <FriendList propFriendsArr={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
