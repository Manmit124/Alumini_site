export function middleware(request) {
//     const session = useSession();
//   const status = session?.status;

    const currentUser = request.cookies.get('next-auth.session-token')?.value

    console.log(currentUser)
    
   
    // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    //   return Response.redirect(new URL('/profile', request.url))
    // }
   
    if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
      return Response.redirect(new URL('/login', request.url))
    }
  }
   
  export const config = {
    matcher: ['/profile','/alumni-database'],
  }