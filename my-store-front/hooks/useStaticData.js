// hooks/useStaticData.js
// import fs from 'fs';
// import path from 'path';
import productData from '../data/local-products.json';
import cartData from '../data/local-cart.json';

export const useStaticData = (type='product') => {
//   const filePath = path.join(process.cwd(), 'data', 'local-products.json');
//   const jsonData = fs.readFileSync(filePath, 'utf-8');
    //   const data = JSON.parse(jsonData);
    if (type === 'cart') {
        return cartData;
    }
    return productData;
};
