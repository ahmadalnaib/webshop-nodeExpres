export const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };