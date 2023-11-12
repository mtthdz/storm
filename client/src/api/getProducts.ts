import { ProductType } from "@/types/ProductType"

/**
 * This API call gets all product data at /products.
 * 
 * @returns ProductType[] || error
 */
export const getProducts = async (): Promise<ProductType[] | Error> => {
  try {
    let res = await fetch('http://localhost:8000/products', {
      method: 'get',
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Fetch failed');
    }
    
    let data = await res.json();
    return data as ProductType[];

  } catch (error) {
    throw new Error((error as Error).message);
  }
}