/*
 * Request Handlers
 *
 */

// Dependencies
const _data = require("./data");
const helpers = require("./helpers");
const config = require("./config");
const dns = require("dns");
const _url = require("url");
const { performance, PerformanceObserver } = require("perf_hooks");
const util = require("util");
const debug = util.debuglog("performance");

// Define all the handlers
const handlers = {};

/*
 * HTML or client route Handlers
 *
 */

// Index handler
handlers.index = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Uptime Monitoring - Made Simple",
      "head.description":
        "We offer free, simple uptime monitoring for HTTP/HTTPS sites all kinds. When your site goes down, we'll send you a text to let you know",
      "body.class": "index",
    };
    // Read in a template as a string
    helpers.getTemplate("index", templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Create Account
handlers.accountCreate = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Create an Account",
      "head.description": "Signup is easy and only takes a few seconds.",
      "body.class": "accountCreate",
    };
    // Read in a template as a string
    helpers.getTemplate("accountCreate", templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Create Sessions
handlers.sessionCreate = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Login to your Account",
      "head.description":
        "Please enter your phone number and password to access your account.",
      "body.class": "sessionCreate",
    };
    // Read in a template as a string
    helpers.getTemplate("sessionCreate", templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Delete Sessions
handlers.sessionDeleted = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Logged Out",
      "head.description": "You have been logged out",
      "body.class": "sessionDeleted",
    };
    // Read in a template as a string
    helpers.getTemplate("sessionDeleted", templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Edit Account
handlers.accountEdit = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Account Settings",
      "body.class": "accountEdit",
    };
    // Read in a template as a string
    helpers.getTemplate("accountEdit", templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Delete Account
handlers.accountDeleted = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Account Deleted",
      "head.description": "You Account has been deleted",
      "body.class": "accountDeleted",
    };
    // Read in a template as a string
    helpers.getTemplate("accountDeleted", templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Create a new check
handlers.checksCreate = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Create a new check",
      "body.class": "checksCreate",
    };
    // Read in a template as a string
    helpers.getTemplate("checksCreate", templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Checks view all
handlers.checksList = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Dashboard",
      "body.class": "checksList",
    };
    // Read in a template as a string
    helpers.getTemplate("checksList", templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Edit a check
handlers.checksEdit = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Check Details",
      "body.class": "checksEdit",
    };
    // Read in a template as a string
    helpers.getTemplate("checksEdit", templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Favicon
handlers.favicon = function (data, callback) {
  //Reject any request that isn't Get
  if (data.method == "get") {
    //Read in the favicon data
    helpers.getStaticAsset("favicon.ico", function (err, data) {
      if (!err && data) {
        // Callback the data
        callback(200, data, "favicon");
      } else {
        callback(500);
      }
    });
  } else {
    callback(405);
  }
};

// Public Assets
handlers.public = function (data, callback) {
  //Reject any request that isn't Get
  if (data.method == "get") {
    //Read in the favicon data
    const trimmedAssetName = data.trimmedPath.replace("public/", "").trim();
    if (trimmedAssetName.length > 0) {
      //Read in the asset's data
      helpers.getStaticAsset(trimmedAssetName, function (err, data) {
        if (!err && data) {
          // Determine the content type (default to plain text)
          let contentType = "plain";
          if (trimmedAssetName.indexOf(".css") > -1) {
            contentType = "css";
          }
          if (trimmedAssetName.indexOf(".png") > -1) {
            contentType = "png";
          }
          if (trimmedAssetName.indexOf(".jpg") > -1) {
            contentType = "jpg";
          }
          if (trimmedAssetName.indexOf(".ico") > -1) {
            contentType = "favicon";
          }
          // Callback the data
          callback(200, data, contentType);
        } else {
          callback(404);
        }
      });
    }
  } else {
    callback(405);
  }
};

/*
 * JSON API Handlers
 *
 */

// Ping
handlers.ping = function (data, callback) {
  callback(200);
};

// Not-Found
handlers.notFound = function (data, callback) {
  callback(404);
};

handlers.exampleError = (data, callback) => {
  const error = new error("This is an example error");
  throw err;
};

// Users
handlers.users = (data, callback) => {
  const acceptableMethods = ["post", "get", "put", "delete"];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback);
  } else {
    // status not allowed
    callback(405);
  }
};

// Container for all the users methods
handlers._users = {};

