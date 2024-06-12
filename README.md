# Start Wars Characters

## Objective
The main goal is to create a web application to display character details from the Star Wars universe, written using using NodeJs, React and Typescript.

## Description
Application has been written using TypeScript, React and React hooks.
 
The focus of this exercise is to gauge approach to solving the problem as much as the technical implementation of the functionality. Getting the solution working is one part, but structure and reasoning behind approach is also important.

## Get Started
- Run `npm run start` to boot the app. The app will be exposed on localhost port 3000
- Run unit tests: `npm test`

## Future Improvements
- Logging: If this were a real application to be deployed, this would ideally have logging in appropriate places to allow for easy tracing of data flow and debugging of errors
- Unit tests: Add tests cases for more edge cases
- Amending a character (height / gender): a context could be easily added to the app to allow for amendments to the characters list and expose the change to the rest of the application. This would also remove the business logic currently contained within the App.js for the service calls and storing the characters state, however time constraints I felt this was the quiest way to get up and running. Of course, some form of backend would have to be added to allow for a fully persisted state
- Styling: The styling could use a boost, especially on the detail page to make the listed information stand out. It's currently simple, but effective and efficient. Time constraints mean this couldn't be expanded upon
- Character List Table: A fully paginated table could be implemented. The service currently just returns the first page, however the service does allow for pagination. The table setup could be easily expanded upon for a greater result set/multi page requests. Equally the "Action" column could be expanded to allow for deletes or other expanded features on a per character basis
- e2e tests: Expansion on the basic tests will ensure the internal fetch calls to the service are completing as expected. The service calls will need to be mocked to ensure isolated and consistent results. Routing to the detail page will also require tests to ensure the flow from the CharacterList to CharacterDetail pages is working as intended