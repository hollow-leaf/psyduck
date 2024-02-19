import { Hono } from 'hono'
import { StringToNftCreateArray, StringToNftOwnArray, addCreateNft, addOwnNft, getNftInfoByNftID } from './utils'
import { nftOwn, nftCreate, account } from './model'
import { cors } from 'hono/cors'

type Bindings = {
  psyduck: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('*', cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['POST', 'GET', 'OPTIONS'],
  exposeHeaders: ['Content-Length'],
  maxAge: 600,
  credentials: true,
}))

app.options('*', (c) => {
  return c.text('', 204)
})

app.get('/', async (c) => {
  const res = await c.env.psyduck.list()
  console.log(res)
  return c.text("Hello Hono")
})

app.post('/nftOwnByAddress', async (c) => {
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

app.post('/nftCreateByAddress', async (c) => {
  const reqData = await c.req.json()
  const creatorId = reqData['creatorId']
  if( creatorId == null) {
    return c.json({nfts: []})
  }
  //string
  const value = await c.env.psyduck.get(creatorId+"-create")
  if(value != null) {
    return c.json({nfts: StringToNftCreateArray(value)})
  }
  return c.json({nfts: []})
})

app.post('/userIdToAddress', async (c) => {
  var user: account = {userId: '', address: '', poolContractAddr: ""}
  const reqData = await c.req.json()
  user.userId = reqData['userId']
  if(user.userId != '') {
    const res = await c.env.psyduck.get(user.userId)
    if(res != null) {
      const rres = res.split(':')
      user.address = rres[0]
      user.poolContractAddr = rres[1]
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
  var user: account = {userId: '', address: '', poolContractAddr: ""}
  const reqData = await c.req.json()
  user.address = reqData['address']
  user.userId = reqData['userId']
  user.poolContractAddr = reqData['poolContractAddr']
  if(user.address) {
    await c.env.psyduck.put(user.userId, user.address + ":" + user.poolContractAddr)
  }
  return c.json({ ok: "success" })
})

app.post('/nftCreate', async (c) => {
  const nftc:nftCreate = await c.req.json()
  //string
  if(nftc.creatorId==null) {
    return c.json({ ok: "failed" })
  }
  let value = await c.env.psyduck.get(nftc.creatorId + "-create")
  if(value == null) {
    value = ""
  }
  const nfts = addCreateNft(value, nftc)
  console.log(nfts)
  await c.env.psyduck.put(nftc.creatorId + "-create", nfts)
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
  const creatorNftsString = await c.env.psyduck.get(nfto.creatorId+"-create")
  if(creatorNftsString == null) return
  const nftDetail = getNftInfoByNftID(nfto.nftId, creatorNftsString)
  nfto.nftName = nftDetail.nftName
  
  const nfts = addOwnNft(value, nfto)
  await c.env.psyduck.put(nfto.owner+"-own", nfts)
  return c.json({ ok: "success" })
})

export default app
