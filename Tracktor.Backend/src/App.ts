// import * as path from "path"
// import * as express from "express"
// import * as webpack from "webpack"
// import * as webpackConfig from "../../../webpack.dev.js" // SHOULDNT IT CHECK NODE.env? 
// import * as mongoose from "mongoose"

// import DBModels from "./models/index.js"

import * as express from 'express'

class App {
  public express: any

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req: any, res: any) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express