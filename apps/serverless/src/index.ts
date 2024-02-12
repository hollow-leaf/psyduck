import { Hono } from 'hono'
import { StringToNftCreateArray, StringToNftOwnArray, addCreateNft, addOwnNft } from './utils'
import { nftOwn, nftCreate, account } from './model'

type Bindings = {
  psyduck: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c) => {
  var address
  await c.req.json()
  .then(reqData => { address = reqData['address'] })
  .catch(() => { return c.text("Hello Honono") })
  if(address != null) {
    return c.text(address)
  }
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
  var user: account = {userId: '', address: ''}
  const reqData = await c.req.json()
  user.userId = reqData['userId']
  if(user.userId != '') {
    const addr = await c.env.psyduck.get(user.userId)
    if(addr != null) {
      user.address = addr

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
  var user: account = {userId: '', address: ''}
  const reqData = await c.req.json()
  user.address = reqData['address']
  user.userId = reqData['userId']
  if(user.address) {
    await c.env.psyduck.put(user.userId, user.address)
  }
  return c.json({ ok: "success" })
})

app.post('/nftCreate', async (c) => {
  const nftc:nftCreate = await c.req.json()
  //string
  if(nftc.creator==null) {
    return c.json({ ok: "failed" })
  }
  const value = await c.env.psyduck.get(nftc.creator+"-create")
  if(value != null) {
    const nfts = addCreateNft(value, nftc)
    await c.env.psyduck.put(nftc.creator+"-create", nfts)
  }
  return c.json({ ok: "success" })
})

app.post('/nftBuy', async (c) => {
  const nfto:nftOwn = await c.req.json()
  //string
  if(nfto.owner==null) {
    return c.json({ ok: "failed" })
  }
  const value = await c.env.psyduck.get(nfto.owner+"-own")
  if(value != null) {
    const nfts = addOwnNft(value, nfto)
    await c.env.psyduck.put(nfto.owner+"-own", nfts)
  }
  return c.json({ ok: "success" })
})

export default app
