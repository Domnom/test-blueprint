const path = require('path');

module.exports = step("trailing-commits")
					.addCode("trailing-commits/code/Monster.schema.hbs", "Monster.schema.ts")
						.withPartial("partial_1", "trailing-commits/code/Monster.schema_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
