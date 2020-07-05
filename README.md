# Fuel Up
## 👋 Motivation
Have you ever found yourself praying to the Petrol Gods, wondering how many miles you'll need to push your vehicle until you stumble upon the nearest gas station?

Fear no more -- this simple React app will magically display a list of local gas stations and their prices for you!

## 📐 Getting started
This app uses run-of-the-mill `create-react-app`, so getting started is pretty simple:
1. Register for MyGasFeed API keys at http://www.mygasfeed.com/keys/api
2. Put your MyGasFeed PRODUCTION key in `.env.local`. Wait a minute, shouldn't we use the DEV key? Absolutely yes, but MyGasFeed's dev API blocks the client with CORS.
2. Run `yarn install`
3. Run `yarn start`
4. Bombs away!

## 🚀 Deployment
Continuous deployment is enabled via GitHub Actions, so committing to master will trigger the build to upload to an S3 Bucket in AWS.

## 🟢 Contributions
There's still a ways to go! Feel free to contribute:
- Add polyfills for older browsers
- Add pagination to gas station results
- Add loading UI for slow connections
- Allow users to enter a zip code
- Replace MyGasFeed with an up-to-date API (some MyGasFeed results are 5 years old)
- Add desktop/mobile-friendly game users can play while they fill up
- Add "Fuel for the soul" with cool quotes for users to read while they fill up
- Add more robust error handling