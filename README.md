# Manage employees - API

## Description

this is the server side of the employees' manager.

## Installation

via github.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## accessing the server
in your browser navigate to `http://localhost:3000`

## Usage

### employee

#### interface:

```ts
{
  id: number; //primary key
  name: string;
  age: number;
  companyID: number; //primary key of company
}
```

#### API

* Get all employees

  **request** `GET /employees/`

  **response** `returns all employees as array.`


* Get employee by id

  **request** `GET /employees/id`

  **response** `returns the specific employee or false if don'd exist`


* Create new employee

  **request** `POST /employees/`

  **response**  `returns the new array of employees`


* Edit existing employee

  **request** `PUT /employees/id`

  **response**  `returns the updated array of employees or false if don'd exist`


* Delete employee by id

  **request** `DELETE /employees/id`

  **response**  `returns the new array of employees or false if don'd exist`

### company

interface:

```ts
{
  id: number; //primary key
  name: string;
  color: string;
  state: string;
}
```

#### API

* Get all companies

  **request** `GET /companies/`

  **response** `returns all companies as array.`


* Get company by id

  **request** `GET /companies/id`

  **response** `returns the specific company or false if don'd exist`


* Create new company

  **request** `POST /companies/`

  **response** `returns the new array of companies`


* Edit existing company

  **request** `PUT /companies/id`

  **response** `returns the updated array of companies or false if don'd exist`

* Delete company by id

  **request** `DELETE /companies/id`

  **response** `returns the new array of companies or false if don'd exist`

-----

### **ENJOY ;-)**