$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create account test",
  "description": "",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7119115200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "create-account-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter email for registration",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on create account link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User fill personal information form \u003c\"George\"\u003e \u003c\"Smith\"\u003e \u003c\"Hello1234\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User fill address details \u003c\"1 Nice Building\"\u003e \u003c\"Maryland\"\u003e \u003c\"Ohio\"\u003e \u003c\"12345\"\u003e \u003c\"United States\"\u003e \u003c\"0123456789\"\u003e \u003c\"main home\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should create account successfully and get \u003c\"My account\"\u003e text",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 111453600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "duration": 1767195700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.userEnterEmailForRegistration()"
});
formatter.result({
  "duration": 198372300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.userClickOnCreateAccountLink()"
});
formatter.result({
  "duration": 91291100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "George",
      "offset": 38
    },
    {
      "val": "Smith",
      "offset": 49
    },
    {
      "val": "Hello1234",
      "offset": 59
    }
  ],
  "location": "CreateAccountTest.userFillPersonalInformationForm(String,String,String)"
});
formatter.result({
  "duration": 1456935600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Nice Building",
      "offset": 28
    },
    {
      "val": "Maryland",
      "offset": 48
    },
    {
      "val": "Ohio",
      "offset": 61
    },
    {
      "val": "12345",
      "offset": 70
    },
    {
      "val": "United States",
      "offset": 80
    },
    {
      "val": "0123456789",
      "offset": 98
    },
    {
      "val": "main home",
      "offset": 113
    }
  ],
  "location": "CreateAccountTest.userFillAddressDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 710557700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.userClickOnRegisterButton()"
});
formatter.result({
  "duration": 1491226000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 50
    }
  ],
  "location": "CreateAccountTest.userShouldCreateAccountSuccessfullyAndGetText(String)"
});
formatter.result({
  "duration": 41788400,
  "status": "passed"
});
formatter.after({
  "duration": 760599800,
  "status": "passed"
});
formatter.uri("signInPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "SIgn in page test",
  "description": "",
  "id": "sign-in-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5292176500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to sign-in page successfully",
  "description": "",
  "id": "sign-in-page-test;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User verify sign-in page text \u003c\"AUTHENTICATION\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "duration": 2005556600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 32
    }
  ],
  "location": "SignInSteps.userVerifySignInPageText(String)"
});
formatter.result({
  "duration": 52928900,
  "status": "passed"
});
formatter.after({
  "duration": 822964900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "User should get error message when login in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    },
    {
      "line": 9,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User sign in with invalid username and password \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see error message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "message"
      ],
      "line": 17,
      "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "password123",
        "An email address required."
      ],
      "line": 18,
      "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "password12",
        "Invalid email address."
      ],
      "line": 20,
      "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "pass123",
        "Authentication failed."
      ],
      "line": 21,
      "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4762806400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should get error message when login in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    },
    {
      "line": 9,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User sign in with invalid username and password \"\" \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "duration": 1427757200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 49
    },
    {
      "val": "password123",
      "offset": 52
    }
  ],
  "location": "SignInSteps.userSignInWithInvalidUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 168664800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInButton()"
});
formatter.result({
  "duration": 909290700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 31
    }
  ],
  "location": "SignInSteps.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 30010600,
  "status": "passed"
});
formatter.after({
  "duration": 756858400,
  "status": "passed"
});
formatter.before({
  "duration": 5340026800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should get error message when login in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    },
    {
      "line": 9,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User sign in with invalid username and password \"abcd@gmail.com\" \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "duration": 1823717100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 49
    },
    {
      "val": "",
      "offset": 66
    }
  ],
  "location": "SignInSteps.userSignInWithInvalidUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 179584200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInButton()"
});
formatter.result({
  "duration": 1075033800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 31
    }
  ],
  "location": "SignInSteps.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 29934600,
  "status": "passed"
});
formatter.after({
  "duration": 801018000,
  "status": "passed"
});
formatter.before({
  "duration": 4443708900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should get error message when login in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    },
    {
      "line": 9,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User sign in with invalid username and password \"adfdfgfg\" \"password12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "duration": 1309647600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 49
    },
    {
      "val": "password12",
      "offset": 60
    }
  ],
  "location": "SignInSteps.userSignInWithInvalidUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 187076600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInButton()"
});
formatter.result({
  "duration": 1026904800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 31
    }
  ],
  "location": "SignInSteps.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 34219600,
  "status": "passed"
});
formatter.after({
  "duration": 777459200,
  "status": "passed"
});
formatter.before({
  "duration": 4599303100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should get error message when login in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-get-error-message-when-login-in-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    },
    {
      "line": 9,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User sign in with invalid username and password \"abcd@gmail.com\" \"pass123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 24800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "duration": 1979727700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 49
    },
    {
      "val": "pass123",
      "offset": 66
    }
  ],
  "location": "SignInSteps.userSignInWithInvalidUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 196849900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInButton()"
});
formatter.result({
  "duration": 1412270100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 31
    }
  ],
  "location": "SignInSteps.userShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 29420500,
  "status": "passed"
});
formatter.after({
  "duration": 785104100,
  "status": "passed"
});
formatter.before({
  "duration": 4429618400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user should login successfully with valid credentials",
  "description": "",
  "id": "sign-in-page-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User verify sign-in page text \u003c\"AUTHENTICATION\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enter valid email and password \u003c\"georgesmith@gmail.com\"\u003e and \u003c\"acd1234\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should login successfully and see \u0027sign-out\u0027 button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "duration": 1690045000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 32
    }
  ],
  "location": "SignInSteps.userVerifySignInPageText(String)"
});
formatter.result({
  "duration": 38853100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "georgesmith@gmail.com",
      "offset": 38
    },
    {
      "val": "acd1234",
      "offset": 68
    }
  ],
  "location": "SignInSteps.userEnterValidEmailAndPasswordAnd(String,String)"
});
formatter.result({
  "duration": 213966200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInButton()"
});
formatter.result({
  "duration": 1302313000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userShouldLoginSuccessfullyAndSeeSignOutButton()"
});
formatter.result({
  "duration": 37382000,
  "status": "passed"
});
formatter.after({
  "duration": 772758000,
  "status": "passed"
});
formatter.before({
  "duration": 5840293400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify that user should logout successfully",
  "description": "",
  "id": "sign-in-page-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User verify sign-in page text \u003c\"AUTHENTICATION\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enter valid email and password \u003c\"georgesmith@gmail.com\"\u003e and \u003c\"acd1234\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on sign-in button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User should login successfully and see \u0027sign-out\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User should click on sign-out button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User should signout successfully and see \u0027sign-in\u0027 button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "duration": 1809224000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 32
    }
  ],
  "location": "SignInSteps.userVerifySignInPageText(String)"
});
formatter.result({
  "duration": 34903800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "georgesmith@gmail.com",
      "offset": 38
    },
    {
      "val": "acd1234",
      "offset": 68
    }
  ],
  "location": "SignInSteps.userEnterValidEmailAndPasswordAnd(String,String)"
});
formatter.result({
  "duration": 206483000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInButton()"
});
formatter.result({
  "duration": 3296558800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userShouldLoginSuccessfullyAndSeeSignOutButton()"
});
formatter.result({
  "duration": 34768800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userShouldClickOnSignOutButton()"
});
formatter.result({
  "duration": 1545569400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userShouldSignoutSuccessfullyAndSeeSignInButton()"
});
formatter.result({
  "duration": 31074100,
  "status": "passed"
});
formatter.after({
  "duration": 737207500,
  "status": "passed"
});
formatter.uri("womenCategoryTest.feature");
formatter.feature({
  "line": 1,
  "name": "Test women category page",
  "description": "",
  "id": "test-women-category-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4934834800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that user should successfully navigate to women category page",
  "description": "",
  "id": "test-women-category-page;verify-that-user-should-successfully-navigate-to-women-category-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnWomenTab()"
});
formatter.result({
  "duration": 1576775800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 70
    }
  ],
  "location": "WomenCategorySteps.userShouldSuccessfullyNavigateToWomenCategoryPageAndVerify(String)"
});
formatter.result({
  "duration": 26890500,
  "status": "passed"
});
formatter.after({
  "duration": 734685700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 22,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 23,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 24,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 25,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "S",
        "Blue"
      ],
      "line": 26,
      "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5214710900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnWomenTab()"
});
formatter.result({
  "duration": 1741362900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 70
    }
  ],
  "location": "WomenCategorySteps.userShouldSuccessfullyNavigateToWomenCategoryPageAndVerify(String)"
});
formatter.result({
  "duration": 34662400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1775479500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "WomenCategorySteps.userChangeQuantity(String)"
});
formatter.result({
  "duration": 216814300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.userSelectSize(String)"
});
formatter.result({
  "duration": 105662100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.userSelectColour(String)"
});
formatter.result({
  "duration": 80693500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 56770200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 28829900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.after({
  "duration": 734530700,
  "status": "passed"
});
formatter.before({
  "duration": 4842228400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnWomenTab()"
});
formatter.result({
  "duration": 2337817700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 70
    }
  ],
  "location": "WomenCategorySteps.userShouldSuccessfullyNavigateToWomenCategoryPageAndVerify(String)"
});
formatter.result({
  "duration": 28974700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1750640200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "WomenCategorySteps.userChangeQuantity(String)"
});
formatter.result({
  "duration": 203465400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.userSelectSize(String)"
});
formatter.result({
  "duration": 88421300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.userSelectColour(String)"
});
formatter.result({
  "duration": 64642900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 50935400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 30467100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.after({
  "duration": 770465000,
  "status": "passed"
});
formatter.before({
  "duration": 4857418100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 37800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnWomenTab()"
});
formatter.result({
  "duration": 2703059000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 70
    }
  ],
  "location": "WomenCategorySteps.userShouldSuccessfullyNavigateToWomenCategoryPageAndVerify(String)"
});
formatter.result({
  "duration": 37068000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1722997100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "WomenCategorySteps.userChangeQuantity(String)"
});
formatter.result({
  "duration": 220964700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.userSelectSize(String)"
});
formatter.result({
  "duration": 61488100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.userSelectColour(String)"
});
formatter.result({
  "duration": 77426000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 58850500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 28065000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.after({
  "duration": 758406200,
  "status": "passed"
});
formatter.before({
  "duration": 6096458600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify that user add product to cart successfully",
  "description": "",
  "id": "test-women-category-page;verify-that-user-add-product-to-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should successfully navigate to women category page and verify \u003c\"WOMEN\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click on the product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the message \u003c\"Product successfully added to your shopping cart\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on X button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnWomenTab()"
});
formatter.result({
  "duration": 2544304200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 70
    }
  ],
  "location": "WomenCategorySteps.userShouldSuccessfullyNavigateToWomenCategoryPageAndVerify(String)"
});
formatter.result({
  "duration": 30226300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userClickOnTheProduct(String)"
});
formatter.result({
  "duration": 2112976400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "WomenCategorySteps.userChangeQuantity(String)"
});
formatter.result({
  "duration": 233553300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.userSelectSize(String)"
});
formatter.result({
  "duration": 48326400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.userSelectColour(String)"
});
formatter.result({
  "duration": 88588800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 52717700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 33964900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.clickOnXButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 15000,
  "status": "passed"
});
formatter.after({
  "duration": 786515400,
  "status": "passed"
});
});