# React Chat

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-chat' (`git checkout -b react-chat`)
* Add files as required
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the reviewer(s)
* Due by 11:59pm (PT) Thu Apr 8

## Goal and Requirements

The goal is to:
* Rewrite the Chat application in React with RESTful Services 
- that requires a login (no password, but username "dog" is not allowed)
- that has RESTful services and makes async calls to perform:
  - Login
  - Logout
  - getting the list of messages and the list of logged in users 
    - users and messages can be returned by the same service call or not, your preference
  - sending a new message
- The RESTful services will send and receive JSON-formatted data
  - that uses a cookie to store a sid (holding a uuid) to track if a user is logged in
  - that checks the cookie on every service call
- There is no polling service call required
  - you are welcome to add that
- The page should notice if a user is already logged in on page refresh/initial page load
  - add that with `useEffect` to call a service

* You will be able to send messages and update the list without reloading the page
* Show meaningful error messages
* Do not submit files in the `build/` directory
* The only things required is to run:
  - `npm install`
  - `npm run build`
  - `node server.js` (NOT `npm start` - you will use that in development)
    - Hint: set ./build as your directory for static files

## Requirements

### Visuals

* Your app and interactions should be attractive and usable
* The functionality should be understandable and discoverable

### Functionality
* It will support multiple users (using different browsers/machines/profiles) chatting simultaneously
* The list of current messages/user will update based on the service results

### Code
* Your code (server-side and client-side) should show good separation of concerns
* Your CSS should not use names to describe the appearance
* Your JSX should be in small, targeted components and follow the best practices from class.
* Non-presentation logic (such as service calls) should be in pure JS files without JSX with functions imported into components as needed

## Allowances
* You may create your generated HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so
* You may provide additional visual feedback (e.g. messages) for the user
* You are welcome to reuse previous code, particularly for the services, but make sure you are meeting all the requirements

## Restrictions
* All JSX files should have the .jsx extension, all vanilla JS files should have the .js extension
* Do not query the DOM using querySelector, querySelectorAll, or any of the getElementXXX functions
* Do not modify the DOM except via React
* Do not use external JS outside of express, cookie-parser, uuid, nodemon, and what create-react-app installs
* All data to/from services should be JSON, in query params, or in the path of the URL
* Do not use external CSS libraries (except for icon libraries if desired - no JS!)
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* Do not have any files in your PR except for the assignment (no files in other assignment directories, for example)
* Do not use var
* Do not use alert, prompt, or HTML dialog
* Do not use terrible variable names
* Do not have console.log debugging messages or commented out code
* Do not use localStorage/sessionStorage/IndexedDB
* Do not use redirects
* Do not use document.cookie
* Use CSS and classnames to apply visual changes, output by JSX 
  - not by using classList - that is modifying the DOM outside of React
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS
