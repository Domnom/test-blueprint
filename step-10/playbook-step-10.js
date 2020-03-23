const path = require('path');

module.exports = step("step-10")
					.addCli()
						.withCommand("git checkout -b feature/frontend/card")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
