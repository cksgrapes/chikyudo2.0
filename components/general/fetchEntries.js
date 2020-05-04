const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function fetchEntries(param) {
  const entries = await client.getEntries(param)
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}
