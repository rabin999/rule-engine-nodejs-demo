The following example presents a simplified set of rules for your consideration.
It has not been deployed, it's just a simple example consisting of four interconnected rules:

1. Submitted -> Testing
2. Testing -> Interview
3. Interview -> Project
4. Project -> Hiring

-------------------------------
Submitted -> Testing
-------------------------------
Based on current client needs, HR would like to write a rule that will determine if a candidate should be scheduled for online testing.

Rule “Schedule For Testing”
when
	$candidate: Candidate(status=='Submitted',yrsExperience >= 10, 
		skill(name=='Java', yrsExperience>=5) or Skill(name=='C#', yrsExperience>=5))
then
	$candidate.setStatus('Testing');
end


-------------------------------
Testing -> Interview
-------------------------------
After the candidate has taken the online exam, their score needs to be evaluated. HR would like to have control over this rule as well. 
The online exam tests for a candidate’s ability to understand software development theory, problem solving, and syntax. 
HR would like to decide what mix of scores will enable a candidate to be considered for a technical interview.

Rule “Schedule For Interview”
when
	$candidate: Candidate(status=='Testing', testScore(theory>.8 && syntax>.6 && problemSolving>.8);
then
	$candidate.setStatus('Interview');
end


-------------------------------
Interview -> Project
-------------------------------
A technical interview will test a candidate’s ability to speak about their experience, answer problem solving questions, 
and it will test their ability to communicate in general. HR will write the rule that determines a passing score for the technical interview.

Rule “Schedule For Project”
when
	$candidate: Candidate(status=='Interview', 	interviewScore(speakExperience>.9 && problemSolving>.8 && communication>.9 );
then
	$candidate.setStatus('Project');
end


-------------------------------
Project -> Hiring
-------------------------------
If a candidate passed the technical interview, they will be given an off-line programming project. 
They will submit the project and it will be judged for completeness, architecture, and GUI.

Rule “Schedule For Hiring”
when
	$candidate: Candidate(status=='Project', projectScore(completeness>.8 && architecture>.9 && gui>.7 );
then
	$candidate.setStatus('Hiring');
end

As you can see, even this basic example offers a number of possibilities for HR, and it can streamline operations.
The fact that HR could alter rules without having to involve IT in the process would inevitably save time and speed up the screening process.

Since the rules can be changed on the fly, the HR department would also have a lot more flexibility. For example, HR could expand or restrict the selection process by setting different parameters.