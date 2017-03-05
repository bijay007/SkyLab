heroku login - run anywhere
heroku create - creates for us a space in server to deploy our app. It also assigns a random url and git repo.
git remote -v  - creates 2 git repos (1 is origin and other is remote - we can use git push heroku(origin) master(remote))
git push heroku master - not just uploads to remote git, but also install all package.json dependencies in master repo
in engine part of package - check if the version of node are same
in prestart add bower just in case server doesnt have it
after changes in package, install dependencies locally by `npm install`
heroku local web - installs app locally on port 5000

pushing local changes
	git add.
	git commit -m "changes"
	git push heroku master

testing our node console in server
	heroku run node

setting server environment variable
	 heroku config:set PORT=4200
	 (similar to how we do locally process.env.API_KEY=2fg26wcbwyj545ebyht)
	 heroku config - sets the env variable defined above in the server

Note : if bower not found, install it as a module of npm by `npm install bower --save` in local then push to master

// TO LOAD DB

create account in mongolab. then create database and user

Then in app.js change,
	const PORT = process.env.PORT || 3000
	const urlDB = process.env.DB_URI || 'mongodb://localhost:27017/testFriday'

	heroku config:set DB_URI=mongodb://bijay007:timibijay007@ds115110.mlab.com:15110/todolistdatabse