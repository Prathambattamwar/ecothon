import React from 'react';
import '../App.css';
const BlogSection = () => {
  return (
    <section className="w-100 float-left blog-con padding-top">
      <div className="container">
        <div className="generic-title text-center ml-auto mr-auto">
          <span className="d-block" data-aos="fade-up" data-aos-duration="600">
            Lastest News and Blogs
          </span>
          <h2 data-aos="fade-up" data-aos-duration="600">
            Get Every Single Update Article, Tips & News
          </h2>
        </div>
        <div className="blog-box position-relative">
          <div className="blog-box-item" data-aos="fade-up" data-aos-duration="600">
            <div className="blog-box-img">
              <figure>
                <img src="assets/images/blog-img1.jpg" alt="blog-img" />
              </figure>
            </div>
            <div className="blog-box-outer-content">
              <div className="blog-box-content">
                <span className="d-block">Gardening, &nbsp; - &nbsp; Nursery</span>
                <h3>
                  <a href="single-blog.html">
                    Get Every Single Update Article, Tips & News
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius.
                </p>
                <div className="blog-btn">
                  <a href="single-blog.html">Read More</a>
                </div>
              </div>
              <div className="blog-time">
                <span>Admin</span> - Aug 16, 2022 - 08:30 PM
              </div>
            </div>
          </div>
          <div className="blog-box-item" data-aos="fade-up" data-aos-duration="600">
            <div className="blog-box-img">
              <figure>
                <img src="assets/images/blog-img2.jpg" alt="blog-img" />
              </figure>
            </div>
            <div className="blog-box-content">
              <span className="d-block">Gardening, &nbsp; - &nbsp; Nursery</span>
              <h3>
                <a href="single-blog.html">
                  Get Every Single Update Article, Tips & News
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius.
              </p>
              <div className="blog-btn">
                <a href="single-blog.html">Read More</a>
              </div>
            </div>
            <div className="blog-time">
              <span>Admin</span> - Aug 16, 2022 - 08:30 PM
            </div>
          </div>
          <div className="blog-box-item" data-aos="fade-up" data-aos-duration="600">
            <div className="blog-box-img">
              <figure>
                <img src="assets/images/blog-img3.jpg" alt="blog-img" />
              </figure>
            </div>
            <div className="blog-box-content">
              <span className="d-block">Gardening, &nbsp; - &nbsp; Nursery</span>
              <h3>
                <a href="single-blog.html">
                  Get Every Single Update Article, Tips & News
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius.
              </p>
              <div className="blog-btn">
                <a href="single-blog.html">Read More</a>
              </div>
            </div>
            <div className="blog-time">
              <span>Admin</span> - Aug 16, 2022 - 08:30 PM
            </div>
          </div>
        </div>
        <div
          className="generic-btn grren-btn articles-btn text-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <a href="blog.html">More Articles</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
