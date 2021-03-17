'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'api';

    let result = await this.app.mysql.get("blog_content", {});
    console.log('---', result);
    this.ctx.body = result;
  }
}

module.exports = HomeController;
