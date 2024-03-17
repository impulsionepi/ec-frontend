import { Heading } from "@medusajs/ui"
import ClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi">Need help?</Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <ClientLink href="/contact">Contact</ClientLink>
          </li>
          <li>
            <ClientLink href="/contact">
              Returns & Exchanges
            </ClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
