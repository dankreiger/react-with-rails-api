#!/bin/sh

cd ideaboard
yarn
npm run test
cd ..
bundle exec rspec spec