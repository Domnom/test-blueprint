const path = require('path');

module.exports = step("step-21")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card-list/card-list.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/board/board.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 300
					})
					.addCode("/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
						.withPartial("partial_1", "step-21/code/frontend/src/components/card-list/card-list.test_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
						.withPartial("partial_1", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_7.hbs", 600, 100)
						.withPartial("partial_8", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_8.hbs", 700, 100)
					.withTime({
						"start" : 0,
						"duration" : 300
					})
					.addCode("/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
						.withPartial("partial_1", "step-21/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-21/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-21/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-21/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-21/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-21/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-21/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
						.withPartial("partial_8", "step-21/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
						.withPartial("partial_9", "step-21/code/frontend/src/components/board/board.component_partials/partial_9.hbs", 800, 100)
						.withPartial("partial_10", "step-21/code/frontend/src/components/board/board.component_partials/partial_10.hbs", 900, 100)
						.withPartial("partial_11", "step-21/code/frontend/src/components/board/board.component_partials/partial_11.hbs", 1000, 100)
						.withPartial("partial_12", "step-21/code/frontend/src/components/board/board.component_partials/partial_12.hbs", 1100, 100)
						.withPartial("partial_13", "step-21/code/frontend/src/components/board/board.component_partials/partial_13.hbs", 1200, 100)
						.withPartial("partial_14", "step-21/code/frontend/src/components/board/board.component_partials/partial_14.hbs", 1300, 100)
						.withPartial("partial_15", "step-21/code/frontend/src/components/board/board.component_partials/partial_15.hbs", 1400, 100)
						.withPartial("partial_16", "step-21/code/frontend/src/components/board/board.component_partials/partial_16.hbs", 1500, 100)
						.withPartial("partial_17", "step-21/code/frontend/src/components/board/board.component_partials/partial_17.hbs", 1600, 100)
						.withPartial("partial_18", "step-21/code/frontend/src/components/board/board.component_partials/partial_18.hbs", 1700, 100)
						.withPartial("partial_19", "step-21/code/frontend/src/components/board/board.component_partials/partial_19.hbs", 1800, 100)
						.withPartial("partial_20", "step-21/code/frontend/src/components/board/board.component_partials/partial_20.hbs", 1900, 100)
						.withPartial("partial_21", "step-21/code/frontend/src/components/board/board.component_partials/partial_21.hbs", 2000, 100)
						.withPartial("partial_22", "step-21/code/frontend/src/components/board/board.component_partials/partial_22.hbs", 2100, 100)
						.withPartial("partial_23", "step-21/code/frontend/src/components/board/board.component_partials/partial_23.hbs", 2200, 100)
						.withPartial("partial_24", "step-21/code/frontend/src/components/board/board.component_partials/partial_24.hbs", 2300, 100)
						.withPartial("partial_25", "step-21/code/frontend/src/components/board/board.component_partials/partial_25.hbs", 2400, 100)
						.withPartial("partial_26", "step-21/code/frontend/src/components/board/board.component_partials/partial_26.hbs", 2500, 100)
						.withPartial("partial_27", "step-21/code/frontend/src/components/board/board.component_partials/partial_27.hbs", 2600, 100)
						.withPartial("partial_28", "step-21/code/frontend/src/components/board/board.component_partials/partial_28.hbs", 2700, 100)
						.withPartial("partial_29", "step-21/code/frontend/src/components/board/board.component_partials/partial_29.hbs", 2800, 100)
						.withPartial("partial_30", "step-21/code/frontend/src/components/board/board.component_partials/partial_30.hbs", 2900, 100)
						.withPartial("partial_31", "step-21/code/frontend/src/components/board/board.component_partials/partial_31.hbs", 3000, 100)
					.withTime({
						"start" : 0,
						"duration" : 800
					})
					.addCli()
						.withCommand("git checkout -b feature/frontend/board")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
