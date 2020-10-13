import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" avatar={faker.image.avatar()} comment="Nice!" date="Today 5:50PM" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Beto" avatar={faker.image.avatar()} comment="Great!" date="Today 6:13PM" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Kiwi" avatar={faker.image.avatar()} comment="This is Cool!" date="Today 7:22PM" />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));