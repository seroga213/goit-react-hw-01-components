import { Profile } from "./Profile/Profile";
import user from "components/Data/user.json";

import { Statistics } from "./Statistics/Statistics";
import data from 'components/Data/data.json';

import friends from 'components/Data/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from 'components/Data/transactions.json';
import { TransactionList } from './Historytransactions/TransactionList';


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location }
        avatar={user.avatar }
        stats={user.stats}
      />

      <Statistics
        stats={data}
      /> 

      <FriendList
        friends={friends}
      />

      <TransactionList
        items={transactions}
      />

    </div>
  );
};