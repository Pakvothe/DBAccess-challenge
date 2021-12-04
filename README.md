# DBAccess Challenge

</br>

## Installation

You will need to have [Docker](https://docs.docker.com/get-docker/)
and [Docker-Compose](https://docs.docker.com/compose/install/) installed on your PC.

</br>

Clone the [repository](https://github.com/Pakvothe/DBAccess-challenge).

```bash
git clone https://github.com/Pakvothe/DBAccess-challenge.git
```

</br>

## Run the App with Docker

> In the case of having a node version on the pc that is lower than 17, remove the following from "client" from the docker-compose.yml file at the root of the project:

```bash
 environment:
        NODE_OPTIONS: --openssl-legacy-provider
```

> This is just for compatibility issues, if it works, nothing needs to be changed.

</br>

Then in the root folder of the repository, execute the following commands:

> On Linux distributions you will probably have to use "sudo" before the commands

```bash
docker-compose up --build
```

</br>

After finishing the installation of the container, the application will be available in:

</br>

Frontend:

> http://localhost:3000/

Backend:

> http://localhost:3001/

</br>

## Stop the App with Docker

When you finish using the app, execute the following command to stop the container:

```bash
docker-compose down
```

</br>

## Contact

fr.dv.ortiz@gmail.com
