import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function Header() {
  return (
      <>
      <Head>
    <>
  <meta charSet="utf-8" />
  <title>Noobs Learning</title>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=5"
  />
  <meta
    name="description"
    content="Noobs is student developer community. Our website offers a range of features, including a community platform where members can engage in discussions and exchange information on various topics related to tech and development. Our dedicated question section allows members to seek guidance and assistance from experienced professionals in the field. We also provide a wealth of free content, including news, tutorials, blogs, and much more, through our social media channels and website. For those looking to take their learning to the next level, we offer a range of premium courses designed to equip our members with the skills and knowledge they need to thrive in the tech industry. Join the Noobs community today and gain access to a wealth of resources and support to help you achieve your tech career goals!"
  />
  <meta name="author" content="MelloB" />
  <link
    rel="shortcut icon"
    href="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/images/favicon.jpeg"
    type="image/x-icon"
  />
  <link
    rel="icon"
    href="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/images/favicon.jpeg"
    type="image/x-icon"
  />
  
  {/* theme meta */}
  <meta name="theme-name" content="wallet" />
  {/* # Google Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  {/* # CSS Plugins */}
  <link
    rel="stylesheet"
    href="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/plugins/slick/slick.css"
  />
  <link
    rel="stylesheet"
    href="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/plugins/font-awesome/fontawesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/plugins/font-awesome/brands.css"
  />
  <link
    rel="stylesheet"
    href="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/plugins/font-awesome/solid.css"
  />
  {/* # Main Style Sheet */}
  <link
    rel="stylesheet"
    href="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/css/style.css"
  />
</>

      </Head>
      <header className="navigation bg-tertiary">
  <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
    <div className="container">
      <Link className="navbar-brand" href={'/'}>
        <img
          loading="prelaod"
          decoding="async"
          className="img-fluid"
          width={160}
          src="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/images/logo_noobs_text.png"
          height={100}
          alt="Noobs Learning"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {" "}
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {" "}
            <Link className="nav-link" href={'/'}>
              Home
            </Link>
          </li>
          <li className="nav-item ">
            {" "}
            <Link className="nav-link" href={'/about'}>
              About
            </Link>
          </li>
          <li className="nav-item ">
            {" "}
            <a className="nav-link" href="https://noobslearning.com/community">
              Community
            </a>
          </li>
          <li className="nav-item ">
            {" "}
            <a className="nav-link" href="https://noobslearning.com/">
              Courses
            </a>
          </li>
          <li className="nav-item ">
            {" "}
            <a className="nav-link" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
        {/* account btn */}{" "}
        <a href="#!" className="btn btn-outline-primary">
          Log In
        </a>
        {/* account btn */}{" "}
        <a href="#!" className="btn btn-primary ms-2 ms-lg-3">
          Sign Up
        </a>
      </div>
    </div>
  </nav>
</header>
 <Script
        src="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/plugins/jquery/jquery.min.js"
        strategy="lazyOnload"
  />
  <Script
        src="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/plugins/bootstrap/bootstrap.min.js"
        strategy="lazyOnload"
  />
  <Script
        src="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/plugins/slick/slick.min.js"
        strategy="lazyOnload"
  />
  <Script
        src="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/plugins/jquery/jquery.min.js"
        strategy="lazyOnload"
  />
  <Script
        src="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/plugins/scrollmenu/scrollmenu.min.js"
        strategy="lazyOnload"
  />
  <Script
        src="https://d99gnvg3g7wwg.cloudfront.net/noobs_main/js/script.js"
        strategy="lazyOnload"
  />
      </>
      )
}