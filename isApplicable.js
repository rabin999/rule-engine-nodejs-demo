module.exports = function isApplicable(applicant = [], requiredCriteria = {}) {
    const log = false;
    let applicable = {
        process: false,
        reason: "Criteria does not match"
    };

    if (!(Object.keys(applicant).length > 0 && Object.keys(requiredCriteria).length > 0)) {
        throw new Error("Applicant input and required criteria is not given.")
    }

    if (applicant.status !== requiredCriteria.status) {
        applicable = {
            process: false,
            reason: "Application is not submitted yet"
        };
        return applicable;
    }

    for (let userSkill of applicant.skills) {
        for (let _ in requiredCriteria) {
            const language = requiredCriteria["language"];
            const requiredYearsOfExperience = requiredCriteria["yearsOfExperience"];

            // [Security Tip]: to make sure given operator is save, whitelist varification should be process
            const yearsOfExperienceCondition = eval(`${userSkill.yearsOfExperience} ${requiredYearsOfExperience.operator} ${requiredYearsOfExperience.value}`);
            
            if(log) console.log(`Checking language: ${language}`);
            if(log) console.log(`Years Of Experience Condition: ${yearsOfExperienceCondition}`);

            if (userSkill.language.toLowerCase() == language.toLowerCase() && yearsOfExperienceCondition) {
                applicable = {
                    process: true,
                    reason: "Criteria matched."
                };
                break;
            }
        }

        if (applicable.process) break;
    }

    return applicable;
}