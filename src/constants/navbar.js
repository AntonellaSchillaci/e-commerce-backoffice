import {
    FaHome,
    FaShoppingCart,
  } from "react-icons/fa";

  import {
    BiCategoryAlt,
    BiUser
  } from "react-icons/bi";

  import {
    RiFileList3Line
  } from "react-icons/ri";
  
  export const navBarLinks = [
    {
      id: 1,
      label: "Home",
      route: "home",
      icon: <FaHome />,
    },
    {
      id: 2,
      label: "Categories",
      route: "categories",
      icon: <BiCategoryAlt />,
    },
    {
      id: 3,
      label: "Prodocuts",
      route: "products",
      icon: <FaShoppingCart />,
    },
    {
      id: 4,
      label: "Orders",
      route: "orders",
      icon: <RiFileList3Line />,
    },
    {
      id: 5,
      label: "User",
      route: "users",
      icon: <BiUser />,
    },
  ];