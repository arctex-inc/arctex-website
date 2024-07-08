import React from 'react';

function ProductOrServiceDisplay({ product }) {

    return (

        <div className="pt-5">

            {product.title ? (
                <h4 className="text-center text-2xl font-bold p-3 md:text-3xl">
                    {product.title}
                </h4>
            ) : null}

            {product.descriptions && product.descriptions[0] ? (
                <p className="text-xl px-5 pb-5 md:text-2xl">
                    {product.descriptions[0]}
                </p>
            ) : null}

            {product.images && product.images[0] ? (
                <img src={product.images[0]} alt="dummy-pic" className="product-image" />
            ) : null}

            {product.descriptions && product.descriptions[1] ? (
                <p className="text-xl px-5 pb-5 md:text-2xl">
                    {product.descriptions[1]}
                </p>
            ) : null}

            {product.images && product.images[1] ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <img src={product.images[1]} alt="dummy-pic" className="product-image w-[240px] h-[180px]" />
                    {product.images[2] ? (
                        <img src={product.images[2]} alt="dummy-pic" className="product-image w-[240px] h-[180px]" />
                    ) : (
                        <span></span>
                    )}
                </div>
            ) : (
                <span></span>
            )}
            {product.link ? (
                <p className="text-xl px-5 pb-5 md:text-2xl">Check it out: <a href={product.link} target="_blank" rel="noopener noreferrer">{product.link}</a></p>
            ) : null}
            
        </div>
    );
}

export default ProductOrServiceDisplay;
