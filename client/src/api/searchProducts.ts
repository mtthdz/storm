import { ProductType } from "@/types/ProductType";

/**
 * This API call gets all product data based on user input at /product/search.
 * 
 * @param searchTerm 
 * @returns ProductType[] || Error
 */
export const searchProducts = async (searchTerm: string): Promise<ProductType[] | Error> => {
  try {
    let res = await fetch(`http://localhost:8000/products/search?filterBy=${searchTerm}`, {
      method: 'get',
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Search failed');
    }
    
    let data = await res.json();
    return data as ProductType[];

  } catch (error) {
    throw new Error((error as Error).message);
  }
}