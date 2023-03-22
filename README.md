# [Tictactoe - Original repository](https://yelynn1.github.io/tictactoe/)

Tic Tac Toe game (web version) made using HTML, JS.

Tasks:
* Take a look at the code and design an automatic testing strategy.
* Find maintenance problems in the code and prioritise how to fix them.
* Refactor the code from this repository following the given testing approach. 

## Install locally

If you want to install all dependencies in your machine you need to run in the terminal the command below:

```bash
npm install
```

## Running unit test

First, if you have not done it yet, add the following code at the beginning of every test file:

```python
/**
 * @jest-environment jsdom
 */
```

### Running them locally

Run in the terminal the command below:

```bash
npm run test
```

### Running them through Docker

If you do not want to install the dependencies in your machine, you can implement code in your IDE anyway and run
the tests through a docker container.

First, you need to build the image replacing `<name-image>` with the name you want. To do that, run in your terminal 
the command:

```bash
docker build -t <name-image> -f Dockerfile .
```

Afterwards, you need to run a container from the image you have just created. Run the following command in your 
terminal replacing the name of the image you created in the previous step and replace `<name-container>` with name
you want to give to your container:

```bash
docker run --name <name-container> -it --rm -v $PWD/:/app/ <name-image>
```

Now you are ready to run the tests. Go to the **docker terminal** and run the command below to run all tests in the project:

```bash
npm run test
```

## Uninstall local dependencies

Delete `node_modules` folder
