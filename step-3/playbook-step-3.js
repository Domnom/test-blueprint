const path = require('path');

module.exports = step("step-3")
					.addCode("/code/docker-compose.hbs", "docker-compose.yml")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
						.withPartial("partial_1", "step-3/code/backend/server/src/app.module_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-3/code/backend/server/src/app.module_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/docker-compose")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
