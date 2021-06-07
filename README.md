## Getting started

## Steps to clone

1. git clone <app_name>
2. cd <app_name>

## rails steps 
## NOTE this uses 2.7.2, do you have it?**
**rm need to be done in root level of rails project**
- remove the .ruby-version file `rm -r .ruby-version`
- remove the .Gemfile.lock `rm -r Gemfile.lock`
- in ~4 of Gemfile, delete this line: `ruby '2.7.2'`
- proceed with steps below


1. bundle 
2. rename database in database.yml: find and replace "CHANGE__DB_NAME__HERE" to <app_name>
3. rails db:create db:migrate db:seed
4. rails s -p 3001

## react steps( in separate terminal pane)
1. cd client
2. yarn 
3. yarn start

goto localhost:3000 to see react app
goto localhost:3001 to see rails app

## Github steps
1. remove remote `git remote remove origin`
2. create new repo on github
3. add remote `git remote add <new_ssh_github_key>`