// Users - post
// Required data: firstName, lastName, phone, password, tosAgreement
// Optional data: none
handlers._users.post = (data, callback) => {
  // Check that all required fields are filled out
  const firstName =
    typeof data.payload.firstName === "string" &&
    data.payload.firstName.trim().length > 0
      ? data.payload.firstName.trim()
      : false;
  const lastName =
    typeof data.payload.lastName === "string" &&
    data.payload.lastName.trim().length > 0
      ? data.payload.lastName.trim()
      : false;
  const phone =
    typeof data.payload.phone === "string" &&
    data.payload.phone.trim().length === 10
      ? data.payload.phone.trim()
      : false;
  const password =
    typeof data.payload.password === "string" &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false;
  const tosAgreement =
    typeof data.payload.tosAgreement === "boolean" &&
    data.payload.tosAgreement === true
      ? true
      : false;

  if (firstName && lastName && phone && password && tosAgreement) {
    // Make sure the user doesnt already exist
    _data.read("users", phone, (err, data) => {
      // if it returns err, then it means user with the phone number doesn't exist
      if (err) {
        // Hash the password for security
        const hashedPassword = helpers.hash(password);

        // Create the user object
        if (hashedPassword) {
          const userObject = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            hashedPassword: hashedPassword,
            tosAgreement: true,
          };

          // Store the user
          _data.create("users", phone, userObject, (err) => {
            if (!err) {
              callback(200);
            } else {
              console.log(err);
              callback(500, { Error: "Could not create the new user" });
            }
          });
        } else {
          callback(500, { Error: "Could not hash the user's password." });
        }
      } else {
        // User alread exists
        callback(400, {
          Error: "A user with that phone number already exists",
        });
      }
    });
  } else {
    callback(400, { Error: "Missing required fields" });
  }
};

// User - GET
// Required data: phone
// Optional data: none
handlers._users.get = (data, callback) => {
  // check that the phone number is valid
  const phone =
    typeof data.queryStringObj.phone === "string" &&
    data.queryStringObj.phone.trim().length === 10
      ? data.queryStringObj.phone.trim()
      : false;

  if (phone) {
    // Get the token from headers
    const token =
      typeof data.headers.token === "string" ? data.headers.token : false;
    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(token, phone, (tokenIsValid) => {
      if (tokenIsValid) {
        // Lookup the user
        _data.read("users", phone, (err, data) => {
          if (!err && data) {
            // Remove the hashed password from the user user object before returning it to the requester
            delete data.hashedPassword;
            callback(200, data);
          } else {
            // Not Found
            callback(404);
          }
        });
      } else {
        callback(403, {
          Error: "Missing required token in header, or token is invalid.",
        });
      }
    });
  } else {
    callback(400, { Error: "Missing Required Field" });
  }
};

// User - PUT
// Required data: phone
// Optional data: firstname, lastname, password (at least must be specified)
handlers._users.put = (data, callback) => {
  // check for the required field
  const phone =
    typeof data.payload.phone === "string" &&
    data.payload.phone.trim().length === 10
      ? data.payload.phone.trim()
      : false;
  // Check for the Optional fields
  const firstName =
    typeof data.payload.firstName === "string" &&
    data.payload.firstName.trim().length > 0
      ? data.payload.firstName.trim()
      : false;

  const lastName =
    typeof data.payload.lastName === "string" &&
    data.payload.lastName.trim().length > 0
      ? data.payload.lastName.trim()
      : false;

  const password =
    typeof data.payload.password === "string" &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false;

  // Error if the phone is invalid
  if (phone) {
    // Error if nothing is sent to update
    if (firstName || lastName || password) {
      // Get the token from the headers
      const token =
        typeof data.headers.token == "string" ? data.headers.token : false;

      handlers._tokens.verifyToken(token, phone, (tokenIsValid) => {
        if (tokenIsValid) {
          // Lookup the user
          _data.read("users", phone, (err, userData) => {
            if (!err && userData) {
              //Update the necessary fields
              if (firstName) {
                userData.firstName = firstName;
              }
              if (lastName) {
                userData.lastName = lastName;
              }
              if (password) {
                userData.hashedPassword = helpers.hash(password);
              }
              // persist new updates
              _data.update("user", phone, userData, (err) => {
                if (err) {
                  callback(200);
                } else {
                  callback(500, { Error: "Couls not update user" });
                }
              });
            } else {
              callback(400, { Error: "The specified user does not exist" });
            }
          });
        } else {
          callback(403, {
            Error: "Misssing Required token in header or token is invalid",
          });
        }
      });
    } else {
      callback(400, { Error: "Missing fields to update" });
    }
  } else {
    callback(400, { Error: "Missing Required Field" });
  }
};

