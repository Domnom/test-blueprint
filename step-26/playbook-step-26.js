const path = require('path');

module.exports = step("step-26")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/pages/board-page/board-page.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/package.hbs", "frontend/package.json")
						.withPartial("partial_1", "step-26/code/frontend/package_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-26/code/frontend/package_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-26/code/frontend/package_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-26/code/frontend/package_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-26/code/frontend/package_partials/partial_5.hbs", 400, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
						.withPartial("partial_1", "step-26/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress.hbs", "frontend/cypress.json")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/fixtures/example.hbs", "frontend/cypress/fixtures/example.json")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/actions.spec.hbs", "frontend/cypress/integration/examples/actions.spec.js")
					.withTime({
						"start" : 100,
						"duration" : 400
					})
					.addCode("/code/frontend/cypress/integration/examples/aliasing.spec.hbs", "frontend/cypress/integration/examples/aliasing.spec.js")
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/assertions.spec.hbs", "frontend/cypress/integration/examples/assertions.spec.js")
					.withTime({
						"start" : 600,
						"duration" : 200
					})
					.addCode("/code/frontend/cypress/integration/examples/connectors.spec.hbs", "frontend/cypress/integration/examples/connectors.spec.js")
					.withTime({
						"start" : 800,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/cookies.spec.hbs", "frontend/cypress/integration/examples/cookies.spec.js")
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/cypress_api.spec.hbs", "frontend/cypress/integration/examples/cypress_api.spec.js")
					.withTime({
						"start" : 1000,
						"duration" : 300
					})
					.addCode("/code/frontend/cypress/integration/examples/files.spec.hbs", "frontend/cypress/integration/examples/files.spec.js")
					.withTime({
						"start" : 1300,
						"duration" : 200
					})
					.addCode("/code/frontend/cypress/integration/examples/local_storage.spec.hbs", "frontend/cypress/integration/examples/local_storage.spec.js")
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/location.spec.hbs", "frontend/cypress/integration/examples/location.spec.js")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/misc.spec.hbs", "frontend/cypress/integration/examples/misc.spec.js")
					.withTime({
						"start" : 1700,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/navigation.spec.hbs", "frontend/cypress/integration/examples/navigation.spec.js")
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/network_requests.spec.hbs", "frontend/cypress/integration/examples/network_requests.spec.js")
					.withTime({
						"start" : 1900,
						"duration" : 300
					})
					.addCode("/code/frontend/cypress/integration/examples/querying.spec.hbs", "frontend/cypress/integration/examples/querying.spec.js")
					.withTime({
						"start" : 2200,
						"duration" : 200
					})
					.addCode("/code/frontend/cypress/integration/examples/spies_stubs_clocks.spec.hbs", "frontend/cypress/integration/examples/spies_stubs_clocks.spec.js")
					.withTime({
						"start" : 2400,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/traversal.spec.hbs", "frontend/cypress/integration/examples/traversal.spec.js")
					.withTime({
						"start" : 2500,
						"duration" : 200
					})
					.addCode("/code/frontend/cypress/integration/examples/utilities.spec.hbs", "frontend/cypress/integration/examples/utilities.spec.js")
					.withTime({
						"start" : 2700,
						"duration" : 200
					})
					.addCode("/code/frontend/cypress/integration/examples/viewport.spec.hbs", "frontend/cypress/integration/examples/viewport.spec.js")
					.withTime({
						"start" : 2900,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/waiting.spec.hbs", "frontend/cypress/integration/examples/waiting.spec.js")
					.withTime({
						"start" : 3000,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/examples/window.spec.hbs", "frontend/cypress/integration/examples/window.spec.js")
					.withTime({
						"start" : 3100,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/support/commands.hbs", "frontend/cypress/support/commands.js")
					.withTime({
						"start" : 3200,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/support/index.hbs", "frontend/cypress/support/index.js")
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/tsconfig.hbs", "frontend/cypress/tsconfig.json")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/plugins/cy-ts-preprocessor.hbs", "frontend/cypress/plugins/cy-ts-preprocessor.js")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/plugins/index.hbs", "frontend/cypress/plugins/index.js")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/pages/board-page.hbs", "frontend/cypress/integration/pages/board-page.feature")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/cypress/integration/pages/board-page/board-page.spec.hbs", "frontend/cypress/integration/pages/board-page/board-page.spec.ts")
					.withTime({
						"start" : 0,
						"duration" : 400
					})
					.addCode("/code/frontend/src/index.hbs", "frontend/src/index.tsx")
						.withPartial("partial_1", "step-26/code/frontend/src/index_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-26/code/frontend/src/index_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/pages/board-page/board-page.component.hbs", "frontend/src/pages/board-page/board-page.component.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/frontend/pages/board")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
