import React from "react";
import "./CTA.css";
import { IoMailOutline } from "react-icons/io5";
function CTA() {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">
              Get a 10% discount by subscribing to our newsletter!{" "}
              <IoMailOutline />
            </h2>
            <p className="cta-text">
              Subscribe to our newsletter service to be informed about the best
              sales and products!
            </p>

            <form className="cta-form" action="#">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  required
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="select-where">
                  Where did you hear about us?
                </label>
                <select id="select-where" required>
                  <option value="">Please choose one option</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">Youtube</option>
                  <option value="facebook">Facebook ad</option>
                  <option value="Podcast">Podcast</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button className="btncta">Sign up now</button>
            </form>
          </div>
          <div className="cta-img-box">{""}</div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
