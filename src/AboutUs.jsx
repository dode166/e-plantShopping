import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* العنوان الرئيسي */}
      <h2 className="about-us-heading">About Paradise Nursery</h2>
      <p className="about-us-description">Welcome to Paradise Nursery, where green meets serenity!</p>

      {/* 1. ⭐ قسم المهمة (Mission) */}
      <h3 className="about-us-subheading">Our Mission</h3>
      <p className="about-us-content">
        Our mission is to **nurture and provide** a diverse collection of high-quality, healthy plants 
        that inspire sustainable living and transform every space into a vibrant, peaceful sanctuary. 
        We are dedicated to enriching lives by connecting people with the therapeutic beauty of nature.
       </p>

      {/* 2. ⭐ قسم الرؤية (Vision) */}
      <h3 className="about-us-subheading">Our Vision</h3>
      <p className="about-us-content">
        To be the leading and most trusted online source for plant enthusiasts and beginners alike, 
        recognized for our commitment to **environmental stewardship** and customer empowerment 
        through expert advice and exceptional plant care.
      </p>
      
      {/* 3. ⭐ قسم القيم الأساسية (Core Values) */}
      <h3 className="about-us-subheading">Our Core Values</h3>
      <ul className="core-values-list">
        <li>**Quality & Health:** Ensuring every plant meets the highest standards of vitality.</li>
        <li>**Sustainability:** Promoting eco-friendly practices in packaging and sourcing.</li>
        <li>**Customer Focus:** Providing expert guidance and unwavering support to our community.</li>
        <li>**Passion for Nature:** Cultivating a deep respect and love for the environment.</li>
      </ul>
      
      {/* دعوة للعمل/خاتمة */}
      <p className="about-us-content final-paragraph">
        Join us in our mission to create a greener, healthier world. We're here to support your green journey every step of the way!
      </p>
    </div>
  );
}

 export default AboutUs;