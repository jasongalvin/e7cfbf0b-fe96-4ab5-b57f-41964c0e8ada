import React from 'react';

const OAuthLogin = ({ provider }) => {
  const handleOAuth = () => {
    // Implement OAuth logic for the provider
  };

  return <button onClick={handleOAuth}>{provider} Login</button>;
};

export default OAuthLogin;