import React, { useEffect, useState } from 'react'

const Categories = () => {

    
    const [allCategories, setAllCategories] = useState([]);

    const fetchCategories = async () => {
        try {
        const response = await fetch("mongodb://localhost:27017/categories");
        const result = await response.json();
        setAllCategories(result);
    }
    catch(err) {
        console.log(err);
    }
    }

    useEffect(() => {
        fetchCategories();
    }, [])


    return (
        <>
            <div className='container grid grid-cols-1 gap-10 py-10 mx-auto m sm:grid-cols-2 md:grid-cols-3'>
                {allCategories.map((category) => (
                    <div className='relative transition-transform duration-300 ease-in-out border cursor-pointer hover:scale-95' key={category.id}>
                        <div className="img-container">
                            <img src={category.categoryImg} alt="" />
                        </div>
                        <div className="absolute p-8 text-container top-8">
                            <p className='text-3xl font-bold'>{category.categoryTitle}</p>
                            <p className='text-sm'>{category.categorySeason}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Categories
