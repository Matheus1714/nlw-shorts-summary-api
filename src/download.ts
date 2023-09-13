import ytdl from 'ytdl-core'
import fs from 'node:fs'

export const download = (videoId: string) => {
    const videoURL = `https://www.youtube.com/shorts/${videoId}`
    console.log(`Downloading the video: ${videoId}`)

    ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
        .on("info", (info) => {
            const seconds = info.formats[0].approxDurationMs / 1000
            
            if(seconds > 60){
                throw new Error("The video duration is more than 60 seconds")
            }
        }).on("end", () => {
            console.log("Download the finished video!")
        }).on("error", (error) => {
            console.log("Don't possible download the video. Error details:", error)
        }).pipe(fs.createWriteStream('./tmp/audio.mp4'))
}