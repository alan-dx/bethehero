import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    })
  ],
  callbacks: {
    async session(session) {
      try {
        console.log('session', session.user.email)

        return {...session}
      } catch (error) {
        console.warn('erro')

        return {
          ...session
        }
      }
    }
  }
})