const path = require('path');

module.exports = step("step-07")
					.addCli()
						.withCommand("git checkout -b feature/frontend/setup-done")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
