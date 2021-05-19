# Polling Layout Instability (React)

The scope of this demo is a continuation of the work done on [poll-layout-instability](https://github.com/kevinfarrugia/poll-layout-instability) to illustrate the problem with layout shifting caused by appending DOM elements above the contents in the user's viewport within a ReactJS application.

## Conclusion

This PR illustrates the solution to the layout instability issue caused when adding items to a React list.

The issue is caused by using an `index` as the `key` prop on a child item in a List. This also throws a linting error which was disabled on the `main` branch using

```
// eslint-disable-next-line react/no-array-index-key
```

By using a valid key prop (for example a value coming from the API) allows the iterator to recognise which element has remained and which is new.

Internally, React uses a data structure referred to as a fiber. A fiber may be considered an abstraction for a unit of work. Whenever we render a React application, the result is a fiber tree that reflects the current state of the application, named `current`. When React handles an interaction or starts processing updates, it takes the `current` tree and processes these changes on it, resulting in a new updated tree, known as the `workInProgress`.

By using the `index` as a `key` prop, then the value of the index on each item is changing whenever a new item is appended to the list. This causes React to get "confused" and incorrectly mix the state of the newly added item (which now has `key=0`) and the previous item (which was previously `key=0` but is now `key=1`).

## Demo

To run the demo locally:

```
npm install
npm run start
```

If you want to view the solution, checkout into the `solution` branch.

```
git checkout solution
npm install
npm run start
```

## Template

This project was generated from [kevinfarrugia/performance-first-react-template](https://github.com/kevinfarrugia/performance-first-react-template).

## Copyright

All images are taken from https://randomuser.me/
