import React, { useEffect, useState } from "react";

function SpalshScreen() {
  const [showSplash, setshowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplash(false);
    }, 6000);
  }, []);

  return (
    <>
        {showSplash && (
          <style>
            {`
      body{
        overflow:hidden;
      }
      `}
          </style>
        )}

        {showSplash && (
          <main className="bg-darkBgLight text-textLight flex items-center justify-center min-h-screen w-full fixed top-0 z-50">
            <p className="text-7xl font-bolder animate-bounce text-center"> kelvin.</p>
          </main>
        )}
    </>
  );
}

export default SpalshScreen;

{/* <span className="loading loading-ring loading-lg"></span> */}