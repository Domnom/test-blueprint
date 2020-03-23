const path = require('path');

module.exports = step("step-12")
					.addCode("/code/setup/create_playbook.hbs", "setup/create_playbook.sh")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/common/lexicographic-order-generator")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
