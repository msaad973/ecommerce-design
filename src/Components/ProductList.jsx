import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ProductList = () => {
    const [productList] = useState(products); 
    const [page, setPage] = useState(1); 
    const productsPerPage = 12; 

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const currentProducts = productList.slice(startIndex, endIndex); 

    const pageCount = Math.ceil(productList.length / productsPerPage);

    const handleChange = (event, value) => {
        setPage(value); 
    };

    return (
        <div className="p-4 mt-17">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <Stack direction="row" spacing={2}>
                    <Pagination 
                        count={pageCount}
                        page={page}
                        onChange={handleChange}
                        color="primary"
                    />
                </Stack>
            </div>
        </div>
    );
};

export default ProductList;
