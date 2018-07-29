# This is the HackerNews infinite scroll challenge


To start the app you should either run:
`npm install` or `yarn install`

Once that's out of the way, you just need to either
`npm run start` or `yarn start`


I assumed:
  We will call the main function to get top stories, get the items and store them in a redux store.
  We will then first load 50 of those items and display them. Once the user gets to the bottom of the page
  an event dispatch will be fired loading the next 50.


Notes:
Writing a consumable of the HN api was a breeze. There was a lot of boilerplate code I should put somewhere so I'm faster in spinning up the process.

Using async redux for api consumption slowed me down a lot. Was not too aware of that so implemented it first in
a sync fashion and when moved into an async just run into errors I have never encountered before. However, I'm having a lot of fun solving them.

P.S. Bulma is pretty cool to use.
