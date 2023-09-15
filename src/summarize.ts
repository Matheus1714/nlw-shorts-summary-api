import { pipeline } from '@xenova/transformers'

export async function summarize(text: string){
    try {
        console.log("Perform the summary...")

        const generator = await pipeline("summarization", "Xenova/distilbart-xsum-12-6")

        const output = await generator(text)

        console.log("Summary finishied")

        return output[0].summary_text
    } catch (error) {
        console.log("Don't possible summarize this text")
        throw new Error(String(error))
    }
}