import React from 'react';
import Map from '../../components/Map/Map';
import TaskForm from '../../components/TaskForm/TaskForm';

import './HomepageStyles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <Map />
      <TaskForm />
    </div>
  );
};

export default HomePage;
