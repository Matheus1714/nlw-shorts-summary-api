# NLW | Shorts Summary API

![GitHub](https://img.shields.io/github/license/Matheus1714/nlw-shorts-summary-api)

<a id="readme-top"></a>

## Table of Content 📜

<!--ts-->
- [About](#about-ℹ️)
- [About NLW](#about-nlw-🚀)
- [Technologies Used](#technologies-used-⚙️)
- [Features](#features-✅)
- [Package Dependencies](#package-dependencies-⬇️)
- [Running the Project](#running-the-project-🏃)
- [Acknowledge](#acknowledge-☺️)
- [License](#license-📖)
<!--te-->

## About ℹ️

Welcome to the Shots Summary API project, where you can effortlessly get a summary for youtube shorts generated by AI.

<p align="right"><a href="#readme-top">🔝 Return</a></p>

## About NLW 🚀

NLW (Next Level Week) is an event organized by Rocketseat, dedicated to exploring cutting-edge technologies and empowering programmers to build high-quality projects quickly.

This project was created during NLW to embrace and master the latest technologies, resulting in an application powered by multiple advanced technologies.

<p align="right"><a href="#readme-top">🔝 Return</a></p>

## Technologies Used ⚙️

The technologies utilized in this project include:

- [NodeJS](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [FFMPEG](https://ffmpeg.org/)
- [Hugging Face](https://huggingface.co/)

<p align="right"><a href="#readme-top">🔝 Return</a></p>

## Features ✅

- [x] Create routes
- [X] Download video
- [X] Convert MP4 to PM3
- [x] Transcribe
- [x] Summarize

<p align="right"><a href="#readme-top">🔝 Return</a></p>

## Package Dependencies ⬇️

Here is a list of the project's package dependencies:

```json
"dependencies": {
    "@xenova/transformers": "^2.6.0",
    "axios": "^1.5.0",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "ffmpeg-static": "^5.2.0",
    "fluent-ffmpeg": "^2.1.2",
    "node-wav": "^0.0.2",
    "ytdl-core": "4.10.0"
},
"devDependencies": {
    "@types/cors": "^2.8.14",
    "@types/express": "^4.17.17",
    "@types/fluent-ffmpeg": "^2.1.22",
    "@types/node": "^20.6.0",
    "@types/node-wav": "^0.0.0",
    "dotenv": "^16.3.1",
    "ts-node": "^10.9.1",
    "tsx": "^3.12.9",
    "typescript": "^5.2.2"
}
```

<p align="right"><a href="#readme-top">🔝 Return</a></p>

## Running the Project 🏃

To get started with the project, follow these steps:

1. Install the project dependencies:

```
npm i
```

2. Create a folder `tmp`

3. change env.example to `.env`

4. Execute the following command in your terminal to run the project:

```
npm run dev
```

<p align="right"><a href="#readme-top">🔝 Return</a></p>

## Acknowledge ☺️

A special thanks to Rocketseat and their dedicated instructors who provide incredible content to the React community, making projects like this possible. Your guidance and support are greatly appreciated.

<p align="right"><a href="#readme-top">🔝 Return</a></p>

## License 📖

This project is open-source and is distributed under the MIT License. Feel free to explore, modify, and utilize the codebase according to the terms outlined in the license.
