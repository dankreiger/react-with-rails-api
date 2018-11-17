[![Build Status](https://travis-ci.org/dankreiger/react-with-rails-api.svg?branch=master)](https://travis-ci.org/dankreiger/react-with-rails-api)

# README

## Setup:

Backend 

1. Install dependencies 

    ```sh
    # ruby gems
    $ bundle install
    # linter + git hooks
    $ yarn
    ```

2. Migrate and seed database 

    ```sh
    $ rake db:migrate
    $ rake db:seed
    ```

Frontend

1. `cd` into react-app

    ```sh
    $ cd ideaboard
    ```

2. Install dependencies

    ```sh
    $ yarn
    ```


## Getting Started

Backend

1. Start Rails api server

    ```
    $ rails s -p 3001
    ```

Frontend

1. Start webpack server from react-scripts

    ```sh
    $ cd ideaboard
    $ yarn start
    ```
