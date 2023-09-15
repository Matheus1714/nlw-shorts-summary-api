// import { transcriptionExample } from './utils/transcription'
import { pipeline } from '@xenova/transformers'

export async function transcribe(audio: Float32Array){
    try{
        console.log("Perform video transcription...")
        const trasncribePipe = await pipeline("automatic-speech-recognition", "Xenova/whisper-small")

        const transcription = await trasncribePipe(audio, {
            chunk_length_s: 30,
            stride_length_s: 5,
            language: "portuguese",
            task: "transcribe"
        })

        console.log("Transcription finished...")

        return transcription?.text.replace("[Música]", "")
    } catch(error){
        throw new Error(String(error))
    }
}