import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// ⚠️ إذا كان ملف CartSlice في مجلد 'redux'، فغالباً يجب تغيير المسار إلى:
// import { removeItem, updateQuantity } from '../redux/CartSlice';
import { removeItem, updateQuantity } from './CartSlice'; 
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  // 1. قراءة حالة السلة من Redux
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 2. ⭐ حساب التكلفة الكلية لعنصر واحد (جزء من 23 نقطة)
  const calculateTotalCost = (item) => {
    // التكلفة * الكمية
    return (item.cost * item.quantity).toFixed(2);
  };

  // 3. ⭐ حساب الإجمالي الكلي لجميع المنتجات في السلة (جزء من 23 نقطة)
  const calculateTotalAmount = () => {
    // تجميع (reduce) جميع تكاليف العناصر
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);
  };

  const handleContinueShoppingClick = (e) => {
    e.preventDefault();
    // استخدام الـ prop الممرر للعودة للصفحة الرئيسية
    onContinueShopping(); 
  };

  // 4. ⭐ زيادة كمية المنتج (جزء من 23 نقطة)
  const handleIncrement = (item) => {
    // إرسال الإجراء إلى Redux لزيادة الكمية بمقدار 1
    dispatch(updateQuantity({ name: item.name, change: 1 }));
  };

  // 5. ⭐ تقليل كمية المنتج (جزء من 23 نقطة)
  const handleDecrement = (item) => {
    // إرسال الإجراء إلى Redux لتقليل الكمية بمقدار 1
    dispatch(updateQuantity({ name: item.name, change: -1 }));
  };

  // 6. ⭐ حذف المنتج بالكامل (جزء من 23 نقطة)
  const handleRemove = (item) => {
    // إرسال اسم المنتج المطلوب حذفه إلى Redux
    dispatch(removeItem(item.name));
  };

  // حالة عرض "السلة فارغة"
  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2 style={{ color: 'black' }}>Your Cart is Empty!</h2>
        <div className="continue_shopping_btn">
          <button className="get-started-button" onClick={handleContinueShoppingClick}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {/* عرض الإجمالي الكلي للسلة */}
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              {/* عرض تكلفة الوحدة */}
              <div className="cart-item-cost">Price: ${item.cost.toFixed(2)}</div> 
              <div className="cart-item-quantity">
                {/* ربط أزرار الزيادة والنقصان */}
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              {/* عرض التكلفة الإجمالية للعنصر */}
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              {/* ربط زر الحذف */}
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShoppingClick}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


