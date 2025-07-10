import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main">
      <Head>
        <title>Swipe Telecom - Airtime, Data, and Bill Payments</title>
        <meta name="description" content="Your one-stop platform for airtime, data, and bill payments in Nigeria." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Swipe Telecom - Airtime, Data, and Bill Payments" />
        <meta property="og:description" content="Your one-stop platform for airtime, data, and bill payments in Nigeria." />
        <meta property="og:image" content="/asset/swipelogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header>
        <nav className="container">
          <div className="logo">
            <Image
              src="/asset/swipelogo.png"
              alt="Swipe Telecom Logo"
              width={36}
              height={36}
              priority
              sizes="(max-width: 768px) 28px, 36px"
            />
            <span>Swipe-Telecoms</span>
          </div>
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span className="hamburger-icon"></span>
          </button>
          <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><Link href="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="#features" className="nav-link" onClick={toggleMenu}>Features</Link></li>
              <li><Link href="#services" className="nav-link" onClick={toggleMenu}>Services</Link></li>
              <li><Link href="#faqs" className="nav-link" onClick={toggleMenu}>FAQs</Link></li>
              <li><Link href="#contact" className="nav-link" onClick={toggleMenu}>Contact Us</Link></li>
            </ul>
            <div className="buttons">
              <Link href="/login" className="button login">Login</Link>
              <Link href="/signup" className="button signup">Signup</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-wrapper">
          <div className="hero-content">
            <h1>
              <span className="highlight">Swipe</span><br />
              Telecommunication services
            </h1>
            <p>Enjoy the best rates and quick support. Pay for cable, TV, and utilities with ease. Get affordable airtime and data plans.</p>
            <div className="buttons">
              <Link href="/login" className="button login">Login</Link>
              <Link href="/signup" className="button signup">Signup</Link>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/asset/manwithphone.png"
              alt="Person with smartphone"
              width={600}
              height={400}
              sizes="(max-width: 768px) 90vw, 40vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        <div className="wave"></div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2>Features</h2>
          <div className="underline pink"></div>
          <p className="subtitle">Some cool features you get to benefit from on our platform.</p>
          <div className="feature-grid">
            <div className="feature-card" style={{ animationDelay: '0.2s' }}>
              <div className="feature-image-wrapper">
                <Image
                  src="/asset/wallet.png"
                  alt="E-Wallet"
                  width={60}
                  height={60}
                  sizes="(max-width: 768px) 48px, 60px"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>E-Wallet</h3>
              <p>Secure e-wallet system. Top up to enjoy our services. Your funds are safe.</p>
            </div>
            <div className="feature-card" style={{ animationDelay: '0.4s' }}>
              <div className="feature-image-wrapper">
                <Image
                  src="/asset/fast.png"
                  alt="Fast Transaction"
                  width={60}
                  height={60}
                  sizes="(max-width: 768px) 48px, 60px"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Fast Transactions</h3>
              <p>Seamless online transactions at your fingertips, with no delays.</p>
            </div>
            <div className="feature-card" style={{ animationDelay: '0.6s' }}>
              <div className="feature-image-wrapper">
                <Image
                  src="/asset/seacurity.png"
                  alt="Security"
                  width={60}
                  height={60}
                  sizes="(max-width: 768px) 48px, 60px"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Security</h3>
              <p>Secure platform to protect your data and transactions.</p>
            </div>
            <div className="feature-card" style={{ animationDelay: '0.8s' }}>
              <div className="feature-image-wrapper">
                <Image
                  src="/asset/customer.png"
                  alt="Customer Support"
                  width={60}
                  height={60}
                  sizes="(max-width: 768px) 48px, 60px"
                  style={{ object beacons: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Customer Support</h3>
              <p>24/7 support to address your needs wzi efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="underline pink"></div>
          <p className="subtitle">We provide the best services to suit your needs.</p>
          <div className="service-grid">
            <div className="service-card" style={{ animationDelay: '0.2s' }}>
              <div className="service-image-wrapper">
                <Image
                  src="/asset/dataoffers.png"
                  alt="Data Subscription"
                  width={60}
                  height={60}
                  sizes="(max-width: 768px) 48px, 60px"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Data Subscription</h3>
              <p>Subscribe to affordable data plans for any number.</p>
              <ul className="service-features">
                <li>Supports MTN, Airtel, Glo, and 9mobile</li>
                <li>Daily to monthly plans</li>
                <li>Instant activation</li>
                <li>Exclusive discounts</li>
              </ul>
              <Link href="/login?returnUrl=buydata" className="button btn">Subscribe Now</Link>
            </div>
            <div className="service-card" style={{ animationDelay: '0.4s' }}>
              <div className="service-image-wrapper">
                <Image
                  src="/asset/phonedial.jpg"
                  alt="Airtime Recharge"
                  width={60}
                  height={60}
                  sizes="(max-width: 768px) 48px, 60px"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Airtime Recharge</h3>
              <p>Fast airtime recharges for any number.</p>
              <ul className="service-features">
                <li>All Nigerian networks</li>
                <li>Instant credit delivery</li>
                <li>Bulk recharge support</li>
                <li>Secure e-wallet transactions</li>
              </ul>
              <Link href="/login?returnUrl=buyairtime" className="button btn">Recharge Now</Link>
            </div>
            <div className="service-card" style={{ animationDelay: '0.6s' }}>
              <div className="service-image-wrapper">
                <Image
                  src="/asset/cabletv.jpg"
                  alt="TV & Cable Subscription"
                  width={60}
                  height={60}
                  sizes="(max-width: 768px) 48px, 60px"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>TV & Cable Subscription</h3>
              <p>Instant subscriptions for DSTV, Startimes, GOTV, and more.</p>
              <ul className="service-features">
                <li>Multiple providers</li>
                <li>Flexible packages</li>
                <li>Instant activation</li>
                <li>Easy renewals</li>
              </ul>
              <Link href="/login?returnUrl=cablesubscription" className="button btn">Buy Now</Link>
            </div>
            <div className="service-card" style={{ animationDelay: '0.8s' }}>
              <div className="service-image-wrapper">
                <Image
                  src="/asset/electricitybill.jpg"
                  alt="Bills Payment"
                  width={60}
                  height={60}
                  sizes="(max-width: 768px) 48px, 60px"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Bills Payment</h3>
              <p>Pay electricity and utility bills quickly.</p>
              <ul className="service-features">
                <li>EKEDC, IBEDC, and more</li>
                <li>Secure payment process</li>
                <li>Track payment history</li>
                <li>Other utility bills</li>
              </ul>
              <Link href="/login?returnUrl=billpayment" className="button btn">Pay Now</Link>
            </div>
          </div>
          <p className="service-cta">Explore our services and enjoy seamless transactions. Sign up today!</p>
        </div>
      </section>

      {/* Networks Section */}
      <section className="networks">
        <div className="container">
          <h2>Supported Networks</h2>
          <div className="underline pink"></div>
          <div className="network-logos">
            <Image src="/asset/mtn.jpg" alt="MTN" width={100} height={50} sizes="(max-width: 768px) 80px, 100px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/airtel.png" alt="Airtel" width={100} height={50} sizes="(max-width: 768px) 80px, 100px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/glo.jpg" alt="Glo" width={100} height={50} sizes="(max-width: 768px) 80px, 100px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/9mobile.png" alt="9mobile" width={100} height={50} sizes="(max-width: 768px) 80px, 100px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/dstvstarsat.png" alt="DSTV" width={100} height={50} sizes="(max-width: 768px) 80px, 100px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/ekedc.png" alt="EKEDC" width={100} height={50} sizes="(max-width: 768px) 80px, 100px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/ibedcpng.png" alt="IBEDC" width={100} height={50} sizes="(max-width: 768px) 80px, 100px" style={{ objectFit: 'contain' }} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="underline pink"></div>
          <p className="subtitle">Have questions or need assistance? Reach out to our support team!</p>
          <p className="contact-intro">We’re here to help with inquiries about airtime, data, TV subscriptions, or bill payments. Contact us via phone, email, or the form below.</p>
          <div className="contact-info">
            <div className="contact-item" style={{ animationDelay: '0.2s' }}>
              <Image
                src="https://img.icons8.com/ios-filled/40/FFFFFF/marker.png"
                alt="Address"
                width={40}
                height={40}
                sizes="(max-width: 768px) 32px, 40px"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <h3>Address</h3>
              <p>No. 4, Mercyland Estate Ayobo-Ipaja, Lagos</p>
            </div>
            <div className="contact-item" style={{ animationDelay: '0.4s' }}>
              <Image
                src="https://img.icons8.com/ios-filled/40/FFFFFF/phone.png"
                alt="Phone"
                width={40}
                height={40}
                sizes="(max-width: 768px) 32px, 40px"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <h3>Phone Number</h3>
              <p>+234 - 815 042 3800</p>
            </div>
            <div className="contact-item" style={{ animationDelay: '0.6s' }}>
              <Image
                src="https://img.icons8.com/ios-filled/40/FFFFFF/email.png"
                alt="Email"
                width={40}
                height={40}
                sizes="(max-width: 768px) 32px, 40px"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <h3>Email</h3>
              <p>swipetelecomsnigeria@gmail.com</p>
            </div>
          </div>
          {/* Placeholder for future contact form */}
        </div>
      </section>

      {/* Footer */}
      <footer className="container">
        <p>© Copyright SWIPE Telecommunication Services 2022 | All Rights Reserved</p>
      </footer>

      {/* WhatsApp Icon */}
      <div className="whatsapp">
        <a href="https://wa.me/2348150423800" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
          <Image
            src="https://img.icons8.com/color/48/25D366/whatsapp.png"
            alt="WhatsApp"
            width={48}
            height={48}
            sizes="(max-width: 768px) 40px, 48px"
            style={{ objectFit: 'contain' }}
            loading="lazy"
          />
        </a>
      </div>

      <style jsx>{`
        :global(*) {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .main {
          width: 100%;
          margin: 0 auto;
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: clamp(300px, 90vw, 1440px);
          margin: 0 auto;
          padding: 0 clamp(0.75rem, 2vw, 1.5rem);
        }

        /* Header Styles */
        header {
          background-color: #E0F2FF;
          padding: clamp(0.75rem, 2vh, 1.25rem) 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: clamp(0.4rem, 1vw, 0.6rem);
          color: #003087;
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          font-weight: 600;
        }

        .nav-container {
          display: flex;
          align-items: center;
          gap: clamp(1rem, 3vw, 2rem);
        }

        .nav-list {
          list-style: none;
          display: flex;
          gap: clamp(0.75rem, 2vw, 1.25rem);
          margin: 0;
        }

        .nav-link {
          color: #1E3A8A;
          text-decoration: none;
          font-size: clamp(0.8rem, 2vw, 1rem);
          font-weight: 500;
          padding: clamp(0.4rem, 1vw, 0.6rem);
          border-radius: 6px;
          transition: color 0.3s ease, background-color 0.3s ease;
        }

        .nav-link:hover {
          color: #EC4899;
          background-color: rgba(236, 72, 153, 0.1);
        }

        .nav-link:active,
        .nav-link:focus {
          color: #F472B6;
          outline: none;
          box-shadow: 0 0 0 2px rgba(236, 72, 153, 0.3);
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.6rem;
          z-index: 1001;
        }

        .hamburger-icon {
          display: block;
          width: clamp(1.5rem, 4vw, 1.8rem);
          height: 0.25rem;
          background: #1E3A8A;
          position: relative;
          transition: background 0.3s ease;
        }

        .hamburger-icon::before,
        .hamburger-icon::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 0.25rem;
          background: #1E3A8A;
          transition: transform 0.3s ease;
        }

        .hamburger-icon::before {
          top: -0.6rem;
        }

        .hamburger-icon::after {
          top: 0.6rem;
        }

        .hamburger[aria-expanded="true"] .hamburger-icon {
          background: transparent;
        }

        .hamburger[aria-expanded="true"] .hamburger-icon::before {
          transform: rotate(45deg) translate(0.45rem, 0.45rem);
        }

        .hamburger[aria-expanded="true"] .hamburger-icon::after {
          transform: rotate(-45deg) translate(0.45rem, -0.45rem);
        }

        .nav-container.open {
          transform: translateY(0);
          opacity: 1;
        }

        .buttons {
          display: flex;
          gap: clamp(0.6rem, 1.5vw, 1rem);
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Button Base Styles */
        :global(.button) {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: clamp(8.5rem, 25vw, 10.5rem);
          padding: clamp(0.65rem, 2vw, 0.85rem) clamp(1.25rem, 3vw, 1.5rem);
          border-radius: 10px;
          font-size: clamp(0.9rem, 2.2vw, 1.1rem);
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
          border: none;
          line-height: 1.5;
        }

        :global(.button:hover) {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        :global(.button:focus) {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }

        :global(.button:active) {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transform: translateY(0);
        }

        :global(.login) {
          background-color: #BFDBFE;
          color: #1E3A8A;
          border: 2px solid #93C5FD;
        }

        :global(.login:hover) {
          background-color: #93C5FD;
        }

        :global(.signup),
        :global(.btn) {
          background-color: #EC4899;
          color: #FFFFFF;
        }

        :global(.signup:hover),
        :global(.btn:hover) {
          background-color: #F472B6;
        }

        /* Hero Section Styles */
        .hero {
          background: linear-gradient(180deg, #003087 0%, #3B82F6 100%);
          padding: clamp(2.5rem, 8vh, 5rem) 0;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          width: 100%;
        }

        .hero-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(1.5rem, 4vw, 2rem);
          max-width: 100%;
          padding: 0 clamp(0.75rem, 2vw, 1.5rem);
        }

        .hero-content {
          max-width: clamp(22rem, 90vw, 45rem);
          z-index: 1;
          animation: fadeIn 1s ease-out;
          text-align: center;
        }

        .hero-content h1 {
          font-size: clamp(1.5rem, 5vw, 3rem);
          font-weight: 700;
          margin: 0 0 clamp(0.75rem, 2vw, 1.25rem);
          line-height: 1.2;
        }

        .hero-content .highlight {
          font-size: clamp(2rem, 6vw, 3.5rem);
          color: #EC4899;
          font-weight: 700;
        }

        .hero-content p {
          font-size: clamp(0.9rem, 2.5vw, 1.3rem);
          margin: 0 0 clamp(1rem, 3vw, 1.5rem);
          line-height: 1.6;
          color: #E0F2FF;
        }

        .hero-content .buttons {
          gap: clamp(0.75rem, 2vw, 1rem);
          flex-direction: column;
          align-items: center;
        }

        .hero-image {
          max-width: clamp(18rem, 85vw, 35rem);
          z-index: 1;
          animation: slideInRight 1s ease-out;
        }

        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: clamp(3rem, 10vw, 5rem);
          background: url('/wave.svg') no-repeat;
          background-size: cover;
          animation: waveMove 6s infinite ease-in-out;
        }

        /* Features Section Styles */
        .features {
          padding: clamp(2rem, 6vh, 4rem) 0;
          text-align: center;
          background: #FFFFFF;
          width: 100%;
        }

        .features h2 {
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          color: #1E3A8A;
          font-weight: 600;
          margin: 0 0 clamp(0.4rem, 1.5vw, 0.6rem);
        }

        .underline {
          width: clamp(2.5rem, 6vw, 3.5rem);
          height: 0.3rem;
          background-color: #FFFFFF;
          margin: 0 auto clamp(0.4rem, 1.5vw, 0.6rem);
        }

        .underline.pink {
          background-color: #EC4899;
        }

        .subtitle {
          font-size: clamp(0.8rem, 2.2vw, 1.1rem);
          color: #6B7280;
          margin: 0 0 clamp(1rem, 3vw, 1.5rem);
          font-weight: 500;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(10rem, 30vw, 12rem), 1fr));
          gap: clamp(0.75rem, 2.5vw, 1.25rem);
        }

        .feature-card {
          background: #FFFFFF;
          border-radius: 10px;
          padding: clamp(0.75rem, 2.5vw, 1.25rem);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .feature-card h3 {
          font-size: clamp(0.9rem, 2.5vw, 1.3rem);
          color: #1E3A8A;
          margin: clamp(0.4rem, 1.5vw, 0.6rem) 0;
          font-weight: 600;
        }

        .feature-card p {
          font-size: clamp(0.7rem, 2vw, 1rem);
          color: #6B7280;
          line-height: 1.6;
        }

        .feature-image-wrapper {
          width: clamp(3rem, 9vw, 4rem);
          height: clamp(3rem, 9vw, 4rem);
          margin: 0 auto clamp(0.5rem, 1.5vw, 0.75rem);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #F3F4F6;
          border-radius: 8px;
          border: 1px solid #E5E7EB;
        }

        .feature-image-wrapper img {
          width: clamp(2rem, 7vw, 2.75rem);
          height: clamp(2rem, 7vw, 2.75rem);
          object-fit: contain;
        }

        /* Services Section Styles */
        .services {
          padding: clamp(2rem, 6vh, 4rem) 0;
          text-align: center;
          background: #EFF6FF;
          width: 100%;
        }

        .services h2 {
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          color: #1E3A8A;
          font-weight: 600;
          margin: 0 0 clamp(0.4rem, 1.5vw, 0.6rem);
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(10rem, 30vw, 12rem), 1fr));
          gap: clamp(0.75rem, 2.5vw, 1.25rem);
          margin: 0 0 clamp(1rem, 3vw, 1.5rem);
        }

        .service-card {
          background: #FFFFFF;
          border-radius: 10px;
          padding: clamp(0.75rem, 2.5vw, 1.25rem);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          animation: scaleIn 0.6s ease-out forwards;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .service-card h3 {
          font-size: clamp(0.9rem, 2.5vw, 1.3rem);
          color: #1E3A8A;
          margin: clamp(0.4rem, 1.5vw, 0.6rem) 0;
          font-weight: 600;
        }

        .service-card p {
          font-size: clamp(0.7rem, 2vw, 1rem);
          color: #6B7280;
          margin: 0 0 clamp(0.5rem, 1.5vw, 0.75rem);
          line-height: 1.6;
        }

        .service-features {
          list-style: none;
          text-align: left;
          margin: 0 0 clamp(0.5rem, 1.5vw, 0.75rem);
          padding: 0 clamp(0.4rem, 1.5vw, 0.6rem);
          font-size: clamp(0.65rem, 1.8vw, 0.9rem);
          color: #6B7280;
          line-height: 1.7;
        }

        .service-features li {
          margin-bottom: clamp(0.25rem, 1vw, 0.4rem);
          position: relative;
          padding-left: clamp(1rem, 2.5vw, 1.25rem);
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #EC4899;
          font-size: clamp(0.8rem, 2vw, 1rem);
        }

        .service-image-wrapper {
          width: clamp(3rem, 9vw, 4rem);
          height: clamp(3rem, 9vw, 4rem);
          margin: 0 auto clamp(0.5rem, 1.5vw, 0.75rem);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #F3F4F6;
          border-radius: 8px;
          border: 1px solid #E5E7EB;
        }

        .service-image-wrapper img {
          width: clamp(2rem, 7vw, 2.75rem);
          height: clamp(2rem, 7vw, 2.75rem);
          object-fit: contain;
        }

        .service-cta {
          font-size: clamp(0.8rem, 2.2vw, 1.1rem);
          color: #1E3A8A;
          margin: clamp(0.75rem, 2.5vw, 1.25rem) 0 0;
          line-height: 1.6;
          max-width: clamp(20rem, 85vw, 35rem);
          margin-left: auto;
          margin-right: auto;
        }

        /* Networks Section Styles */
        .networks {
          padding: clamp(2rem, 6vh, 4rem) 0;
          text-align: center;
          background: #FFFFFF;
          width: 100%;
        }

        .networks h2 {
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          color: #1E3A8A;
          font-weight: 600;
          margin: 0 0 clamp(0.4rem, 1.5vw, 0.6rem);
        }

        .network-logos {
          display: flex;
          justify-content: center;
          gap: clamp(0.75rem, 2.5vw, 1.25rem);
          flex-wrap: wrap;
        }

        .network-logos img {
          width: clamp(4.5rem, 12vw, 6.5rem);
          height: clamp(2.25rem, 6vw, 3.25rem);
        }

        /* Contact Section Styles */
        .contact {
          padding: clamp(2rem, 6vh, 4rem) 0;
          text-align: center;
          background-color: #1E3A8A;
          color: #FFFFFF;
          width: 100%;
        }

        .contact h2 {
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          font-weight: 700;
          margin: 0 0 clamp(0.4rem, 1.5vw, 0.6rem);
        }

        .contact .subtitle {
          font-size: clamp(0.8rem, 2.2vw, 1.1rem);
          margin: 0 0 clamp(0.6rem, 2vw, 1rem);
          font-weight: 500;
        }

        .contact-intro {
          font-size: clamp(0.7rem, 2vw, 1rem);
          color: #E0F2FF;
          margin: 0 0 clamp(1rem, 3vw, 1.5rem);
          max-width: clamp(20rem, 85vw, 35rem);
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(10rem, 30vw, 12rem), 1fr));
          gap: clamp(0.75rem, 2.5vw, 1.25rem);
          max-width: clamp(22rem, 85vw, 45rem);
          margin: 0 auto clamp(1rem, 3vw, 1.5rem);
        }

        .contact-item {
          text-align: center;
          padding: clamp(0.75rem, 2.5vw, 1.25rem);
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .contact-item h3 {
          font-size: clamp(0.9rem, 2.5vw, 1.2rem);
          font-weight: 600;
          margin: clamp(0.4rem, 1.5vw, 0.6rem) 0;
        }

        .contact-item p {
          font-size: clamp(0.7rem, 2vw, 1rem);
          color: #E0F2FF;
        }

        /* Footer Styles */
        footer {
          background-color: #1E3A8A;
          color: #FFFFFF;
          text-align: center;
          padding: clamp(0.75rem, 2vh, 1.25rem);
          font-size: clamp(0.7rem, 2vw, 1rem);
        }

        footer p {
          margin: 0;
        }

        /* WhatsApp Icon Styles */
        .whatsapp {
          position: fixed;
          bottom: clamp(0.75rem, 2.5vw, 1.25rem);
          right: clamp(0.75rem, 2.5vw, 1.25rem);
          z-index: 1000;
          background: #25D366;
          border-radius: 50%;
          padding: clamp(0.4rem, 1.5vw, 0.6rem);
          box-shadow: 0 3px 8px rgba(37, 211, 102, 0.5);
          transition: transform 0.3s ease;
        }

        .whatsapp:hover {
          transform: scale(1.1);
        }

        .whatsapp img {
          width: clamp(2.25rem, 7vw, 2.75rem);
          height: clamp(2.25rem, 7vw, 2.75rem);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes waveMove {
          0% { transform: translateY(0); }
          50% { transform: translateY(-0.5rem); }
          100% { transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(1rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-1rem); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Responsive Design */
        @media (max-width: 480px) {
          .container { padding: 0 0.5rem; }
          .logo { font-size: 1.1rem; }
          .logo img { width: 28px; height: 28px; }
          .hamburger { display: block; }
          .nav-container {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #E0F2FF;
            flex-direction: column;
            padding: 0.75rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transform: translateY(-20px);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          .nav-container.open {
            display: flex;
            transform: translateY(0);
            opacity: 1;
          }
          .nav-list {
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
          .nav-link { font-size: 0.9rem; padding: 0.5rem 1rem; width: 100%; text-align: center; }
          .buttons { flex-direction: column; gap: 0.5rem; width: 100%; padding: 0.5rem 0; }
          :global(.button) { font-size: 0.9rem; padding: 0.6rem 1rem; max-width: 100%; }
          .hero { padding: 1.5rem 0; }
          .hero-wrapper { gap: 1rem; }
          .hero-content h1 { font-size: 1.3rem; }
          .hero-content .highlight { font-size: 1.8rem; }
          .hero-content p { font-size: 0.85rem; margin-bottom: 0.75rem; }
          .hero-content .buttons { gap: 0.5rem; }
          .hero-image { max-width: 100%; }
          .wave { height: 2.5rem; }
          .features, .services, .networks, .contact { padding: 1.5rem 0; }
          .features h2, .services h2, .networks h2, .contact h2 { font-size: 1.2rem; }
          .subtitle { font-size: 0.8rem; margin-bottom: 0.75rem; }
          .feature-grid, .service-grid, .contact-info { grid-template-columns: 1fr; gap: 0.75rem; }
          .feature-card, .service-card { padding: 0.75rem; }
          .feature-card h3, .service-card h3 { font-size: 1rem; }
          .feature-card p, .service-card p { font-size: 0.8rem; }
          .feature-image-wrapper, .service-image-wrapper { width: 2.5rem; height: 2.5rem; }
          .feature-image-wrapper img, .service-image-wrapper img { width: 1.75rem; height: 1.75rem; }
          .service-features { font-size: 0.75rem; padding: 0 0.5rem; }
          .service-features li { padding-left: 1rem; }
          .network-logos { gap: 0.5rem; }
          .network-logos img { width: 4rem; height: 2rem; }
          .contact-info { grid-template-columns: 1fr; }
          .contact-item { padding: 0.75rem; }
          .contact-item img { width: 1.75rem; height: 1.75rem; }
          .contact-item h3 { font-size: 0.9rem; }
          .contact-item p { font-size: 0.8rem; }
          .whatsapp img { width: 2rem; height: 2rem; }
          footer { font-size: 0.75rem; padding: 0.75rem 0; }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .container { padding: 0 1rem; }
          .logo { font-size: 1.2rem; }
          .hamburger { display: block; }
          .nav-container {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #E0F2FF;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transform: translateY(-20px);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          .nav-container.open {
            display: flex;
            transform: translateY(0);
            opacity: 1;
          }
          .nav-list { flex-direction: column; gap: 0.75rem; align-items: center; }
          .nav-link { font-size: 1rem; padding: 0.6rem 1.2rem; width: 100%; text-align: center; }
          .buttons { flex-direction: column; gap: 0.75rem; width: 100%; padding: 0.75rem 0; }
          :global(.button) { font-size: 0.95rem; padding: 0.7rem 1.2rem; max-width: 100%; }
          .hero { padding: 2rem 0; }
          .hero-wrapper { gap: 1.5rem; }
          .hero-content h1 { font-size: 1.8rem; }
          .hero-content .highlight { font-size: 2.2rem; }
          .hero-content p { font-size: 1rem; }
          .hero-image { max-width: 90%; }
          .features, .services, .networks, .contact { padding: 2rem 0; }
          .feature-grid, .service-grid { grid-template-columns: repeat(2, 1fr); }
          .contact-info { grid-template-columns: repeat(2, 1fr); }
          .network-logos { gap: 0.75rem; }
          .network-logos img { width: 5rem; height: 2.5rem; }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .container { max-width: 960px; }
          .hamburger { display: none; }
          .nav-container { display: flex; }
          .nav-list { flex-direction: row; }
          .buttons { flex-direction: row; }
          .hero-wrapper { flex-direction: row; justify-content: space-between; }
          .hero-content { max-width: 50%; }
          .hero-image { max-width: 45%; }
          .hero-content .buttons { flex-direction: row; }
          .feature-grid, .service-grid { grid-template-columns: repeat(2, 1fr); }
          .contact-info { grid-template-columns: repeat(3, 1fr); }
          :global(.button) { font-size: 1rem; padding: 0.75rem 1.5rem; max-width: 11rem; }
        }

        @media (min-width: 1025px) {
          .container { max-width: 1440px; }
          .hamburger { display: none; }
          .nav-container { display: flex; }
          .nav-list { flex-direction: row; }
          .logo { font-size: 1.5rem; }
          .nav-link { font-size: 1.1rem; }
          :global(.button) { font-size: 1.1rem; padding: 0.85rem 1.75rem; max-width: 12rem; }
          .hero { padding: 5rem 0; }
          .hero-wrapper { flex-direction: row; justify-content: space-between; }
          .hero-content { max-width: 45%; }
          .hero-content h1 { font-size: 3rem; }
          .hero-content .highlight { font-size: 3.5rem; }
          .hero-content p { font-size: 1.3rem; }
          .hero-content .buttons { flex-direction: row; }
          .hero-image { max-width: 40%; }
          .features h2, .services h2, .networks h2, .contact h2 { font-size: 2rem; }
          .subtitle { font-size: 1.1rem; }
          .feature-card h3, .service-card h3 { font-size: 1.3rem; }
          .feature-card p, .service-card p { font-size: 1rem; }
          .service-features { font-size: 0.9rem; }
          .network-logos img { width: 6.5rem; height: 3.25rem; }
          .contact-item h3 { font-size: 1.2rem; }
          .contact-item p { font-size: 1rem; }
          .whatsapp img { width: 2.75rem; height: 2.75rem; }
          footer { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
