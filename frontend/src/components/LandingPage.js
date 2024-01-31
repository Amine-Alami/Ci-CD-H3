import React from 'react';
//import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <h1>Welcome to My Todo App</h1>
        <p>Organize your tasks efficiently with our simple and powerful Todo App.</p>
        {/* <Link to="/todos">
          <button className="btn btn-primary">Go to Todos</button>
        </Link> */}
      </div>
    </div>
  );
};

export default LandingPage;