# Task Management Server

## Overview

This repository contains the server-side code for the Task Management application. It provides the API endpoints to manage tasks, including creating, retrieving, updating, and deleting tasks.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (LTS version recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SM-Noushan/task-management-server-bytebux
   cd task-management-server-bytebux
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Environment Setup

1. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```dotenv
   DB_USER  =
   DB_PASSWORD =
   ```

Replace `DB_USER` and `DB_PASSWORD` as well as `MongoDB url in db.config` with your specific configuration.

## Running the Server

1.  If you don't have nodemon installed globally, you can use npx:

    ```bash
        npx nodemon index.js
        Installing Nodemon Globally
    ```

2.  If you prefer to install nodemon globally, use the following command:

    ```bash
        npm install -g nodemon
    ```

3.  Then to run the server locally, use the following command:

    ```bash
    nodemon index.js
    ```

This will start the server and make your API accessible at [http://localhost:8000](http://localhost:8000) (or your specified port).

## API Documentation

For detailed information on API endpoints, refer to the [API Documentation](https://github.com/SM-Noushan/task-management-client-bytebux) in the front-end repository's `README.md`.

<br/>
<details>
    <summary>Thank you!</summary>
</details>

