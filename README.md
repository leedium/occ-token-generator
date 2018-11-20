# occ-token-generator
Simple tool to generate and [login and refresh tokens](https://docs.oracle.com/en/cloud/saas/commerce-cloud/cxocc/Authentication.html "Oracle Commerce Cloud Authentication") for [Oracle Commerce Cloud](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html) (OCC)


### Installation
#### Global
```
$ npm i -g
```

### Local
Include js as a dependency.

### Instructions
```
Usage: occ-token-generator [options] [command]

Simple tool to generate and refresh tokens for Oracle Commerce Cloud (OCC)

Options:
  -V, --version             output the version number
  -s, --server <server>     Target OCC admin server (include 'https')
  -k, --key <key>           API accesss token generated in admin
  -t, --timeout <optional>  Timeout(ms) t refresh the token.  Defaukts to approx 2min
  -h, --help                output usage information

Commands:
  occtoken                  -s [eserver] -k [sourcekey] -t [timeout](optional)
  help [cmd]                display help for [cmd]
```

 
