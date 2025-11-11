
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
// ⚠️ يجب استيراد CartItem هنا لاستخدامه في التنقل
import CartItem from './CartItem'; 

function App() {
  
  // 1. حالة للتحكم في عرض قائمة المنتجات بعد الضغط على "Get Started"
  const [showProductList, setShowProductList] = useState(false);
  
  // 2. ⭐ حالة للتحكم في عرض سلة التسوق (جديد)
  const [showCart, setShowCart] = useState(false);

  // عند الضغط على "Get Started"
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };
  
  // للعودة إلى شاشة البداية (من الـ Header)
  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowProductList(false);
    setShowCart(false); // تأكد من إخفاء السلة
  };

  // 3. ⭐ للتبديل لعرض صفحة المنتجات (من الـ Header) (جديد)
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false); // إخفاء السلة
    setShowProductList(true); // عرض قائمة المنتجات
  };

  // 4. ⭐ للتبديل لعرض سلة التسوق (من الـ Header) (جديد)
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    setShowProductList(true); // يتم عرض قائمة المنتجات، ولكن سيتم عرض CartItem بداخلها
  };
  
  // 5. ⭐ دالة العودة للتسوق (من زر "Continue Shopping" داخل CartItem) (جديد)
  const handleContinueShopping = () => {
    setShowCart(false);
  };


  return (
    <div className="app-container">
      {/* 1. عرض شاشة البداية (Landing Page) */}
      {!showProductList && !showCart && (
          <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
            <div className="background-image"></div>
            <div className="content">
             <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
             </div>
             <div className="aboutus_container">
              <AboutUs/>
             </div>
            </div>
          </div>
      )}
      
      {/* 2. عرض شاشة المنتجات/السلة */}
      {showProductList && (
          <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
             {/* تمرير دوال التنقل وحالة عرض السلة إلى ProductList 
              هذا يسمح لـ ProductList بتحديد ما إذا كان سيعرض المنتجات أو CartItem
             */}
             <ProductList 
                onHomeClick={handleHomeClick} 
                onCartClick={handleCartClick} 
                onPlantsClick={handlePlantsClick}
                showCart={showCart} // حالة العرض
                handleContinueShopping={handleContinueShopping} // دالة العودة من السلة
             />
          </div>
      )}
    </div>
  );
}

 export default App;