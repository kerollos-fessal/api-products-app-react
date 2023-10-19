import React from "react";

const BtnUse = ({
   onClick,
   content,
   className
    }) => (
<button onClick={onClick} className={className}>{content}</button>
);

export default BtnUse;