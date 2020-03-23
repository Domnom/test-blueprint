> Requires postgres to run. 

`Dependencies:`
- postgres

# Setup
Requires postgres to run this nest app. Follow the postgres setup before running this nest app via docker-compose

## Postgres
- First run `docker-compose run -d postgresql`
- Enter the container by running `docker container exec -ti master-class-trello-clone_postgresql_1 bash`
- In the container run `psql -U sample`
- Create the required database `CREATE DATABASE trello_clone`
- Ensure the database has been created by running `\l` in the psql cli
- Quit the psql cli with `\q`

## Backend
- Run `docker-compose run -d backend`
- View docs on `localhost:3002/docs`
