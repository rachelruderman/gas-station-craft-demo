# Gas Prices
## 👋 Welcome

For your craft demonstration, we ask you to implement a small Single Page Application using React. Use the `my-react-app` boilerplate folder in this repository as a starting point. Expect to demonstrate your application and talk through your code during the next interview.

Use commit messages as you would in a real-world project. This project should take at least part of a work day, but not an entire weekend.


## ⛽️ Prompt

Develop a web application that displays a list of local gas stations and their prices

The app should be **production-ready** in **all aspects**.


## 📐 Requirements
- Get the user's current location from the browser
- Query an online API to retrieve nearby gas stations and their prices
  - Register for an API key: [http://www.mygasfeed.com/keys/submit 🔗](http://www.mygasfeed.com/keys/submit)
  - Usage Example: `http://api.mygasfeed.com/stations/radius/32.953695/-117.132800/8/reg/price/<API key>.json`
- Display the stations in a list sorted by nearest location (nearest at the top)
- Show the station with its name (brand), logo, address, prices, and distance to the station
  - Logos can be retrieved from [Clearbit 🔗](https://clearbit.com/logo)
 - The page should be responsive, supporting mobile and desktop form factors
- Use material design or another simple framework to stylize the page elements


## ⏱ Use your time wisely
It's better to deliver two working features than ten half-working ones. Matching the expected logic and making functional improvements is preferable to style enhancements.



- If you have time, make functional user experience improvements
- If you have trouble getting the location from the browser, consider hard-coded alternatives
- If you have trouble fetching the gas data, consider using a local JSON file
