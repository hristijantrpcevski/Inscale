# Users map

Hola! This is your recruitment task :)

You will be creating a new React application powered by TypeScript containing the map of users.


## Installation

Run `npm install` to install the dependencies. It's only a `json-server`, which serves the data.

For the Google Maps integration you will need an API key. Use the following one: `AIzaSyDhslsCNo7ykPML8NNSNdyodynrubTN__I`


## Requirements / instructions

* Run server with `npm run server` and fetch the users collection from `http://localhost:3000/users`

    The collection is containing the details of the users.

    `userTypeIdentifier` defines the user type and `priaryTradeType` defines its trading type (if it's a buyer or seller)

* Display the users on the map as a pins (small circles) with following color:
    * Farmer - grey
    * Farmer (seller) - yellow
    * Farmer (buyer) - green
    * Trading House - blue
    * Advisor - black
    * Mill - orange

* Show number of listings (`listingsCount`) as a number inside the pins

* After clicking the pin show the popup containing basic informations:
    * Logo
    * Name of the company
    * User type
    * Description
    * Agriculture types
    * Production types    


## Code review

Push the code to your newly created branch and make a PR on GitHub.
