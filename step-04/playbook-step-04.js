const path = require('path');

module.exports = step("step-04")
					.addCode("step-04/code/package.hbs", "package.json")
						.withPartial("partial_1", "step-04/code/package_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("step-04/code/Creature.schema.hbs", "Creature.schema.ts")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/creature")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
