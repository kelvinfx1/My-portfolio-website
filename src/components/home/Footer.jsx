import React from "react";

function Footer() {
  return (
    <section className="text-center bg-[rgb(2,255,85)]">
      <div className="py-28">
        <p className="text-2xl">What's Next</p>
        <p className="text-4xl font-bold my-14">Get In Touch</p>
        <p  className="text-xl mb-6">
          I'd be glad to join your team and help your team launch products that <br />
          can help impact users across the globe. Let's begin!
        </p>

        <button className="btn rounded-none text-xl text-white bg-black border-black">Fire me an email</button>
      </div>
      <hr />
      <div className="pb-28 text-xl">
        <p>Designed and Built by Osorachukwu &copy;2024</p>
      </div>
    </section>
  );
}

export default Footer;
