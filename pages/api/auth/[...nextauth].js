import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

//Api route function that is returned from next auth
export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // credentials will be to passed from our login form
        // Your own logic here either check agains database or api endpoint
        // e.g. verify password if valid return user object.
        const user = {
          id: 1,
          name: 'john',
          email: 'admin@gmail.com',
          password: 'admin',
        }
        if (
          credentials.email === user.email &&
          credentials.password === user.password
        )
          return user
        throw new Error('Incorrect Credentials')
      },
    }),
  ],
  callbacks: {
    // called after sucessful signin
    jwt: async ({ token, user }) => {
      if (user) token.id = user.id
      return token
    }, // called whenever session is checked
    session: async ({ session, token }) => {
      if (token) session.id = token.id
      return session
    },
  },
  secret: 'SECRET_HERE',
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1day
  },
  jwt: {
    secret: 'SECRET_HERE',
    encryption: true,
  },
})
