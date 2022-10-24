import React from "react";
//background-color: rgb(13, 28, 47)
const Footer = () => {
  return (
    <section className="bg-indigo-900 p-8 text-white ">
      <section className="grid grid-cols-3 pb-12">
        <div>
          <p>Call Customer Services, We Support 24/7 :</p>
          <h4>800-140-10000</h4>
          <p>Address :</p>
          <h4>North Americas Avenue, El Paso, Texas</h4>
          <p>Email :</p>
          <h4> Support@domain.com</h4>
        </div>
        <div>
          <p>
            CUSTOMER SERVICE
            <br />
            Contact us <br />
            Help and advice <br />
            Shipping & Returns
            <br />
            Terms and conditions
            <br />
            Refund Policy
          </p>
        </div>
        <div>
          <p>To get newsletter</p>
          <form action="" className="inline">
            <input
              className="w-68 rounded-lg border-2 hover:border-rose-300 text-indigo-900 
            p-2"
              type="email"
              name="email"
              id=""
              placeholder="Your email"
            />
            <button className="px-2 py-2 ml-4 bg-rose-500 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div className="border-t-2 border-white p-4">
        <p className="text-center">
          Copyright © 2021 Vinovathemes. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
