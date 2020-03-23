const path = require('path');

module.exports = step("step-13")
					.addCli()
						.withCommand("git checkout -b feature/plan")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
