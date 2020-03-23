const path = require('path');

module.exports = step("step-22")
					.addCode("/code/frontend/package.hbs", "frontend/package.json")
						.withPartial("partial_1", "step-22/code/frontend/package_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-22/code/frontend/package_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/services/react-beautiful-dnd/responders.service.test.hbs", "frontend/src/services/react-beautiful-dnd/responders.service.test.ts")
					.withTime({
						"start" : 0,
						"duration" : 1100
					})
					.addCode("/code/frontend/src/services/react-beautiful-dnd/responders.service.hbs", "frontend/src/services/react-beautiful-dnd/responders.service.ts")
					.withTime({
						"start" : 0,
						"duration" : 500
					})
					.addCli()
						.withCommand("git checkout -b feature/frontend/services/react-beautiful-dnd")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
