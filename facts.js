const { v4 } = require("uuid");

// Add a applicant fact
exports.accountant = {
    id: v4(),
    status: "submitted",
    applicantName: "Prakash Raj Chopara",
    experties: ["ACCOUNT"],
    yearsOfExperience: 5,
    skills: [
        {
            language: "corporate_finance",
            yearsOfExperience: 3
        },
        {
            language: "tax",
            yearsOfExperience: 1
        },
        {
            language: "accouting_law",
            yearsOfExperience: 7
        }
    ]
};

exports.programmer = {
    id: v4(),
    status: "submitted",
    applicantName: "Denice Ritchee",
    yearsOfExperience: 5,
    experties: ["PROGRAMMING"],
    skills: [
        {
            language: "Java",
            yearsOfExperience: 2
        },
        {
            language: "Python",
            yearsOfExperience: 1
        },
        {
            language: "C++",
            yearsOfExperience: 7
        }
    ]
}