module.exports = step("step-2")
				.addCode("step-2/code/features/cool/CoolFeature.hbs", "features/cool/CoolFeature.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/cool")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