// Users - Delete
// Required data: phone
handlers._users.delete = (data, callback) => {
  // check if phone is valid
  const phone =
    typeof data.queryStringObj.phone === "string" &&
    data.queryStringObj.phone.trim().length === 10
      ? data.queryStringObj.phone.trim()
      : false;

  if (phone) {
    // get token from headers
    const token =
      typeof data.headers.token == "string" ? data.headers.token : false;

    handlers._tokens.verifyToken(token, phone, (tokenIsValid) => {
      if (tokenIsValid) {
        //Lookup the user
        _data.read("users", phone, (err, userData) => {
          if (!err && userData) {
            _data.delete("users", phone, (err) => {
              if (!err) {
                // Delete each of the checks associated with the user
                const userChecks =
                  typeof userData.checks == "object" &&
                  userData.checks instanceof Array
                    ? userData.checks
                    : [];
                const checksToDelete = userChecks.length;
                if (checksToDelete > 0) {
                  let checksDeleted = 0;
                  let deletionErrors = false;
                  //Loop through the checks
                  userChecks.forEach((checkId) => {
                    // delete the checks
                    _data.delete("checks", checkId, (err) => {
                      if (err) {
                        deletionErrors = true;
                      }
                      checksDeleted++;
                      if (checksDeleted == checksToDelete) {
                        if (!deletionErrors) {
                          callback(200);
                        } else {
                          callback(500, {
                            Error:
                              "Errors encountered while attempting to delete all of the user's checks. All checks may not have been deleted from the system successfully",
                          });
                        }
                      }
                    });
                  });
                } else {
                  callback(200);
                }
              } else {
                callback(500, { Error: "Could not delete the specified user" });
              }
            });
          } else {
            callback(500, { Error: "Could not find the specified user" });
          }
        });
      } else {
        callback(403, {
          Error: "Misssing Required token in header or token is invalid",
        });
      }
    });
  } else {
    callback(400, { Error: "Missing Required Field" });
  }
};

// Tokens
handlers.tokens = (data, callback) => {
  const acceptableMethods = ["post", "get", "put", "delete"];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._tokens[data.method](data, callback);
  } else {
    callback(405);
  }
};

handlers._tokens = {};

