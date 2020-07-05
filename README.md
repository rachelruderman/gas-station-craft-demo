# Fuel Up
## 👋 Motivation
Have you ever found yourself praying to the Petrol Gods, wondering how many miles you'll need to push your vehicle until you stumble upon the nearest gas station?

Fear no more -- this simple React app will magically display a list of local gas stations and their prices for you!

## 📐 Getting started
This app uses run-of-the-mill `create-react-app`, so getting started is pretty simple:
- Run `yarn install`
- Run `yarn start`
- Bombs away!

## 🚀 Deployment
Continuous deployment is enabled via GitHub Actions, so committing to master will trigger the build to upload to an S3 Bucket in AWS.

## 🟢 Contributions
There's still a ways to go! Feel free to contribute to the following stories:
- Add polyfills for older browsers
- Add pagination to gas station results
- Add loading UI for slow connections
- Allow users to enter a zip code
- Replace MyGasFeed with an up-to-date API (some MyGasFeed results are 5 years old)
- Fail build on ESLint warnings
- Add desktop/mobile-friendly game users can play while they fill up
- Add "Fuel for the soul" with cool quotes for users to read while they fill up