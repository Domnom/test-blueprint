const path = require("path");

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStep("step-1")
				.addDescriptionFromMdFile(path.join(__dirname, "README.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-2")
				.addCli()
					.withCommand("git checkout -b feature/cool")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-3")
				.addCli()
					.withCommand("git checkout -b feature/cool-validation")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-4")
				.addCli()
					.withCommand("git checkout -b feature/cool")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
	.write(path.join(__dirname, "playbook.json"));