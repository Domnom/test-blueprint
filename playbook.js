const path = require("path");

const step_1 = require('./step-1/playbook-step-1.js');
const step_2 = require('./step-2/playbook-step-2.js');
const step_3 = require('./step-3/playbook-step-3.js');
const step_4 = require('./step-4/playbook-step-4.js');
const step_5 = require('./step-5/playbook-step-5.js');
const step_6 = require('./step-6/playbook-step-6.js');
const step_7 = require('./step-7/playbook-step-7.js');
const step_8 = require('./step-8/playbook-step-8.js');
const step_9 = require('./step-9/playbook-step-9.js');
const step_10 = require('./step-10/playbook-step-10.js');
const step_11 = require('./step-11/playbook-step-11.js');
const step_12 = require('./step-12/playbook-step-12.js');
const step_13 = require('./step-13/playbook-step-13.js');
const step_14 = require('./step-14/playbook-step-14.js');
const step_15 = require('./step-15/playbook-step-15.js');
const step_16 = require('./step-16/playbook-step-16.js');
const step_17 = require('./step-17/playbook-step-17.js');
const step_18 = require('./step-18/playbook-step-18.js');
const step_19 = require('./step-19/playbook-step-19.js');
const step_20 = require('./step-20/playbook-step-20.js');
const step_21 = require('./step-21/playbook-step-21.js');
const step_22 = require('./step-22/playbook-step-22.js');
const step_23 = require('./step-23/playbook-step-23.js');
const step_24 = require('./step-24/playbook-step-24.js');
const step_25 = require('./step-25/playbook-step-25.js');
const step_26 = require('./step-26/playbook-step-26.js');

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStepFromModel(step_1)
			.addStepFromModel(step_2)
			.addStepFromModel(step_3)
			.addStepFromModel(step_4)
			.addStepFromModel(step_5)
			.addStepFromModel(step_6)
			.addStepFromModel(step_7)
			.addStepFromModel(step_8)
			.addStepFromModel(step_9)
			.addStepFromModel(step_10)
			.addStepFromModel(step_11)
			.addStepFromModel(step_12)
			.addStepFromModel(step_13)
			.addStepFromModel(step_14)
			.addStepFromModel(step_15)
			.addStepFromModel(step_16)
			.addStepFromModel(step_17)
			.addStepFromModel(step_18)
			.addStepFromModel(step_19)
			.addStepFromModel(step_20)
			.addStepFromModel(step_21)
			.addStepFromModel(step_22)
			.addStepFromModel(step_23)
			.addStepFromModel(step_24)
			.addStepFromModel(step_25)
			.addStepFromModel(step_26)
	.write(path.join(__dirname, "playbook.json"));