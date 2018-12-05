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
  occtoken                  -s [server] -k [sourcekey] -t [timeout](optional)
  help [cmd]                display help for [cmd]
```

 
<br/><br/><br/>
### Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
