import axios from 'axios';

class ProductsApi {
    baseUrl = 'http://localhost:3200/';

    // 👇 async keyword should be used. if you want to use `await` keyword inside func
    async getHights() {
        //👇 below I have used `JS async await concept`. 
        // 🤔💭 First point to be noted. make your function `async`  
        //   `await` 👇 keyword make sure. that other lines code are
        //            waiting until this code is completed. 
        const res = await axios.get(this.baseUrl + "highlights");
        return res;
    }
    /**
     * 
     * @param {string} product 
     * @param {string} product_id 
     */
    async getProduct(product, product_id) {
        const URL = `${this.baseUrl}${product}/?id=${product_id}`;
        const res = await axios.get(URL);
        return res;
    }
}

const productApi = new ProductsApi();
export default productApi;