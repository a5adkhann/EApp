import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { allProducts } from '../productsData';

const Products = () => {


    const [allProducts, setAllProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:8005/products");
            const result = await response.json();
            setAllProducts(result.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProducts();
    }, []);

    return (
        <>
            <div className={`container flex flex-wrap justify-between mx-auto ${window.location.pathname.includes('products') ? 'pt-8' : ''}`}>
                <p className='text-2xl font-bold uppercase sm:text-4xl'>Product Overview</p>
                {window.location.pathname.includes("products") ?

                    <Link className='transition-all text-[#333] hover:text-black duration-100 ease-in-out hover:border-b-2' to="/">Go Back</Link>
                    :
                    <Link className='transition-all text-[#333] hover:text-black duration-100 ease-in-out hover:border-b-2' to="/products">View All Products</Link>
                }
            </div>
            <div className='container grid grid-cols-1 gap-10 py-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {(window.location.pathname.includes("products") ? allProducts : allProducts.slice(0, 4)).map((product) => (
                    <div className="border cursor-pointer group" key={product.id}>
                        <div className="img-container">
                            <img className='w-[200px] hover:scale-95 transition-all duration-500 ease-in sm:w-full container mx-auto' src={product.productImg} alt="" />
                        </div>
                        <div className="text-container p-2 text-[#333]">
                            <p className='font-semibold product-name'>{product.productName}</p>
                            <p className='product-price group-hover:hidden'>{product.productPrice}</p>
                            <button className='hidden bg-gray-100 text-[#333] px-1 group-hover:block'>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products
