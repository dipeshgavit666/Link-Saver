# Link Saver

A lightweight full-stack application for managing and organizing web bookmarks using tags.

## What the project does
This application allows users to save URLs with custom titles and categories (tags). It features a searchable grid interface where users can filter links by tag, copy URLs to the clipboard with a single click, and delete outdated entries.

## Why it exists
Standard browser bookmarks often become cluttered and difficult to search. This project provides a dedicated, self-hosted workspace to categorize resources by project or topic, making them accessible via a clean, focused UI.

## Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (local instance or Atlas URI)

### Setup Server
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/link-saver
   ```

### Setup Client
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Application
You need to run both the backend and the frontend concurrently.

1. **Start the Server:**
   ```bash
   cd server
   ```
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:3000`.

2. **Start the Client:**
   ```bash
   cd client
   ```
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173` (Vite default).

## Configuration

### Environment Variables
The server relies on the following environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | The port the backend server runs on | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/link-saver` |

### API Proxy
The React client is configured via `vite.config.js` to proxy requests from `/api` to `http://localhost:3000`. If you change the server port, update the `proxy` object in the Vite configuration.

## How to contribute
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License
This project is licensed under the ISC License.