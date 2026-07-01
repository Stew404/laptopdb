'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Pagination = ({
    currentPage,
    maxElements,
    elementsPerPage = 10,
}: {
    currentPage: number;
    maxElements: number;
    elementsPerPage?: number;
}) => {

    const params = new URLSearchParams(useSearchParams());

    const FIRST_PAGE_NUMBER = 1;
    const LAST_PAGE_NUMBER = Math.ceil(maxElements / elementsPerPage);
    const PREV_PAGE_NUMBER =
        currentPage === FIRST_PAGE_NUMBER ? currentPage : currentPage - 1;
    const NEXT_PAGE_NUMBER =
        currentPage === LAST_PAGE_NUMBER ? currentPage : currentPage + 1;

    

    if (maxElements <= elementsPerPage) {
        return null;
    }
    
    const getPrevPages = () => {
        const pages = [];

        const startIndex =
            currentPage > 3 ? currentPage - 3 : FIRST_PAGE_NUMBER;

        const addition =
            LAST_PAGE_NUMBER - currentPage < 4
                ? 4 - (LAST_PAGE_NUMBER - currentPage)
                : 0;

        for (let i = startIndex - addition; i < currentPage; i++) {
            if (i <= 0) {
                continue;
            }
            pages.push(i);
        }

        return pages;
    };
    const getNextPages = () => {
        const pages = [];

        const endIndex =
            LAST_PAGE_NUMBER - currentPage > 3
                ? currentPage + 3
                : LAST_PAGE_NUMBER;

        const addition = currentPage < 4 ? 4 - currentPage : 0;

        for (let i = currentPage + 1; i <= endIndex + addition; i++) {
            if (i > LAST_PAGE_NUMBER) {
                continue;
            }
            pages.push(i);
        }

        return pages;
    };

    const linkList = [...getPrevPages(), currentPage, ...getNextPages()];

    const prevPageParams = new URLSearchParams(params);
    prevPageParams.set("page", PREV_PAGE_NUMBER.toString());

    const nextPageParams = new URLSearchParams(params);
    nextPageParams.set("page", NEXT_PAGE_NUMBER.toString())

    return (
        <div className="m-auto size-fit block-bg main-border main-shadow rounded-full mb-[2rem]">
            <div className="flex justify-center items-center px-[1rem] py-[.3rem]">
                <Link
                    className="button rounded-full mr-[1.1rem]"
                    href={`/admin?${prevPageParams.toString()}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
                        <path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" />
                    </svg>
                </Link>
                {linkList.map((page) => {
                    params.set("page", page.toString());
                    return (
                        <Link
                            className={`button w-[3rem] h-[3rem] mx-[.5rem] ${
                                page === currentPage ? "bg-purple-300" : ""
                            }`}
                            key={`pagelink-${page}`}
                            href={`/admin?${params}`}
                        >
                            {page}
                        </Link>
                    );
                })}
                <Link
                    className="button rounded-full ml-[1rem]"
                    href={`/admin?${nextPageParams.toString()}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
                        <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Pagination;
