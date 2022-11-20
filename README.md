#TTT Assignment
1. On first load, only has a Submit button \
2. On clicking on Submit, it will fetch the contents of https://www.terriblytinytales.com/test.txt \
3. Parse the content and find the frequency of occurrence of each word (some words will occur only once, some twice and so on, and some will occur N times) \
4. Then on the frontend, plot a histogram of the 20 most occurring words. \
 
 ##Implementation:
 1. src/App.js has Header and Footer components that are stored in src/components directory. \
 Between header and Footer, it contains router with Two routes. Route '/' Takes you to Homepage. Route '/data' takes you to Histogram. \
 2. src/pages/Home has Home.js and Home.css files. \
 -> This file has a submit button. When submit button is pressed, an axios request is sent to https://www.terriblytinytales.com/test.txt \
 -> the data received is passed to a function known as filterArray which takes a string, removes " ", "\n", "\t", "." from the string and finally makes an array \
 -> It is passed to a filter function to remove empty words. \
 -> After these steps, a filtered array is set in a state called "wordArray" \
 
 -> An independent useEffect which has wordArray in dependency array is there \
 -> It takes the wordArray, puts it in a map
 -> Map is then sorted and Top 20 values are taken out in two seperate arrays histogramDataRows, histogramDataColumns
 -> These two arrays are passed down to /data page as state
 
 3. src/pages/Data has Data.js and Data.css \
 This page contains the Histogram. Data for histogram is taken out from location state. 'react-chart-histogram' library shows the Histogram.
 Link to Histogram Library - https://www.npmjs.com/package/react-chart-histogram
 
 ## Packages Used
 1. react-chart-histogram for Histogram
 2. axios For sending request
 3. react-router-dom for Routing


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


