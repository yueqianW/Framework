const Redis = require('ioredis')

async function test() {
  const redis = new Redis({
    port: 6379,
    host: '127.0.0.1',
    db: 0
  })

  await redis.set("b", 123)
  const keys = await redis.keys('*')

  console.log(keys)
  console.log(await redis.get('b'))
}

test()
