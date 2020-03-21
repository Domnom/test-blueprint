module.exports = step("step-3")
				.addCode("step-3/code/features/cool/CoolFeature.hbs", "features/cool/CoolFeature.js")
					.withPartial("partial_1", "step-3/code/features/cool/CoolFeature_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-3/code/features/cool/CoolFeature_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-3/code/features/cool/CoolFeature_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-3/code/service/ValidationService.hbs", "service/ValidationService.js")
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/cool-validation")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
