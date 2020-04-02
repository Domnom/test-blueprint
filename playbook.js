const path = require("path");

const step_01 = require('./step-01/playbook-step-01.js');
const step_02 = require('./step-02/playbook-step-02.js');
const step_03 = require('./step-03/playbook-step-03.js');
const step_04 = require('./step-04/playbook-step-04.js');

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStepFromModel(step_01)
			.addStepFromModel(step_02)
			.addStepFromModel(step_03)
			.addStepFromModel(step_04)
	.write(path.join(__dirname, "playbook.json"));