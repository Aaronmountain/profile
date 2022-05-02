import React from "react";

const NotFound = () => {
  return (
    <div className="error">
      <div>This Page is not found，</div>
      <div className="notice">will redirect to home page</div>
      <style jsx>{`
        .error {
          width: 100%;
          height: 100vh;
          flex-wrap: wrap;
          font-size: 3rem;
          padding-top: 16%;

          div {
            width: 100%;
            text-align: center;

            &.notice {
              font-weight: bold;
              text-decoration: underline;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
