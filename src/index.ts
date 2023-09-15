import cors from 'cors'
import 'dotenv/config'
import express, { Request, Response } from 'express'
import { download } from './download'
import { transcribe } from './transcribe'
import { summarize } from './summarize'
import { convert } from './convert'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/summary/:id', async (request: Request, response: Response) => {
    try{
        const { id } = request.params
    
        await download(id)
        const audioConverted = await convert()
    
        const result = await transcribe(audioConverted)
        
        response.json({ result })

    }catch(error){
        console.log(error)
        return response.json({ error })
    }
})

app.post('/summary', async (request: Request, response: Response) => {
    try {
        const { text } = request.body
        const result = await summarize(text)
        return response.json({ result })
    } catch (error) {
        console.log(error)
        return response.json({ error })
    }
})

const port = process.env.PORT || 3334

app.listen(port, () => console.log(`Server running on port: ${port}`))
