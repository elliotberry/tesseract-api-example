# Tesseract Example

## Introduction
This Node.js application is a simple web server built with Fastify, integrating OCR (Optical Character Recognition) functionality using Tesseract.js. It allows users to upload an image and receive the extracted text as a response. The server also includes basic authentication using environment variables.

## Requirements
- Node.js
- Yarn (Node Package Manager)
- Environment variables for authentication (USERNAME, PASSWORD)

## Installation
1. Clone the repository or download the files.
2. Navigate to the project directory.
3. Run `npm install` to install all the dependencies.

## Setting up Environment Variables
Create a `.env` file in the root of the project with the following content:
```
USERNAME=your_username
PASSWORD=your_password
```
Replace `your_username` and `your_password` with your desired credentials.

## Usage
1. Start the server by running `yarn start`.
2. The server will start on `localhost` at port `3000`.
3. To authenticate, use the credentials provided in the `.env` file.
4. To use the OCR functionality, send a `POST` request to `http://localhost:3000/upload` with an image file. The server will respond with the extracted text.

## API Endpoints
- `GET /` : A simple route to test if the server is running. Returns a `hello: world` JSON response.
- `POST /upload` : Endpoint for uploading an image. Returns the OCR extracted text.

## Note
- The OCR processing is set to recognize English text. It can be modified by changing the language code in the `getText` function.
- The application logs the processing time for each OCR operation.
