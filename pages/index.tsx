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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
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
              width={40}
              height={40}
              priority
              sizes="(max-width: 768px) 32px, 40px"
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
              <li><Link href="/" className="nav-link">Home</Link></li>
              <li><Link href="#features" className="nav-link">Features</Link></li>
              <li><Link href="#services" className="nav-link">Services</Link></li>
              <li><Link href="#faqs" className="nav-link">FAQs</Link></li>
              <li><Link href="#contact" className="nav-link">Contact Us</Link></li>
            </ul>
           
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
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ objectFit: 'contain', maxWidth: '100%' }}
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
                  width={64}
                  height={64}
                  sizes="(max-width: 768px) 48px, 64px"
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
                  width={64}
                  height={64}
                  sizes="(max-width: 768px) 48px, 64px"
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
                  width={64}
                  height={64}
                  sizes="(max-width: 768px) 48px, 64px"
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
                  width={64}
                  height={64}
                  sizes="(max-width: 768px) 48px, 64px"
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Customer Support</h3>
              <p>24/7 support to address your needs efficiently.</p>
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
                  width={64}
                  height={64}
                  sizes="(max-width: 768px) 48px, 64px"
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
                  width={64}
                  height={64}
                  sizes="(max-width: 768px) 48px, 64px"
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
                  width={64}
                  height={64}
                  sizes="(max-width: 768px) 48px, 64px"
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
                  width={64}
                  height={64}
                  sizes="(max-width: 768px) 48px, 64px"
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
            <Image src="/asset/mtn.jpg" alt="MTN" width={120} height={60} sizes="(max-width: 768px) 90px, 120px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/airtel.png" alt="Airtel" width={120} height={60} sizes="(max-width: 768px) 90px, 120px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/glo.jpg" alt="Glo" width={120} height={60} sizes="(max-width: 768px) 90px, 120px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/9mobile.png" alt="9mobile" width={120} height={60} sizes="(max-width: 768px) 90px, 120px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/dstvstarsat.png" alt="DSTV" width={120} height={60} sizes="(max-width: 768px) 90px, 120px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/ekedc.png" alt="EKEDC" width={120} height={60} sizes="(max-width: 768px) 90px, 120px" style={{ objectFit: 'contain' }} loading="lazy" />
            <Image src="/asset/ibedcpng.png" alt="IBEDC" width={120} height={60} sizes="(max-width: 768px) 90px, 120px" style={{ objectFit: 'contain' }} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="underline pink"></div>
          <p className="subtitle">Have questions or need assistance? Reach out to our support team!</p>
          <p className="contact-intro">We’re here to help with inquiries about airtime, data, TV subscriptions, or bill payments. Contact us via phone, email, or WhatsApp.</p>
          <div className="contact-info">
            <div className="contact-item" style={{ animationDelay: '0.2s' }}>
              <Image
                src="https://img.icons8.com/ios-filled/48/FFFFFF/marker.png"
                alt="Address"
                width={48}
                height={48}
                sizes="(max-width: 768px) 36px, 48px"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <h3>Address</h3>
              <p>No. 4, Mercyland Estate Ayobo-Ipaja, Lagos</p>
            </div>
            <div className="contact-item" style={{ animationDelay: '0.4s' }}>
              <Image
                src="https://img.icons8.com/ios-filled/48/FFFFFF/phone.png"
                alt="Phone"
                width={48}
                height={48}
                sizes="(max-width: 768px) 36px, 48px"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <h3>Phone Number</h3>
              <p>+234 - 815 042 3800</p>
            </div>
            <div className="contact-item" style={{ animationDelay: '0.6s' }}>
              <Image
                src="https://img.icons8.com/ios-filled/48/FFFFFF/email.png"
                alt="Email"
                width={48}
                height={48}
                sizes="(max-width: 768px) 36px, 48px"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <h3>Email</h3>
              <p>swipetelecomsnigeria@gmail.com</p>
            </div>
          </div>
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
            src="https://img.icons8.com/color/56/25D366/whatsapp.png"
            alt="WhatsApp"
            width={56}
            height={56}
            sizes="(max-width: 768px) 48px, 56px"
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
          -webkit-tap-highlight-color: transparent;
        }

        .main {
          width: 100%;
          margin: 0 auto;
          overflow-x: hidden;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .container {
          width: 100%;
          max-width: clamp(300px, 94vw, 1280px);
          margin: 0 auto;
          padding: 0 clamp(0.5rem, 3vw, 1.5rem);
        }

        /* Header Styles */
        header {
          background-color: #E0F2FF;
          padding: clamp(0.5rem, 2.5vh, 1.25rem) 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: clamp(0.5rem, 2vw, 1rem);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: clamp(0.4rem, 1.5vw, 0.75rem);
          color: #003087;
          font-size: clamp(1rem, 2.8vw, 1.6rem);
          font-weight: 600;
        }

        .nav-container {
          display: flex;
          align-items: center;
          gap: clamp(0.75rem, 2.5vw, 1.5rem);
          flex-grow: 1;
          justify-content: flex-end;
        }

        .nav-list {
          list-style: none;
          display: flex;
          gap: clamp(0.5rem, 2vw, 1rem);
          margin: 0;
        }

        .nav-link {
          color: #1E3A8A;
          text-decoration: none;
          font-size: clamp(0.85rem, 2vw, 1.05rem);
          font-weight: 600;
          padding: clamp(0.4rem, 1.5vw, 0.7rem) clamp(0.6rem, 2vw, 1rem);
          border-radius: 8px;
          transition: all 0.2s ease, backdrop-filter 0.2s ease;
          touch-action: manipulation;
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid #E0F2FF;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
        }

        .nav-link:hover::after {
          width: 200%;
          height: 200%;
        }

        .nav-link:hover {
          color: #EC4899;
          background: rgba(236, 72, 153, 0.15);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .nav-link:focus {
          color: #F472B6;
          outline: none;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.4);
        }

        .nav-link:active {
          transform: scale(0.98);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: clamp(0.5rem, 2vw, 0.75rem);
          z-index: 1001;
          touch-action: manipulation;
        }

        .hamburger-icon {
          display: block;
          width: clamp(1.5rem, 4.5vw, 1.8rem);
          height: 0.2rem;
          background: #1E3A8A;
          position: relative;
          transition: background 0.2s ease;
        }

        .hamburger-icon::before,
        .hamburger-icon::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 0.2rem;
          background: #1E3A8A;
          transition: transform 0.2s ease;
        }

        .hamburger-icon::before {
          top: -0.5rem;
        }

        .hamburger-icon::after {
          top: 0.5rem;
        }

        .hamburger[aria-expanded="true"] .hamburger-icon {
          background: transparent;
        }

        .hamburger[aria-expanded="true"] .hamburger-icon::before {
          transform: rotate(45deg) translate(0.35rem, 0.35rem);
        }

        .hamburger[aria-expanded="true"] .hamburger-icon::after {
          transform: rotate(-45deg) translate(0.35rem, -0.35rem);
        }

        .nav-container.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .buttons {
          display: flex;
          gap: clamp(0.5rem, 2vw, 1rem);
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Button Base Styles */
        :global(.button) {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: clamp(8rem, 30vw, 10rem);
          padding: clamp(0.6rem, 2.5vw, 0.8rem) clamp(1.25rem, 3.5vw, 1.5rem);
          border-radius: 10px;
          font-size: clamp(0.9rem, 2.2vw, 1.1rem);
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
          border: none;
          line-height: 1.5;
          touch-action: manipulation;
          position: relative;
          overflow: hidden;
        }

        :global(.button::after) {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
        }

        :global(.button:hover::after) {
          width: 200%;
          height: 200%;
        }

        :global(.button:hover) {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        :global(.button:focus) {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
        }

        :global(.button:active) {
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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
          padding: clamp(2rem, 6vh, 4rem) 0;
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
          gap: clamp(1rem, 3.5vw, 2rem);
          max-width: 100%;
          padding: 0 clamp(0.5rem, 3vw, 1.5rem);
          box-sizing: border-box;
        }

        .hero-content {
          max-width: clamp(16rem, 90vw, 40rem);
          z-index: 1;
          animation: fadeIn 0.8s ease-out;
          text-align: center;
        }

        .hero-content h1 {
          font-size: clamp(1.2rem, 5vw, 2.8rem);
          font-weight: 700;
          margin: 0 0 clamp(0.5rem, 2vw, 0.75rem);
          line-height: 1.3;
        }

        .hero-content .highlight {
          font-size: clamp(1.6rem, 5.5vw, 3.2rem);
          color: #EC4899;
          font-weight: 700;
        }

        .hero-content p {
          font-size: clamp(0.85rem, 2.2vw, 1.15rem);
          margin: 0 0 clamp(0.75rem, 3vw, 1.25rem);
          line-height: 1.6;
          color: #E0F2FF;
        }

        .hero-content .buttons {
          gap: clamp(0.5rem, 2vw, 1rem);
          flex-direction: column;
          align-items: center;
        }

        .hero-image {
          max-width: clamp(12rem, 90vw, 32rem);
          z-index: 1;
          animation: slideInRight 0.8s ease-out;
        }

        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: clamp(2rem, 10vw, 4.5rem);
          background: url('/wave.svg') no-repeat;
          background-size: cover;
          background-position: center;
          animation: waveMove 5s infinite ease-in-out;
        }

        /* Features Section Styles */
        .features {
          padding: clamp(2rem, 6vh, 4rem) 0;
          text-align: center;
          background: #FFFFFF;
          width: 100%;
          overflow-x: hidden;
        }

        .features h2 {
          font-size: clamp(1.2rem, 3.5vw, 2rem);
          color: #1E3A8A;
          font-weight: 600;
          margin: 0 0 clamp(0.25rem, 1.5vw, 0.5rem);
        }

        .underline {
          width: clamp(2rem, 6vw, 3.5rem);
          height: 0.2rem;
          background-color: #FFFFFF;
          margin: 0 auto clamp(0.25rem, 1.5vw, 0.5rem);
        }

        .underline.pink {
          background-color: #EC4899;
        }

        .subtitle {
          font-size: clamp(0.75rem, 2.2vw, 1rem);
          color: #6B7280;
          margin: 0 0 clamp(0.75rem, 3vw, 1.25rem);
          font-weight: 500;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(8.5rem, 28vw, 12rem), 1fr));
          gap: clamp(0.5rem, 2.5vw, 1.25rem);
        }

        .feature-card {
          background: #FFFFFF;
          border-radius: 10px;
          padding: clamp(0.5rem, 2.5vw, 1.25rem);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-align: center;
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }

        .feature-card h3 {
          font-size: clamp(0.85rem, 2.2vw, 1.15rem);
          color: #1E3A8A;
          margin: clamp(0.25rem, 1.5vw, 0.5rem) 0;
          font-weight: 600;
        }

        .feature-card p {
          font-size: clamp(0.65rem, 2vw, 0.95rem);
          color: #6B7280;
          line-height: 1.6;
        }

        .feature-image-wrapper {
          width: clamp(2.5rem, 9vw, 4rem);
          height: clamp(2.5rem, 9vw, 4rem);
          margin: 0 auto clamp(0.3rem, 1.5vw, 0.6rem);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #F3F4F6;
          border-radius: 8px;
          border: 1px solid #E5E7EB;
        }

        .feature-image-wrapper img {
          width: clamp(1.8rem, 7vw, 2.8rem);
          height: clamp(1.8rem, 7vw, 2.8rem);
          object-fit: contain;
        }

        /* Services Section Styles */
        .services {
          padding: clamp(2rem, 6vh, 4rem) 0;
          text-align: center;
          background: #EFF6FF;
          width: 100%;
          overflow-x: hidden;
        }

        .services h2 {
          font-size: clamp(1.2rem, 3.5vw, 2rem);
          color: #1E3A8A;
          font-weight: 600;
          margin: 0 0 clamp(0.25rem, 1.5vw, 0.5rem);
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(8.5rem, 28vw, 12rem), 1fr));
          gap: clamp(0.5rem, 2.5vw, 1.25rem);
          margin: 0 0 clamp(0.75rem, 3vw, 1.25rem);
        }

        .service-card {
          background: #FFFFFF;
          border-radius: 10px;
          padding: clamp(0.5rem, 2.5vw, 1.25rem);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-align: center;
          animation: scaleIn 0.5s ease-out forwards;
        }

        .service-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }

        .service-card h3 {
          font-size: clamp(0.85rem, 2.2vw, 1.15rem);
          color: #1E3A8A;
          margin: clamp(0.25rem, 1.5vw, 0.5rem) 0;
          font-weight: 600;
        }

        .service-card p {
          font-size: clamp(0.65rem, 2vw, 0.95rem);
          color: #6B7280;
          margin: 0 0 clamp(0.3rem, 1.5vw, 0.6rem);
          line-height: 1.6;
        }

        .service-features {
          list-style: none;
          text-align: left;
          margin: 0 0 clamp(0.3rem, 1.5vw, 0.6rem);
          padding: 0 clamp(0.4rem, 1.5vw, 0.75rem);
          font-size: clamp(0.6rem, 1.8vw, 0.85rem);
          color: #6B7280;
          line-height: 1.7;
        }

        .service-features li {
          margin-bottom: clamp(0.2rem, 1vw, 0.4rem);
          position: relative;
          padding-left: clamp(0.9rem, 2.5vw, 1.2rem);
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #EC4899;
          font-size: clamp(0.7rem, 2vw, 0.9rem);
        }

        .service-image-wrapper {
          width: clamp(2.5rem, 9vw, 4rem);
          height: clamp(2.5rem, 9vw, 4rem);
          margin: 0 auto clamp(0.3rem, 1.5vw, 0.6rem);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #F3F4F6;
          border-radius: 8px;
          border: 1px solid #E5E7EB;
        }

        .service-image-wrapper img {
          width: clamp(1.8rem, 7vw, 2.8rem);
          height: clamp(1.8rem, 7vw, 2.8rem);
          object-fit: contain;
        }

        .service-cta {
          font-size: clamp(0.75rem, 2.2vw, 1rem);
          color: #1E3A8A;
          margin: clamp(0.5rem, 2.5vw, 1.25rem) 0 0;
          line-height: 1.6;
          max-width: clamp(16rem, 90vw, 32rem);
          margin-left: auto;
          margin-right: auto;
        }

        /* Networks Section Styles */
        .networks {
          padding: clamp(2rem, 6vh, 4rem) 0;
          text-align: center;
          background: #FFFFFF;
          width: 100%;
          overflow-x: hidden;
        }

        .networks h2 {
          font-size: clamp(1.2rem, 3.5vw, 2rem);
          color: #1E3A8A;
          font-weight: 600;
          margin: 0 0 clamp(0.25rem, 1.5vw, 0.5rem);
        }

        .network-logos {
          display: flex;
          justify-content: center;
          gap: clamp(0.5rem, 2.5vw, 1.25rem);
          flex-wrap: wrap;
        }

        .network-logos img {
          width: clamp(3.5rem, 10vw, 6rem);
          height: clamp(1.75rem, 5vw, 3rem);
          max-width: 100%;
        }

        /* Contact Section Styles */
        .contact {
          padding: clamp(2rem, 6vh, 4rem) 0;
          text-align: center;
          background-color: #1E3A8A;
          color: #FFFFFF;
          width: 100%;
          overflow-x: hidden;
        }

        .contact h2 {
          font-size: clamp(1.2rem, 3.5vw, 2rem);
          font-weight: 700;
          margin: 0 0 clamp(0.25rem, 1.5vw, 0.5rem);
        }

        .contact .subtitle {
          font-size: clamp(0.75rem, 2.2vw, 1rem);
          margin: 0 0 clamp(0.5rem, 2vw, 0.75rem);
          font-weight: 500;
        }

        .contact-intro {
          font-size: clamp(0.65rem, 2vw, 0.95rem);
          color: #E0F2FF;
          margin: 0 0 clamp(0.75rem, 3vw, 1.25rem);
          max-width: clamp(16rem, 90vw, 32rem);
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(clamp(8.5rem, 28vw, 12rem), 1fr));
          gap: clamp(0.5rem, 2.5vw, 1.25rem);
          max-width: clamp(16rem, 90vw, 32rem);
          margin: 0 auto clamp(0.75rem, 3vw, 1.25rem);
        }

        .contact-item {
          text-align: center;
          padding: clamp(0.5rem, 2.5vw, 1.25rem);
          animation: slideInLeft 0.5s ease-out forwards;
        }

        .contact-item h3 {
          font-size: clamp(0.85rem, 2.2vw, 1.1rem);
          font-weight: 600;
          margin: clamp(0.25rem, 1.5vw, 0.5rem) 0;
        }

        .contact-item p {
          font-size: clamp(0.65rem, 2vw, 0.95rem);
          color: #E0F2FF;
        }

        /* Footer Styles */
        footer {
          background-color: #1E3A8A;
          color: #FFFFFF;
          text-align: center;
          padding: clamp(0.5rem, 2.5vh, 1.25rem);
          font-size: clamp(0.65rem, 2vw, 0.95rem);
          margin-top: auto;
        }

        footer p {
          margin: 0;
        }

        /* WhatsApp Icon Styles */
        .whatsapp {
          position: fixed;
          bottom: clamp(0.5rem, 2.5vw, 1rem);
          right: clamp(0.5rem, 2.5vw, 1rem);
          z-index: 1000;
          background: #25D366;
          border-radius: 50%;
          padding: clamp(0.3rem, 1.5vw, 0.6rem);
          box-shadow: 0 2px 6px rgba(37, 211, 102, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .whatsapp:hover {
          transform: scale(1.1);
          box-shadow: 0 3px 8px rgba(37, 211, 102, 0.5);
        }

        .whatsapp img {
          width: clamp(2rem, 7vw, 2.8rem);
          height: clamp(2rem, 7vw, 2.8rem);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(50%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes waveMove {
          0% { transform: translateY(0); }
          50% { transform: translateY(-0.2rem); }
          100% { transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(0.5rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-0.5rem); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Mobile-Specific Styles (≤768px) */
        @media (max-width: 768px) {
          .container {
            max-width: clamp(300px, 100vw, 768px);
            padding: 0 clamp(0.5rem, 3vw, 1rem);
          }

          .hamburger {
            display: block;
          }

          .nav-container {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #E0F2FF;
            flex-direction: column;
            padding: clamp(0.75rem, 3vw, 1rem);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
          }

          .nav-container.open {
            display: flex;
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-list {
            flex-direction: column;
            gap: clamp(0.5rem, 2.5vw, 0.75rem);
            align-items: center;
            width: 100%;
          }

          .nav-link {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
            padding: clamp(0.5rem, 2.5vw, 0.75rem) clamp(1rem, 3vw, 1.25rem);
            width: 100%;
            text-align: center;
            background: #BFDBFE;
            color: #1E3A8A;
            border: 1px solid #93C5FD;
            backdrop-filter: none;
          }

          .nav-link:hover {
            background: #93C5FD;
            color: #1E3A8A;
            transform: translateY(-2px);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
          }

          .nav-link:focus {
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
          }

          .nav-link:active {
            transform: scale(0.98);
          }

          .buttons {
            flex-direction: column;
            gap: clamp(0.5rem, 2.5vw, 0.75rem);
            width: 100%;
            padding: clamp(0.5rem, 2.5vw, 0.75rem) 0;
          }

          :global(.button) {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
            padding: clamp(0.5rem, 2.5vw, 0.75rem) clamp(1rem, 3vw, 1.25rem);
            max-width: 100%;
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

          .hero-wrapper {
            gap: clamp(1rem, 3.5vw, 1.5rem);
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-content h1 {
            font-size: clamp(1.2rem, 5vw, 1.8rem);
          }

          .hero-content .highlight {
            font-size: clamp(1.6rem, 5.5vw, 2.2rem);
          }

          .hero-content p {
            font-size: clamp(0.85rem, 2.5vw, 1rem);
          }

          .hero-image {
            max-width: 100%;
          }

          .feature-grid, .service-grid {
            grid-template-columns: 1fr;
          }

          .contact-info {
            grid-template-columns: 1fr;
          }
        }

        /* Tablet-Specific Styles (769px–1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .container {
            max-width: clamp(769px, 94vw, 1024px);
            padding: 0 clamp(0.75rem, 2.5vw, 1.25rem);
          }

          .logo {
            font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          }

          .nav-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: clamp(0.75rem, 2vw, 1rem);
          }

          .nav-list {
            display: flex;
            gap: clamp(0.5rem, 1.5vw, 0.75rem);
          }

          .nav-link {
            font-size: clamp(0.9rem, 1.8vw, 1rem);
            padding: clamp(0.4rem, 1.2vw, 0.6rem) clamp(0.6rem, 1.8vw, 0.8rem);
            background: rgba(191, 219, 254, 0.9);
            color: #1E3A8A;
            border: 1px solid #93C5FD;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
          }

          .nav-link:hover {
            background: rgba(147, 197, 253, 0.9);
            color: #EC4899;
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          .nav-link:focus {
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.4);
          }

          .nav-link:active {
            transform: scale(0.98);
          }

          .buttons {
            gap: clamp(0.5rem, 1.5vw, 0.75rem);
          }

          :global(.button) {
            font-size: clamp(0.9rem, 1.8vw, 1rem);
            padding: clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.25rem, 2.5vw, 1.5rem);
            max-width: clamp(9rem, 20vw, 11rem);
            border-radius: 8px;
            font-weight: 600;
            letter-spacing: 0.01em;
            transition: all 0.2s ease;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
          }

          :global(.button:hover) {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px) scale(1.05);
          }

          :global(.button:focus) {
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.4);
          }

          :global(.button:active) {
            transform: scale(0.98);
          }

          :global(.login) {
            background: rgba(37, 99, 235, 0.9);
            color: #FFFFFF;
            border: 1px solid #2563EB;
          }

          :global(.login:hover) {
            background: rgba(59, 130, 246, 0.9);
            border-color: #60A5FA;
          }

          :global(.login:active) {
            background: rgba(29, 78, 216, 0.9);
            border-color: #1D4ED8;
          }

          :global(.signup),
          :global(.btn) {
            background: rgba(219, 39, 119, 0.9);
            color: #FFFFFF;
            border: none;
          }

          :global(.signup:hover),
          :global(.btn:hover) {
            background: rgba(244, 114, 182, 0.9);
          }

          :global(.signup:active),
          :global(.btn:active) {
            background: rgba(190, 24, 93, 0.9);
          }

          .hero-wrapper {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: clamp(1rem, 2.5vw, 1.5rem);
          }

          .hero-content {
            max-width: clamp(18rem, 50vw, 22rem);
            text-align: left;
          }

          .hero-content h1 {
            font-size: clamp(1.5rem, 4vw, 2rem);
          }

          .hero-content .highlight {
            font-size: clamp(1.8rem, 4.5vw, 2.5rem);
          }

          .hero-content p {
            font-size: clamp(0.9rem, 2vw, 1rem);
          }

          .hero-content .buttons {
            flex-direction: row;
            justify-content: flex-start;
          }

          .hero-image {
            max-width: clamp(18rem, 45vw, 24rem);
          }

          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .contact-info {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Desktop-Specific Styles (1025px–1439px) */
        @media (min-width: 1025px) and (max-width: 1439px) {
          .container {
            max-width: clamp(1024px, 90vw, 1400px);
            padding: 0 clamp(1.5rem, 2vw, 2rem);
          }

          .logo {
            font-size: clamp(1.4rem, 2vw, 1.6rem);
          }

          .nav-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: clamp(1rem, 2vw, 1.5rem);
          }

          .nav-list {
            display: flex;
            gap: clamp(0.75rem, 1.5vw, 1rem);
          }

          .nav-link {
            font-size: clamp(1rem, 1.2vw, 1.15rem);
            padding: clamp(0.6rem, 1vw, 0.8rem) clamp(1rem, 1.5vw, 1.2rem);
            background: rgba(255, 255, 255, 0.8);
            color: #1E3A8A;
            border: 1px solid #E0F2FF;
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
          }

          .nav-link:hover {
            background: rgba(236, 72, 153, 0.15);
            color: #EC4899;
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
          }

          .nav-link:focus {
            box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.5);
          }

          .nav-link:active {
            transform: scale(0.98);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          }

          .buttons {
            gap: clamp(0.75rem, 1.5vw, 1rem);
          }

          :global(.button) {
            font-size: clamp(1rem, 1.2vw, 1.15rem);
            padding: clamp(0.7rem, 1.5vw, 0.9rem) clamp(1.5rem, 2.5vw, 2rem);
            max-width: clamp(11rem, 14vw, 13rem);
            border-radius: 8px;
            font-weight: 600;
            letter-spacing: 0.01em;
            transition: all 0.2s ease, backdrop-filter 0.2s ease;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
          }

          :global(.button:hover) {
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
            transform: translateY(-2px) scale(1.05);
          }

          :global(.button:focus) {
            box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.5);
          }

          :global(.button:active) {
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
            transform: scale(0.98);
          }

          :global(.login) {
            background: rgba(37, 99, 235, 0.9);
            color: #FFFFFF;
            border: 1px solid #2563EB;
          }

          :global(.login:hover) {
            background: rgba(59, 130, 246, 0.9);
            border-color: #60A5FA;
          }

          :global(.login:active) {
            background: rgba(29, 78, 216, 0.9);
            border-color: #1D4ED8;
          }

          :global(.signup),
          :global(.btn) {
            background: rgba(219, 39, 119, 0.9);
            color: #FFFFFF;
            border: none;
          }

          :global(.signup:hover),
          :global(.btn:hover) {
            background: rgba(244, 114, 182, 0.9);
          }

          :global(.signup:active),
          :global(.btn:active) {
            background: rgba(190, 24, 93, 0.9);
          }

          .hero-wrapper {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: clamp(2rem, 3vw, 3rem);
          }

          .hero-content {
            max-width: clamp(24rem, 48vw, 36rem);
            text-align: left;
          }

          .hero-content h1 {
            font-size: clamp(2.5rem, 3.5vw, 3.2rem);
          }

          .hero-content .highlight {
            font-size: clamp(3rem, 4.5vw, 3.8rem);
          }

          .hero-content p {
            font-size: clamp(1.1rem, 1.8vw, 1.25rem);
          }

          .hero-content .buttons {
            flex-direction: row;
            justify-content: flex-start;
          }

          .hero-image {
            max-width: clamp(28rem, 45vw, 40rem);
          }

          .feature-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: clamp(1rem, 2vw, 1.5rem);
          }

          .service-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: clamp(1rem, 2vw, 1.5rem);
          }

          .feature-card, .service-card {
            padding: clamp(0.75rem, 2vw, 1.5rem);
          }

          .feature-card h3, .service-card h3 {
            font-size: clamp(1rem, 1.8vw, 1.25rem);
          }

          .feature-card p, .service-card p {
            font-size: clamp(0.75rem, 1.5vw, 1rem);
          }

          .feature-image-wrapper, .service-image-wrapper {
            width: clamp(3rem, 8vw, 4.5rem);
            height: clamp(3rem, 8vw, 4.5rem);
          }

          .feature-image-wrapper img, .service-image-wrapper img {
            width: clamp(2rem, 6vw, 3rem);
            height: clamp(2rem, 6vw, 3rem);
          }

          .service-features {
            font-size: clamp(0.7rem, 1.5vw, 0.9rem);
          }

          .service-features li {
            padding-left: clamp(1rem, 2vw, 1.25rem);
          }

          .service-features li::before {
            font-size: clamp(0.8rem, 1.8vw, 0.95rem);
          }

          .contact-info {
            grid-template-columns: repeat(3, 1fr);
            max-width: clamp(28rem, 75vw, 56rem);
          }

          .contact-item {
            padding: clamp(0.75rem, 2vw, 1.5rem);
          }

          .contact-item h3 {
            font-size: clamp(1rem, 1.8vw, 1.2rem);
          }

          .contact-item p {
            font-size: clamp(0.75rem, 1.5vw, 1rem);
          }
        }

        /* Ultra-Wide Desktop Styles (≥1440px) */
        @media (min-width: 1440px) {
          .container {
            max-width: clamp(1280px, 88vw, 1920px);
            padding: 0 clamp(1.75rem, 1.8vw, 2.5rem);
          }

          .logo {
            font-size: clamp(1.5rem, 1.8vw, 1.8rem);
          }

          .nav-link {
            font-size: clamp(1.1rem, 1vw, 1.25rem);
            padding: clamp(0.7rem, 0.8vw, 0.9rem) clamp(1.2rem, 1.3vw, 1.5rem);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
          }

          .buttons {
            gap: clamp(1rem, 1.5vw, 1.2rem);
          }

          :global(.button) {
            font-size: clamp(1.1rem, 1vw, 1.25rem);
            padding: clamp(0.8rem, 1.2vw, 1rem) clamp(1.8rem, 2vw, 2.2rem);
            max-width: clamp(12rem, 12vw, 15rem);
          }

          .hero-content {
            max-width: clamp(28rem, 45vw, 40rem);
          }

          .hero-content h1 {
            font-size: clamp(2.8rem, 3.2vw, 3.5rem);
          }

          .hero-content .highlight {
            font-size: clamp(3.2rem, 4vw, 4rem);
          }

          .hero-content p {
            font-size: clamp(1.2rem, 1.5vw, 1.3rem);
          }

          .hero-image {
            max-width: clamp(32rem, 42vw, 48rem);
          }

          .features h2, .services h2, .networks h2, .contact h2 {
            font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          }

          .subtitle {
            font-size: clamp(0.9rem, 1.8vw, 1.1rem);
          }

          .feature-grid, .service-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: clamp(1.25rem, 1.8vw, 2rem);
          }

          .feature-card, .service-card {
            padding: clamp(1rem, 1.8vw, 1.75rem);
          }

          .feature-card h3, .service-card h3 {
            font-size: clamp(1.1rem, 1.5vw, 1.3rem);
          }

          .feature-card p, .service-card p {
            font-size: clamp(0.85rem, 1.3vw, 1.1rem);
          }

          .feature-image-wrapper, .service-image-wrapper {
            width: clamp(3.5rem, 7vw, 5rem);
            height: clamp(3.5rem, 7vw, 5rem);
          }

          .feature-image-wrapper img, .service-image-wrapper img {
            width: clamp(2.5rem, 5.5vw, 3.5rem);
            height: clamp(2.5rem, 5.5vw, 3.5rem);
          }

          .service-features {
            font-size: clamp(0.8rem, 1.3vw, 1rem);
          }

          .service-features li {
            padding-left: clamp(1.1rem, 1.8vw, 1.5rem);
          }

          .service-features li::before {
            font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          }

          .service-cta {
            font-size: clamp(0.9rem, 1.8vw, 1.1rem);
            max-width: clamp(20rem, 80vw, 40rem);
          }

          .network-logos img {
            width: clamp(4rem, 8vw, 6.5rem);
            height: clamp(2rem, 4vw, 3.25rem);
          }

          .contact-info {
            grid-template-columns: repeat(3, 1fr);
            max-width: clamp(32rem, 70vw, 64rem);
          }

          .contact-item {
            padding: clamp(1rem, 1.8vw, 1.75rem);
          }

          .contact-item h3 {
            font-size: clamp(1.1rem, 1.5vw, 1.3rem);
          }

          .contact-item p {
            font-size: clamp(0.85rem, 1.3vw, 1.1rem);
          }

          .whatsapp img {
            width: clamp(2.5rem, 6vw, 3.2rem);
            height: clamp(2.5rem, 6vw, 3.2rem);
          }

          footer {
            padding: clamp(0.75rem, 2vh, 1.5rem);
            font-size: clamp(0.8rem, 1.5vw, 1rem);
          }
          /* Existing styles remain unchanged up to media queries */

/* Desktop-Specific Styles (1025px–1439px) */
@media (min-width: 1025px) and (max-width: 1439px) {
  .container {
    max-width: clamp(1024px, 90vw, 1400px);
    padding: 0 clamp(1.5rem, 2vw, 2rem);
  }

  .hero-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: clamp(2rem, 3vw, 3rem);
  }

  .hero-content {
    max-width: clamp(24rem, 48vw, 36rem);
    text-align: left;
  }

  .hero-image {
    max-width: clamp(28rem, 45vw, 40rem);
  }

  .feature-grid, .service-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(1rem, 2vw, 1.5rem);
  }

  .feature-card, .service-card {
    max-width: 16rem;
    margin: 0 auto;
  }

  .nav-link {
    font-size: clamp(1rem, 1.2vw, 1.15rem);
    padding: clamp(0.6rem, 1vw, 0.8rem) clamp(1rem, 1.5vw, 1.2rem);
  }

  .buttons {
    gap: clamp(0.75rem, 1.5vw, 1rem);
  }

  :global(.button) {
    font-size: clamp(1rem, 1.2vw, 1.15rem);
    padding: clamp(0.7rem, 1.5vw, 0.9rem) clamp(1.5rem, 2.5vw, 2rem);
    max-width: clamp(11rem, 14vw, 13rem);
  }

  .network-logos img {
    width: clamp(4rem, 8vw, 6rem);
    height: auto;
  }
}

/* Ultra-Wide Desktop Styles (1440px–1599px) */
@media (min-width: 1440px) and (max-width: 1599px) {
  .container {
    max-width: clamp(1280px, 88vw, 1920px);
    padding: 0 clamp(1.75rem, 1.8vw, 2.5rem);
  }

  .hero-content {
    max-width: clamp(28rem, 45vw, 40rem);
  }

  .hero-image {
    max-width: clamp(32rem, 42vw, 48rem);
  }

  .feature-grid, .service-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(1.25rem, 1.8vw, 2rem);
  }

  .feature-card, .service-card {
    max-width: 18rem;
    margin: 0 auto;
  }

  .nav-link {
    font-size: clamp(1.1rem, 1vw, 1.25rem);
    padding: clamp(0.7rem, 0.8vw, 0.9rem) clamp(1.2rem, 1.3vw, 1.5rem);
  }

  :global(.button) {
    font-size: clamp(1.1rem, 1vw, 1.25rem);
    padding: clamp(0.8rem, 1.2vw, 1rem) clamp(1.8rem, 2vw, 2.2rem);
    max-width: clamp(12rem, 12vw, 15rem);
  }

  .network-logos img {
    width: clamp(4.5rem, 8vw, 6.5rem);
    height: auto;
  }
}

/* Additional Breakpoint for Ultra-Wide Screens (≥1600px) */
@media (min-width: 1600px) {
  .container {
    max-width: clamp(1400px, 85vw, 1920px);
    padding: 0 clamp(2rem, 1.5vw, 2.5rem);
  }

  .hero-wrapper {
    gap: clamp(2.5rem, 3vw, 3.5rem);
  }

  .hero-content {
    max-width: clamp(30rem, 45vw, 40rem);
  }

  .hero-image {
    max-width: clamp(35rem, 42vw, 50rem);
  }

  .feature-grid, .service-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(1.5rem, 1.5vw, 2.5rem);
  }

  .feature-card, .service-card {
    max-width: 20rem;
    margin: 0 auto;
  }

  .nav-link {
    font-size: clamp(1.15rem, 1vw, 1.3rem);
    padding: clamp(0.8rem, 0.9vw, 1rem) clamp(1.3rem, 1.4vw, 1.6rem);
  }

  .buttons {
    gap: clamp(1rem, 1.5vw, 1.25rem);
  }

  :global(.button) {
    font-size: clamp(1.15rem, 1vw, 1.3rem);
    padding: clamp(0.9rem, 1.2vw, 1.1rem) clamp(2rem, 2vw, 2.5rem);
    max-width: clamp(13rem, 12vw, 16rem);
  }

  .network-logos img {
    width: clamp(5rem, 8vw, 7rem);
    height: auto;
  }
}
        }
      `}</style>
    </div>
  );
};

export default Home;
