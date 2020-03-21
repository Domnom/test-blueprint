const path = require("path");

const step_1 = require('./step-1/playbook-step-1.js');
const step_2 = require('./step-2/playbook-step-2.js');
const step_3 = require('./step-3/playbook-step-3.js');
const step_4 = require('./step-4/playbook-step-4.js');

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStepFromModel(step_1)
			.addStepFromModel(step_2)
			.addStepFromModel(step_3)
			.addStepFromModel(step_4)
	.write(path.join(__dirname, "playbook.json"));