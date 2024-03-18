import { Suspense } from "react"

import logo from "@assets/images/logob.svg"

import Image from "next/image";

import ClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {


  // <header className="bg-primary text-white items-center">
  //       <div className="container mx-auto flex justify-between items-center px-2 py-6">
  //         <div className="flex items-center pl-2">
  //           <Image
  //             src={logob}
  //             alt="Logo"
  //             width={150}
  //             height={38}
  //           />
  //         </div>
  //         <div className="flex items-center space-x-4">
  //           <a href="#" className="hover:underline flex items-center">
  //             <FontAwesomeIcon icon={faUser} />
  //             <span className="ml-2">Faça seu login</span>
  //           </a>
  //         </div>
  //       </div>
  //     </header>

  return (
      <header className="h-16 mx-auto border-b duration-200 bg-primary text-white items-center border-ui-border-base">
        <nav className="content-container txt-xsmall-plus flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu />
            </div>
          </div>

          <div className="flex items-center h-full">
            <ClientLink
              href="/store"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
               <Image
              src={logo}
              alt="Logo"
              width={150}
              height={38}
            />
            </ClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <ClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                >
                  Search
                </ClientLink>
              )}
              <ClientLink
                className="hover:text-ui-fg-base"
                href="/account"
              >
                Account
              </ClientLink>
            </div>
            <Suspense
              fallback={
                <ClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                >
                  Cart (0)
                </ClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
  )
}
