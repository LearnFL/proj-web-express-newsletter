import bodyParser from 'body-parser';
import express from 'express';
import ejs from 'ejs';
import https from 'https';
import path from 'path';
import client from '@mailchimp/mailchimp_marketing';
import {} from 'dotenv/config';

// APP SET UP
var app = express();
const port = 3000;
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));

// VIEWS SETUP
app.set('view engine', 'ejs');
app.set('views', 'public/views');

// GET SIGN UP PAGE
app.get('/', (req, res)=>{
  res.set('Content-Type', 'text/html');
  res.render('signup');
});

// SIGN UP FORM SUBBMIT
app.post('/', (req, res)=>{
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  // COLLECTED USER DATA JSON
  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  const jsonData = JSON.stringify(data);

  // API PARAMETERS
  const url = "https://us12.api.mailchimp.com/3.0/lists/b7b30d19cb"
  const options = {
    method: "POST",
    auth: "newsletter:" + process.env.mailAPI
  };

  // API REQUEST SET UP
  const request = https.request(url, options, (resp) => {
                    console.log('statusCode:', resp.statusCode);
                    resp.on('data', (d) => {
                      console.log(JSON.parse(d));
                      var subscriber_status = JSON.parse(d);
                      console.log(" received dataaaa");
                      console.log(subscriber_status);
                      if(resp.statusCode == 200 && subscriber_status.total_created == 1) {
                        res.render('success');
                      } else {
                        res.render('failure');
                      }
                      });
                  });

  // SEND USER DATA
  request.write(jsonData);
  request.end();
});

app.listen((process.env.PORT || port), ()=>{console.log('Server is running')});
