"use client";

import { sidebarLinks } from "@/data/sidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const links = sidebarLinks.filter((item) => item.name !== "Logo");
  const logo = sidebarLinks.find((item) => item.name === "Logo");

  return (
    <aside className="group/sidebar fixed inset-y-0 left-0 z-10 flex w-16 flex-col overflow-y-auto border-r border-[#2b3033] bg-gradient-to-b from-black/90 to-[#191e22] px-2 pt-8 pb-6 transition-all duration-200 md:w-[280px] md:px-4">
      <ul className="flex flex-col gap-5">
        {links.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li
              key={item.name}
              className={item.name === "Guest creator" ? "mt-6" : ""}
            >
              <Link
                href={item.href}
                title={item.name}
                style={{ fontSynthesis: "none" }}
                className={`group/link relative mb-1 flex min-h-12 w-full items-center justify-center gap-3 rounded-[7px] p-3 text-left  text-xl leading-normal transition-all duration-200 ease-out md:justify-start ${
                  isActive
                    ? "bg-[#233736] font-bold text-[#68e7d9]"
                    : "bg-transparent font-normal text-[#e7e7e7] hover:bg-[#233736]/60 hover:text-[#68e7d9] md:hover:translate-x-1"
                }`}
              >
                {item.name === "Guest creator" ? (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#52ece1] text-sm font-bold text-[#002c33]">
                    Y
                  </span>
                ) : (
                  item.icon && (
                    <img
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="shrink-0"
                    />
                  )
                )}

                <span className="hidden whitespace-nowrap md:inline">
                  {item.name}
                </span>

                {/* Tooltip on small screens */}
                <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md border border-[#2b3033] bg-[#191e22] px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 max-md:group-hover/link:opacity-100 md:hidden">
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {logo && (
        <div className="mt-auto pt-6">
          <Link href={logo.href} title="Logo" className="flex justify-center">
            <img
              src={logo.icon}
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
