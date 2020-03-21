const path = require("path");

const step-1 = require('step-1/playbook-step-1.js');

const step-2 = require('step-2/playbook-step-2.js');

const step-3 = require('step-3/playbook-step-3.js');

const step-4 = require('step-4/playbook-step-4.js');

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStepFromModel(step-1)			.addStepFromModel(step-2)			.addStepFromModel(step-3)			.addStepFromModel(step-4)	.write(path.join(__dirname, "playbook.json"));