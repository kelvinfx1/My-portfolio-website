import React from "react";
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import teleIcon from '../../assets/icons/tele.svg'
import githubIcon from '../../assets/icons/github.svg'

// import Form from "../Form";

function Footer() {
  return (
    <section className="px-4 py-28 text-textMedium" id="footer">
      <div className="">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-full bg-borderColor"></div>
          <p className="whitespace-nowrap text-xl font-medium md:text-2xl">
             What's Next ?!
          </p>
          <div className="h-[1px] w-full bg-borderColor"></div>
        </div>

        <p className="text-4xl font-bold text-center py-4">Get In Touch</p>
        <p className="text-center py-4">
          I'd be glad to join your team and help your team launch products that
          can help impact users across the globe. Let's begin!
        </p>

        <div className="flex justify-center mt-5">
          <a
            href="mailto:oezewi@gmail.com"
            className="btn rounded-none text-xl text-white bg-textLight border-textLight hover:text-white hover:bg-what hover:border hover:border-black"
          >
            Fire me an email
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center pt-20">
        <p className="pb-10">Designed and Built by Osorachukwu &copy;2024</p>

        <div className="pt-3">
          <ul className="flex gap-10">
            <li>
              <a href="">
                <img src={linkedinIcon} alt=""  className="w-8"/>
              </a>
            </li>
            <li>
              <a href="">
                <img src={whatsappIcon} alt="" className="w-8" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={githubIcon} alt="" className="w-8" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={teleIcon} alt="" className="w-8" />
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
