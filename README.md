# Node.js Backend Application

This is a simple Node.js application built with TypeScript that serves a backend with a `/healthcheck` endpoint. The application responds with a JSON object containing the application status and the version from `package.json`.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd nodejs-backend-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Running the Application

To start the application, run the following command:

```
npm start
```

The application will be running on `http://localhost:6000`.

## Healthcheck Endpoint

You can check if the application is running by accessing the following endpoint:

```
GET /healthcheck
```

This will return a JSON response with the application status and version.

## License

This project is licensed under the MIT License.