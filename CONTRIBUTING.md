## Contributing:
Contributions are welcome. There are a couple tasks in the Gruntfile to help with distribution and development. All of the Grunt tasks are aliased in the `package.json`

#### build:
Builds the project and puts the built files in to `dist`

#### tag:
Bumps the project version in `bower.json` and `package.json`, builds the project (runs `build`), and then commits and tags the release. This command does not automatically push the release to GitHub, it just tags it.