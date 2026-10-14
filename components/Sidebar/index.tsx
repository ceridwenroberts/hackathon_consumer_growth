"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { sidebarLinks } from "@/data/sidebarLinks";
import CreateWorkspaceModal from "@/components/CreateWorkspaceModal";

const Sidebar = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  const links = sidebarLinks.filter((item) => item.name !== "Logo");
  const logo = sidebarLinks.find((item) => item.name === "Logo");

  return (
    <>
      <aside className="group/sidebar fixed inset-y-0 left-0 z-10 flex w-16 flex-col overflow-y-auto border-r border-[#2b3033] bg-gradient-to-b from-black/90 to-[#191e22] px-2 pt-8 pb-6 transition-all duration-200 md:w-[280px] md:px-4">
        <ul className="flex flex-col gap-5">
          {links.map((item) => {
            const opensModal =
              item.name === "Create a world" ||
              item.name === "Guest creator";

            const isActive = pathname === item.href;

            const linkClassName = `group/link relative mb-1 flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-[7px] p-3 text-left text-xl leading-normal transition-all duration-200 ease-out md:justify-start ${
              isActive
                ? "bg-[#233736] font-bold text-[#68e7d9]"
                : "bg-transparent font-normal text-[#e7e7e7] hover:bg-[#233736]/60 hover:text-[#68e7d9] md:hover:translate-x-1"
            }`;

            const linkContent = (
              <>
                {item.name === "Guest creator" ? (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#52ece1] text-sm font-bold text-[#002c33]">
                    Y
                  </span>
                ) : (
                  item.icon && (
                    <Image
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
              </>
            );

            return (
              <li
                key={item.name}
                className={
                  item.name === "Guest creator" ? "mt-6" : ""
                }
              >
                {opensModal ? (
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(true);
                      window.history.pushState(
                        null,
                        "",
                        item.href
                      );
                    }}
                    style={{ fontSynthesis: "none" }}
                    className={linkClassName}
                  >
                    {linkContent}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    style={{ fontSynthesis: "none" }}
                    className={linkClassName}
                  >
                    {linkContent}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {logo?.icon && (
          <div className="mt-auto pt-6">
            <Link href="/" className="flex justify-center">
              <Image
                src={logo.icon}
                alt="Home"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>
        )}
      </aside>

      <CreateWorkspaceModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Sidebar;
