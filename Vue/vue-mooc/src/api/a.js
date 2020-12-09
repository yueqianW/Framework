// module.exports = function (ctx) {
//   ctx.body = {
//     "message": "hello from a000"
//   }
// }


class Demo {
  constructor() {
  }

  async demo(ctx) {
    ctx.body = {
      msg: 'body!!!'
    }
  }
}

export default new Demo()