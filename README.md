# DateTime Microservice

It is a simple microservice that takes a valid input date either in date or unix format and returns both formats, if it receives an empty parameter it returns an object.
## Run Locally

Clone the project

```bash
  git clone https://github.com/Hamipluf/DateTime-Microservice.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API Reference

#### Get Date

```http
  GET /api/:date?
```

| Parameter | Type     | Return     | 
| :-------- | :------- |  :------- | 
| `date` | `string` |  `{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}` | 

| Parameter |  Return     | 
| :-------- |   :------- | 
| `empty` |   `{"unix":1451001600000(actual), "utc":"Fri, 25 Dec 2015 00:00:00 GMT(actual)"}` | 











