import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // تهيئة السلة كمصفوفة فارغة
  },
  reducers: {
    // 1. إضافة عنصر: يضيف منتجًا جديدًا بكمية 1 أو يزيد الكمية إذا كان موجودًا
    addItem: (state, action) => {
      const newItem = action.payload;
      // البحث إذا كان المنتج موجودًا بالفعل
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        existingItem.quantity += 1; // زيادة الكمية
      } else {
        // إضافة المنتج جديدًا بكمية 1
        state.items.push({
          ...newItem,
          quantity: 1, 
        });
      }
    },

    // 2. حذف عنصر: يزيل العنصر بالكامل من السلة
    removeItem: (state, action) => {
        // action.payload هو اسم المنتج (name) المطلوب حذفه
        const nameToRemove = action.payload;
        state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // 3. تحديث الكمية: يستخدم للزيادة (+) والنقصان (-)
    updateQuantity: (state, action) => {
        // action.payload يحتوي على { name: 'اسم المنتج', change: 1 أو -1 }
        const { name, change } = action.payload;
        const existingItem = state.items.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += change;

            // شرط الحذف: إذا أصبحت الكمية صفر أو أقل، يتم إزالة المنتج
            if (existingItem.quantity <= 0) {
                state.items = state.items.filter(item => item.name !== name);
            }
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

 export default CartSlice.reducer;