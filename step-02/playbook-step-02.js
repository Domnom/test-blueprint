const path = require('path');

module.exports = step("step-02")
					.addCode("step-02/code/features/cool/CoolFeature.hbs", "features/cool/CoolFeature.js")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/coo")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
