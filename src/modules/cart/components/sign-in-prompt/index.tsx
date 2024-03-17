import { Button, Heading, Text } from "@medusajs/ui"
import ClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          Already have an account?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          Sign in for a better experience.
        </Text>
      </div>
      <div>
        <ClientLink href="/account">
          <Button variant="secondary" className="h-10">
            Sign in
          </Button>
        </ClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
