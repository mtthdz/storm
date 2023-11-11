import { ProductType } from "@/types/ProductType"

export const getProducts = async () => {
  try {
    let res = await fetch('http://localhost:8000/products', {
      method: 'get',
    });

    let data = await res.json(); // Convert the response body to JSON

    console.log(data); // Log the JSON data
  } catch (error) {
    console.log(error);
  }
}