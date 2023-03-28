import React from "react";
import Link from "next/link";
import { pagesLinks } from "@/types";
import { useRouter } from "next/router";
const Links = ({ isSide }: any) => {
  const { asPath } = useRouter();
  const pageslinks: pagesLinks[] = [
    { id: "1", title: "الصفحة الرئيسة", href: "/" },
    { id: "2", title: "من نحن", href: "/info" },
    { id: "3", title: "المصانع والشركات", href: "/factories-companies" },
    { id: "4", title: "المركز الإعلامي", href: "/media-center" },
  ];

  return (
    <>
      {pageslinks.map(({ id, title, href }: pagesLinks) => (
        <Link
          key={id}
          href={href}
          className={`  
          my-10 md:my-0 md:mx-10
          ${
            !isSide
              ? asPath === `${href}`
                ? " bg-purbleBg flex items-center p-3 rounded-md  "
                : "text-yellow-50"
              : "p-5 "
          } `}
        >
          <h3
            className={`text-xl font-medium transition duration-150 hover:opacity-70 ${
              isSide
                ? asPath === `${href}`
                  ? " text-purbleText "
                  : "text-lightText dark:text-darkText"
                : "text-yellow-50 "
            } `}
          >
            {title}
          </h3>
        </Link>
      ))}
    </>
  );
};

export default Links;
