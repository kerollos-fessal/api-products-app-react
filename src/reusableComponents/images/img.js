import React from "react";

const ImgProduct = ({
    src,
    alt,
    className,
    }) => (
<img src={src} 
    alt={alt}
    className={className}/>
);

export default ImgProduct;
