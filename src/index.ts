import cors from 'cors'
import 'dotenv/config'
import express, { Request, Response } from 'express'
import { download } from './download'

const app = express()

app.use(cors())

app.get('/summary/:id', (request: Request, response: Response) => {
    const { id } = request.params

    download(id)

    response.json({ result: "Download completed successfully!" })
})

const port = process.env.PORT || 3334

app.listen(port, () => console.log(`Server running on port: ${port}`))
