let RuleEngine = require("node-rules");
let companies = require("./ruleInputs");
let { accountant, programmer } = require("./facts");
const isApplicable = require("./isApplicable");


// Creating rule Engine instance
let R = new RuleEngine();

// Tips
// ------------------
// You can add multiple unique fields inside consequence section
// R.restart() will run rules recursively until base case is not matched 
const SELECTED_COMPANY = companies.company1;

// -------------------------------
// Submitted -> Testing
// -------------------------------
let submittedRule = {
    id: "SUBMIT",
    name: "schedule for testing",
    on: true,
    condition: function(R) {
        const condition = isApplicable(this, SELECTED_COMPANY.rules.testings.criteria).process;
        if (!condition) {
            this.result = condition;
            R.stop()
        } else {
            R.when(condition)
        }
    },
    consequence: function(R) {
        console.log('proceeding for next rule.....')
        R.next();
    }
};

// -------------------------------
// Testing -> Interview
// -------------------------------
let testingRule = {
    id: "TEST",
    name: "schedule for interview",
    on: true,
    condition: function(R) {
        R.when(true)
    },
    consequence: function(R) {
        console.log(testingRule.name);
        R.next();
    }
};

// -------------------------------
// Interview -> Project
// -------------------------------
let interviewRule = {
    id: "INTERVIEW",
    name: "schedule for project",
    on: true,
    condition: function(R) {
        R.when(true)
    },
    consequence: function(R) {
        console.log(interviewRule.name);
        R.next();
    }
};

// -------------------------------
// Project -> Hiring
// -------------------------------
let projectRule = {
    id: "PROJECT",
    name: "schedule for hiring",
    on: true,
    condition: function(R) {
        R.when(true)
    },
    consequence: function(R) {
        console.log(projectRule.name);
        R.stop();
    }
};


// Register Rule
R.register([submittedRule, testingRule, interviewRule, projectRule]);

// Dynamic control
// The various functions for dynamic control are

// Turn
// Prioritize
// Register
// FindRules
// Init

// R.turn("off", {
//     id: "SUBMIT"
// });

// Check if the engine blocks its!
R.execute(programmer, function(data) {
    if (data.result) {
        console.log("Applicant is now available for hiring.");
    } else {
        console.log("Application is blocked.");
    }
})