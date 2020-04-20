const path = require('path');

module.exports = step("step-04")
					.addCode("step-04/code/features/cool/CoolFeature.hbs", "features/cool/CoolFeature.js")
						.withPartial("partial_1", "step-04/code/features/cool/CoolFeature_partials/partial_1.hbs", 0, 100)
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
