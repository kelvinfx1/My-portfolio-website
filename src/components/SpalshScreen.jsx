import React, { useEffect, useState } from "react";

function SpalshScreen() {
  const [showSplash, setshowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplash(false);
    }, 2000);
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
          <main className="bg-black text-mainBgColor flex items-center justify-center min-h-screen w-full fixed top-0 z-50">
            <p className="text-5xl font-semibold animate-bounce text-center">Osora.</p>
          </main>
        )}
    </>
  );
}

export default SpalshScreen;
