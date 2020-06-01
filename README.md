# Movie app with Create React App, React

Try the demo at https://link-to-app.com.

## Stack

- Create React App
- React Hooks
- Jest
- React Router
- Node Sass 
- Reactstrap 
- Bootstrap 


## Answers to questions in the Document

1. How did you decide on the technical and architectural choices used as part of your solution?
    
    The app is basically a very simple and small app, so I did not consider using context or redux for state management. 

    I ensured I made components very reusable.

    I used the provided UI guides in the doc and inspiration from the NETFLIX UI to come up with a suitable UI for the task.

    For routing, I used react-router-dom, as using the apps internal state alone would not be efficient enough.

    I made use of bootstrap and reactstrap to ensure the app is very responsive accross all devices.

    I used Jest for writing unit tests.



2. Are there any improvements you could make to your submission?

    Well, the JSON object provided as the data for the app contained just dummy descriptions, it could have been possible to render a selected movie/ series with details only pertaining to that selected movie.



3. What would you do differently if you were allocated more time?

   There is not much that could be done with the json data that was provided, but on a real world app and more time, I would definately ;
   * include viewing a single movie or series
   * add a link to preview the movie trailer (Youtube link)
   * have a section to watch or download the movie or series (This would require a lot of skill anyways.)
   * include a filter functionality for the user to filter movies/series by some attributes
   * 

## Quick Start 

```shell
$ git clone https://github.com/gold-olar/movie-app.git
$ cd movie-app
$ npm install
$ npm start
```

## NPM Commands

| Script          | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm start`     | Start webpack development server @ `localhost:3000` |
| `npm run build` | Build the application to `./build` directory        |
| `npm test`      | Test the application; watch for changes and retest  |
