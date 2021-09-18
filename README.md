# Sprint 9 Overview

## "Problem" and Purpose
An App to Help You Stay on Track with Your Music Practice.

Those serious about learning to play well or improving their skills to reach a desired level probably want:
- reliable study materials
- structure in the form of a practice plan
- help with tracking and accountability

## Solution
With this app, members can: 
- request weekly practice plans with video lessons and sheet music
- receive follow-ups to encourage them to complete each of their practice sessions
- see who else is actively practicing at the same level, so those interested in partner practice or an accountability buddy can gain additional motivation.

### Method:
The webapp was constructed using the React framework,
makes use of the YouTube Data API in retrieving relevant video instruction,
and also communicates with a PostgreSQL database to manage member account data and authentication.  

Many React components were nested together and many state variables used and passed down as properties of sub-components.
A switch construct was used to jump between "pages" within a single root page, so the app does not refer to any paths other than "/".
Using `<Route>` tags was suggested, however this method could not easily allow for consistent navigation using the icons at the top.

This alpha version allows searching for just video lessons. But the availability of tabs and sheet music is planned for a future version.

### The development and production process included:

- Designing page layouts and user interface components
- Learning how to make requests to YouTube and Supabase
- Writing JSX code for React components
- Testing and learning how React works and its idiosyncracies
- Styling components
- Making commits and pushing updates
- Deploying for presentation

### Tools:
- Balsamiq for creating a design for reference
- The PhpStorm IDE for coding and testing (an amazing piece of software!)
- The React framework and TailwindCSS
- Chrome developer console for debugging
- GitHub for version control
- Vercel for publishing online

### Results:

Created for version 1a:

- a home screen with 3 potential form actions, the first being video search
- a search results page
- account registration and sign in screens  
- profile page with basic info and example practice plan

Unfortunately, Supabase was not cooperative in accessing a table via foreign key or retrieving data fields from existing rows, and their
example code has not yet been a success in my application.
Dozens of attempts were made, but the errors below blocked implementation of proper registration and login functions. Better luck next version!

- 400 (bad request)
- 403 (access denied) .............even using the service key
- 406 (request non acceptable)