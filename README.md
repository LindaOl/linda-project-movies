# Description
A responsive React movie site using the TMDB API. Users can browse popular movies and select a movie to view more information on its individual details page.

## Approach
I started by planning the component structure, states, routes, and overall design on paper. I then created the main React pages and components and set up React Router, using placeholder content to test the navigation.

I tested the TMDB API with Postman before fetching the movie data using `fetch`, `useState`, and `useEffect`. I first tested rendering the data directly and then moved the content into reusable components for the movie previews and details.

Once the functionality was in place, I worked on styling and responsiveness based on the provided design, deployed the project with Cloudflare, and finished by reviewing the code for consistency and removing unused code.

**Tools:** VS Code, React, React Router, CSS, TMDB API, Postman, Cloudflare, browser developer tools, and AI for debugging and code review.

## What more would I do if i had more time?
I would look into the stretch goals for the assigment, like handling loading states and "not found" message. I might try to make a dropdown, and make the site able to retrieve other lists too, or maybe sorting by rating or the likes.

## Run the project locally

You need Node.js and npm installed.

1. Clone the repository and open the project folder.
2. Install the dependencies:
   `npm install`
3. Start the development server:
   `npm run dev`
4. Open the local URL shown in the terminal.

The project uses React, React Router and Vite.

## View it live
[Website](https://linda-project-movies.olssonli.workers.dev/)