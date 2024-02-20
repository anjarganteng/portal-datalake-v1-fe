# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

## Commands

./node_modules/.bin/ng generate @sbpro/ng:module --path src/modules --name test --dry-run
./node_modules/.bin/ng generate @sbpro/ng:module --path src/modules --name test

./node_modules/.bin/ng generate @sbpro/ng:component --path src/modules/test/components --name test --dry-run
./node_modules/.bin/ng generate @sbpro/ng:component --path src/modules/test/components --name test

./node_modules/.bin/ng generate @sbpro/ng:directive --path src/modules/test/directives --name test --dry-run
./node_modules/.bin/ng generate @sbpro/ng:directive --path src/modules/test/directives --name test

./node_modules/.bin/ng generate @sbpro/ng:service --path src/modules/test/services --name test --dry-run
./node_modules/.bin/ng generate @sbpro/ng:service --path src/modules/test/services --name test

## Publishing

npm config get scope
npm config set scope sbpro

### Build

```bash
npm run build
```

### Versioning

```bash
# npm version [patch|minor|major]
# npm version patch   1.0.0 -> 1.0.1
# npm version minor   1.0.0 -> 1.1.0
# npm version major   1.0.0 -> 2.0.0
npm version

# check package.json
cat package.json | grep version
```

### Push to git

```bash
export NPM_NEW_VERSION=$(node -e "var pj=require('./package.json'); console.log(\`v\${pj.version}\`)");
echo "Pushing $NPM_NEW_VERSION to github"
git push origin $NPM_NEW_VERSION
```

### Practice Run

```bash
cd sbpro-schematics
npm pack
tar -tvf RESULTING_TAR_FILE

# Don't forget to delete it
rm -f *.tgz
```

### Publish

```bash
npm publish --access public
```
