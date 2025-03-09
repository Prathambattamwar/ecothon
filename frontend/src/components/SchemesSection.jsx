import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRegSun, FaGlobe, FaLeaf } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './SchemesSection.css'; // Import the custom CSS

const SchemesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const agricultureSchemes = [
    {
      id: 1,
      title: 'Pradhan Mantri Kisan Urja Suraksha Evam Utthan Mahabhiyan (PM-KUSUM)',
      description:
        'Scheme to promote solar energy in agriculture and provide financial assistance for solar pumps.',
      eligibility: 'Farmers owning agricultural land and having electricity connection.',
      applicationProcess: 'Apply through state government websites or designated agencies.',
      link: 'https://pmkusum.gov.in/',
      tags: ['Solar Energy', 'Subsidy', 'Irrigation'],
      icon: <FaRegSun style={{ color: '#ECC94B' }} /> // Yellow
    },
    {
      id: 2,
      title: 'Soil Health Card Scheme',
      description:
        'Free soil testing and recommendations for improving soil fertility.',
      eligibility: 'All farmers',
      applicationProcess: 'Submit soil samples at designated centers or through online portal.',
      link: 'https://soilhealth.dac.gov.in/',
      tags: ['Soil Health', 'Fertilizer Recommendations', 'Agriculture Support'],
      icon: <FaGlobe style={{ color: '#48BB78' }} /> // Green
    },
    {
      id: 3,
      title: 'National Mission for Sustainable Agriculture (NMSA)',
      description:
        'Promotes sustainable agriculture practices and provides financial assistance for organic farming.',
      eligibility: 'Farmers practicing organic farming or willing to adopt sustainable practices.',
      applicationProcess: 'Apply through state government agriculture departments.',
      link: 'https://nmsa.gov.in/',
      tags: ['Sustainability', 'Organic Farming', 'Subsidy'],
      icon: <FaLeaf style={{ color: '#2F855A' }} /> // Darker green
    }
  ];

  return (
    <section className="scheme-section" data-aos="fade-up">
      <div className="container">
        <div className="scheme-heading">
          <h2>Live Agriculture Schemes</h2>
          <p>
            Discover and apply to the latest government schemes designed to support farmers
            and enhance agricultural productivity.
          </p>
        </div>

        <div className="scheme-grid">
          {agricultureSchemes.map((scheme) => (
            <div key={scheme.id} className="scheme-card" data-aos="zoom-in">
              <div className="card-content">
                <div className="card-header">
                  <div className="icon-title">
                    <div className="scheme-icon">{scheme.icon}</div>
                    <h3 className="card-title">{scheme.title}</h3>
                  </div>
                  <span className="card-tag">{scheme.tags[0]}</span>
                </div>

                <div className="card-description">
                  <p>{scheme.description}</p>
                </div>

                <div className="info-box">
                  <h4>Eligibility:</h4>
                  <p>{scheme.eligibility}</p>
                </div>

                <div className="info-box">
                  <h4>Application Process:</h4>
                  <p>{scheme.applicationProcess}</p>
                </div>

                <a
                  href={scheme.link}
                  className="apply-btns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now <FiArrowRight className="apply-icon" />
                </a>

                <div className="tags">
                  {scheme.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;
