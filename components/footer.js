export default function Footer() {
  return (
      <>
      <footer className="section-sm bg-tertiary">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <div className="footer-widget">
          <h5 className="mb-4 text-primary font-secondary">Our Products</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="service-details.html">Noobs Education</a>
            </li>
            <li className="mb-2">
              <a href="service-details.html">Respawn Cloud</a>
            </li>
            <li className="mb-2">
              <a href="service-details.html">Noobsverse</a>
            </li>
            <li className="mb-2">
              <a href="service-details.html">Noobs Community</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <div className="footer-widget">
          <h5 className="mb-4 text-primary font-secondary">About</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#!">Benefits</a>
            </li>
            <li className="mb-2">
              <a href="#!">Careers</a>
            </li>
            <li className="mb-2">
              <a href="#!">Our Story</a>
            </li>
            <li className="mb-2">
              <a href="#!">Team</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <div className="footer-widget">
          <h5 className="mb-4 text-primary font-secondary">Help</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="contact.html">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="faq.html">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 newsletter-form">
        <div style={{ backgroundColor: "#F4F4F4", padding: 35 }}>
          <h5 className="mb-4 text-primary font-secondary">Subscribe</h5>
          <div className="pe-0 pe-xl-5">
            <form
              action="#!"
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control shadow-none bg-white border-end-0"
                  placeholder="Email address"
                />{" "}
                <span className="input-group-text border-0 p-0">
                  <button
                    className="input-group-text border-0 bg-primary"
                    type="submit"
                    name="subscribe"
                    aria-label="Subscribe for Newsletter"
                  >
                    <i className="fas fa-arrow-right" />
                  </button>
                </span>
              </div>
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_463ee871f45d2d93748e77cad_a0a2c6d074"
                  tabIndex={-1}
                />
              </div>
            </form>
          </div>
          <p className="mb-0">Subscribe to our Newsletter!</p>
        </div>
      </div>
    </div>
    <div className="row align-items-center mt-5 text-center text-md-start">
      <div className="col-lg-4">
        <a href="index.html">
          <img
            loading="prelaod"
            decoding="async"
            className="img-fluid"
            width={160}
            src="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/images/logo_noobs_text.png"
            alt="Noobs Learning logo"
          />
        </a>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
        <ul className="list-unstyled list-inline mb-0 text-lg-center">
          <li className="list-inline-item me-4">
            <a className="text-black" href="privacy-policy.html">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item me-4">
            <a className="text-black" href="terms.html">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 text-md-end mt-4 mt-md-0">
        <ul className="list-unstyled list-inline mb-0 social-icons">
          <li className="list-inline-item me-3">
            <a
              title="Join Whatsapp community"
              className="text-black"
              href="https://chat.whatsapp.com/CFMPnYKORMMBNaRYm3042w"
            >
              <i className="fab fa-whatsapp" />
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a
              title="Explorer Twitter Profile"
              className="text-black"
              href="https://twitter.com/noobs_learning"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a
              title="Explorer Instagram Profile"
              className="text-black"
              href="https://instagram.com/noobs_learning"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

      </>
      )}