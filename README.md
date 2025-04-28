# NASA-Project Backend

I have been working on this project from Jan'25. During this journey I learnt a lot of things which includes

- Cluster module
- API integration with Frontend
- React.js
- REST API
- Process Manager (PM2)
- Middlewares
- Routes
- Model
- Promises
- Async/await

## Steps to test this project using Postman Tool.

Make sure you have postman installed in your system (Thunder client will also work).  
One can also test this project from frontend

**Run the below commands**
```
npm init

npm run deploy

```
<!-- 
**Create a .env file which includes.**  
```javascript
PORT = enter your port number.  
DATABASE_URL = enter your mongodb url.  
ACCESS_TOKEN_SECRET = enter_your_secret_access_token.  
REFRESH_TOKEN_SECRET = enter_your_secret_refresh_token.
``` -->

**Launch a mission**
```javascript
URL : http://localhost:PORT_NUMBER
{
    "mission": "MAY155",
    "rocket": "MAY ROCKET",
    "target": "Kelper-186 f",
    "launchDate": "April 30, 2030"
}
```

**Get list of All Habitable Planets**
```javascript
URL : http://localhost:PORT_NUMBER/planets
```