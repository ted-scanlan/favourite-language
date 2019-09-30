

# Github Command Line App #

I thought I would use the test as an opportunity to try something now. I therefore built a command line app using Node.js, as I had not used it during the Makers course and Node is something I'd like to start incorporating into my projects going forward, as it makes sense using a single language across the stack. I am also more interested in back-end development and I like the idea of building cool command line apps that you can start up anywhere in your computer.



## set up ##

clone this repo
then:
```
cd favourite-language
npm install
```

Then acquire a github personal access token (https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) and save in the  file insert your token into the .env file in the root of the directory.

to run program:

go to anywhere in your command line
```
favourite-language -u <username>
```

to run tests:

```
npm test
```
