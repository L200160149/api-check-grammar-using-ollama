# Dewaning Grammar Checker API

This project is a simple Node.js API that leverages the Ollama model `dewaning:latest` to provide grammar-checking assistance. Users can send sentences to the API endpoint, and the model will respond with grammar, spelling, or sentence structure feedback.

## Features

- Accepts POST requests with a sentence payload.
- Passes the input to the Ollama model `dewaning:latest`.
- Returns a response with grammar-related feedback.

## Prerequisites

- Node.js (version 14 or above recommended)
- An Ollama setup with the `dewaning:latest` model available
- A `.env` file with a `PORT` variable (optional, defaults to 3000)