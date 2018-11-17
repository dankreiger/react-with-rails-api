#!/bin/sh

cd ideaboard
npm run test
cd ..
bundle exec rspec spec