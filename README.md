# Fuel Up
## 👋 Motivation
Have you ever found yourself praying to the Petrol Gods, wondering how many miles you'll need to push your vehicle until you stumble upon the nearest gas station?

Fear no more -- https://fuel-up.club magically displays a list of local gas stations and their prices for you!

## 📐 Getting started
This app uses run-of-the-mill `create-react-app`, so getting started is pretty simple:
1. Register for [MyGasFeed API keys](http://www.mygasfeed.com/keys/api)
2. Put the PRODUCTION key in `.env.local`. 
> Wait a minute, shouldn't we use the DEV key?

Absolutely yes, but MyGasFeed's dev API blocks the client with CORS, whereas the production API doesn't.
2. Run `yarn install`
3. Run `yarn start`
4. Bombs away!

## 🚨 Disclaimer
The deployed site will not be functional on HTTPS until MyGasFeed registers for SSL or is replaced by another API with a secure origin. Feel free to run the app on http://localhost:3000 or play with hardcoded data on https://fuel-up.club :)

## 🚀 Deployment
Continuous deployment is enabled via GitHub Actions. Commits/PRs to master will trigger the build and deployment to an S3 Bucket in AWS.

## 🟢 Contributions
There's still a ways to go! Feel free to contribute:
- Replace MyGasFeed with an up-to-date API on HTTPS
- Add more robust error handling
- Review for [Web Accessibility](https://blog.bitsrc.io/achieving-accessibility-in-react-applications-d762f8f2a3e7)
- Test on older browsers and add polyfills accordingly. See [CanIUse's Usage Table](https://caniuse.com/usage-table)
- Add pagination to gas station results
- Add loading UI for slow connections
- Allow users to enter a zip code
- Add desktop/mobile-friendly game users can play while they fill up
- Add "Fuel for the soul" with cool quotes for users to read while they fill up
