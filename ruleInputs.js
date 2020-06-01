// This fill will contain business rules written by SME(Subject Matter Expert)
// from companies

const companies = {
    company1: {
        rules: {
            testings: {
                criteria: { 
                    status: "submitted", 
                    language: "java", 
                    yearsOfExperience: { operator: ">=", value: 2 }
                }
            },
            interview: {},
            project: {},
            hiring: {}
        }
    },
    company2: {
        rules: {
            testings: {
                criteria: { 
                    status: "submitted", 
                    language: "python", 
                    yearsOfExperience: { operator: ">=", value: 1 }
                }
            },
            interview: {},
            project: {},
            hiring: {}
        }
    } ,
    accountCompany: {
        rules: {
            testings: {
                criteria: { 
                    status: "submitted", 
                    language: "corporate_finance", 
                    yearsOfExperience: { operator: ">=", value: 1 }
                }
            },
            interview: {},
            project: {},
            hiring: {}
        }
    } 
};

module.exports = companies;