// Tokens - post
// Required data: phone, password
// Optional data: none
handlers._tokens.post = (data, callback) => {
  performance.mark("enter function");
  const phone =
    typeof data.payload.phone === "string" &&
    data.payload.phone.trim().length === 10
      ? data.payload.phone.trim()
      : false;

  const password =
    typeof data.payload.password === "string" &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false;

  performance.mark("inputs validated");
  if (phone && password) {
    // lookup the user who matches that phone number
    performance.mark("beginning user lookup");
    _data.read("users", phone, (err, userData) => {
      performance.mark("user lookup complete");
      if (!err && userData) {
        // Hash the sent password, and compare it to the password stored in the user Object
        performance.mark("beginning password hashing");
        const hashedPassword = helpers.hash(password);
        performance.mark("password hashing complete");
        if (hashedPassword === userData.hashedPassword) {
          // If valid, create a new token with a random name. Set expiration date 1 hour into the future
          performance.mark("creating data for the token");
          const tokenId = helpers.createRandomString(20);
          const expires = Date.now() + 1000 * 60 * 60;

          const tokenObject = {
            phone: phone,
            id: tokenId,
            expires: expires,
          };

          // Store the token
          performance.mark("begin storing token");
          _data.create("tokens", tokenId, tokenObject, (err) => {
            performance.mark("storing token complete");

            // Gather all the measurements
            performance.measure(
              "Beginning to end",
              "entered function",
              "storing token complete"
            );
            performance.measure(
              "Validating user input",
              "entered function",
              "inputs validated"
            );
            performance.measure(
              "User lookup",
              "beginning user lookup",
              "user lookup complete"
            );
            performance.measure(
              "Password hashing",
              "beginning password hashing",
              "password hashing complete"
            );
            performance.measure(
              "Token data creation",
              "creating data for the token",
              "begin storing token"
            );
            performance.measure(
              "Token storing",
              "begin storing token",
              "storing token complete"
            );

            // Log out all the measurements
            //@TODO this need to be fixed
            const measurements = new PerformanceObserver((items) => {
              debug(
                "\x1b[33m%s\x1b[0m",
                items.getEntries()[0].name +
                  " " +
                  items.getEntries()[0].duration
              );
              //measurements.disconnect();
              performance.clearMarks();
            });
            measurements.observe({ entryTypes: ["measure"] });

            if (!err) {
              callback(200, tokenObject);
            } else {
              callback(500, { Error: "Could not create new token" });
            }
          });
        } else {
          callback(400, {
            Error:
              "Password did not match the specified user's stored password",
          });
        }
      } else {
        callback(400, { Error: "Could not find the specified user" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field(s)" });
  }
};

// Tokens GET
//Required data : Id
//Optional data : none
handlers._tokens.get = (data, callback) => {
  // check that id is valid
  const id =
    typeof data.queryStringObj.id === "string" &&
    data.queryStringObj.id.trim().length === 20
      ? data.queryStringObj.id.trim()
      : false;

  if (id) {
    // Lookup the user
    _data.read("tokens", id, (err, tokenData) => {
      if (!err && tokenData) {
        callback(200, tokenData);
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { Error: "Missing Required Field" });
  }
};

// Tokens PUT
//Required data : Id, extend
//Optional data : none
handlers._tokens.put = (data, callback) => {
  // check that id is valid
  const id =
    typeof data.payload.id === "string" && data.payload.id.trim().length === 20
      ? data.payload.id.trim()
      : false;

  const extend =
    typeof data.payload.extend === "boolean" && data.payload.extend == true
      ? true
      : false;

  if (id && extend) {
    _data.read("tokens", id, (err, tokenData) => {
      if (!err && tokenData) {
        // check to make sure the token isn't already expired
        if (tokenData.expires > Date.now()) {
          // set the expiration an hour from now
          tokenData.expires = Date.now() + 1000 * 60 * 60;
          // store the new updates
          _data.update("tokens", id, tokenData, (err) => {
            if (!err) {
              callback(200);
            } else {
              callback(500, { Error: "Could not update token's expiration." });
            }
          });
        } else {
          callback(400, {
            Error: "The token has already expired and cannot be extended.",
          });
        }
      } else {
        callback(400, { Error: "Specified token does not exist" });
      }
    });
  } else {
    callback(400, {
      Error: "Missing Required field(s) or field(s) are invalid.",
    });
  }
};

// Tokens Delete
//Required data : Id
//Optional data : none
handlers._tokens.delete = (data, callback) => {
  // check that id is valid
  const id =
    typeof data.queryStringObj.id == "string" &&
    data.queryStringObj.id.trim().length == 20
      ? data.queryStringObj.id.trim()
      : false;

  if (id) {
    // Lookup the token
    _data.read("tokens", id, (err, data) => {
      if (!err && data) {
        _data.delete("tokens", id, (err) => {
          if (!err) {
            callback(200);
          } else {
            callback(500, { Error: "Could not delete the specified token" });
          }
        });
      } else {
        callback(400, { Error: "Could not find the specified token" });
      }
    });
  } else {
    callback(400, { Error: "Missing Required Field" });
  }
};

// ========= Verify if a given token id is currently valid for a given user ===========
handlers._tokens.verifyToken = (id, phone, callback) => {
  // Lookup the token
  _data.read("tokens", id, (err, tokenData) => {
    if (!err && tokenData) {
      // Check that the token is for the given user and has not expired
      if (tokenData.phone === phone && tokenData.expires > Date.now()) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
};

// ======================== Checks =================================
handlers.checks = (data, callback) => {
  const acceptableMethods = ["post", "get", "put", "delete"];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._checks[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the checks methods
handlers._checks = {};

// Check - Post
// Required data: protocol, url, method, successCodes, timeoutSeconds
// Optional data: none
handlers._checks.post = (data, callback) => {
  // Validate all the inputs
  const protocol =
    typeof data.payload.protocol === "string" &&
    ["http", "https"].indexOf(data.payload.protocol) > -1
      ? data.payload.protocol
      : false;

  const url =
    typeof data.payload.url === "string" && data.payload.url.trim().length > 0
      ? data.payload.url.trim()
      : false;

  const method =
    typeof data.payload.method === "string" &&
    ["post", "get", "put", "delete"].indexOf(data.payload.method) > -1
      ? data.payload.method
      : false;

  const successCodes =
    typeof data.payload.successCodes === "object" &&
    data.payload.successCodes instanceof Array &&
    data.payload.successCodes.length > 0
      ? data.payload.successCodes
      : false;

  const timeoutSeconds =
    typeof data.payload.timeoutSeconds === "number" &&
    data.payload.timeoutSeconds % 1 === 0 &&
    data.payload.timeoutSeconds >= 1 &&
    data.payload.timeoutSeconds <= 5
      ? data.payload.timeoutSeconds
      : false;

  if (protocol && url && method && successCodes && timeoutSeconds) {
    // Get the token from the headers
    const token =
      // check if token is valid
      typeof data.headers.token === "string" ? data.headers.token : false;
    // Lookup user by reading the token
    _data.read("tokens", token, (err, tokenData) => {
      if (!err && tokenData) {
        const userPhone = tokenData.phone;
        // lookup user data
        _data.read("users", userPhone, (err, userData) => {
          if (!err && userData) {
            const userChecks =
              typeof userData.checks === "object" &&
              userData.checks instanceof Array
                ? userData.checks
                : [];
            //verify that user has less than the number the max-checks-per-user
            if (userChecks.length < config.maxChecks) {
              // Verify that the url given has DNS entries (and therefore can be resolved).
              const parsedUrl = _url.parse(protocol + "://" + url, true);
              const hostName =
                typeof parsedUrl.hostname == "string" &&
                parsedUrl.hostname.length > 0
                  ? parsedUrl.hostname
                  : false;
              dns.resolve(hostName, function (err, records) {
                if (!err && records) {
                  // create random id for the check
                  const checkId = helpers.createRandomString(20);
                  // create the check object, and include the user's phone
                  const checkObject = {
                    id: checkId,
                    userPhone: userPhone,
                    protocol: protocol,
                    url: url,
                    method: method,
                    successCodes: successCodes,
                    timeoutSeconds: timeoutSeconds,
                  };
                  //Save the object
                  _data.create("checks", checkId, checkObject, (err) => {
                    if (!err) {
                      //add the check id to the user's object
                      userData.checks = userChecks;
                      userData.checks.push(checkId);

                      // Save the new user data
                      _data.update("users", userPhone, userData, (err) => {
                        if (!err) {
                          callback(200, checkObject);
                        } else {
                          callback(500, {
                            Error:
                              "Could not update the user with the new check",
                          });
                        }
                      });
                    } else {
                      callback(500, { Error: "Could not create new check" });
                    }
                  });
                } else {
                  callback(400, {
                    Error:
                      "The hostname of the URL entered did not resolve to any DNS entries.",
                  });
                }
              });
            } else {
              callback(400, {
                Error: `The user already has the maximum number of checks (${config.maxChecks})`,
              });
            }
          } else {
            callback(403);
          }
        });
      } else {
        callback(403, { Error: "Something went wrong here" });
      }
    });
  } else {
    callback(400, { Error: "Missing required inputs, or inputs are invalid" });
  }
};

//checks - get
//Required data: id
//Optional data: none
handlers._checks.get = (data, callback) => {
  // check that the id is valid
  const id =
    typeof data.queryStringObj.id === "string" &&
    data.queryStringObj.id.trim().length === 20
      ? data.queryStringObj.id.trim()
      : false;

  if (id) {
    // Lookup the checks
    _data.read("checks", id, (err, checkData) => {
      if (!err && checkData) {
        // Get token from headers
        const token =
          typeof data.headers.token === "string" ? data.headers.token : false;
        // Verify that the given token is valid and belong to the user who created the check
        handlers._tokens.verifyToken(
          token,
          checkData.userPhone,
          (tokenIsValid) => {
            if (tokenIsValid) {
              callback(200, checkData);
            } else {
              callback(403);
            }
          }
        );
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { Error: "Missing Required Field" });
  }
};

// Checks Put
// Required data: id
// Optional data: protocol, url, successCodes, timeoutSeconds
handlers._checks.put = (data, callback) => {
  // check for (required)
  const id =
    typeof data.payload.id == "string" && data.payload.id.trim().length == 20
      ? data.payload.id.trim()
      : false;

  // Check for optional data
  const protocol =
    typeof data.payload.protocol == "string" &&
    ["http", "https"].indexOf(data.payload.protocol) > -1
      ? data.payload.protocol
      : false;

  const url =
    typeof data.payload.url == "string" && data.payload.url.trim().length > 0
      ? data.payload.url.trim()
      : false;

  const method =
    typeof data.payload.method == "string" &&
    ["post", "get", "put", "delete"].indexOf(data.payload.method) > -1
      ? data.payload.method
      : false;

  const successCodes =
    typeof data.payload.successCodes == "object" &&
    data.payload.successCodes instanceof Array &&
    data.payload.successCodes.length > 0
      ? data.payload.successCodes
      : false;

  const timeoutSeconds =
    typeof data.payload.timeoutSeconds == "number" &&
    data.payload.timeoutSeconds % 1 === 0 &&
    data.payload.timeoutSeconds >= 1 &&
    data.payload.timeoutSeconds <= 5
      ? data.payload.timeoutSeconds
      : false;

  // check to make sure id is valid
  if (id) {
    // check to make sure one or more optional fields has been sent
    if (protocol || url || method || successCodes || timeoutSeconds) {
      // lookup checks id
      _data.read("checks", id, (err, checkData) => {
        if (!err && checkData) {
          // Get the token from headers
          const token =
            typeof data.headers.token == "string" ? data.headers.token : false;
          // Verify that the given token is valid and belong to the user who created the check
          handlers._tokens.verifyToken(
            token,
            checkData.userPhone,
            (tokenIsValid) => {
              if (tokenIsValid) {
                //Update the check where necessary
                if (protocol) {
                  checkData.protocol = protocol;
                }
                if (url) {
                  checkData.url = url;
                }
                if (method) {
                  checkData.method = method;
                }
                if (successCodes) {
                  checkData.successCodes = successCodes;
                }
                if (timeoutSeconds) {
                  checkData.timeoutSeconds = timeoutSeconds;
                }
                // Store the new update
                _data.update("checks", id, checkData, (err) => {
                  if (!err) {
                    callback(200);
                  } else {
                    callback(500, { Error: "Could not update the check" });
                  }
                });
              } else {
                callback(403);
              }
            }
          );
        } else {
          callback(400, { Error: "Check ID did not exist" });
        }
      });
    } else {
      callback(400, { Error: "Missing fields to update" });
    }
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Check - Delete
// Required data: id
// Optional data: none
handlers._checks.delete = (data, callback) => {
  // check that the id is valid
  const id =
    typeof data.queryStringObj.id == "string" &&
    data.queryStringObj.id.trim().length == 20
      ? data.queryStringObj.id.trim()
      : false;

  if (id) {
    // Lookup the check
    _data.read("checks", id, (err, checkData) => {
      if (!err && checkData) {
        // Get the token from headers
        const token =
          typeof data.headers.token == "string" ? data.headers.token : false;

        handlers._tokens.verifyToken(
          token,
          checkData.userPhone,
          (tokenIsValid) => {
            if (tokenIsValid) {
              // Delete check data
              _data.delete("checks", id, (err) => {
                if (!err) {
                  // Lookup the user
                  _data.read("users", checkData.userPhone, (err, userData) => {
                    if (!err && userData) {
                      const userChecks =
                        typeof userData.checks == "object" &&
                        userData.checks instanceof Array
                          ? userData.checks
                          : [];
                      //Remove the deleted checks from their list of checks
                      const checkPosition = userChecks.indexOf(id);

                      if (checkPosition > -1) {
                        userChecks.splice(checkPosition, 1);
                        //Re-save user data
                        _data.update(
                          "users",
                          checkData.userPhone,
                          userData,
                          (err) => {
                            if (!err) {
                              callback(200);
                            } else {
                              callback(500, {
                                Error: "Could not update the user",
                              });
                            }
                          }
                        );
                      } else {
                        callback(500, {
                          Error:
                            "Could not find check on the users object, so could not remove it",
                        });
                      }
                    } else {
                      callback(500, {
                        Error:
                          "Could not find the user who created the check, so could not delete check from the list of user objects",
                      });
                    }
                  });
                } else {
                  callback(500, { Error: "Could not delete the check data" });
                }
              });
            } else {
              callback(403);
            }
          }
        );
      } else {
        callback(400, { Error: "The specified check id does not exist" });
      }
    });
  } else {
    callback(400, { Error: "Missing Required Field" });
  }
};

// Ping Handler
handlers.ping = (data, callback) => {
  callback(200);
};

handlers.notFound = (data, callback) => {
  callback(404);
};

module.exports = handlers;
