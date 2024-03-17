import { NextRequest, NextResponse } from "next/server"

/**
 * Middleware para tratar o status de onboarding.
 */
export async function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const cartId = searchParams.get("cart_id")
  const checkoutStep = searchParams.get("step")

  let redirectUrl = request.nextUrl.href
  let response = NextResponse.next()

  // Se um cart_id está nos parâmetros, define-o como um cookie e redireciona para o passo de endereço.
  if (cartId && !checkoutStep) {
    redirectUrl = `${redirectUrl}&step=address`
    response = NextResponse.redirect(`${redirectUrl}`, 307)
    response.cookies.set("_medusa_cart_id", cartId, { maxAge: 60 * 60 * 24 })
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
}
