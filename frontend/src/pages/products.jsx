import React, { useEffect, useState } from 'react'
import API from '../api/axios';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

const Products = () => {

    const [productList,setProductList] = useState([]);
    const [search,setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams] = useSearchParams();
    
    useEffect(()=>{
        const fetchAllProducts=async ()=>{
            try{
                const category = searchParams.get('category') || '';
                const response=await API.get(`/products?search=${search}&page=${page}&limit=12&category=${category}`);
                const {totalProducts,page:currentPage,limit}=response.data;

                setTotalPages(Math.ceil(totalProducts / limit));
                setProductList(response.data.data);
            }
            catch(e){
                console.log(e.message);
            }
        }
        fetchAllProducts();
    },[search,page]);


  return (
    <div>
        <input 
            type="text" 
            placeholder='Search Products...'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
        />

        <br />

        <div className="grid grid-cols-3 gap-4 rounded ">
            {productList.map((product) => (
                <ProductCard key={product._id} product={product}/>
            ))}
        </div>

        <div className="flex justify-around mt-6">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100" 
            onClick={()=>setPage(page-1)}
            disabled={page === 1}
          >
            ← Previous
          </button>
        
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            onClick={()=>setPage(page+1)}
            disabled={page === totalPages}
          >
            Next →
          </button>
        </div>
    </div>
  )
}

export default Products;