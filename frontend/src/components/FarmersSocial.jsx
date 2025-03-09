import React, { useState, useEffect } from 'react';
import { FaSeedling, FaCommentDots, FaChartLine, FaTractor, FaCloudSunRain } from 'react-icons/fa';
import { HiUserGroup, HiShoppingBag } from 'react-icons/hi';
import './FarmersSocial.css';

const FarmersSocial = () => {
  // State management
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Raju Patel',
      location: 'Gujarat',
      content: 'Sharing my organic cotton farming techniques - increased yield by 40% this season!',
      likes: 142,
      comments: 35,
      image: '/farm1.jpg'
    },
    {
      id: 2,
      user: 'Priya Sharma',
      location: 'Punjab',
      content: 'Looking for advice on drip irrigation systems for wheat crops...',
      likes: 89,
      comments: 22,
      image: ''
    }
  ]);

  const [newPostContent, setNewPostContent] = useState('');
  const [weather, setWeather] = useState({ temp: '--', condition: 'Loading...' });
  const [currentUser] = useState({ name: 'Current User', location: 'Your Village' });

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Coordinates for Amravati (20.9374° N, 77.7795° E)
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=20.9374&lon=77.7795&units=metric&appid=YOUR_API_KEY`
        );
        
        if (!response.ok) throw new Error('Weather data unavailable');
        
        const data = await response.json();
        
        setWeather({
          temp: `${Math.round(data.main?.temp ?? '--')}°C`,
          condition: data.weather?.[0]?.description || 'Weather unavailable',
          humidity: data.main?.humidity ?? '--',
          windSpeed: data.wind?.speed ?? '--'
        });
        
      } catch (error) {
        console.error('Fetch error:', error);
        setWeather({
          temp: '--',
          condition: 'Weather data failed to load',
          humidity: '--',
          windSpeed: '--'
        });
      }
    };
  
    fetchWeather();
  }, []);
  // Post handling functions
  const handlePostSubmit = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        user: currentUser.name,
        location: currentUser.location,
        content: newPostContent,
        likes: 0,
        comments: 0,
        image: ''
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleComment = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, comments: post.comments + 1 } : post
    ));
  };

  // Quick actions handlers
  const handleEquipmentRental = () => {
    // Implement equipment rental logic
    alert('Redirecting to equipment rental marketplace...');
  };

  const handleCropPrices = () => {
    // Implement crop prices logic
    alert('Showing latest crop prices...');
  };

  return (
    <div className="farmers-social">
      {/* Navigation Header */}
      <header className="header">
        <nav className="nav-container">
          <div className="logo">
            <FaSeedling className="logo-icon" />
            <h1>KrishiConnect</h1>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn">
              <HiUserGroup className="nav-icon" />
              <span>Community</span>
            </button>
            <button className="nav-btn">
              <HiShoppingBag className="nav-icon" />
              <span>Marketplace</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="grid-container">
          {/* Left Sidebar */}
          <aside className="sidebar">
            {/* Weather Widget */}
            <div className="widget weather-widget">
              <div className="widget-header">
                <FaCloudSunRain className="widget-icon" />
                <h3>Weather Update</h3>
              </div>
              <div className="weather-info">
  <p className="temp">{weather.temp}</p>
  <p className="condition">{weather.condition}</p>
  <div className="weather-details">
    <p>Humidity: {weather.humidity}%</p>
    <p>Wind: {weather.windSpeed} km/h</p>
  </div>
</div></div>
            {/* Quick Links */}
            <div className="widget quick-links">
              <h3>Quick Access</h3>
              <div className="links">
                <button className="quick-btn" onClick={handleEquipmentRental}>
                  <FaTractor className="quick-icon" />
                  <span>Equipment Rental</span>
                </button>
                <button className="quick-btn" onClick={handleCropPrices}>
                  <FaChartLine className="quick-icon" />
                  <span>Crop Prices</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Feed */}
          <section className="feed">
            {/* Create Post */}
            <div className="card create-post">
              <div className="create-post-header">
                <div className="user-avatar">
                  <FaSeedling className="avatar-icon" />
                </div>
                <textarea 
                  placeholder="Share your farming experience or ask a question..."
                  rows="2"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                ></textarea>
              </div>
              <div className="create-post-footer">
                <button className="post-btn" onClick={handlePostSubmit}>
                  Post
                </button>
              </div>
            </div>

            {/* Community Posts */}
            {posts.map(post => (
              <div key={post.id} className="card post">
                <div className="post-header">
                  <div className="user-avatar">
                    <span>{post.user[0]}</span>
                  </div>
                  <div className="user-info">
                    <h4>{post.user}</h4>
                    <p>{post.location}</p>
                  </div>
                </div>
                
                <p className="post-content">{post.content}</p>
                
                {post.image && (
                  <img 
                    src={post.image} 
                    alt="Farm post" 
                    className="post-image"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}

                <div className="post-actions">
                  <button className="action-btn" onClick={() => handleComment(post.id)}>
                    <FaCommentDots className="action-icon" />
                    <span>{post.comments} Comments</span>
                  </button>
                  <button className="action-btn" onClick={() => handleLike(post.id)}>
                    <span className="like-icon">❤️</span>
                    <span>{post.likes} Likes</span>
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default FarmersSocial;