const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';
const app = express();
const port = process.env.PORT || 5000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/data', (req, res) => {

  // Authorization
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Sheets API.
    authorize(JSON.parse(content), listPeoples);
  });
  
  // Callback function pulling data
  function listPeoples(auth) {

    const sheets = google.sheets({version: 'v4', auth});
    
    // Pulling the data from the specified spreadsheet and the specified range  
    var result = sheets.spreadsheets.values.get({
      // (1) Changed spreadsheet ID
      spreadsheetId: '1L6vH6Z989u88xmTjpb7dYeNF7bUU1ePZK30IAFQt1sg',
      // (2) Changed the range of data being pulled
      range: 'Form!A2:E',
    }, (err, response)=>{
      if (err) return console.log('The API returned an error: ' + err);
      
      // (3) Setting data for daily tracking
      let rows = response.data.values;

      if (rows.length) {
        rows = rows.map((row) => {
          return {
            qtd: 1 + (!!parseInt(row[2]) ? parseInt(row[2]) : 0),
            estado: row[4]
          }
        })
      }
      
      // (4) Rendering the page and passing the rows data in
      res.send({data: rows})
    });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));


function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}