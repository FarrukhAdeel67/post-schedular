import React from "react";

const TermsOfService = () => {
  return (
    <div className="m-8">
      <h1 className="font-bold">Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

export default TermsOfService;
