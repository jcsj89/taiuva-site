import React, { useState } from "react";

const SubMenu = ({ name }) => {
  return (
    <li className="">
      <a
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
        href="#teste"
      >
        {name}
      </a>
    </li>
  );
};

export default SubMenu;
