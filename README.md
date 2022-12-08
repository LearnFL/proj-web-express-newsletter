# News Letter Sign up for my instagram page.

#### Process
Built with NodeJS and ExpressJS. 

#### Challenged by 
[The London App Brewery](https://www.appbrewery.co)

#### Copyright by London App Brewery.

#### Coded by 
Dennis Rotnov
#### See Live application 
https://glacial-crag-91653.herokuapp.com

#### HEROKU
1. brew tap heroku/brew && brew install heroku
2. Heroku login (heroku login -i  if IP is not recognized)
3. echo web: node app.js >> Procfile
4. git init
5. Change branch name to main.
6. git .add 
7. git commit -m "Initial commit"
8. heroku create
9. git push heroku main
10. heroku open app.js

#### View logs: 
heroku logs --tail
#### Scale to a hobby or pro dyno: 
heroku ps:scale web=0 
heroku ps:scale web=1
#### Run locally on port 5000: 
heroku local web

#### Screenshot
<img width="1349" alt="Screen Shot 2022-08-13 at 8 31 15 PM" src="https://user-images.githubusercontent.com/86169204/184517738-22e236f8-d131-43e9-99c3-7f0d9e41126a.png">
