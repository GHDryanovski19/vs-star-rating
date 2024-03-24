import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setupStarRating } from './vs-star-rating.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

  <div class="star-rating-wrapper">
    <div id="star-rating"></div>
  </div>
`


setupCounter(document.querySelector('#counter'))

const options = {
  max: 10,
  starSize:32, 
  step: 0.5,
		element:document.querySelector("#star-rating"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
};

// Call the setupStarRating function with the options
const starRating = setupStarRating(options);