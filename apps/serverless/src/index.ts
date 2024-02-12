import { Hono } from 'hono'
import { StringToNftCreateArray, StringToNftOwnArray, addCreateNft, addOwnNft } from './utils'
import { nftOwn, nftCreate, account } from './model'

type Bindings = {
  psyduck: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
  const res = await c.env.psyduck.list()
  console.log(res)
  return c.text("Hello Hono")
})

app.get('/nftOwnByAddress', async (c) => {
  const reqData = await c.req.json()
  var address = reqData['address']
  if( address == null) {
    return c.json({nfts: []})
  }
  //string
  const value = await c.env.psyduck.get(address+"-own")
  if(value != null) {
    return c.json({nfts: StringToNftOwnArray(value)})
  }
  return c.json({nfts: []})
})

app.get('/nftCreateByAddress', async (c) => {
  const reqData = await c.req.json()
  const address = reqData['address']
  if( address == null) {
    return c.json({nfts: []})
  }
  //string
  const value = await c.env.psyduck.get(address+"-create")
  if(value != null) {
    return c.json({nfts: StringToNftCreateArray(value)})
  }
  return c.json({nfts: []})
})

app.get('/userIdToAddress', async (c) => {
  var user: account = {userId: '', address: '', eventId: 0}
  const reqData = await c.req.json()
  user.userId = reqData['userId']
  if(user.userId != '') {
    const res = await c.env.psyduck.get(user.userId)
    if(res != null) {
      const rres = res.split(':')
      user.address = rres[0]
      user.eventId = Number(rres[1])
    }
  }
  return c.json(user)
})

app.get('/lastupdateBlock', async (c) => {
  const block = await c.env.psyduck.get('lastupdateBlock')
  return c.json({lastupdateBlock: block})
})

app.post('/updateBlock', async (c) => {
  var block
  const reqData = await c.req.json()
  block = reqData['block']
  if(block) {
    await c.env.psyduck.put('lastupdateBlock', String(block))
  }
  return c.json({ ok: "success" })
})

app.post('/register', async (c) => {
  var user: account = {userId: '', address: '', eventId: 0}
  const reqData = await c.req.json()
  user.address = reqData['address']
  user.userId = reqData['userId']
  user.eventId = reqData['eventId']
  if(user.address) {
    await c.env.psyduck.put(user.userId, user.address + ":" + user.eventId)
    await c.env.psyduck.put("eventId:" + user.eventId, user.address)
  }
  return c.json({ ok: "success" })
})

app.post('/nftCreate', async (c) => {
  const nftc:nftCreate = await c.req.json()
  //string
  if(nftc.creator==null) {
    return c.json({ ok: "failed" })
  }
  const creator = await c.env.psyduck.get("eventId:" + nftc.eventId)
  if(creator == null) return
  let value = await c.env.psyduck.get(creator + "-create")
  if(value == null) {
    value = ""
  }
  const nfts = addCreateNft(value, nftc)
  console.log(nfts)
  await c.env.psyduck.put(creator + "-create", nfts)
  return c.json({ ok: "success" })
})

app.post('/nftBuy', async (c) => {
  const nfto:nftOwn = await c.req.json()
  //string
  if(nfto.owner==null) {
    return c.json({ ok: "failed" })
  }
  let value = await c.env.psyduck.get(nfto.owner+"-own")
  if(value == null) {
    value = ""
  }
  const nfts = addOwnNft(value, nfto)
  await c.env.psyduck.put(nfto.owner+"-own", nfts)
  return c.json({ ok: "success" })
})

export default app
