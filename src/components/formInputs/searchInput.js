import React from "react";

const SearchInput = ({
  id,
  className,
  placeholder,
  name,
  type,
  value,
  onChange,
}) => (
  <form>
    <input
      id={id}
      className={className}
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  </form>
);

export default SearchInput;
