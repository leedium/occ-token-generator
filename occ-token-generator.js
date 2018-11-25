#!/usr/bin/env node

/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-token-generator
 * @file token.js
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 11/20/2018
 * @description  Generates an OCC token and refreshes every -n seconds
 **/

const program = require("commander");
const axios = require("axios");

const HTTPS_PREFIX = "https://";
const INITIAL_TIMEOUT = 120000;

let inited = false;
let token;

/**
 * Api call to login and generate admin access tokens
 * @param adminServer
 * @param token
 * @param refresh
 * @returns {*}
 */
const loginToOCC = (adminServer, token, refresh = false) => {
  return axios({
    method: "post",
    url: refresh || inited
      ? `${adminServer}/ccadmin/v1/refresh`
      : `${adminServer}/ccadmin/v1/login`,
    responseType: "json",
    params: {
      grant_type: "client_credentials"
    },
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded"
    }
  });
};

/**
 * Starts the tire to generate an access token
 * @param server
 * @param token
 * @param refresh
 */
const generateToken = (server, token, repeat, timeout) => {
  return new Promise((resolve, reject) => {
    server = server.indexOf(HTTPS_PREFIX) !== 0 ? `${HTTPS_PREFIX}${server}` : server;

    const req = function({ data }) {
      // clear the screen
      process.stdout.write("\033c\033[3J");
      console.log(`Bearer ${data.access_token}`);
      token = data.access_token;
      setTimeout(() => {
        generateToken(server, data.access_token, repeat, timeout);
      }, timeout);
      resolve(data.access_token);
    };
    loginToOCC(server, token, !inited ? false : !inited ? INITIAL_TIMEOUT : program.refresh)
      .then((res) => {
        inited = true;
        req(res);
      })
      .catch(reject);

  });
};

/**
 * Returns the currently saved token
 * @returns {*}
 */
const getCurrentToken = () => token;

program
  .version("1.0.0")
  .command("occtoken", "-s [eserver] -k [sourcekey] -t [timeout](optional)")
  .description(
    "Simple tool to generate and refresh tokens for Oracle Commerce Cloud (OCC)"
  )
  .option(
    "-s, --server <server>",
    "Target OCC admin server (include 'https')"
  )
  .option("-k, --key <key>", "API accesss token generated in admin")
  .option(
    "-t, --timeout <optional>",
    "Timeout(ms) t refresh the token.  Defaukts to approx 2min"
  )
  .option(
    "-r, --refresh",
    "should the token refresh"
  )
  .parse(process.argv);

if (typeof program.timeout === "undefined" || isNaN(program.timeout)) {
  program.timeout = INITIAL_TIMEOUT;
}
if (typeof program.refresh === "undefined") {
  program.refresh = false;
}

generateToken(program.server, program.key, program.refresh, program.timeout);
