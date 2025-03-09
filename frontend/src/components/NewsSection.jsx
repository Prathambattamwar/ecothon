import React from 'react';
import "./NewsSection.css";

const NewsSection = () => {
  // Sample NGO news data
  const ngoNews = [
    {
      id: 1,
      title: 'Sustainable Farming Initiative',
      description: 'Collaboration with Green Earth NGO to promote organic farming practices',
      ngo: 'Green Earth Foundation',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '#',
      tags: ['Sustainability', 'Organic Farming']
    },
    {
      id: 2,
      title: 'Women in Agriculture Program',
      description: 'Empowering rural women through agricultural training programs',
      ngo: 'AgriWomen International',
      date: '2024-03-14',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '#',
      tags: ['Empowerment', 'Training']
    },
    {
      id: 3,
      title: 'Climate Resilient Crops',
      description: 'New partnership to develop drought-resistant crop varieties',
      ngo: 'ClimateFarm Alliance',
      date: '2024-03-13',
      image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '#',
      tags: ['Climate Change', 'Research']
    },
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        <h2 className="section-title">Agriculture NGO Collaborations</h2>
        <div className="news-grid">
          {ngoNews.map((news) => (
            <article key={news.id} className="news-card">
              <div className="card-image">
                <img src={news.image} alt={news.title} />
                <div className="card-tags">
                  {news.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{news.title}</h3>
                <p className="card-description">{news.description}</p>
                <div className="card-meta">
                  <span className="ngo-name">{news.ngo}</span>
                  <span className="news-date">{new Date(news.date).toLocaleDateString()}</span>
                </div>
                <a href={news.link} className="cta-button">
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;