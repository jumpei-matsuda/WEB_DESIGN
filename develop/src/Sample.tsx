import React from 'react';

type HelloProps = {
  name: string,
}

const Hello: React.VFC<HelloProps> = ({ name }) => (
  <h1>Hello, {name}</h1>
);

const Sample: React.FC = () => (
    <div>
      <Hello name="ALH" />
    </div>
  );

export default Sample;
