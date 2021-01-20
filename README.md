# Mango Shop App[![Build Status](https://travis-ci.org/javmurillo/mango-shop.svg?branch=master)](https://travis-ci.org/javmurillo/mango-shop)

Mango Shop App is a _Single-Page Application_ built with ReactJS + Redux with mocked HTTP calls via [mockable.io](https://www.mockable.io/a/). Users can use a dual price range slider in order to filter the articles shown in the gallery as a demo of the dispatched event.

The apllication is live at https://javmurillo.github.io/mango-shop/ hosted by [GitHub Pages](https://pages.github.com/).

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

There are three things that cause a React component to re-render:

- The parent component re-rendered.
- The method `this.setState()` is called.
- The metod called `this.forceUpdate()` is called.

In some components, the properties which doesn't have to re-render the component are set as global properties of that component.

![enter image description here](https://i.imgur.com/reXz5eM.png)

### Range

Main component of the slider. It wraps all the other components, passing them the necessary properties. It implements the logic in order to update the shown values if the user changes the inputs, as well as the function to emit the event which will comunicate a value from the rangeValue has changed (in our example, we will use this to filter the articles list).

###### Properties

- `min: number`. Minimum possible value.
- `max: number`. Maximun possible value.
- `step: number | number[]`. Step or steps. If an array of steps is provided, the min/max passed will be ignored.
- `disableInputs: boolean`. If inputs should be disable.

###### State

- `rangeValue: { start: number, end: number }`. Current value.
- `min: number`. Minimum possible value.
- `max: number`. Maximun possible value.

### RangeSlider

Component which wraps the track and the bullets. It implements the necessary logic to render the RangeBullets where they must be, depending of the `startValue` and the calculated `percentageFactor`. It also saves a reference to the track via a `ref` in order to set the `trackLength` dynamically in its state.

If a `step` array is provided, this component is able to calculate the steps every `RangeBullet`must perform (left and right), storing the the corresponding indexes which representes where every bullet is in the step array. Also, this component handles if a bullet will surpass the other one, avoiding the min value to be greather than the max.

###### Properties

- `min: number`. Minimun possible value.
- `max: number`. Maximun possible value.
- `step: number | number[]`. Step or steps. If an array of steps is provided, the min/max passed will be ignored.
- `rangeValue: { start: number, end: number }`. Current value.
- `onChange: (rangeValue: { start: number; end: number }) => void`. Function to trigger on every change.

###### State

- `start: number`. Current start value.
- `end: number`. Current end value.
- `handleSize: number`. Bullet size, in pixels.
- `trackLength: number`. Length of the track, in pixels.

### RangeTrack

Stateless component which renders a styled div representing the slider track.

###### Properties

- `trackRef: (track: HTMLDivElement) => void`. Function attached to the HTML element.

### RangeBullet

The draggable bullets. It implements the logic to attach/detach styles dynamically depending of the occured mouse event. Thanks to the `currentPos` and `lastPost` property this component is able to calculate in what direciton the bullet is moving, as well if the movement was enough to actually move the bullet depending of the `step`.

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

### RangeInput

Stateless components which renders an input in order to allow the user changing the slider values without sliding the bullets.

###### Properties

- `value: number`. Input's value.
- `onChange: (event: React.ChangeEvent<HTMLInputElement>, key: 'start' | 'end') => void`. Function to trigger on changes.
- `rangeKey: 'start' | 'end'`. If it is the input attached to the starting value or the ending value.
- `disabled: boolean`. If the input is disabled.

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

### ArticlesList

Stateless component which displays a gallery of Articles. If the array is empty, an informative message is shown.

###### Properties

- `articlesList: Article[]`. Array of articles.

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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:8080](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

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

## Built With

- [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - Open-source JavaScript library for managing application state
- [TravisCI](https://travis-ci.org/) - Hosted, distributed continuous integration service used to build and test software projects hosted at GitHub
- [create-react-app](https://github.com/facebook/create-react-app) - Create React apps with no build configuration.
- [React Bootstrap](https://react-bootstrap.github.io/) - Free and open-source front-end framework for designing websites and web applications.

## Authors

- **Javier Murillo** - *jmurillo93@gmail.com* - [GitHub](https://github.com/javmurillo)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.
