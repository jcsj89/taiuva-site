import React, { useState } from "react";

const SubMenu = ({ name }) => {
  return (
    <li className="">
      <a
        className="px-2 py-2 flex items-center text-xs uppercase leading-snug  hover:opacity-75"
        href="#teste"
      >
        {name}
      </a>
    </li>
  );
};

export default SubMenu;
