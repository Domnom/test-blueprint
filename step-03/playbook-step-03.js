const path = require('path');

module.exports = step("step-03")
					.addCode("step-03/code/package.hbs", "package.json")
						.withPartial("partial_1", "step-03/code/package_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("step-03/code/Monster.schema.hbs", "Monster.schema.ts")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/monster")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
