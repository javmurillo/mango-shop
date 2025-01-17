
# Mango Shop App [![Build Status](https://travis-ci.com/javmurillo/mango-shop.svg?branch=master)](https://travis-ci.com/javmurillo/mango-shop)

Mango Shop App is a _Single-Page Application_ built with React v17 (TypeScript) + Redux with mocked HTTP calls via [mockable.io](https://www.mockable.io/a/). Users can use a dual price range slider in order to filter the articles shown in the gallery as a demo of the dispatched event.

The aplication is live at https://javmurillo.github.io/mango-shop/ hosted by [GitHub Pages](https://pages.github.com/).

![](https://i.imgur.com/Y1wNaQ7.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Please, make sure the following components are installed on your computer before installing:

- **[npm](https://www.npmjs.com/)**. Package manager for JavaScript.

### Installing

Step by step instructions in order to run the application locally:

1. Clone or download the repository into your computer.

```
git clone https://github.com/javmurillo/mango-shop.git
```

2. Navigate to the created directory.

```
cd mango-shop
```

3. Install all dependencies.

```
npm install
```

4. Start the application.

```
npm start
```

6. The application is now running at [http://localhost:8080](http://localhost:8080/).

## Price Range Slider & Rationale

![enter image description here](https://i.imgur.com/reXz5eM.png)

### Range

Main component of the slider. It wraps all the other components, passing them the necessary properties. It implements the logic responsible for updating the shown values if the user changes the inputs, as well as the function to emit the event which will comunicate a value has changed (in our example, we will use this to filter the articles list).

###### Properties

- `min: number`. Minimum possible value.
- `max: number`. Maximun possible value.
- `step: number | number[]`. Step or steps. If an array of steps is provided, the min/max passed will be ignored.
- `disableInputs: boolean`. If inputs should be disable.
- `ariaLabel: string`. Current element tag.

###### State

- `rangeValue: { start: number, end: number }`. Current value.
- `min: number`. Minimum possible value.
- `max: number`. Maximun possible value.
- `step: number | number[]`. Step or steps. If an array of steps is provided, the min/max passed will be ignored.

### RangeSlider

Component which wraps the track and the bullets. It implements the necessary logic to render the RangeBullets where they must be, depending of the `startValue` and the calculated `percentageFactor`. It also saves a reference to the track via a `ref` in order to set the `trackLength` dynamically in its state.

If a `step` array is provided, this component is able to calculate the steps that every `RangeBullet`must perform (left and right), storing the the corresponding indexes which representes where every bullet is in the step array. Also, this component handles if a bullet will surpass the other one, avoiding the min value to be greater than the max.

Thanks to the `startIndexZ` and `endIndexZ` we can prevent the bullets from being stuck if they share the minimum/maximun value. **The user could always drag the last bullet he moved**.

###### Properties

- `min: number`. Minimun possible value.
- `max: number`. Maximun possible value.
- `step: number | number[]`. Step or steps. If an array of steps is provided, the min/max passed will be ignored.
- `rangeValue: { start: number, end: number }`. Current value.
- `onChange: (rangeValue: { start: number; end: number }) => void`. Function to trigger on every change.
- `ariaLabel: string`. Current element tag.

###### State

- `start: number`. Current start value.
- `end: number`. Current end value.
- `handleSize: number`. Bullet size, in pixels.
- `trackLength: number`. Length of the track, in pixels.
- `startIndexZ: number`. Z index of the starting bullet.
- `endIndexZ: number`. Z index of the ending bullet.

### RangeTrack

Stateless component which renders a styled div representing the slider track.

###### Properties

- `trackRef: (track: HTMLDivElement) => void`. Function attached to the HTML element.
- `ariaLabel: string`. Current element tag.

### RangeBullet

The draggable bullets. It implements the logic to attach/detach styles dynamically depending of the occured mouse event. Thanks to the `currentPos` and `lastPost` property this component is able to calculate in what direction the bullet is moving, as well as if the movement was enough to actually move the bullet depending of the `step`.

###### Properties

- `hovered: boolean`. If the bullet is hovered.
- `focused: boolean`. If the bullet is focused.
- `active: boolean`. If the bullet is active.

###### State

- `offset: string`. Current bullet offset.
- `factor: number`. Current bullet factor.
- `handleRef: (HTMLDivElement) => void`. Function attached to the HTML element.
- `handleMove: (increase: number) => void`. Function which triggers the movement.
- `step: {left: number, right: number }`. Step a bullet must perform when the cursor is moved.
- `ariaLabel: string`. Current element tag.
- `zIndex: number`. Z index of the bullet.


### RangeInput

Component which renders an input in order to allow the user changing the slider values without sliding the bullets.

###### Properties

- `value: number`. Input's value.
- `onChange: (event: React.ChangeEvent<HTMLInputElement>, key: 'start' | 'end') => void`. Function to trigger on changes.
- `rangeKey: 'start' | 'end'`. If it is the input attached to the starting value or the ending value.
- `disabled: boolean`. If the input is disabled.
- `ariaLabel: string`. Current element tag.
- `max: number`. Maximum value.
- `min: number`. Minimun value.

###### State

- `value: number`. Input's value.

## Other components

### Article

Stateless component which displays a card with the information about a given article.

###### Properties

- `id: string`. Article identificator. Will be used as a key property. By assigning unique keys to each Article we achieve two things: the key is not identical between sibling components. and the key do not change between renders.
- `name: string`. Article's name.
- `description: string`. Article's description.
- `img: string`. Image related to the article.
- `currentPrice: number`. Article's current price.
- `oldPrice: number`. Article's old price. Will be used to represent if an article is on offer.
- `ariaLabel: string`. Current element tag.

### ArticlesList

Stateless component which displays a gallery of Articles. If the array is empty, an informative message is shown.

###### Properties

- `articlesList: Article[]`. Array of articles.
- `ariaLabel: string`. Current element tag.

### Spinner

Stateless component which represents a custom spinner when the HTTP calls are pending.

###### Properties

- `error: boolean`. If error exists.
- `message: string`. Message to show in case of error.

## Reducers & Actions

This is the application state:

```
export  interface ApplicationState {
	articles: ArticlesState;
	rangeData: RangeDataState;
}
```

Both `Normal range ` and the `Fixed values range` landing pages dispatches the necessary actions to fetch via HTTP the mocked articles and the range data which will be passed to the price slider as a property.

### RangeData Store

```
min?:  number;
max?:  number;
rangeValues?:  number[];
error:  boolean;
```

#### Actions

`SET_RANGE_DATA`. Updates the state with the RangeData information.
`FETCH_RANGE_DATA_FAILED`. Updates the state setting the error to `true`.

### Articles Store

```
articles?: Article[];
cachedArticles?: Article[];
error:  boolean;
```

#### Actions

`SET_ARTICLES`. Updates the state with the RangeData information.
`FETCH_ARTICLES_FAILED`. Updates the state setting the error to `true`.
`FILTER_ARTICLES`. Updates the state filtering the articles.

## Solution and use case
As a way to present the solution a gallery of articles was implemented with its own store and API calls. Every time the `Range` component emits a value the `cachedArticles` are filtered displaying the `articles` property of the component. While the HTTP request is pending, a spinner icon is shown.

## API
`GET /range-data`

```
{
 "min": 0,
 "max": 100,
 "rangeValues": [9.99, 29.99, 39.99, 59.99, 79.99, 99.99]
}
```
`GET /articles`
```
[
  {
    "id": "3731497f-2f4a-4ba1-ad5d-fc72739b810a",
    "name": "Abrigo lana pelo desmontable",
    "oldPrice": "79.99",
    "currentPrice": "49.99",
    "img": "https://st.mngbcn.com/rcs/pics/static/T7/fotos/S20/77069403_99.jpg",
    "description": "Diseño medio. Diseño recto. Tejido mezcla de lana. Cuello de pelo sintético desmontable. Cuello clásico. Manga larga. Trabillas en los puños. Dos bolsillos laterales. Cierre de cremallera."
  },
  ...
]
```

## Testing & CI
The are currently 15 test suites with 11 snapshots for a total 46 tests implemented which can be grouped as follows:

- **Router tests**. They are mainly implemented in the `App.test.jsx` file. Here we test if the two pages renders correctly so the not found page, which must renders a dark alert.
- **Store tests**. Implemented in the `articles.reducer.test.ts` file and `range-data.reducer.test.ts`. They validate the proper functioning of both reducers, dispatching every type of action.
- **API tests**. . Implemented in the `articles.service.test.ts` file and `range.service.test.ts`. They validate the requests received by our mocked server.
- **Components tests**. Implemented with every component in the project. They validate the correct rendering of every of them. Some components like `RangeInput` have a deeper testing in order to validate its behaviour for different inputs.

In order to ensure new pull requests do not break anything, this repository implements a pipeline which considers a build as passing if it completes the previous mentioned tests successfully as well as if it builds with no errors.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:8080](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm test`

The following command launches the test runner in the interactive watch mode.


### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Next steps
- **React Hooks**. This project can be updated with React Hooks in order to be easier to work with and to test, making the code cleaner and easier to read. The `RangeInput` component was already implemented with this technique.
- **Touchpad**. Allow the user to change the slider via touch.

## Built With

- [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - Open-source JavaScript library for managing application state
- [TravisCI](https://travis-ci.com) - Hosted, distributed continuous integration service used to build and test software projects hosted at GitHub
- [create-react-app](https://github.com/facebook/create-react-app) - Create React apps with no build configuration.
- [React Bootstrap](https://react-bootstrap.github.io/) - Free and open-source front-end framework for designing websites and web applications.

## Authors

- **Javier Murillo** - *jmurillo93@gmail.com* - [GitHub](https://github.com/javmurillo)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.
