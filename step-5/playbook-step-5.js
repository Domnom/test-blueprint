const path = require('path');

module.exports = step("step-5")
					.addCode("/code/setup/jest.hbs", "setup/jest.sh")
						.withPartial("partial_1", "step-5/code/setup/jest_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/setup/jest-and-docker")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
