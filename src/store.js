import { configureStore } from '@reduxjs/toolkit';
// تأكد من صحة المسار إلى CartSlice
import cartReducer from './CartSlice.jsx';

// يجب تصدير المتجر كـ const لسهولة الاستيراد في main.jsx
export const store = configureStore({
    reducer: {
        // ربط الـ reducer الذي قمنا بتطويره
        cart: cartReducer, 
    },
 });

// هذا التصدير الإضافي ليس ضرورياً إذا استخدمنا export const store أعلاه،
// لكن إذا كنت تفضل استخدام export default store فيمكنك ذلك أيضاً.
// export default store;
