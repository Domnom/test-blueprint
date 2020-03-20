const path = require("path");

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStep("step-1")
				.addCode("step-1/code/.DS_Store.hbs", ".DS_Store")
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-1/code/Dockerfile.hbs", "Dockerfile")
				.withTime({
					"start" : 300,
					"duration" : 100
				})
				.addCode("step-1/code/app.hbs", "app.js")
				.withTime({
					"start" : 400,
					"duration" : 100
				})
				.addCode("step-1/code/bin/www.hbs", "bin/www")
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addCode("step-1/code/package.hbs", "package.json")
				.withTime({
					"start" : 600,
					"duration" : 100
				})
				.addCode("step-1/code/public/.DS_Store.hbs", "public/.DS_Store")
				.withTime({
					"start" : 700,
					"duration" : 300
				})
				.addCode("step-1/code/public/app/.DS_Store.hbs", "public/app/.DS_Store")
				.withTime({
					"start" : 1000,
					"duration" : 300
				})
				.addCode("step-1/code/public/app/env.hbs", "public/app/env.js")
				.withTime({
					"start" : 1300,
					"duration" : 100
				})
				.addCode("step-1/code/public/bower.hbs", "public/bower.json")
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-1/code/services/Helpful.service.hbs", "services/Helpful.service.js")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-1/code/test/test.fail.hbs", "test/test.fail.js")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-1/code/test/test.success.hbs", "test/test.success.js")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-1/code/views/index.hbs", "views/index.ejs")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
	.write(path.join(__dirname, "playbook.json"));