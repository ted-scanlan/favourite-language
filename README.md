

# Github Command Line App #

My first short project using Nodejs to build a command line app that takes a Github username and returns that users favourite language. I wanted to use Node.js, as I had not used it during the Makers course and Node is something I'd like to start incorporating into my projects going forward, as it makes sense to use a single language across the stack. I am also more interested in back-end development and I like the idea of building cool command line apps that you can start up anywhere in your computer.


## My Approach ##

* In terms of a solution, there were a few choices I had to make. I decided that instead of using just the repo API that returns the dominant language in a single repo, this wouldn’t be enough as it doesn’t take into account the size of the repo.

* I therefore decided to use 2 api's. One that returns the repositories of the user, and another that then returns the size(in bytes) of each repo.

* However, as you will notice, this has made the program quite slow, because for each repository, another request is sent to obtain the size of each language used. This isn't very efficient and I think if I had more time I would have filtered through the repos, taken a few of the largest ones and compared the byte sizes of those, rather than iterating through all of them and performing the api request on each.  


## Set up ##

clone this repo
then:
```
cd favourite-language
npm install
```

Then acquire a github personal access token (https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) and then in the root directory:

```
touch '.env'
echo "API_KEY = 'YOUR_KEY'" >> '.env'
```

to run program:

```
node . -u <username>
```

to run from anywhere in the command line:
```
npm install -g .
favourite-language -u <username>
```


to run tests:

```
npm test
```
