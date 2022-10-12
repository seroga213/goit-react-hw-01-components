import { Profile } from "./profile/Profile";
import user from "components/data/user.json";

import { Statistics } from "./statistics/Statistics";
import data from 'components/data/data.json';

import friends from 'components/data/friends.json';
import { FriendList } from './friendList/FriendList';

import transactions from 'components/data/transactions.json';
import { TransactionList } from './historytransactions/TransactionList';


export const App = () => {
  return (
    <div className="container"
      // style={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >

      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location }
        avatar={user.avatar }
        stats={user.stats}
      />

      <Statistics
       title="Upload stats" stats={data}
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