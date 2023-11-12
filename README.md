Welcome to storm.

## Getting Started

First, run the client and server:

```bash
$ cd server && npm run serve
$ cd client && npm run dev
```

Open [http://localhost:8000](http://localhost:8000) to run the API server.
Open [http://localhost:3000](http://localhost:3000) to run the client.

## Notes
- (front end) built with React (Next13), Styled Components, and TypeScript. Normally I build with Redux, but was out of scope in this project.
- (back end) Node.JS, Express, and TypeScript API with no database.
- I chose to stand up my own API via Node to better demonstrate working knowledge of full stack environments and data fetching on the client
- Why not Bun? I simply haven't had a chance to experiment with Bun, and to save the team's time with potentially setting up bun just to test this project.
- Why Next13? As far as React development goes, I find Next/Vercel an incredible developer experience, especially with respect to deployment. I also enjoy the speedier setup as opposed to create-react-app.
