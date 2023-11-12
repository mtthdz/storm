This is a [Next13](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Outstanding Tasklist

Due to the time constraints, the remaining items to square away are predominantly CSS related.
1. (element/Logo) optimze box model to intuitive sizing/parameters
2. (sections/ListingTable) split up into individual components
3. (sections/ListingTable) make dynamic status flag (add to api data)
4. (sections/ListingTable) set selected item for modal via context api
5. (sections/MainNav) hover/focus styles
6. (sections/MainNav) create dedicated icon button component
7. (sections/MainNav) variablize username via context
8. (sections/Modal) make content variable via context>selectedItem
9. (sections/Modal) refactor classNames
10. (sections/SearchForm) additional error handling on user input and special characters (outside of API)
11. (sections/SiteHeader) align .flex-search closer to .flex-nav
12. (styles/GlobalStyles) create actual meaningful global styles based on wireframe
13. (styles/theme) create theme based on wireframe

## Notes
### Directory / System Design
- all non-configuration files live within /src
- While I typically organize a project via feature based (I find file type based organization not scalable), this project is only a single feature and chose file type based
- Component hierarchy: App > Page > Section > Element
- My intention with feature based design is that all data is compiled in the Page component (parent-most) and stored in a context api
- This Next13 project utilizes app router
- Next's app/page.tsx acts as the index.tsx, where I've rerouted it to feed/page.tsx
- I chose styled-components as my styling library as I find it works wonderfully with React's component driven design