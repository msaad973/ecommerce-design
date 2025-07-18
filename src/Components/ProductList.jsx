import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ProductList = () => {
    const [productList] = useState(products);

    return (
        <div className="p-4 mt-17">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <Stack direction="row" spacing={2}>
                    <Pagination count={10} color="primary" />
                </Stack>
            </div>
        </div>
    );
};

export default ProductList;
