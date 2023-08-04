import { g, auth, config } from '@grafbase/sdk'

//@ts-ignore
const User = g.model('User', {
  name: g.string().length({min:3, max:25}),
  email: g.email().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  behanceUrl: g.url().optional(),
  dribbleUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  xUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
}).auth((rules) =>{
  rules.public().read()
})
//@ts-ignore
const Project = g.model('Project', {
  title: g.string().length({min:3, max:25}),
  description: g.string(),
 // comments: g.relation(comment).optional().list(),
  image: g.url(),
  liveSiteUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
}).auth((rules) =>{
  rules.public().read();
  rules.private().create().delete().update();
})

const jwt = auth.JWT({
  issuer:'grafbase',
  secret: g.env('NEXTAUTH_SECRET'),
})

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  }
})
