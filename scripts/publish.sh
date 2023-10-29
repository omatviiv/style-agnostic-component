# tell bash to abort script on first error
set -e

# -- 1 publish latest (default - latest npm tag) version --
echo "== npm publish"
npm publish

# -- 2 publish demo version --
echo "== increment patch version in package.json"
# we store version into variable
version=$((npm version patch) 2>&1)
packageName="replace-oncreate: styleagnostic-input"

# whitelist some files in demo/
echo "!demo/index.tsx" >> .npmignore
echo "!demo/style.ts" >> .npmignore

# this is how to add tag to some already published version
# npm dist-tag add "$packageName@${version:1}" demo
# but easier way is to simply use --tag option of the npm publish:
npm publish --tag demo

# now revert demo files whitelisting
git reset --hard
