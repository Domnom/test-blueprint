const path = require("path");

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStep("step-1")
				.addDescriptionFromMdFile(path.join(__dirname, "step-1/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 100,
					"duration" : 400
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-1/description/readme.md"))
				.withTime({
					"start" : 700,
					"duration" : 400
				})
				.addCode("step-1/code/.gitignore.hbs", ".gitignore")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-1/code/package-lock.hbs", "package-lock.json")
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addCode("step-1/code/package.hbs", "package.json")
				.withTime({
					"start" : 600,
					"duration" : 100
				})
				.addCode("step-1/code/setup/cd.hbs", "setup/cd.sh")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-1/code/setup/commitzen.hbs", "setup/commitzen.sh")
				.withTime({
					"start" : 1200,
					"duration" : 100
				})
				.addCode("step-1/code/setup/storybook.hbs", "setup/storybook.sh")
				.withTime({
					"start" : 1300,
					"duration" : 200
				})
				.addCode("step-1/code/setup/text.hbs", "setup/text.txt")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-1/code/yarn.hbs", "yarn.lock")
				.withTime({
					"start" : 1600,
					"duration" : 2400
				})
			.addStep("step-2")
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/01_setup/01_setup_01_webpack.mdx"))
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/01_setup/01_setup_02_typescript.mdx"))
				.withTime({
					"start" : 600,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/01_setup/01_setup_04_storybook.mdx"))
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/01_setup/01_setup_lerna.mdx"))
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/ProjectPlan.mdx"))
				.withTime({
					"start" : 1000,
					"duration" : 400
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 2500,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 100,
					"duration" : 400
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/frontend/readme.md"))
				.withTime({
					"start" : 1200,
					"duration" : 400
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/frontend/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/readme.md"))
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/server/README.md"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-2/code/.storybook/addons.hbs", ".storybook/addons.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/.storybook/config.hbs", ".storybook/config.js")
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addCode("step-2/code/.storybook/webpack.config.hbs", ".storybook/webpack.config.js")
				.withTime({
					"start" : 200,
					"duration" : 100
				})
				.addCode("step-2/code/.webpack/loaders/example-loader.hbs", ".webpack/loaders/example-loader.js")
				.withTime({
					"start" : 300,
					"duration" : 100
				})
				.addCode("step-2/code/.webpack/plugins/FileListPlugin.hbs", ".webpack/plugins/FileListPlugin.js")
				.withTime({
					"start" : 400,
					"duration" : 100
				})
				.addCode("step-2/code/package.hbs", "package.json")
					.withPartial("partial_1", "step-2/code/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-2/code/package_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-2/code/package_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-2/code/package_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-2/code/package_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-2/code/setup/_template_.hbs", "setup/_template_.sh")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-2/code/setup/gitignore.hbs", "setup/gitignore.sh")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-2/code/setup/storybook.hbs", "setup/storybook.sh")
					.withPartial("partial_1", "step-2/code/setup/storybook_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-2/code/setup/storybook_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 1700,
					"duration" : 200
				})
				.addCode("step-2/code/setup/typescript.hbs", "setup/typescript.sh")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-2/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
				.withTime({
					"start" : 2000,
					"duration" : 100
				})
				.addCode("step-2/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
				.withTime({
					"start" : 2100,
					"duration" : 100
				})
				.addCode("step-2/code/setup/webpack.hbs", "setup/webpack.sh")
				.withTime({
					"start" : 2200,
					"duration" : 100
				})
				.addCode("step-2/code/src/components/card/card.component.hbs", "src/components/card/card.component.tsx")
				.withTime({
					"start" : 2300,
					"duration" : 100
				})
				.addCode("step-2/code/src/components/card/card.container.hbs", "src/components/card/card.container.tsx")
				.withTime({
					"start" : 2400,
					"duration" : 100
				})
				.addCode("step-2/code/src/components/card/card.stories.hbs", "src/components/card/card.stories.tsx")
				.withTime({
					"start" : 2600,
					"duration" : 300
				})
				.addCode("step-2/code/src/example-stories/example.actions.stories.hbs", "src/example-stories/example.actions.stories.tsx")
				.withTime({
					"start" : 2900,
					"duration" : 100
				})
				.addCode("step-2/code/src/example-stories/example.knobs.stories.hbs", "src/example-stories/example.knobs.stories.tsx")
				.withTime({
					"start" : 3000,
					"duration" : 300
				})
				.addCode("step-2/code/src/index.hbs", "src/index.css")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-2/code/src/index.hbs", "src/index.html")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-2/code/src/index.hbs", "src/index.tsx")
				.withTime({
					"start" : 3500,
					"duration" : 100
				})
				.addCode("step-2/code/tsconfig.hbs", "tsconfig.json")
				.withTime({
					"start" : 3600,
					"duration" : 200
				})
				.addCode("step-2/code/webpack.common.hbs", "webpack.common.js")
				.withTime({
					"start" : 3800,
					"duration" : 200
				})
				.addCode("step-2/code/webpack.dev.hbs", "webpack.dev.js")
				.withTime({
					"start" : 4000,
					"duration" : 100
				})
				.addCode("step-2/code/webpack.prod.hbs", "webpack.prod.js")
				.withTime({
					"start" : 4100,
					"duration" : 100
				})
				.addCode("step-2/code/yarn.hbs", "yarn.lock")
					.withPartial("partial_1", "step-2/code/yarn_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-2/code/yarn_partials/partial_2.hbs", 100, 400)
					.withPartial("partial_3", "step-2/code/yarn_partials/partial_3.hbs", 500, 1300)
					.withPartial("partial_4", "step-2/code/yarn_partials/partial_4.hbs", 1800, 1000)
					.withPartial("partial_5", "step-2/code/yarn_partials/partial_5.hbs", 2800, 600)
					.withPartial("partial_6", "step-2/code/yarn_partials/partial_6.hbs", 3400, 100)
					.withPartial("partial_7", "step-2/code/yarn_partials/partial_7.hbs", 3500, 100)
					.withPartial("partial_8", "step-2/code/yarn_partials/partial_8.hbs", 3600, 100)
					.withPartial("partial_9", "step-2/code/yarn_partials/partial_9.hbs", 3700, 100)
					.withPartial("partial_10", "step-2/code/yarn_partials/partial_10.hbs", 3800, 100)
					.withPartial("partial_11", "step-2/code/yarn_partials/partial_11.hbs", 3900, 100)
					.withPartial("partial_12", "step-2/code/yarn_partials/partial_12.hbs", 4000, 100)
					.withPartial("partial_13", "step-2/code/yarn_partials/partial_13.hbs", 4100, 600)
					.withPartial("partial_14", "step-2/code/yarn_partials/partial_14.hbs", 4700, 100)
					.withPartial("partial_15", "step-2/code/yarn_partials/partial_15.hbs", 4800, 100)
					.withPartial("partial_16", "step-2/code/yarn_partials/partial_16.hbs", 4900, 200)
					.withPartial("partial_17", "step-2/code/yarn_partials/partial_17.hbs", 5100, 100)
					.withPartial("partial_18", "step-2/code/yarn_partials/partial_18.hbs", 5200, 200)
					.withPartial("partial_19", "step-2/code/yarn_partials/partial_19.hbs", 5400, 100)
					.withPartial("partial_20", "step-2/code/yarn_partials/partial_20.hbs", 5500, 100)
					.withPartial("partial_21", "step-2/code/yarn_partials/partial_21.hbs", 5600, 100)
					.withPartial("partial_22", "step-2/code/yarn_partials/partial_22.hbs", 5700, 100)
					.withPartial("partial_23", "step-2/code/yarn_partials/partial_23.hbs", 5800, 100)
					.withPartial("partial_24", "step-2/code/yarn_partials/partial_24.hbs", 5900, 100)
					.withPartial("partial_25", "step-2/code/yarn_partials/partial_25.hbs", 6000, 100)
					.withPartial("partial_26", "step-2/code/yarn_partials/partial_26.hbs", 6100, 100)
					.withPartial("partial_27", "step-2/code/yarn_partials/partial_27.hbs", 6200, 100)
					.withPartial("partial_28", "step-2/code/yarn_partials/partial_28.hbs", 6300, 100)
					.withPartial("partial_29", "step-2/code/yarn_partials/partial_29.hbs", 6400, 100)
					.withPartial("partial_30", "step-2/code/yarn_partials/partial_30.hbs", 6500, 100)
					.withPartial("partial_31", "step-2/code/yarn_partials/partial_31.hbs", 6600, 100)
					.withPartial("partial_32", "step-2/code/yarn_partials/partial_32.hbs", 6700, 100)
					.withPartial("partial_33", "step-2/code/yarn_partials/partial_33.hbs", 6800, 100)
					.withPartial("partial_34", "step-2/code/yarn_partials/partial_34.hbs", 6900, 100)
					.withPartial("partial_35", "step-2/code/yarn_partials/partial_35.hbs", 7000, 200)
					.withPartial("partial_36", "step-2/code/yarn_partials/partial_36.hbs", 7200, 100)
					.withPartial("partial_37", "step-2/code/yarn_partials/partial_37.hbs", 7300, 100)
					.withPartial("partial_38", "step-2/code/yarn_partials/partial_38.hbs", 7400, 100)
					.withPartial("partial_39", "step-2/code/yarn_partials/partial_39.hbs", 7500, 100)
					.withPartial("partial_40", "step-2/code/yarn_partials/partial_40.hbs", 7600, 400)
					.withPartial("partial_41", "step-2/code/yarn_partials/partial_41.hbs", 8000, 100)
					.withPartial("partial_42", "step-2/code/yarn_partials/partial_42.hbs", 8100, 100)
					.withPartial("partial_43", "step-2/code/yarn_partials/partial_43.hbs", 8200, 100)
					.withPartial("partial_44", "step-2/code/yarn_partials/partial_44.hbs", 8300, 100)
					.withPartial("partial_45", "step-2/code/yarn_partials/partial_45.hbs", 8400, 100)
					.withPartial("partial_46", "step-2/code/yarn_partials/partial_46.hbs", 8500, 100)
					.withPartial("partial_47", "step-2/code/yarn_partials/partial_47.hbs", 8600, 100)
					.withPartial("partial_48", "step-2/code/yarn_partials/partial_48.hbs", 8700, 100)
					.withPartial("partial_49", "step-2/code/yarn_partials/partial_49.hbs", 8800, 100)
					.withPartial("partial_50", "step-2/code/yarn_partials/partial_50.hbs", 8900, 100)
					.withPartial("partial_51", "step-2/code/yarn_partials/partial_51.hbs", 9000, 100)
					.withPartial("partial_52", "step-2/code/yarn_partials/partial_52.hbs", 9100, 100)
					.withPartial("partial_53", "step-2/code/yarn_partials/partial_53.hbs", 9200, 100)
					.withPartial("partial_54", "step-2/code/yarn_partials/partial_54.hbs", 9300, 100)
					.withPartial("partial_55", "step-2/code/yarn_partials/partial_55.hbs", 9400, 100)
					.withPartial("partial_56", "step-2/code/yarn_partials/partial_56.hbs", 9500, 100)
					.withPartial("partial_57", "step-2/code/yarn_partials/partial_57.hbs", 9600, 100)
					.withPartial("partial_58", "step-2/code/yarn_partials/partial_58.hbs", 9700, 100)
					.withPartial("partial_59", "step-2/code/yarn_partials/partial_59.hbs", 9800, 100)
					.withPartial("partial_60", "step-2/code/yarn_partials/partial_60.hbs", 9900, 100)
					.withPartial("partial_61", "step-2/code/yarn_partials/partial_61.hbs", 10000, 100)
					.withPartial("partial_62", "step-2/code/yarn_partials/partial_62.hbs", 10100, 100)
					.withPartial("partial_63", "step-2/code/yarn_partials/partial_63.hbs", 10200, 100)
					.withPartial("partial_64", "step-2/code/yarn_partials/partial_64.hbs", 10300, 100)
					.withPartial("partial_65", "step-2/code/yarn_partials/partial_65.hbs", 10400, 100)
					.withPartial("partial_66", "step-2/code/yarn_partials/partial_66.hbs", 10500, 200)
					.withPartial("partial_67", "step-2/code/yarn_partials/partial_67.hbs", 10700, 100)
					.withPartial("partial_68", "step-2/code/yarn_partials/partial_68.hbs", 10800, 100)
					.withPartial("partial_69", "step-2/code/yarn_partials/partial_69.hbs", 10900, 100)
					.withPartial("partial_70", "step-2/code/yarn_partials/partial_70.hbs", 11000, 100)
					.withPartial("partial_71", "step-2/code/yarn_partials/partial_71.hbs", 11100, 100)
					.withPartial("partial_72", "step-2/code/yarn_partials/partial_72.hbs", 11200, 100)
					.withPartial("partial_73", "step-2/code/yarn_partials/partial_73.hbs", 11300, 100)
					.withPartial("partial_74", "step-2/code/yarn_partials/partial_74.hbs", 11400, 100)
					.withPartial("partial_75", "step-2/code/yarn_partials/partial_75.hbs", 11500, 100)
					.withPartial("partial_76", "step-2/code/yarn_partials/partial_76.hbs", 11600, 100)
					.withPartial("partial_77", "step-2/code/yarn_partials/partial_77.hbs", 11700, 100)
					.withPartial("partial_78", "step-2/code/yarn_partials/partial_78.hbs", 11800, 100)
					.withPartial("partial_79", "step-2/code/yarn_partials/partial_79.hbs", 11900, 100)
					.withPartial("partial_80", "step-2/code/yarn_partials/partial_80.hbs", 12000, 100)
					.withPartial("partial_81", "step-2/code/yarn_partials/partial_81.hbs", 12100, 100)
					.withPartial("partial_82", "step-2/code/yarn_partials/partial_82.hbs", 12200, 100)
					.withPartial("partial_83", "step-2/code/yarn_partials/partial_83.hbs", 12300, 100)
					.withPartial("partial_84", "step-2/code/yarn_partials/partial_84.hbs", 12400, 100)
					.withPartial("partial_85", "step-2/code/yarn_partials/partial_85.hbs", 12500, 100)
					.withPartial("partial_86", "step-2/code/yarn_partials/partial_86.hbs", 12600, 100)
					.withPartial("partial_87", "step-2/code/yarn_partials/partial_87.hbs", 12700, 100)
					.withPartial("partial_88", "step-2/code/yarn_partials/partial_88.hbs", 12800, 100)
					.withPartial("partial_89", "step-2/code/yarn_partials/partial_89.hbs", 12900, 100)
					.withPartial("partial_90", "step-2/code/yarn_partials/partial_90.hbs", 13000, 100)
					.withPartial("partial_91", "step-2/code/yarn_partials/partial_91.hbs", 13100, 100)
					.withPartial("partial_92", "step-2/code/yarn_partials/partial_92.hbs", 13200, 100)
					.withPartial("partial_93", "step-2/code/yarn_partials/partial_93.hbs", 13300, 100)
					.withPartial("partial_94", "step-2/code/yarn_partials/partial_94.hbs", 13400, 100)
					.withPartial("partial_95", "step-2/code/yarn_partials/partial_95.hbs", 13500, 100)
					.withPartial("partial_96", "step-2/code/yarn_partials/partial_96.hbs", 13600, 100)
					.withPartial("partial_97", "step-2/code/yarn_partials/partial_97.hbs", 13700, 100)
					.withPartial("partial_98", "step-2/code/yarn_partials/partial_98.hbs", 13800, 100)
					.withPartial("partial_99", "step-2/code/yarn_partials/partial_99.hbs", 13900, 100)
					.withPartial("partial_100", "step-2/code/yarn_partials/partial_100.hbs", 14000, 100)
					.withPartial("partial_101", "step-2/code/yarn_partials/partial_101.hbs", 14100, 100)
					.withPartial("partial_102", "step-2/code/yarn_partials/partial_102.hbs", 14200, 200)
					.withPartial("partial_103", "step-2/code/yarn_partials/partial_103.hbs", 14400, 100)
					.withPartial("partial_104", "step-2/code/yarn_partials/partial_104.hbs", 14500, 100)
					.withPartial("partial_105", "step-2/code/yarn_partials/partial_105.hbs", 14600, 100)
					.withPartial("partial_106", "step-2/code/yarn_partials/partial_106.hbs", 14700, 100)
					.withPartial("partial_107", "step-2/code/yarn_partials/partial_107.hbs", 14800, 100)
					.withPartial("partial_108", "step-2/code/yarn_partials/partial_108.hbs", 14900, 100)
					.withPartial("partial_109", "step-2/code/yarn_partials/partial_109.hbs", 15000, 100)
					.withPartial("partial_110", "step-2/code/yarn_partials/partial_110.hbs", 15100, 100)
					.withPartial("partial_111", "step-2/code/yarn_partials/partial_111.hbs", 15200, 100)
					.withPartial("partial_112", "step-2/code/yarn_partials/partial_112.hbs", 15300, 200)
					.withPartial("partial_113", "step-2/code/yarn_partials/partial_113.hbs", 15500, 100)
					.withPartial("partial_114", "step-2/code/yarn_partials/partial_114.hbs", 15600, 100)
					.withPartial("partial_115", "step-2/code/yarn_partials/partial_115.hbs", 15700, 100)
					.withPartial("partial_116", "step-2/code/yarn_partials/partial_116.hbs", 15800, 100)
					.withPartial("partial_117", "step-2/code/yarn_partials/partial_117.hbs", 15900, 100)
					.withPartial("partial_118", "step-2/code/yarn_partials/partial_118.hbs", 16000, 100)
					.withPartial("partial_119", "step-2/code/yarn_partials/partial_119.hbs", 16100, 100)
					.withPartial("partial_120", "step-2/code/yarn_partials/partial_120.hbs", 16200, 100)
					.withPartial("partial_121", "step-2/code/yarn_partials/partial_121.hbs", 16300, 100)
					.withPartial("partial_122", "step-2/code/yarn_partials/partial_122.hbs", 16400, 100)
					.withPartial("partial_123", "step-2/code/yarn_partials/partial_123.hbs", 16500, 100)
					.withPartial("partial_124", "step-2/code/yarn_partials/partial_124.hbs", 16600, 100)
					.withPartial("partial_125", "step-2/code/yarn_partials/partial_125.hbs", 16700, 100)
					.withPartial("partial_126", "step-2/code/yarn_partials/partial_126.hbs", 16800, 100)
					.withPartial("partial_127", "step-2/code/yarn_partials/partial_127.hbs", 16900, 100)
					.withPartial("partial_128", "step-2/code/yarn_partials/partial_128.hbs", 17000, 100)
					.withPartial("partial_129", "step-2/code/yarn_partials/partial_129.hbs", 17100, 100)
					.withPartial("partial_130", "step-2/code/yarn_partials/partial_130.hbs", 17200, 100)
					.withPartial("partial_131", "step-2/code/yarn_partials/partial_131.hbs", 17300, 100)
					.withPartial("partial_132", "step-2/code/yarn_partials/partial_132.hbs", 17400, 100)
					.withPartial("partial_133", "step-2/code/yarn_partials/partial_133.hbs", 17500, 400)
					.withPartial("partial_134", "step-2/code/yarn_partials/partial_134.hbs", 17900, 600)
					.withPartial("partial_135", "step-2/code/yarn_partials/partial_135.hbs", 18500, 100)
					.withPartial("partial_136", "step-2/code/yarn_partials/partial_136.hbs", 18600, 100)
					.withPartial("partial_137", "step-2/code/yarn_partials/partial_137.hbs", 18700, 100)
					.withPartial("partial_138", "step-2/code/yarn_partials/partial_138.hbs", 18800, 100)
					.withPartial("partial_139", "step-2/code/yarn_partials/partial_139.hbs", 18900, 100)
					.withPartial("partial_140", "step-2/code/yarn_partials/partial_140.hbs", 19000, 100)
					.withPartial("partial_141", "step-2/code/yarn_partials/partial_141.hbs", 19100, 100)
					.withPartial("partial_142", "step-2/code/yarn_partials/partial_142.hbs", 19200, 100)
					.withPartial("partial_143", "step-2/code/yarn_partials/partial_143.hbs", 19300, 100)
					.withPartial("partial_144", "step-2/code/yarn_partials/partial_144.hbs", 19400, 100)
					.withPartial("partial_145", "step-2/code/yarn_partials/partial_145.hbs", 19500, 100)
					.withPartial("partial_146", "step-2/code/yarn_partials/partial_146.hbs", 19600, 100)
					.withPartial("partial_147", "step-2/code/yarn_partials/partial_147.hbs", 19700, 100)
					.withPartial("partial_148", "step-2/code/yarn_partials/partial_148.hbs", 19800, 100)
					.withPartial("partial_149", "step-2/code/yarn_partials/partial_149.hbs", 19900, 100)
					.withPartial("partial_150", "step-2/code/yarn_partials/partial_150.hbs", 20000, 100)
					.withPartial("partial_151", "step-2/code/yarn_partials/partial_151.hbs", 20100, 100)
					.withPartial("partial_152", "step-2/code/yarn_partials/partial_152.hbs", 20200, 100)
					.withPartial("partial_153", "step-2/code/yarn_partials/partial_153.hbs", 20300, 100)
					.withPartial("partial_154", "step-2/code/yarn_partials/partial_154.hbs", 20400, 100)
					.withPartial("partial_155", "step-2/code/yarn_partials/partial_155.hbs", 20500, 100)
					.withPartial("partial_156", "step-2/code/yarn_partials/partial_156.hbs", 20600, 100)
					.withPartial("partial_157", "step-2/code/yarn_partials/partial_157.hbs", 20700, 100)
					.withPartial("partial_158", "step-2/code/yarn_partials/partial_158.hbs", 20800, 100)
					.withPartial("partial_159", "step-2/code/yarn_partials/partial_159.hbs", 20900, 100)
					.withPartial("partial_160", "step-2/code/yarn_partials/partial_160.hbs", 21000, 100)
					.withPartial("partial_161", "step-2/code/yarn_partials/partial_161.hbs", 21100, 100)
					.withPartial("partial_162", "step-2/code/yarn_partials/partial_162.hbs", 21200, 100)
					.withPartial("partial_163", "step-2/code/yarn_partials/partial_163.hbs", 21300, 100)
					.withPartial("partial_164", "step-2/code/yarn_partials/partial_164.hbs", 21400, 200)
					.withPartial("partial_165", "step-2/code/yarn_partials/partial_165.hbs", 21600, 100)
					.withPartial("partial_166", "step-2/code/yarn_partials/partial_166.hbs", 21700, 100)
					.withPartial("partial_167", "step-2/code/yarn_partials/partial_167.hbs", 21800, 100)
					.withPartial("partial_168", "step-2/code/yarn_partials/partial_168.hbs", 21900, 100)
					.withPartial("partial_169", "step-2/code/yarn_partials/partial_169.hbs", 22000, 100)
					.withPartial("partial_170", "step-2/code/yarn_partials/partial_170.hbs", 22100, 200)
					.withPartial("partial_171", "step-2/code/yarn_partials/partial_171.hbs", 22300, 100)
					.withPartial("partial_172", "step-2/code/yarn_partials/partial_172.hbs", 22400, 100)
					.withPartial("partial_173", "step-2/code/yarn_partials/partial_173.hbs", 22500, 100)
					.withPartial("partial_174", "step-2/code/yarn_partials/partial_174.hbs", 22600, 100)
					.withPartial("partial_175", "step-2/code/yarn_partials/partial_175.hbs", 22700, 100)
					.withPartial("partial_176", "step-2/code/yarn_partials/partial_176.hbs", 22800, 300)
					.withPartial("partial_177", "step-2/code/yarn_partials/partial_177.hbs", 23100, 100)
					.withPartial("partial_178", "step-2/code/yarn_partials/partial_178.hbs", 23200, 100)
					.withPartial("partial_179", "step-2/code/yarn_partials/partial_179.hbs", 23300, 200)
				.withTime({
					"start" : 4200,
					"duration" : 13900
				})
				.addCode("step-2/code/package.hbs", "package.json")
					.withPartial("partial_1", "step-2/code/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-2/code/package_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-2/code/package_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-2/code/package_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-2/code/package_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-2/code/.gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.storybook/config.hbs", "frontend/.storybook/config.js")
				.withTime({
					"start" : 600,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
				.withTime({
					"start" : 700,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.webpack/loaders/example-loader.hbs", "frontend/.webpack/loaders/example-loader.js")
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.webpack/plugins/FileListPlugin.hbs", "frontend/.webpack/plugins/FileListPlugin.js")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/package-lock.hbs", "frontend/package-lock.json")
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/package.hbs", "frontend/package.json")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/components/card/card.container.hbs", "frontend/src/components/card/card.container.tsx")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
				.withTime({
					"start" : 1900,
					"duration" : 300
				})
				.addCode("step-2/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
				.withTime({
					"start" : 2200,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
				.withTime({
					"start" : 2300,
					"duration" : 300
				})
				.addCode("step-2/code/frontend/src/index.hbs", "frontend/src/index.css")
				.withTime({
					"start" : 2600,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/index.hbs", "frontend/src/index.html")
				.withTime({
					"start" : 2700,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/index.hbs", "frontend/src/index.tsx")
				.withTime({
					"start" : 2800,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
				.withTime({
					"start" : 2900,
					"duration" : 200
				})
				.addCode("step-2/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
				.withTime({
					"start" : 3100,
					"duration" : 200
				})
				.addCode("step-2/code/frontend/webpack.dev.hbs", "frontend/webpack.dev.js")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/webpack.prod.hbs", "frontend/webpack.prod.js")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/yarn.hbs", "frontend/yarn.lock")
				.withTime({
					"start" : 3500,
					"duration" : 13900
				})
				.addCode("step-2/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-2/code/.gitignore_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-2/code/.gitignore_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/backend/.gitignore.hbs", "backend/.gitignore")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/backend/.gitignore.hbs", "backend/.gitignore")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/backend/Dockerfile.hbs", "backend/Dockerfile.dev")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/nest-cli.hbs", "backend/server/nest-cli.json")
				.withTime({
					"start" : 200,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/nodemon-debug.hbs", "backend/server/nodemon-debug.json")
				.withTime({
					"start" : 300,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/nodemon.hbs", "backend/server/nodemon.json")
				.withTime({
					"start" : 400,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/package.hbs", "backend/server/package.json")
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/app.controller.spec.hbs", "backend/server/src/app.controller.spec.ts")
				.withTime({
					"start" : 600,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/app.controller.hbs", "backend/server/src/app.controller.ts")
				.withTime({
					"start" : 700,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/app.service.hbs", "backend/server/src/app.service.ts")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/Validation.exception.hbs", "backend/server/src/common/http/exceptions/Validation.exception.ts")
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/index.hbs", "backend/server/src/common/http/exceptions/index.ts")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/not-found.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-found.exception.spec.ts")
				.withTime({
					"start" : 1200,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/not-found.exception.hbs", "backend/server/src/common/http/exceptions/not-found.exception.ts")
				.withTime({
					"start" : 1300,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/not-unique.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.spec.ts")
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/not-unique.exception.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.ts")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/validation.exception.spec.hbs", "backend/server/src/common/http/exceptions/validation.exception.spec.ts")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/responses/index.hbs", "backend/server/src/common/http/responses/index.ts")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/responses/success.response.hbs", "backend/server/src/common/http/responses/success.response.ts")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/interceptors/error-handling.interceptor.hbs", "backend/server/src/common/interceptors/error-handling.interceptor.ts")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/recipes/swagger/swagger.util.hbs", "backend/server/src/common/recipes/swagger/swagger.util.ts")
				.withTime({
					"start" : 2000,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/utils/error.util.spec.hbs", "backend/server/src/common/utils/error.util.spec.ts")
				.withTime({
					"start" : 2100,
					"duration" : 400
				})
				.addCode("step-2/code/backend/server/src/common/utils/error.util.hbs", "backend/server/src/common/utils/error.util.ts")
				.withTime({
					"start" : 2500,
					"duration" : 200
				})
				.addCode("step-2/code/backend/server/src/common/utils/test-helper.util.hbs", "backend/server/src/common/utils/test-helper.util.ts")
				.withTime({
					"start" : 2700,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/main.hbs", "backend/server/src/main.ts")
				.withTime({
					"start" : 2800,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/test/app.e2e-spec.hbs", "backend/server/test/app.e2e-spec.ts")
				.withTime({
					"start" : 2900,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/test/jest-e2e.hbs", "backend/server/test/jest-e2e.json")
				.withTime({
					"start" : 3000,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/tsconfig.build.hbs", "backend/server/tsconfig.build.json")
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/tsconfig.hbs", "backend/server/tsconfig.json")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/tslint.hbs", "backend/server/tslint.json")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/yarn.hbs", "backend/server/yarn.lock")
				.withTime({
					"start" : 3400,
					"duration" : 7400
				})
				.addCli()
					.withCommand("git checkout -b feature/backend")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-3")
				.addCode("step-3/code/docker-compose.hbs", "docker-compose.yml")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-3/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
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
			.addStep("step-4")
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 100,
					"duration" : 800
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/board/Board.playbook.mdx"))
				.withTime({
					"start" : 3900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/cardlist/CardList.playbook.mdx"))
				.withTime({
					"start" : 5200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/draggablecard/DraggableCard.playbook.mdx"))
				.withTime({
					"start" : 6200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/backend/readme.md"))
				.withTime({
					"start" : 300,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/backend/server/README.md"))
				.withTime({
					"start" : 400,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 100,
					"duration" : 800
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/board/Board.playbook.mdx"))
				.withTime({
					"start" : 3900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/cardlist/CardList.playbook.mdx"))
				.withTime({
					"start" : 5200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/draggablecard/DraggableCard.playbook.mdx"))
				.withTime({
					"start" : 6200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/backend/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/common/helpers/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 900
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_03_lerna.mdx"))
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_05_docker.mdx"))
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_06_jest.mdx"))
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_07_cypress.mdx"))
				.withTime({
					"start" : 1200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_08_cicd.mdx"))
				.withTime({
					"start" : 1300,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/01_Card.mdx"))
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/02_CardList.mdx"))
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/03_Board.mdx"))
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/04_Routes_and_Pages.mdx"))
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/05_CRUD_Boards.mdx"))
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/06_CRUD_CardLists.mdx"))
				.withTime({
					"start" : 2000,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/07_CRUD_Cards.mdx"))
				.withTime({
					"start" : 2100,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/08_Auth_Pages.mdx"))
				.withTime({
					"start" : 2200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/09_Interactions_DnDCards.mdx"))
				.withTime({
					"start" : 2300,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/10_TrelloAPI.mdx"))
				.withTime({
					"start" : 2400,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/03_backend/01_NestJs_and_swagger.mdx"))
				.withTime({
					"start" : 2500,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/03_backend/02_TrelloAPI_Proxy.mdx"))
				.withTime({
					"start" : 2600,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/03_backend/03_CRUD_Boards.mdx"))
				.withTime({
					"start" : 2700,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/03_backend/04_CRUD_CardList.mdx"))
				.withTime({
					"start" : 2800,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/05_cicd/05_setup_01_cicd.mdx"))
				.withTime({
					"start" : 2900,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/05_cicd/05_setup_02_env.mdx"))
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/05_cicd/05_setup_03_aws.mdx"))
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/05_cicd/05_setup_04_circle.mdx"))
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 900
				})
				.addCode("step-4/code/common/helpers/lexicographic.util.spec.hbs", "common/helpers/lexicographic.util.spec.ts")
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-4/code/common/helpers/lexicographic.util.hbs", "common/helpers/lexicographic.util.ts")
				.withTime({
					"start" : 200,
					"duration" : 300
				})
				.addCode("step-4/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-4/code/.gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
					.withPartial("partial_1", "step-4/code/frontend/.storybook/addons_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
					.withPartial("partial_1", "step-4/code/frontend/.storybook/webpack.config_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/.storybook/webpack.config_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/.storybook/webpack.config_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/__sample.hbs", "frontend/__sample.sh")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-4/code/frontend/package_partials/partial_1.hbs", 0, 200)
					.withPartial("partial_2", "step-4/code/frontend/package_partials/partial_2.hbs", 200, 100)
				.withTime({
					"start" : 1200,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/@uikit/alerts/alert.stories.hbs", "frontend/src/@uikit/alerts/alert.stories.tsx")
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/buttons/button.stories.hbs", "frontend/src/@uikit/buttons/button.stories.tsx")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/forms/form.stories.hbs", "frontend/src/@uikit/forms/form.stories.tsx")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/layouts/layout.stories.hbs", "frontend/src/@uikit/layouts/layout.stories.tsx")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/modals/modal.stories.hbs", "frontend/src/@uikit/modals/modal.stories.tsx")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/textboxes/textboxes.stories.hbs", "frontend/src/@uikit/textboxes/textboxes.stories.tsx")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/css/app.hbs", "frontend/src/assets/css/app.css")
				.withTime({
					"start" : 2000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.jpg")
				.withTime({
					"start" : 2200,
					"duration" : 800
				})
				.addCode("step-4/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.png")
				.withTime({
					"start" : 3000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/assets/images/del.hbs", "frontend/src/assets/images/del.png")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/dots.hbs", "frontend/src/assets/images/dots.png")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/gal.hbs", "frontend/src/assets/images/gal.png")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/noavatar.hbs", "frontend/src/assets/images/noavatar.png")
				.withTime({
					"start" : 3500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.bdd.hbs", "frontend/src/components/board/Board.bdd.tsx")
				.withTime({
					"start" : 3600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.component.hbs", "frontend/src/components/board/Board.component.tsx")
				.withTime({
					"start" : 3700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.container.hbs", "frontend/src/components/board/Board.container.tsx")
				.withTime({
					"start" : 3800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.redux.hbs", "frontend/src/components/board/Board.redux.tsx")
				.withTime({
					"start" : 4000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.stories.hbs", "frontend/src/components/board/Board.stories.tsx")
				.withTime({
					"start" : 4100,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/board/Board.styles.hbs", "frontend/src/components/board/Board.styles.tsx")
				.withTime({
					"start" : 4300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.test.hbs", "frontend/src/components/board/Board.test.tsx")
				.withTime({
					"start" : 4400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/components/card/card.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/components/card/card.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/src/components/card/card.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/src/components/card/card.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/src/components/card/card.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/src/components/card/card.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/src/components/card/card.component_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 4500,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/components/card/card.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/components/card/card.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/src/components/card/card.stories_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/src/components/card/card.stories_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/src/components/card/card.stories_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/src/components/card/card.stories_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/src/components/card/card.stories_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/src/components/card/card.stories_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/src/components/card/card.stories_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-4/code/frontend/src/components/card/card.stories_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-4/code/frontend/src/components/card/card.stories_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-4/code/frontend/src/components/card/card.stories_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-4/code/frontend/src/components/card/card.stories_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-4/code/frontend/src/components/card/card.stories_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-4/code/frontend/src/components/card/card.stories_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-4/code/frontend/src/components/card/card.stories_partials/partial_16.hbs", 1500, 100)
				.withTime({
					"start" : 4700,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.bdd.hbs", "frontend/src/components/cardlist/CardList.bdd.tsx")
				.withTime({
					"start" : 4900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.component.hbs", "frontend/src/components/cardlist/CardList.component.tsx")
				.withTime({
					"start" : 5000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.container.hbs", "frontend/src/components/cardlist/CardList.container.tsx")
				.withTime({
					"start" : 5100,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.redux.hbs", "frontend/src/components/cardlist/CardList.redux.tsx")
				.withTime({
					"start" : 5300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.stories.hbs", "frontend/src/components/cardlist/CardList.stories.tsx")
				.withTime({
					"start" : 5400,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.styles.hbs", "frontend/src/components/cardlist/CardList.styles.tsx")
				.withTime({
					"start" : 5600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.test.hbs", "frontend/src/components/cardlist/CardList.test.tsx")
				.withTime({
					"start" : 5700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.bdd.hbs", "frontend/src/components/draggablecard/DraggableCard.bdd.tsx")
				.withTime({
					"start" : 5800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.component.hbs", "frontend/src/components/draggablecard/DraggableCard.component.tsx")
				.withTime({
					"start" : 5900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.container.hbs", "frontend/src/components/draggablecard/DraggableCard.container.tsx")
				.withTime({
					"start" : 6000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.redux.hbs", "frontend/src/components/draggablecard/DraggableCard.redux.tsx")
				.withTime({
					"start" : 6300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.stories.hbs", "frontend/src/components/draggablecard/DraggableCard.stories.tsx")
				.withTime({
					"start" : 6400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.styles.hbs", "frontend/src/components/draggablecard/DraggableCard.styles.tsx")
				.withTime({
					"start" : 6500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.test.hbs", "frontend/src/components/draggablecard/DraggableCard.test.tsx")
				.withTime({
					"start" : 6600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/config/index.hbs", "frontend/src/config/index.ts")
				.withTime({
					"start" : 6700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 6800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.knobs.stories_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 6900,
					"duration" : 300
				})
				.addCode("step-4/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-4/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 7200,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
					.withPartial("partial_1", "step-4/code/frontend/webpack.common_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/webpack.common_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/webpack.common_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/webpack.common_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/webpack.common_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/webpack.common_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/webpack.common_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/webpack.common_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/webpack.common_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-4/code/frontend/webpack.common_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-4/code/frontend/webpack.common_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-4/code/frontend/webpack.common_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-4/code/frontend/webpack.common_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-4/code/frontend/webpack.common_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-4/code/frontend/webpack.common_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-4/code/frontend/webpack.common_partials/partial_16.hbs", 1500, 100)
				.withTime({
					"start" : 7400,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/yarn.hbs", "frontend/yarn.lock")
					.withPartial("partial_1", "step-4/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/yarn_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/yarn_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/yarn_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/yarn_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/yarn_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/yarn_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/yarn_partials/partial_9.hbs", 800, 100)
				.withTime({
					"start" : 7600,
					"duration" : 14000
				})
				.addCode("step-4/code/setup/_template_.hbs", "setup/_template_.sh")
					.withPartial("partial_1", "step-4/code/setup/_template__partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/_template__partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/setup/_template__partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/setup/_template__partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/setup/_template__partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/setup/_template__partials/partial_6.hbs", 500, 100)
				.withTime({
					"start" : 21600,
					"duration" : 100
				})
				.addCode("step-4/code/setup/aws.hbs", "setup/aws.sh")
				.withTime({
					"start" : 21700,
					"duration" : 100
				})
				.addCode("step-4/code/setup/cicd.hbs", "setup/cicd.sh")
				.withTime({
					"start" : 21800,
					"duration" : 100
				})
				.addCode("step-4/code/setup/commitzen.hbs", "setup/commitzen.sh")
					.withPartial("partial_1", "step-4/code/setup/commitzen_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 21900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/cypress.hbs", "setup/cypress.sh")
				.withTime({
					"start" : 22000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/docker.hbs", "setup/docker.sh")
				.withTime({
					"start" : 22100,
					"duration" : 100
				})
				.addCode("step-4/code/setup/gitignore.hbs", "setup/gitignore.sh")
					.withPartial("partial_1", "step-4/code/setup/gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 22200,
					"duration" : 100
				})
				.addCode("step-4/code/setup/jest.hbs", "setup/jest.sh")
				.withTime({
					"start" : 22300,
					"duration" : 100
				})
				.addCode("step-4/code/setup/semantic-release.hbs", "setup/semantic-release.sh")
				.withTime({
					"start" : 22400,
					"duration" : 100
				})
				.addCode("step-4/code/setup/storybook.hbs", "setup/storybook.sh")
					.withPartial("partial_1", "step-4/code/setup/storybook_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/storybook_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 22500,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sxd/component.hbs", "setup/sxd/component.sh")
				.withTime({
					"start" : 22700,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sxd/components/component.bdd.tsx.hbs", "setup/sxd/components/component.bdd.tsx.template")
				.withTime({
					"start" : 22900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.container.tsx.hbs", "setup/sxd/components/component.container.tsx.template")
				.withTime({
					"start" : 23000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.playbook.mdx.hbs", "setup/sxd/components/component.playbook.mdx.template")
				.withTime({
					"start" : 23100,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.redux.tsx.hbs", "setup/sxd/components/component.redux.tsx.template")
				.withTime({
					"start" : 23200,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.stories.tsx.hbs", "setup/sxd/components/component.stories.tsx.template")
				.withTime({
					"start" : 23300,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.styles.tsx.hbs", "setup/sxd/components/component.styles.tsx.template")
				.withTime({
					"start" : 23400,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.test.tsx.hbs", "setup/sxd/components/component.test.tsx.template")
				.withTime({
					"start" : 23500,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.tsx.hbs", "setup/sxd/components/component.tsx.template")
				.withTime({
					"start" : 23600,
					"duration" : 100
				})
				.addCode("step-4/code/setup/typescript.hbs", "setup/typescript.sh")
					.withPartial("partial_1", "step-4/code/setup/typescript_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/typescript_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 23700,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack-loaders_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 23800,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack-plugins_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 23900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack.hbs", "setup/webpack.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/webpack_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 24000,
					"duration" : 100
				})
				.addCode("step-4/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-4/code/.gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/backend/.gitignore.hbs", "backend/.gitignore")
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addCode("step-4/code/backend/Dockerfile.hbs", "backend/Dockerfile.dev")
				.withTime({
					"start" : 200,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/nest-cli.hbs", "backend/server/nest-cli.json")
				.withTime({
					"start" : 600,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/nodemon-debug.hbs", "backend/server/nodemon-debug.json")
				.withTime({
					"start" : 700,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/nodemon.hbs", "backend/server/nodemon.json")
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/package.hbs", "backend/server/package.json")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/app.controller.spec.hbs", "backend/server/src/app.controller.spec.ts")
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/app.controller.hbs", "backend/server/src/app.controller.ts")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
				.withTime({
					"start" : 1200,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/app.service.hbs", "backend/server/src/app.service.ts")
				.withTime({
					"start" : 1300,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/Validation.exception.hbs", "backend/server/src/common/http/exceptions/Validation.exception.ts")
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/index.hbs", "backend/server/src/common/http/exceptions/index.ts")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/not-found.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-found.exception.spec.ts")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/not-found.exception.hbs", "backend/server/src/common/http/exceptions/not-found.exception.ts")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/not-unique.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.spec.ts")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/not-unique.exception.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.ts")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/validation.exception.spec.hbs", "backend/server/src/common/http/exceptions/validation.exception.spec.ts")
				.withTime({
					"start" : 2000,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/responses/index.hbs", "backend/server/src/common/http/responses/index.ts")
				.withTime({
					"start" : 2100,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/responses/success.response.hbs", "backend/server/src/common/http/responses/success.response.ts")
				.withTime({
					"start" : 2200,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/interceptors/error-handling.interceptor.hbs", "backend/server/src/common/interceptors/error-handling.interceptor.ts")
				.withTime({
					"start" : 2300,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/recipes/swagger/swagger.util.hbs", "backend/server/src/common/recipes/swagger/swagger.util.ts")
				.withTime({
					"start" : 2400,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/utils/error.util.spec.hbs", "backend/server/src/common/utils/error.util.spec.ts")
				.withTime({
					"start" : 2500,
					"duration" : 400
				})
				.addCode("step-4/code/backend/server/src/common/utils/error.util.hbs", "backend/server/src/common/utils/error.util.ts")
				.withTime({
					"start" : 2900,
					"duration" : 200
				})
				.addCode("step-4/code/backend/server/src/common/utils/test-helper.util.hbs", "backend/server/src/common/utils/test-helper.util.ts")
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/main.hbs", "backend/server/src/main.ts")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/test/app.e2e-spec.hbs", "backend/server/test/app.e2e-spec.ts")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/test/jest-e2e.hbs", "backend/server/test/jest-e2e.json")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/tsconfig.build.hbs", "backend/server/tsconfig.build.json")
				.withTime({
					"start" : 3500,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/tsconfig.hbs", "backend/server/tsconfig.json")
				.withTime({
					"start" : 3600,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/tslint.hbs", "backend/server/tslint.json")
				.withTime({
					"start" : 3700,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/yarn.hbs", "backend/server/yarn.lock")
				.withTime({
					"start" : 3800,
					"duration" : 7400
				})
				.addCode("step-4/code/docker-compose.hbs", "docker-compose.yml")
				.withTime({
					"start" : 11200,
					"duration" : 100
				})
				.addCode("step-4/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-4/code/.gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
					.withPartial("partial_1", "step-4/code/frontend/.storybook/addons_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
					.withPartial("partial_1", "step-4/code/frontend/.storybook/webpack.config_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/.storybook/webpack.config_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/.storybook/webpack.config_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/__sample.hbs", "frontend/__sample.sh")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-4/code/frontend/package_partials/partial_1.hbs", 0, 200)
					.withPartial("partial_2", "step-4/code/frontend/package_partials/partial_2.hbs", 200, 100)
				.withTime({
					"start" : 1200,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/@uikit/alerts/alert.stories.hbs", "frontend/src/@uikit/alerts/alert.stories.tsx")
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/buttons/button.stories.hbs", "frontend/src/@uikit/buttons/button.stories.tsx")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/forms/form.stories.hbs", "frontend/src/@uikit/forms/form.stories.tsx")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/layouts/layout.stories.hbs", "frontend/src/@uikit/layouts/layout.stories.tsx")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/modals/modal.stories.hbs", "frontend/src/@uikit/modals/modal.stories.tsx")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/textboxes/textboxes.stories.hbs", "frontend/src/@uikit/textboxes/textboxes.stories.tsx")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/css/app.hbs", "frontend/src/assets/css/app.css")
				.withTime({
					"start" : 2000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.jpg")
				.withTime({
					"start" : 2200,
					"duration" : 800
				})
				.addCode("step-4/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.png")
				.withTime({
					"start" : 3000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/assets/images/del.hbs", "frontend/src/assets/images/del.png")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/dots.hbs", "frontend/src/assets/images/dots.png")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/gal.hbs", "frontend/src/assets/images/gal.png")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/noavatar.hbs", "frontend/src/assets/images/noavatar.png")
				.withTime({
					"start" : 3500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.bdd.hbs", "frontend/src/components/board/Board.bdd.tsx")
				.withTime({
					"start" : 3600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.component.hbs", "frontend/src/components/board/Board.component.tsx")
				.withTime({
					"start" : 3700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.container.hbs", "frontend/src/components/board/Board.container.tsx")
				.withTime({
					"start" : 3800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.redux.hbs", "frontend/src/components/board/Board.redux.tsx")
				.withTime({
					"start" : 4000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.stories.hbs", "frontend/src/components/board/Board.stories.tsx")
				.withTime({
					"start" : 4100,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/board/Board.styles.hbs", "frontend/src/components/board/Board.styles.tsx")
				.withTime({
					"start" : 4300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.test.hbs", "frontend/src/components/board/Board.test.tsx")
				.withTime({
					"start" : 4400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/components/card/card.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/components/card/card.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/src/components/card/card.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/src/components/card/card.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/src/components/card/card.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/src/components/card/card.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/src/components/card/card.component_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 4500,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/components/card/card.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/components/card/card.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/src/components/card/card.stories_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/src/components/card/card.stories_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/src/components/card/card.stories_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/src/components/card/card.stories_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/src/components/card/card.stories_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/src/components/card/card.stories_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/src/components/card/card.stories_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-4/code/frontend/src/components/card/card.stories_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-4/code/frontend/src/components/card/card.stories_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-4/code/frontend/src/components/card/card.stories_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-4/code/frontend/src/components/card/card.stories_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-4/code/frontend/src/components/card/card.stories_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-4/code/frontend/src/components/card/card.stories_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-4/code/frontend/src/components/card/card.stories_partials/partial_16.hbs", 1500, 100)
				.withTime({
					"start" : 4700,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.bdd.hbs", "frontend/src/components/cardlist/CardList.bdd.tsx")
				.withTime({
					"start" : 4900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.component.hbs", "frontend/src/components/cardlist/CardList.component.tsx")
				.withTime({
					"start" : 5000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.container.hbs", "frontend/src/components/cardlist/CardList.container.tsx")
				.withTime({
					"start" : 5100,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.redux.hbs", "frontend/src/components/cardlist/CardList.redux.tsx")
				.withTime({
					"start" : 5300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.stories.hbs", "frontend/src/components/cardlist/CardList.stories.tsx")
				.withTime({
					"start" : 5400,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.styles.hbs", "frontend/src/components/cardlist/CardList.styles.tsx")
				.withTime({
					"start" : 5600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.test.hbs", "frontend/src/components/cardlist/CardList.test.tsx")
				.withTime({
					"start" : 5700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.bdd.hbs", "frontend/src/components/draggablecard/DraggableCard.bdd.tsx")
				.withTime({
					"start" : 5800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.component.hbs", "frontend/src/components/draggablecard/DraggableCard.component.tsx")
				.withTime({
					"start" : 5900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.container.hbs", "frontend/src/components/draggablecard/DraggableCard.container.tsx")
				.withTime({
					"start" : 6000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.redux.hbs", "frontend/src/components/draggablecard/DraggableCard.redux.tsx")
				.withTime({
					"start" : 6300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.stories.hbs", "frontend/src/components/draggablecard/DraggableCard.stories.tsx")
				.withTime({
					"start" : 6400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.styles.hbs", "frontend/src/components/draggablecard/DraggableCard.styles.tsx")
				.withTime({
					"start" : 6500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.test.hbs", "frontend/src/components/draggablecard/DraggableCard.test.tsx")
				.withTime({
					"start" : 6600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/config/index.hbs", "frontend/src/config/index.ts")
				.withTime({
					"start" : 6700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 6800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.knobs.stories_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 6900,
					"duration" : 300
				})
				.addCode("step-4/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-4/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 7200,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
					.withPartial("partial_1", "step-4/code/frontend/webpack.common_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/webpack.common_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/webpack.common_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/webpack.common_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/webpack.common_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/webpack.common_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/webpack.common_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/webpack.common_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/webpack.common_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-4/code/frontend/webpack.common_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-4/code/frontend/webpack.common_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-4/code/frontend/webpack.common_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-4/code/frontend/webpack.common_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-4/code/frontend/webpack.common_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-4/code/frontend/webpack.common_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-4/code/frontend/webpack.common_partials/partial_16.hbs", 1500, 100)
				.withTime({
					"start" : 7400,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/yarn.hbs", "frontend/yarn.lock")
					.withPartial("partial_1", "step-4/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/yarn_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/yarn_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/yarn_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/yarn_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/yarn_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/yarn_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/yarn_partials/partial_9.hbs", 800, 100)
				.withTime({
					"start" : 7600,
					"duration" : 14000
				})
				.addCode("step-4/code/setup/_template_.hbs", "setup/_template_.sh")
					.withPartial("partial_1", "step-4/code/setup/_template__partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/_template__partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/setup/_template__partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/setup/_template__partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/setup/_template__partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/setup/_template__partials/partial_6.hbs", 500, 100)
				.withTime({
					"start" : 21600,
					"duration" : 100
				})
				.addCode("step-4/code/setup/aws.hbs", "setup/aws.sh")
				.withTime({
					"start" : 21700,
					"duration" : 100
				})
				.addCode("step-4/code/setup/cicd.hbs", "setup/cicd.sh")
				.withTime({
					"start" : 21800,
					"duration" : 100
				})
				.addCode("step-4/code/setup/commitzen.hbs", "setup/commitzen.sh")
					.withPartial("partial_1", "step-4/code/setup/commitzen_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 21900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/cypress.hbs", "setup/cypress.sh")
				.withTime({
					"start" : 22000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/docker.hbs", "setup/docker.sh")
				.withTime({
					"start" : 22100,
					"duration" : 100
				})
				.addCode("step-4/code/setup/gitignore.hbs", "setup/gitignore.sh")
					.withPartial("partial_1", "step-4/code/setup/gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 22200,
					"duration" : 100
				})
				.addCode("step-4/code/setup/jest.hbs", "setup/jest.sh")
				.withTime({
					"start" : 22300,
					"duration" : 100
				})
				.addCode("step-4/code/setup/semantic-release.hbs", "setup/semantic-release.sh")
				.withTime({
					"start" : 22400,
					"duration" : 100
				})
				.addCode("step-4/code/setup/storybook.hbs", "setup/storybook.sh")
					.withPartial("partial_1", "step-4/code/setup/storybook_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/storybook_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 22500,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sxd/component.hbs", "setup/sxd/component.sh")
				.withTime({
					"start" : 22700,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sxd/components/component.bdd.tsx.hbs", "setup/sxd/components/component.bdd.tsx.template")
				.withTime({
					"start" : 22900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.container.tsx.hbs", "setup/sxd/components/component.container.tsx.template")
				.withTime({
					"start" : 23000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.playbook.mdx.hbs", "setup/sxd/components/component.playbook.mdx.template")
				.withTime({
					"start" : 23100,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.redux.tsx.hbs", "setup/sxd/components/component.redux.tsx.template")
				.withTime({
					"start" : 23200,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.stories.tsx.hbs", "setup/sxd/components/component.stories.tsx.template")
				.withTime({
					"start" : 23300,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.styles.tsx.hbs", "setup/sxd/components/component.styles.tsx.template")
				.withTime({
					"start" : 23400,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.test.tsx.hbs", "setup/sxd/components/component.test.tsx.template")
				.withTime({
					"start" : 23500,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.tsx.hbs", "setup/sxd/components/component.tsx.template")
				.withTime({
					"start" : 23600,
					"duration" : 100
				})
				.addCode("step-4/code/setup/typescript.hbs", "setup/typescript.sh")
					.withPartial("partial_1", "step-4/code/setup/typescript_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/typescript_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 23700,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack-loaders_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 23800,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack-plugins_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 23900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack.hbs", "setup/webpack.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/webpack_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 24000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/docker.hbs", "setup/docker.sh")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/setup/jest.hbs", "setup/jest.sh")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sdk/package.hbs", "setup/sdk/package.json")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sdk/playbook.hello.hbs", "setup/sdk/playbook.hello.json")
				.withTime({
					"start" : 1000,
					"duration" : 1300
				})
				.addCode("step-4/code/setup/sdk/playbook.hbs", "setup/sdk/playbook.json")
				.withTime({
					"start" : 2300,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sdk/playbook.sdk.hbs", "setup/sdk/playbook.sdk.js")
				.withTime({
					"start" : 2500,
					"duration" : 400
				})
				.addCode("step-4/code/setup/sdk/screenscrape-mozilla-js-v2.hbs", "setup/sdk/screenscrape-mozilla-js-v2.js")
				.withTime({
					"start" : 2900,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sdk/screenscrape-mozilla-js.hbs", "setup/sdk/screenscrape-mozilla-js.js")
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sdk/yarn.hbs", "setup/sdk/yarn.lock")
				.withTime({
					"start" : 3200,
					"duration" : 500
				})
				.addCli()
					.withCommand("git checkout -b feature/plan")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-5")
				.addCode("step-5/code/setup/jest.hbs", "setup/jest.sh")
					.withPartial("partial_1", "step-5/code/setup/jest_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/setup/jest-and-docker")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-6")
				.addDescriptionFromMdFile(path.join(__dirname, "step-6/description/docs/01_setup/01_setup_06_jest.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-6/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-6/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-6/code/frontend/package_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-6/code/frontend/package_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-6/code/frontend/package_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-6/code/frontend/package_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-6/code/frontend/jest.config.hbs", "frontend/jest.config.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-6/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-6/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-6/code/frontend/tsconfig_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-6/code/frontend/tsconfig_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-6/code/frontend/tsconfig_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-6/code/frontend/tsconfig_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-6/code/frontend/tsconfig_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-6/code/frontend/tsconfig_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-6/code/frontend/tsconfig_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-6/code/frontend/tsconfig_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-6/code/frontend/tsconfig_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-6/code/frontend/tsconfig_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-6/code/frontend/tsconfig_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-6/code/frontend/tsconfig_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-6/code/frontend/tsconfig_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-6/code/frontend/tsconfig_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-6/code/frontend/tsconfig_partials/partial_16.hbs", 1500, 100)
					.withPartial("partial_17", "step-6/code/frontend/tsconfig_partials/partial_17.hbs", 1600, 100)
					.withPartial("partial_18", "step-6/code/frontend/tsconfig_partials/partial_18.hbs", 1700, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/test-setup")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-7")
				.addCode("step-7/code/frontend/yarn.hbs", "frontend/yarn.lock")
					.withPartial("partial_1", "step-7/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-7/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-7/code/frontend/yarn_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-7/code/frontend/yarn_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-7/code/frontend/yarn_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-7/code/frontend/yarn_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-7/code/frontend/yarn_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-7/code/frontend/yarn_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-7/code/frontend/yarn_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-7/code/frontend/yarn_partials/partial_10.hbs", 900, 200)
					.withPartial("partial_11", "step-7/code/frontend/yarn_partials/partial_11.hbs", 1100, 100)
					.withPartial("partial_12", "step-7/code/frontend/yarn_partials/partial_12.hbs", 1200, 100)
					.withPartial("partial_13", "step-7/code/frontend/yarn_partials/partial_13.hbs", 1300, 100)
					.withPartial("partial_14", "step-7/code/frontend/yarn_partials/partial_14.hbs", 1400, 100)
					.withPartial("partial_15", "step-7/code/frontend/yarn_partials/partial_15.hbs", 1500, 100)
					.withPartial("partial_16", "step-7/code/frontend/yarn_partials/partial_16.hbs", 1600, 100)
					.withPartial("partial_17", "step-7/code/frontend/yarn_partials/partial_17.hbs", 1700, 100)
					.withPartial("partial_18", "step-7/code/frontend/yarn_partials/partial_18.hbs", 1800, 100)
					.withPartial("partial_19", "step-7/code/frontend/yarn_partials/partial_19.hbs", 1900, 100)
					.withPartial("partial_20", "step-7/code/frontend/yarn_partials/partial_20.hbs", 2000, 100)
					.withPartial("partial_21", "step-7/code/frontend/yarn_partials/partial_21.hbs", 2100, 100)
					.withPartial("partial_22", "step-7/code/frontend/yarn_partials/partial_22.hbs", 2200, 100)
					.withPartial("partial_23", "step-7/code/frontend/yarn_partials/partial_23.hbs", 2300, 100)
					.withPartial("partial_24", "step-7/code/frontend/yarn_partials/partial_24.hbs", 2400, 100)
					.withPartial("partial_25", "step-7/code/frontend/yarn_partials/partial_25.hbs", 2500, 100)
					.withPartial("partial_26", "step-7/code/frontend/yarn_partials/partial_26.hbs", 2600, 100)
					.withPartial("partial_27", "step-7/code/frontend/yarn_partials/partial_27.hbs", 2700, 100)
					.withPartial("partial_28", "step-7/code/frontend/yarn_partials/partial_28.hbs", 2800, 100)
					.withPartial("partial_29", "step-7/code/frontend/yarn_partials/partial_29.hbs", 2900, 100)
					.withPartial("partial_30", "step-7/code/frontend/yarn_partials/partial_30.hbs", 3000, 100)
					.withPartial("partial_31", "step-7/code/frontend/yarn_partials/partial_31.hbs", 3100, 100)
					.withPartial("partial_32", "step-7/code/frontend/yarn_partials/partial_32.hbs", 3200, 100)
					.withPartial("partial_33", "step-7/code/frontend/yarn_partials/partial_33.hbs", 3300, 100)
					.withPartial("partial_34", "step-7/code/frontend/yarn_partials/partial_34.hbs", 3400, 100)
					.withPartial("partial_35", "step-7/code/frontend/yarn_partials/partial_35.hbs", 3500, 100)
					.withPartial("partial_36", "step-7/code/frontend/yarn_partials/partial_36.hbs", 3600, 100)
					.withPartial("partial_37", "step-7/code/frontend/yarn_partials/partial_37.hbs", 3700, 100)
					.withPartial("partial_38", "step-7/code/frontend/yarn_partials/partial_38.hbs", 3800, 100)
					.withPartial("partial_39", "step-7/code/frontend/yarn_partials/partial_39.hbs", 3900, 100)
					.withPartial("partial_40", "step-7/code/frontend/yarn_partials/partial_40.hbs", 4000, 100)
					.withPartial("partial_41", "step-7/code/frontend/yarn_partials/partial_41.hbs", 4100, 100)
					.withPartial("partial_42", "step-7/code/frontend/yarn_partials/partial_42.hbs", 4200, 100)
					.withPartial("partial_43", "step-7/code/frontend/yarn_partials/partial_43.hbs", 4300, 100)
					.withPartial("partial_44", "step-7/code/frontend/yarn_partials/partial_44.hbs", 4400, 100)
					.withPartial("partial_45", "step-7/code/frontend/yarn_partials/partial_45.hbs", 4500, 100)
					.withPartial("partial_46", "step-7/code/frontend/yarn_partials/partial_46.hbs", 4600, 100)
					.withPartial("partial_47", "step-7/code/frontend/yarn_partials/partial_47.hbs", 4700, 100)
					.withPartial("partial_48", "step-7/code/frontend/yarn_partials/partial_48.hbs", 4800, 100)
					.withPartial("partial_49", "step-7/code/frontend/yarn_partials/partial_49.hbs", 4900, 100)
					.withPartial("partial_50", "step-7/code/frontend/yarn_partials/partial_50.hbs", 5000, 100)
					.withPartial("partial_51", "step-7/code/frontend/yarn_partials/partial_51.hbs", 5100, 100)
					.withPartial("partial_52", "step-7/code/frontend/yarn_partials/partial_52.hbs", 5200, 100)
					.withPartial("partial_53", "step-7/code/frontend/yarn_partials/partial_53.hbs", 5300, 100)
					.withPartial("partial_54", "step-7/code/frontend/yarn_partials/partial_54.hbs", 5400, 100)
					.withPartial("partial_55", "step-7/code/frontend/yarn_partials/partial_55.hbs", 5500, 100)
					.withPartial("partial_56", "step-7/code/frontend/yarn_partials/partial_56.hbs", 5600, 100)
					.withPartial("partial_57", "step-7/code/frontend/yarn_partials/partial_57.hbs", 5700, 100)
					.withPartial("partial_58", "step-7/code/frontend/yarn_partials/partial_58.hbs", 5800, 100)
					.withPartial("partial_59", "step-7/code/frontend/yarn_partials/partial_59.hbs", 5900, 100)
					.withPartial("partial_60", "step-7/code/frontend/yarn_partials/partial_60.hbs", 6000, 100)
					.withPartial("partial_61", "step-7/code/frontend/yarn_partials/partial_61.hbs", 6100, 100)
					.withPartial("partial_62", "step-7/code/frontend/yarn_partials/partial_62.hbs", 6200, 100)
					.withPartial("partial_63", "step-7/code/frontend/yarn_partials/partial_63.hbs", 6300, 100)
					.withPartial("partial_64", "step-7/code/frontend/yarn_partials/partial_64.hbs", 6400, 100)
					.withPartial("partial_65", "step-7/code/frontend/yarn_partials/partial_65.hbs", 6500, 100)
					.withPartial("partial_66", "step-7/code/frontend/yarn_partials/partial_66.hbs", 6600, 100)
					.withPartial("partial_67", "step-7/code/frontend/yarn_partials/partial_67.hbs", 6700, 100)
					.withPartial("partial_68", "step-7/code/frontend/yarn_partials/partial_68.hbs", 6800, 100)
					.withPartial("partial_69", "step-7/code/frontend/yarn_partials/partial_69.hbs", 6900, 100)
					.withPartial("partial_70", "step-7/code/frontend/yarn_partials/partial_70.hbs", 7000, 100)
					.withPartial("partial_71", "step-7/code/frontend/yarn_partials/partial_71.hbs", 7100, 100)
					.withPartial("partial_72", "step-7/code/frontend/yarn_partials/partial_72.hbs", 7200, 100)
					.withPartial("partial_73", "step-7/code/frontend/yarn_partials/partial_73.hbs", 7300, 100)
					.withPartial("partial_74", "step-7/code/frontend/yarn_partials/partial_74.hbs", 7400, 100)
					.withPartial("partial_75", "step-7/code/frontend/yarn_partials/partial_75.hbs", 7500, 100)
					.withPartial("partial_76", "step-7/code/frontend/yarn_partials/partial_76.hbs", 7600, 100)
					.withPartial("partial_77", "step-7/code/frontend/yarn_partials/partial_77.hbs", 7700, 100)
					.withPartial("partial_78", "step-7/code/frontend/yarn_partials/partial_78.hbs", 7800, 100)
					.withPartial("partial_79", "step-7/code/frontend/yarn_partials/partial_79.hbs", 7900, 100)
					.withPartial("partial_80", "step-7/code/frontend/yarn_partials/partial_80.hbs", 8000, 100)
					.withPartial("partial_81", "step-7/code/frontend/yarn_partials/partial_81.hbs", 8100, 100)
					.withPartial("partial_82", "step-7/code/frontend/yarn_partials/partial_82.hbs", 8200, 100)
					.withPartial("partial_83", "step-7/code/frontend/yarn_partials/partial_83.hbs", 8300, 100)
					.withPartial("partial_84", "step-7/code/frontend/yarn_partials/partial_84.hbs", 8400, 100)
					.withPartial("partial_85", "step-7/code/frontend/yarn_partials/partial_85.hbs", 8500, 100)
					.withPartial("partial_86", "step-7/code/frontend/yarn_partials/partial_86.hbs", 8600, 100)
					.withPartial("partial_87", "step-7/code/frontend/yarn_partials/partial_87.hbs", 8700, 100)
					.withPartial("partial_88", "step-7/code/frontend/yarn_partials/partial_88.hbs", 8800, 100)
					.withPartial("partial_89", "step-7/code/frontend/yarn_partials/partial_89.hbs", 8900, 100)
					.withPartial("partial_90", "step-7/code/frontend/yarn_partials/partial_90.hbs", 9000, 100)
					.withPartial("partial_91", "step-7/code/frontend/yarn_partials/partial_91.hbs", 9100, 100)
					.withPartial("partial_92", "step-7/code/frontend/yarn_partials/partial_92.hbs", 9200, 100)
					.withPartial("partial_93", "step-7/code/frontend/yarn_partials/partial_93.hbs", 9300, 100)
					.withPartial("partial_94", "step-7/code/frontend/yarn_partials/partial_94.hbs", 9400, 100)
					.withPartial("partial_95", "step-7/code/frontend/yarn_partials/partial_95.hbs", 9500, 100)
					.withPartial("partial_96", "step-7/code/frontend/yarn_partials/partial_96.hbs", 9600, 100)
					.withPartial("partial_97", "step-7/code/frontend/yarn_partials/partial_97.hbs", 9700, 100)
					.withPartial("partial_98", "step-7/code/frontend/yarn_partials/partial_98.hbs", 9800, 100)
					.withPartial("partial_99", "step-7/code/frontend/yarn_partials/partial_99.hbs", 9900, 100)
					.withPartial("partial_100", "step-7/code/frontend/yarn_partials/partial_100.hbs", 10000, 100)
					.withPartial("partial_101", "step-7/code/frontend/yarn_partials/partial_101.hbs", 10100, 100)
					.withPartial("partial_102", "step-7/code/frontend/yarn_partials/partial_102.hbs", 10200, 100)
					.withPartial("partial_103", "step-7/code/frontend/yarn_partials/partial_103.hbs", 10300, 100)
					.withPartial("partial_104", "step-7/code/frontend/yarn_partials/partial_104.hbs", 10400, 100)
					.withPartial("partial_105", "step-7/code/frontend/yarn_partials/partial_105.hbs", 10500, 100)
					.withPartial("partial_106", "step-7/code/frontend/yarn_partials/partial_106.hbs", 10600, 100)
					.withPartial("partial_107", "step-7/code/frontend/yarn_partials/partial_107.hbs", 10700, 100)
					.withPartial("partial_108", "step-7/code/frontend/yarn_partials/partial_108.hbs", 10800, 100)
					.withPartial("partial_109", "step-7/code/frontend/yarn_partials/partial_109.hbs", 10900, 100)
					.withPartial("partial_110", "step-7/code/frontend/yarn_partials/partial_110.hbs", 11000, 100)
					.withPartial("partial_111", "step-7/code/frontend/yarn_partials/partial_111.hbs", 11100, 100)
					.withPartial("partial_112", "step-7/code/frontend/yarn_partials/partial_112.hbs", 11200, 100)
					.withPartial("partial_113", "step-7/code/frontend/yarn_partials/partial_113.hbs", 11300, 100)
					.withPartial("partial_114", "step-7/code/frontend/yarn_partials/partial_114.hbs", 11400, 100)
					.withPartial("partial_115", "step-7/code/frontend/yarn_partials/partial_115.hbs", 11500, 100)
					.withPartial("partial_116", "step-7/code/frontend/yarn_partials/partial_116.hbs", 11600, 100)
					.withPartial("partial_117", "step-7/code/frontend/yarn_partials/partial_117.hbs", 11700, 100)
					.withPartial("partial_118", "step-7/code/frontend/yarn_partials/partial_118.hbs", 11800, 100)
					.withPartial("partial_119", "step-7/code/frontend/yarn_partials/partial_119.hbs", 11900, 100)
					.withPartial("partial_120", "step-7/code/frontend/yarn_partials/partial_120.hbs", 12000, 100)
					.withPartial("partial_121", "step-7/code/frontend/yarn_partials/partial_121.hbs", 12100, 100)
					.withPartial("partial_122", "step-7/code/frontend/yarn_partials/partial_122.hbs", 12200, 100)
					.withPartial("partial_123", "step-7/code/frontend/yarn_partials/partial_123.hbs", 12300, 100)
					.withPartial("partial_124", "step-7/code/frontend/yarn_partials/partial_124.hbs", 12400, 100)
					.withPartial("partial_125", "step-7/code/frontend/yarn_partials/partial_125.hbs", 12500, 100)
					.withPartial("partial_126", "step-7/code/frontend/yarn_partials/partial_126.hbs", 12600, 600)
					.withPartial("partial_127", "step-7/code/frontend/yarn_partials/partial_127.hbs", 13200, 100)
					.withPartial("partial_128", "step-7/code/frontend/yarn_partials/partial_128.hbs", 13300, 100)
					.withPartial("partial_129", "step-7/code/frontend/yarn_partials/partial_129.hbs", 13400, 100)
					.withPartial("partial_130", "step-7/code/frontend/yarn_partials/partial_130.hbs", 13500, 100)
					.withPartial("partial_131", "step-7/code/frontend/yarn_partials/partial_131.hbs", 13600, 100)
					.withPartial("partial_132", "step-7/code/frontend/yarn_partials/partial_132.hbs", 13700, 100)
					.withPartial("partial_133", "step-7/code/frontend/yarn_partials/partial_133.hbs", 13800, 100)
					.withPartial("partial_134", "step-7/code/frontend/yarn_partials/partial_134.hbs", 13900, 100)
					.withPartial("partial_135", "step-7/code/frontend/yarn_partials/partial_135.hbs", 14000, 100)
					.withPartial("partial_136", "step-7/code/frontend/yarn_partials/partial_136.hbs", 14100, 100)
					.withPartial("partial_137", "step-7/code/frontend/yarn_partials/partial_137.hbs", 14200, 100)
					.withPartial("partial_138", "step-7/code/frontend/yarn_partials/partial_138.hbs", 14300, 100)
					.withPartial("partial_139", "step-7/code/frontend/yarn_partials/partial_139.hbs", 14400, 100)
					.withPartial("partial_140", "step-7/code/frontend/yarn_partials/partial_140.hbs", 14500, 100)
					.withPartial("partial_141", "step-7/code/frontend/yarn_partials/partial_141.hbs", 14600, 100)
					.withPartial("partial_142", "step-7/code/frontend/yarn_partials/partial_142.hbs", 14700, 100)
					.withPartial("partial_143", "step-7/code/frontend/yarn_partials/partial_143.hbs", 14800, 100)
					.withPartial("partial_144", "step-7/code/frontend/yarn_partials/partial_144.hbs", 14900, 100)
					.withPartial("partial_145", "step-7/code/frontend/yarn_partials/partial_145.hbs", 15000, 100)
					.withPartial("partial_146", "step-7/code/frontend/yarn_partials/partial_146.hbs", 15100, 100)
					.withPartial("partial_147", "step-7/code/frontend/yarn_partials/partial_147.hbs", 15200, 100)
					.withPartial("partial_148", "step-7/code/frontend/yarn_partials/partial_148.hbs", 15300, 100)
					.withPartial("partial_149", "step-7/code/frontend/yarn_partials/partial_149.hbs", 15400, 100)
					.withPartial("partial_150", "step-7/code/frontend/yarn_partials/partial_150.hbs", 15500, 100)
					.withPartial("partial_151", "step-7/code/frontend/yarn_partials/partial_151.hbs", 15600, 100)
					.withPartial("partial_152", "step-7/code/frontend/yarn_partials/partial_152.hbs", 15700, 100)
					.withPartial("partial_153", "step-7/code/frontend/yarn_partials/partial_153.hbs", 15800, 100)
					.withPartial("partial_154", "step-7/code/frontend/yarn_partials/partial_154.hbs", 15900, 100)
					.withPartial("partial_155", "step-7/code/frontend/yarn_partials/partial_155.hbs", 16000, 100)
					.withPartial("partial_156", "step-7/code/frontend/yarn_partials/partial_156.hbs", 16100, 100)
					.withPartial("partial_157", "step-7/code/frontend/yarn_partials/partial_157.hbs", 16200, 100)
					.withPartial("partial_158", "step-7/code/frontend/yarn_partials/partial_158.hbs", 16300, 100)
					.withPartial("partial_159", "step-7/code/frontend/yarn_partials/partial_159.hbs", 16400, 100)
					.withPartial("partial_160", "step-7/code/frontend/yarn_partials/partial_160.hbs", 16500, 100)
					.withPartial("partial_161", "step-7/code/frontend/yarn_partials/partial_161.hbs", 16600, 100)
					.withPartial("partial_162", "step-7/code/frontend/yarn_partials/partial_162.hbs", 16700, 100)
					.withPartial("partial_163", "step-7/code/frontend/yarn_partials/partial_163.hbs", 16800, 100)
					.withPartial("partial_164", "step-7/code/frontend/yarn_partials/partial_164.hbs", 16900, 100)
					.withPartial("partial_165", "step-7/code/frontend/yarn_partials/partial_165.hbs", 17000, 100)
					.withPartial("partial_166", "step-7/code/frontend/yarn_partials/partial_166.hbs", 17100, 100)
					.withPartial("partial_167", "step-7/code/frontend/yarn_partials/partial_167.hbs", 17200, 100)
					.withPartial("partial_168", "step-7/code/frontend/yarn_partials/partial_168.hbs", 17300, 100)
					.withPartial("partial_169", "step-7/code/frontend/yarn_partials/partial_169.hbs", 17400, 100)
					.withPartial("partial_170", "step-7/code/frontend/yarn_partials/partial_170.hbs", 17500, 100)
					.withPartial("partial_171", "step-7/code/frontend/yarn_partials/partial_171.hbs", 17600, 100)
					.withPartial("partial_172", "step-7/code/frontend/yarn_partials/partial_172.hbs", 17700, 100)
					.withPartial("partial_173", "step-7/code/frontend/yarn_partials/partial_173.hbs", 17800, 100)
					.withPartial("partial_174", "step-7/code/frontend/yarn_partials/partial_174.hbs", 17900, 100)
					.withPartial("partial_175", "step-7/code/frontend/yarn_partials/partial_175.hbs", 18000, 100)
					.withPartial("partial_176", "step-7/code/frontend/yarn_partials/partial_176.hbs", 18100, 100)
					.withPartial("partial_177", "step-7/code/frontend/yarn_partials/partial_177.hbs", 18200, 100)
					.withPartial("partial_178", "step-7/code/frontend/yarn_partials/partial_178.hbs", 18300, 100)
					.withPartial("partial_179", "step-7/code/frontend/yarn_partials/partial_179.hbs", 18400, 100)
					.withPartial("partial_180", "step-7/code/frontend/yarn_partials/partial_180.hbs", 18500, 100)
					.withPartial("partial_181", "step-7/code/frontend/yarn_partials/partial_181.hbs", 18600, 100)
					.withPartial("partial_182", "step-7/code/frontend/yarn_partials/partial_182.hbs", 18700, 100)
					.withPartial("partial_183", "step-7/code/frontend/yarn_partials/partial_183.hbs", 18800, 100)
					.withPartial("partial_184", "step-7/code/frontend/yarn_partials/partial_184.hbs", 18900, 100)
					.withPartial("partial_185", "step-7/code/frontend/yarn_partials/partial_185.hbs", 19000, 100)
					.withPartial("partial_186", "step-7/code/frontend/yarn_partials/partial_186.hbs", 19100, 100)
					.withPartial("partial_187", "step-7/code/frontend/yarn_partials/partial_187.hbs", 19200, 100)
					.withPartial("partial_188", "step-7/code/frontend/yarn_partials/partial_188.hbs", 19300, 100)
					.withPartial("partial_189", "step-7/code/frontend/yarn_partials/partial_189.hbs", 19400, 100)
					.withPartial("partial_190", "step-7/code/frontend/yarn_partials/partial_190.hbs", 19500, 100)
					.withPartial("partial_191", "step-7/code/frontend/yarn_partials/partial_191.hbs", 19600, 100)
					.withPartial("partial_192", "step-7/code/frontend/yarn_partials/partial_192.hbs", 19700, 100)
					.withPartial("partial_193", "step-7/code/frontend/yarn_partials/partial_193.hbs", 19800, 100)
					.withPartial("partial_194", "step-7/code/frontend/yarn_partials/partial_194.hbs", 19900, 100)
					.withPartial("partial_195", "step-7/code/frontend/yarn_partials/partial_195.hbs", 20000, 100)
					.withPartial("partial_196", "step-7/code/frontend/yarn_partials/partial_196.hbs", 20100, 100)
					.withPartial("partial_197", "step-7/code/frontend/yarn_partials/partial_197.hbs", 20200, 100)
					.withPartial("partial_198", "step-7/code/frontend/yarn_partials/partial_198.hbs", 20300, 100)
					.withPartial("partial_199", "step-7/code/frontend/yarn_partials/partial_199.hbs", 20400, 100)
					.withPartial("partial_200", "step-7/code/frontend/yarn_partials/partial_200.hbs", 20500, 100)
					.withPartial("partial_201", "step-7/code/frontend/yarn_partials/partial_201.hbs", 20600, 100)
					.withPartial("partial_202", "step-7/code/frontend/yarn_partials/partial_202.hbs", 20700, 100)
					.withPartial("partial_203", "step-7/code/frontend/yarn_partials/partial_203.hbs", 20800, 100)
					.withPartial("partial_204", "step-7/code/frontend/yarn_partials/partial_204.hbs", 20900, 100)
					.withPartial("partial_205", "step-7/code/frontend/yarn_partials/partial_205.hbs", 21000, 100)
					.withPartial("partial_206", "step-7/code/frontend/yarn_partials/partial_206.hbs", 21100, 100)
					.withPartial("partial_207", "step-7/code/frontend/yarn_partials/partial_207.hbs", 21200, 100)
					.withPartial("partial_208", "step-7/code/frontend/yarn_partials/partial_208.hbs", 21300, 100)
					.withPartial("partial_209", "step-7/code/frontend/yarn_partials/partial_209.hbs", 21400, 100)
					.withPartial("partial_210", "step-7/code/frontend/yarn_partials/partial_210.hbs", 21500, 100)
				.withTime({
					"start" : 0,
					"duration" : 16400
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/setup-done")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-8")
				.addDescriptionFromMdFile(path.join(__dirname, "step-8/description/frontend/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.bdd.hbs", "frontend/src/components/card/card.bdd.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.hbs", "frontend/src/components/card/card.feature")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.styles.hbs", "frontend/src/components/card/card.styles.css")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.template.hbs", "frontend/src/components/card/card.template.hbs")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.template.hbs", "frontend/src/components/card/card.template.json")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-8/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-8/code/frontend/package_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-8/code/frontend/yarn.hbs", "frontend/yarn.lock")
					.withPartial("partial_1", "step-8/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-8/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-8/code/frontend/yarn_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 200,
					"duration" : 16400
				})
				.addCode("step-8/code/frontend/jest.config.hbs", "frontend/jest.config.js")
					.withPartial("partial_1", "step-8/code/frontend/jest.config_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-8/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/test-setup")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-9")
				.addDescriptionFromMdFile(path.join(__dirname, "step-9/description/frontend/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-9/description/frontend/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.bdd.hbs", "frontend/src/components/card/card.bdd.tsx")
					.withPartial("partial_1", "step-9/code/frontend/src/components/card/card.bdd_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
					.withPartial("partial_1", "step-9/code/frontend/src/components/card/card.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-9/code/frontend/src/components/card/card.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-9/code/frontend/src/components/card/card.component_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
					.withPartial("partial_1", "step-9/code/frontend/src/components/card/card.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-9/code/frontend/src/components/card/card.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-9/code/frontend/src/components/card/card.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.template.hbs", "frontend/src/components/card/card.template.hbs")
					.withPartial("partial_1", "step-9/code/frontend/src/components/card/card.template_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-9/code/frontend/src/components/card/card.template_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-9/code/frontend/src/components/card/card.template_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.template-wrapper.hbs", "frontend/src/components/card/card.template-wrapper.hbs")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.test.hbs", "frontend/src/components/card/card.test.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-9/code/frontend/package_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-9/code/frontend/yarn.hbs", "frontend/yarn.lock")
					.withPartial("partial_1", "step-9/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 200,
					"duration" : 16400
				})
				.addCode("step-9/code/frontend/src/common/utils/test-helpers.hbs", "frontend/src/common/utils/test-helpers.ts")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/test-setup")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-10")
				.addCli()
					.withCommand("git checkout -b feature/frontend/card")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-11")
				.addDescriptionFromMdFile(path.join(__dirname, "step-11/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.hbs", "frontend/src/components/card-list/card-list.feature")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/card-list")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-12")
				.addCode("step-12/code/setup/create_playbook.hbs", "setup/create_playbook.sh")
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
			.addStep("step-13")
				.addCli()
					.withCommand("git checkout -b feature/plan")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-14")
				.addDescriptionFromMdFile(path.join(__dirname, "step-14/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
					.withPartial("partial_1", "step-14/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
					.withPartial("partial_1", "step-14/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-14/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-14/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
					.withPartial("partial_1", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
					.withPartial("partial_1", "step-14/code/frontend/src/components/card-list/card-list.styles_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/card-list")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-15")
				.addDescriptionFromMdFile(path.join(__dirname, "step-15/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-15/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-15/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-15/code/frontend/package_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-15/code/frontend/yarn.hbs", "frontend/yarn.lock")
					.withPartial("partial_1", "step-15/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-15/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-15/code/frontend/yarn_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-15/code/frontend/yarn_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-15/code/frontend/yarn_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-15/code/frontend/yarn_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-15/code/frontend/yarn_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-15/code/frontend/yarn_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-15/code/frontend/yarn_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-15/code/frontend/yarn_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-15/code/frontend/yarn_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-15/code/frontend/yarn_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-15/code/frontend/yarn_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-15/code/frontend/yarn_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-15/code/frontend/yarn_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-15/code/frontend/yarn_partials/partial_16.hbs", 1500, 100)
					.withPartial("partial_17", "step-15/code/frontend/yarn_partials/partial_17.hbs", 1600, 100)
					.withPartial("partial_18", "step-15/code/frontend/yarn_partials/partial_18.hbs", 1700, 100)
				.withTime({
					"start" : 200,
					"duration" : 16600
				})
				.addCode("step-15/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
					.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_8.hbs", 700, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-15/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
					.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-15/code/frontend/src/components/card-list/card-list.bdd_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-15/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
					.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-15/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
					.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.styles_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-15/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
					.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-15/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/card-list")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-16")
				.addDescriptionFromMdFile(path.join(__dirname, "step-16/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.hbs", "frontend/src/components/board/board.feature")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.styles.hbs", "frontend/src/components/board/board.styles.css")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/board")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-17")
				.addDescriptionFromMdFile(path.join(__dirname, "step-17/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-17/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
					.withPartial("partial_1", "step-17/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-17/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-17/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-17/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-17/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-17/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-17/code/frontend/src/components/board/board.stories_partials/partial_4.hbs", 300, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-17/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-17/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withPartial("partial_1", "step-17/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-17/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-17/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-17/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-17/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-17/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-17/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-17/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/board")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-18")
				.addDescriptionFromMdFile(path.join(__dirname, "step-18/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-18/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-18/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.bdd_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-18/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-18/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-18/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-18/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_6.hbs", 500, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-18/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-18/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.test_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.test_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-18/code/frontend/src/components/board/board.test_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-18/code/frontend/src/components/board/board.test_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-18/code/frontend/src/components/board/board.test_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-18/code/frontend/src/components/board/board.test_partials/partial_6.hbs", 500, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-18/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-18/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-18/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-18/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-18/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-18/code/frontend/src/components/board/board.styles.hbs", "frontend/src/components/board/board.styles.css")
					.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.styles_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/board")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-19")
				.addDescriptionFromMdFile(path.join(__dirname, "step-19/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-19/code/frontend/src/common/utils/lexicographic.util.hbs", "frontend/src/common/utils/lexicographic.util.ts")
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-19/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-19/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-19/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-19/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-19/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
					.withPartial("partial_1", "step-19/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-19/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-19/code/frontend/src/components/board/board.bdd_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-19/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
					.withPartial("partial_1", "step-19/code/frontend/src/components/board/board.test_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-19/code/frontend/src/components/board/board.test_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-19/code/frontend/src/components/board/board.test_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-19/code/frontend/src/components/board/board.test_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-19/code/frontend/src/components/board/board.test_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-19/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withPartial("partial_1", "step-19/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-19/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-19/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-19/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-19/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-19/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-19/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-19/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-19/code/frontend/src/components/board/board.component_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-19/code/frontend/src/components/board/board.component_partials/partial_10.hbs", 900, 200)
				.withTime({
					"start" : 0,
					"duration" : 400
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/board")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-20")
				.addDescriptionFromMdFile(path.join(__dirname, "step-20/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-20/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-20/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.bdd_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.bdd_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-20/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-20/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
					.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.styles_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_4.hbs", 300, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.test_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.test_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.test_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-20/code/frontend/src/components/board/board.test_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-20/code/frontend/src/components/board/board.test_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-20/code/frontend/src/components/board/board.test_partials/partial_6.hbs", 500, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-20/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-20/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-20/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-20/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-20/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-20/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-20/code/frontend/src/components/board/board.component_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-20/code/frontend/src/components/board/board.component_partials/partial_10.hbs", 900, 300)
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
			.addStep("step-21")
				.addDescriptionFromMdFile(path.join(__dirname, "step-21/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-21/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-21/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
					.withPartial("partial_1", "step-21/code/frontend/src/components/card-list/card-list.test_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-21/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
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
				.addCode("step-21/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
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
			.addStep("step-22")
				.addCode("step-22/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-22/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-22/code/frontend/package_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-22/code/frontend/yarn.hbs", "frontend/yarn.lock")
					.withPartial("partial_1", "step-22/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-22/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 16600
				})
				.addCode("step-22/code/frontend/src/services/react-beautiful-dnd/responders.service.test.hbs", "frontend/src/services/react-beautiful-dnd/responders.service.test.ts")
				.withTime({
					"start" : 0,
					"duration" : 1100
				})
				.addCode("step-22/code/frontend/src/services/react-beautiful-dnd/responders.service.hbs", "frontend/src/services/react-beautiful-dnd/responders.service.ts")
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
			.addStep("step-23")
				.addDescriptionFromMdFile(path.join(__dirname, "step-23/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-23/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withPartial("partial_1", "step-23/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-23/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-23/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-23/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-23/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-23/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-23/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-23/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-23/code/frontend/src/components/board/board.component_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-23/code/frontend/src/components/board/board.component_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-23/code/frontend/src/components/board/board.component_partials/partial_11.hbs", 1000, 100)
				.withTime({
					"start" : 0,
					"duration" : 400
				})
				.addCode("step-23/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-23/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-23/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-23/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/board")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-24")
				.addDescriptionFromMdFile(path.join(__dirname, "step-24/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-24/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
					.withPartial("partial_1", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-24/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
					.withPartial("partial_1", "step-24/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-24/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-24/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/card-list")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-25")
				.addCode("step-25/code/setup/jest.hbs", "setup/jest.sh")
					.withPartial("partial_1", "step-25/code/setup/jest_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCli()
					.withCommand("git checkout -b feature/setup/jest-and-docker")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-26")
				.addDescriptionFromMdFile(path.join(__dirname, "step-26/description/frontend/src/pages/board-page/board-page.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-26/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-26/code/frontend/package_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-26/code/frontend/package_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-26/code/frontend/package_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-26/code/frontend/package_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/yarn.hbs", "frontend/yarn.lock")
					.withPartial("partial_1", "step-26/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-26/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-26/code/frontend/yarn_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-26/code/frontend/yarn_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-26/code/frontend/yarn_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-26/code/frontend/yarn_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-26/code/frontend/yarn_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-26/code/frontend/yarn_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-26/code/frontend/yarn_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-26/code/frontend/yarn_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-26/code/frontend/yarn_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-26/code/frontend/yarn_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-26/code/frontend/yarn_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-26/code/frontend/yarn_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-26/code/frontend/yarn_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-26/code/frontend/yarn_partials/partial_16.hbs", 1500, 100)
					.withPartial("partial_17", "step-26/code/frontend/yarn_partials/partial_17.hbs", 1600, 100)
					.withPartial("partial_18", "step-26/code/frontend/yarn_partials/partial_18.hbs", 1700, 100)
					.withPartial("partial_19", "step-26/code/frontend/yarn_partials/partial_19.hbs", 1800, 100)
					.withPartial("partial_20", "step-26/code/frontend/yarn_partials/partial_20.hbs", 1900, 100)
					.withPartial("partial_21", "step-26/code/frontend/yarn_partials/partial_21.hbs", 2000, 100)
					.withPartial("partial_22", "step-26/code/frontend/yarn_partials/partial_22.hbs", 2100, 100)
					.withPartial("partial_23", "step-26/code/frontend/yarn_partials/partial_23.hbs", 2200, 100)
					.withPartial("partial_24", "step-26/code/frontend/yarn_partials/partial_24.hbs", 2300, 100)
					.withPartial("partial_25", "step-26/code/frontend/yarn_partials/partial_25.hbs", 2400, 100)
					.withPartial("partial_26", "step-26/code/frontend/yarn_partials/partial_26.hbs", 2500, 100)
					.withPartial("partial_27", "step-26/code/frontend/yarn_partials/partial_27.hbs", 2600, 100)
					.withPartial("partial_28", "step-26/code/frontend/yarn_partials/partial_28.hbs", 2700, 100)
					.withPartial("partial_29", "step-26/code/frontend/yarn_partials/partial_29.hbs", 2800, 100)
					.withPartial("partial_30", "step-26/code/frontend/yarn_partials/partial_30.hbs", 2900, 100)
					.withPartial("partial_31", "step-26/code/frontend/yarn_partials/partial_31.hbs", 3000, 100)
					.withPartial("partial_32", "step-26/code/frontend/yarn_partials/partial_32.hbs", 3100, 100)
					.withPartial("partial_33", "step-26/code/frontend/yarn_partials/partial_33.hbs", 3200, 100)
					.withPartial("partial_34", "step-26/code/frontend/yarn_partials/partial_34.hbs", 3300, 100)
					.withPartial("partial_35", "step-26/code/frontend/yarn_partials/partial_35.hbs", 3400, 100)
					.withPartial("partial_36", "step-26/code/frontend/yarn_partials/partial_36.hbs", 3500, 100)
					.withPartial("partial_37", "step-26/code/frontend/yarn_partials/partial_37.hbs", 3600, 100)
					.withPartial("partial_38", "step-26/code/frontend/yarn_partials/partial_38.hbs", 3700, 100)
					.withPartial("partial_39", "step-26/code/frontend/yarn_partials/partial_39.hbs", 3800, 100)
					.withPartial("partial_40", "step-26/code/frontend/yarn_partials/partial_40.hbs", 3900, 100)
					.withPartial("partial_41", "step-26/code/frontend/yarn_partials/partial_41.hbs", 4000, 100)
					.withPartial("partial_42", "step-26/code/frontend/yarn_partials/partial_42.hbs", 4100, 100)
					.withPartial("partial_43", "step-26/code/frontend/yarn_partials/partial_43.hbs", 4200, 100)
					.withPartial("partial_44", "step-26/code/frontend/yarn_partials/partial_44.hbs", 4300, 100)
					.withPartial("partial_45", "step-26/code/frontend/yarn_partials/partial_45.hbs", 4400, 100)
					.withPartial("partial_46", "step-26/code/frontend/yarn_partials/partial_46.hbs", 4500, 100)
					.withPartial("partial_47", "step-26/code/frontend/yarn_partials/partial_47.hbs", 4600, 100)
					.withPartial("partial_48", "step-26/code/frontend/yarn_partials/partial_48.hbs", 4700, 100)
					.withPartial("partial_49", "step-26/code/frontend/yarn_partials/partial_49.hbs", 4800, 100)
					.withPartial("partial_50", "step-26/code/frontend/yarn_partials/partial_50.hbs", 4900, 100)
					.withPartial("partial_51", "step-26/code/frontend/yarn_partials/partial_51.hbs", 5000, 100)
					.withPartial("partial_52", "step-26/code/frontend/yarn_partials/partial_52.hbs", 5100, 100)
					.withPartial("partial_53", "step-26/code/frontend/yarn_partials/partial_53.hbs", 5200, 100)
					.withPartial("partial_54", "step-26/code/frontend/yarn_partials/partial_54.hbs", 5300, 100)
					.withPartial("partial_55", "step-26/code/frontend/yarn_partials/partial_55.hbs", 5400, 100)
					.withPartial("partial_56", "step-26/code/frontend/yarn_partials/partial_56.hbs", 5500, 100)
					.withPartial("partial_57", "step-26/code/frontend/yarn_partials/partial_57.hbs", 5600, 100)
					.withPartial("partial_58", "step-26/code/frontend/yarn_partials/partial_58.hbs", 5700, 100)
					.withPartial("partial_59", "step-26/code/frontend/yarn_partials/partial_59.hbs", 5800, 200)
					.withPartial("partial_60", "step-26/code/frontend/yarn_partials/partial_60.hbs", 6000, 100)
					.withPartial("partial_61", "step-26/code/frontend/yarn_partials/partial_61.hbs", 6100, 100)
					.withPartial("partial_62", "step-26/code/frontend/yarn_partials/partial_62.hbs", 6200, 100)
					.withPartial("partial_63", "step-26/code/frontend/yarn_partials/partial_63.hbs", 6300, 100)
					.withPartial("partial_64", "step-26/code/frontend/yarn_partials/partial_64.hbs", 6400, 100)
					.withPartial("partial_65", "step-26/code/frontend/yarn_partials/partial_65.hbs", 6500, 100)
					.withPartial("partial_66", "step-26/code/frontend/yarn_partials/partial_66.hbs", 6600, 100)
					.withPartial("partial_67", "step-26/code/frontend/yarn_partials/partial_67.hbs", 6700, 100)
					.withPartial("partial_68", "step-26/code/frontend/yarn_partials/partial_68.hbs", 6800, 100)
					.withPartial("partial_69", "step-26/code/frontend/yarn_partials/partial_69.hbs", 6900, 100)
					.withPartial("partial_70", "step-26/code/frontend/yarn_partials/partial_70.hbs", 7000, 100)
					.withPartial("partial_71", "step-26/code/frontend/yarn_partials/partial_71.hbs", 7100, 100)
					.withPartial("partial_72", "step-26/code/frontend/yarn_partials/partial_72.hbs", 7200, 100)
					.withPartial("partial_73", "step-26/code/frontend/yarn_partials/partial_73.hbs", 7300, 100)
					.withPartial("partial_74", "step-26/code/frontend/yarn_partials/partial_74.hbs", 7400, 100)
					.withPartial("partial_75", "step-26/code/frontend/yarn_partials/partial_75.hbs", 7500, 100)
					.withPartial("partial_76", "step-26/code/frontend/yarn_partials/partial_76.hbs", 7600, 100)
					.withPartial("partial_77", "step-26/code/frontend/yarn_partials/partial_77.hbs", 7700, 100)
					.withPartial("partial_78", "step-26/code/frontend/yarn_partials/partial_78.hbs", 7800, 100)
					.withPartial("partial_79", "step-26/code/frontend/yarn_partials/partial_79.hbs", 7900, 100)
					.withPartial("partial_80", "step-26/code/frontend/yarn_partials/partial_80.hbs", 8000, 100)
					.withPartial("partial_81", "step-26/code/frontend/yarn_partials/partial_81.hbs", 8100, 100)
					.withPartial("partial_82", "step-26/code/frontend/yarn_partials/partial_82.hbs", 8200, 100)
					.withPartial("partial_83", "step-26/code/frontend/yarn_partials/partial_83.hbs", 8300, 100)
					.withPartial("partial_84", "step-26/code/frontend/yarn_partials/partial_84.hbs", 8400, 100)
					.withPartial("partial_85", "step-26/code/frontend/yarn_partials/partial_85.hbs", 8500, 100)
					.withPartial("partial_86", "step-26/code/frontend/yarn_partials/partial_86.hbs", 8600, 100)
					.withPartial("partial_87", "step-26/code/frontend/yarn_partials/partial_87.hbs", 8700, 100)
					.withPartial("partial_88", "step-26/code/frontend/yarn_partials/partial_88.hbs", 8800, 100)
					.withPartial("partial_89", "step-26/code/frontend/yarn_partials/partial_89.hbs", 8900, 100)
					.withPartial("partial_90", "step-26/code/frontend/yarn_partials/partial_90.hbs", 9000, 100)
					.withPartial("partial_91", "step-26/code/frontend/yarn_partials/partial_91.hbs", 9100, 100)
					.withPartial("partial_92", "step-26/code/frontend/yarn_partials/partial_92.hbs", 9200, 100)
					.withPartial("partial_93", "step-26/code/frontend/yarn_partials/partial_93.hbs", 9300, 100)
					.withPartial("partial_94", "step-26/code/frontend/yarn_partials/partial_94.hbs", 9400, 100)
					.withPartial("partial_95", "step-26/code/frontend/yarn_partials/partial_95.hbs", 9500, 100)
					.withPartial("partial_96", "step-26/code/frontend/yarn_partials/partial_96.hbs", 9600, 100)
					.withPartial("partial_97", "step-26/code/frontend/yarn_partials/partial_97.hbs", 9700, 100)
					.withPartial("partial_98", "step-26/code/frontend/yarn_partials/partial_98.hbs", 9800, 100)
					.withPartial("partial_99", "step-26/code/frontend/yarn_partials/partial_99.hbs", 9900, 100)
					.withPartial("partial_100", "step-26/code/frontend/yarn_partials/partial_100.hbs", 10000, 100)
					.withPartial("partial_101", "step-26/code/frontend/yarn_partials/partial_101.hbs", 10100, 100)
					.withPartial("partial_102", "step-26/code/frontend/yarn_partials/partial_102.hbs", 10200, 100)
					.withPartial("partial_103", "step-26/code/frontend/yarn_partials/partial_103.hbs", 10300, 100)
					.withPartial("partial_104", "step-26/code/frontend/yarn_partials/partial_104.hbs", 10400, 100)
					.withPartial("partial_105", "step-26/code/frontend/yarn_partials/partial_105.hbs", 10500, 100)
					.withPartial("partial_106", "step-26/code/frontend/yarn_partials/partial_106.hbs", 10600, 100)
					.withPartial("partial_107", "step-26/code/frontend/yarn_partials/partial_107.hbs", 10700, 100)
					.withPartial("partial_108", "step-26/code/frontend/yarn_partials/partial_108.hbs", 10800, 100)
					.withPartial("partial_109", "step-26/code/frontend/yarn_partials/partial_109.hbs", 10900, 100)
					.withPartial("partial_110", "step-26/code/frontend/yarn_partials/partial_110.hbs", 11000, 100)
					.withPartial("partial_111", "step-26/code/frontend/yarn_partials/partial_111.hbs", 11100, 100)
					.withPartial("partial_112", "step-26/code/frontend/yarn_partials/partial_112.hbs", 11200, 100)
					.withPartial("partial_113", "step-26/code/frontend/yarn_partials/partial_113.hbs", 11300, 100)
					.withPartial("partial_114", "step-26/code/frontend/yarn_partials/partial_114.hbs", 11400, 100)
					.withPartial("partial_115", "step-26/code/frontend/yarn_partials/partial_115.hbs", 11500, 100)
					.withPartial("partial_116", "step-26/code/frontend/yarn_partials/partial_116.hbs", 11600, 100)
					.withPartial("partial_117", "step-26/code/frontend/yarn_partials/partial_117.hbs", 11700, 100)
					.withPartial("partial_118", "step-26/code/frontend/yarn_partials/partial_118.hbs", 11800, 100)
					.withPartial("partial_119", "step-26/code/frontend/yarn_partials/partial_119.hbs", 11900, 100)
					.withPartial("partial_120", "step-26/code/frontend/yarn_partials/partial_120.hbs", 12000, 100)
					.withPartial("partial_121", "step-26/code/frontend/yarn_partials/partial_121.hbs", 12100, 100)
					.withPartial("partial_122", "step-26/code/frontend/yarn_partials/partial_122.hbs", 12200, 100)
					.withPartial("partial_123", "step-26/code/frontend/yarn_partials/partial_123.hbs", 12300, 100)
					.withPartial("partial_124", "step-26/code/frontend/yarn_partials/partial_124.hbs", 12400, 100)
					.withPartial("partial_125", "step-26/code/frontend/yarn_partials/partial_125.hbs", 12500, 100)
					.withPartial("partial_126", "step-26/code/frontend/yarn_partials/partial_126.hbs", 12600, 100)
					.withPartial("partial_127", "step-26/code/frontend/yarn_partials/partial_127.hbs", 12700, 100)
					.withPartial("partial_128", "step-26/code/frontend/yarn_partials/partial_128.hbs", 12800, 100)
					.withPartial("partial_129", "step-26/code/frontend/yarn_partials/partial_129.hbs", 12900, 100)
					.withPartial("partial_130", "step-26/code/frontend/yarn_partials/partial_130.hbs", 13000, 100)
					.withPartial("partial_131", "step-26/code/frontend/yarn_partials/partial_131.hbs", 13100, 100)
					.withPartial("partial_132", "step-26/code/frontend/yarn_partials/partial_132.hbs", 13200, 100)
					.withPartial("partial_133", "step-26/code/frontend/yarn_partials/partial_133.hbs", 13300, 100)
					.withPartial("partial_134", "step-26/code/frontend/yarn_partials/partial_134.hbs", 13400, 100)
					.withPartial("partial_135", "step-26/code/frontend/yarn_partials/partial_135.hbs", 13500, 100)
					.withPartial("partial_136", "step-26/code/frontend/yarn_partials/partial_136.hbs", 13600, 100)
					.withPartial("partial_137", "step-26/code/frontend/yarn_partials/partial_137.hbs", 13700, 100)
					.withPartial("partial_138", "step-26/code/frontend/yarn_partials/partial_138.hbs", 13800, 100)
					.withPartial("partial_139", "step-26/code/frontend/yarn_partials/partial_139.hbs", 13900, 100)
					.withPartial("partial_140", "step-26/code/frontend/yarn_partials/partial_140.hbs", 14000, 100)
					.withPartial("partial_141", "step-26/code/frontend/yarn_partials/partial_141.hbs", 14100, 100)
					.withPartial("partial_142", "step-26/code/frontend/yarn_partials/partial_142.hbs", 14200, 100)
					.withPartial("partial_143", "step-26/code/frontend/yarn_partials/partial_143.hbs", 14300, 100)
					.withPartial("partial_144", "step-26/code/frontend/yarn_partials/partial_144.hbs", 14400, 100)
					.withPartial("partial_145", "step-26/code/frontend/yarn_partials/partial_145.hbs", 14500, 100)
					.withPartial("partial_146", "step-26/code/frontend/yarn_partials/partial_146.hbs", 14600, 100)
					.withPartial("partial_147", "step-26/code/frontend/yarn_partials/partial_147.hbs", 14700, 100)
					.withPartial("partial_148", "step-26/code/frontend/yarn_partials/partial_148.hbs", 14800, 100)
					.withPartial("partial_149", "step-26/code/frontend/yarn_partials/partial_149.hbs", 14900, 100)
					.withPartial("partial_150", "step-26/code/frontend/yarn_partials/partial_150.hbs", 15000, 100)
					.withPartial("partial_151", "step-26/code/frontend/yarn_partials/partial_151.hbs", 15100, 100)
					.withPartial("partial_152", "step-26/code/frontend/yarn_partials/partial_152.hbs", 15200, 100)
					.withPartial("partial_153", "step-26/code/frontend/yarn_partials/partial_153.hbs", 15300, 100)
					.withPartial("partial_154", "step-26/code/frontend/yarn_partials/partial_154.hbs", 15400, 100)
					.withPartial("partial_155", "step-26/code/frontend/yarn_partials/partial_155.hbs", 15500, 100)
					.withPartial("partial_156", "step-26/code/frontend/yarn_partials/partial_156.hbs", 15600, 100)
					.withPartial("partial_157", "step-26/code/frontend/yarn_partials/partial_157.hbs", 15700, 100)
					.withPartial("partial_158", "step-26/code/frontend/yarn_partials/partial_158.hbs", 15800, 100)
					.withPartial("partial_159", "step-26/code/frontend/yarn_partials/partial_159.hbs", 15900, 100)
					.withPartial("partial_160", "step-26/code/frontend/yarn_partials/partial_160.hbs", 16000, 100)
					.withPartial("partial_161", "step-26/code/frontend/yarn_partials/partial_161.hbs", 16100, 100)
					.withPartial("partial_162", "step-26/code/frontend/yarn_partials/partial_162.hbs", 16200, 100)
					.withPartial("partial_163", "step-26/code/frontend/yarn_partials/partial_163.hbs", 16300, 100)
					.withPartial("partial_164", "step-26/code/frontend/yarn_partials/partial_164.hbs", 16400, 100)
					.withPartial("partial_165", "step-26/code/frontend/yarn_partials/partial_165.hbs", 16500, 100)
					.withPartial("partial_166", "step-26/code/frontend/yarn_partials/partial_166.hbs", 16600, 100)
					.withPartial("partial_167", "step-26/code/frontend/yarn_partials/partial_167.hbs", 16700, 100)
					.withPartial("partial_168", "step-26/code/frontend/yarn_partials/partial_168.hbs", 16800, 100)
					.withPartial("partial_169", "step-26/code/frontend/yarn_partials/partial_169.hbs", 16900, 100)
					.withPartial("partial_170", "step-26/code/frontend/yarn_partials/partial_170.hbs", 17000, 100)
					.withPartial("partial_171", "step-26/code/frontend/yarn_partials/partial_171.hbs", 17100, 100)
					.withPartial("partial_172", "step-26/code/frontend/yarn_partials/partial_172.hbs", 17200, 100)
					.withPartial("partial_173", "step-26/code/frontend/yarn_partials/partial_173.hbs", 17300, 100)
					.withPartial("partial_174", "step-26/code/frontend/yarn_partials/partial_174.hbs", 17400, 100)
					.withPartial("partial_175", "step-26/code/frontend/yarn_partials/partial_175.hbs", 17500, 100)
					.withPartial("partial_176", "step-26/code/frontend/yarn_partials/partial_176.hbs", 17600, 100)
					.withPartial("partial_177", "step-26/code/frontend/yarn_partials/partial_177.hbs", 17700, 100)
					.withPartial("partial_178", "step-26/code/frontend/yarn_partials/partial_178.hbs", 17800, 100)
					.withPartial("partial_179", "step-26/code/frontend/yarn_partials/partial_179.hbs", 17900, 100)
					.withPartial("partial_180", "step-26/code/frontend/yarn_partials/partial_180.hbs", 18000, 100)
					.withPartial("partial_181", "step-26/code/frontend/yarn_partials/partial_181.hbs", 18100, 100)
					.withPartial("partial_182", "step-26/code/frontend/yarn_partials/partial_182.hbs", 18200, 100)
					.withPartial("partial_183", "step-26/code/frontend/yarn_partials/partial_183.hbs", 18300, 100)
					.withPartial("partial_184", "step-26/code/frontend/yarn_partials/partial_184.hbs", 18400, 100)
					.withPartial("partial_185", "step-26/code/frontend/yarn_partials/partial_185.hbs", 18500, 100)
					.withPartial("partial_186", "step-26/code/frontend/yarn_partials/partial_186.hbs", 18600, 100)
					.withPartial("partial_187", "step-26/code/frontend/yarn_partials/partial_187.hbs", 18700, 100)
					.withPartial("partial_188", "step-26/code/frontend/yarn_partials/partial_188.hbs", 18800, 100)
					.withPartial("partial_189", "step-26/code/frontend/yarn_partials/partial_189.hbs", 18900, 100)
					.withPartial("partial_190", "step-26/code/frontend/yarn_partials/partial_190.hbs", 19000, 100)
					.withPartial("partial_191", "step-26/code/frontend/yarn_partials/partial_191.hbs", 19100, 100)
					.withPartial("partial_192", "step-26/code/frontend/yarn_partials/partial_192.hbs", 19200, 100)
					.withPartial("partial_193", "step-26/code/frontend/yarn_partials/partial_193.hbs", 19300, 100)
					.withPartial("partial_194", "step-26/code/frontend/yarn_partials/partial_194.hbs", 19400, 100)
					.withPartial("partial_195", "step-26/code/frontend/yarn_partials/partial_195.hbs", 19500, 100)
					.withPartial("partial_196", "step-26/code/frontend/yarn_partials/partial_196.hbs", 19600, 100)
					.withPartial("partial_197", "step-26/code/frontend/yarn_partials/partial_197.hbs", 19700, 100)
					.withPartial("partial_198", "step-26/code/frontend/yarn_partials/partial_198.hbs", 19800, 100)
					.withPartial("partial_199", "step-26/code/frontend/yarn_partials/partial_199.hbs", 19900, 100)
					.withPartial("partial_200", "step-26/code/frontend/yarn_partials/partial_200.hbs", 20000, 100)
					.withPartial("partial_201", "step-26/code/frontend/yarn_partials/partial_201.hbs", 20100, 100)
					.withPartial("partial_202", "step-26/code/frontend/yarn_partials/partial_202.hbs", 20200, 100)
					.withPartial("partial_203", "step-26/code/frontend/yarn_partials/partial_203.hbs", 20300, 100)
					.withPartial("partial_204", "step-26/code/frontend/yarn_partials/partial_204.hbs", 20400, 100)
					.withPartial("partial_205", "step-26/code/frontend/yarn_partials/partial_205.hbs", 20500, 100)
					.withPartial("partial_206", "step-26/code/frontend/yarn_partials/partial_206.hbs", 20600, 100)
					.withPartial("partial_207", "step-26/code/frontend/yarn_partials/partial_207.hbs", 20700, 100)
					.withPartial("partial_208", "step-26/code/frontend/yarn_partials/partial_208.hbs", 20800, 100)
					.withPartial("partial_209", "step-26/code/frontend/yarn_partials/partial_209.hbs", 20900, 100)
					.withPartial("partial_210", "step-26/code/frontend/yarn_partials/partial_210.hbs", 21000, 100)
					.withPartial("partial_211", "step-26/code/frontend/yarn_partials/partial_211.hbs", 21100, 100)
					.withPartial("partial_212", "step-26/code/frontend/yarn_partials/partial_212.hbs", 21200, 100)
					.withPartial("partial_213", "step-26/code/frontend/yarn_partials/partial_213.hbs", 21300, 100)
					.withPartial("partial_214", "step-26/code/frontend/yarn_partials/partial_214.hbs", 21400, 100)
					.withPartial("partial_215", "step-26/code/frontend/yarn_partials/partial_215.hbs", 21500, 100)
					.withPartial("partial_216", "step-26/code/frontend/yarn_partials/partial_216.hbs", 21600, 100)
					.withPartial("partial_217", "step-26/code/frontend/yarn_partials/partial_217.hbs", 21700, 100)
					.withPartial("partial_218", "step-26/code/frontend/yarn_partials/partial_218.hbs", 21800, 100)
					.withPartial("partial_219", "step-26/code/frontend/yarn_partials/partial_219.hbs", 21900, 100)
					.withPartial("partial_220", "step-26/code/frontend/yarn_partials/partial_220.hbs", 22000, 100)
					.withPartial("partial_221", "step-26/code/frontend/yarn_partials/partial_221.hbs", 22100, 100)
					.withPartial("partial_222", "step-26/code/frontend/yarn_partials/partial_222.hbs", 22200, 100)
					.withPartial("partial_223", "step-26/code/frontend/yarn_partials/partial_223.hbs", 22300, 100)
					.withPartial("partial_224", "step-26/code/frontend/yarn_partials/partial_224.hbs", 22400, 100)
					.withPartial("partial_225", "step-26/code/frontend/yarn_partials/partial_225.hbs", 22500, 100)
					.withPartial("partial_226", "step-26/code/frontend/yarn_partials/partial_226.hbs", 22600, 100)
					.withPartial("partial_227", "step-26/code/frontend/yarn_partials/partial_227.hbs", 22700, 100)
					.withPartial("partial_228", "step-26/code/frontend/yarn_partials/partial_228.hbs", 22800, 100)
					.withPartial("partial_229", "step-26/code/frontend/yarn_partials/partial_229.hbs", 22900, 100)
					.withPartial("partial_230", "step-26/code/frontend/yarn_partials/partial_230.hbs", 23000, 100)
					.withPartial("partial_231", "step-26/code/frontend/yarn_partials/partial_231.hbs", 23100, 100)
					.withPartial("partial_232", "step-26/code/frontend/yarn_partials/partial_232.hbs", 23200, 100)
					.withPartial("partial_233", "step-26/code/frontend/yarn_partials/partial_233.hbs", 23300, 100)
					.withPartial("partial_234", "step-26/code/frontend/yarn_partials/partial_234.hbs", 23400, 100)
					.withPartial("partial_235", "step-26/code/frontend/yarn_partials/partial_235.hbs", 23500, 100)
					.withPartial("partial_236", "step-26/code/frontend/yarn_partials/partial_236.hbs", 23600, 100)
					.withPartial("partial_237", "step-26/code/frontend/yarn_partials/partial_237.hbs", 23700, 100)
					.withPartial("partial_238", "step-26/code/frontend/yarn_partials/partial_238.hbs", 23800, 100)
					.withPartial("partial_239", "step-26/code/frontend/yarn_partials/partial_239.hbs", 23900, 100)
					.withPartial("partial_240", "step-26/code/frontend/yarn_partials/partial_240.hbs", 24000, 100)
				.withTime({
					"start" : 200,
					"duration" : 19600
				})
				.addCode("step-26/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-26/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress.hbs", "frontend/cypress.json")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/fixtures/example.hbs", "frontend/cypress/fixtures/example.json")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/actions.spec.hbs", "frontend/cypress/integration/examples/actions.spec.js")
				.withTime({
					"start" : 100,
					"duration" : 400
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/aliasing.spec.hbs", "frontend/cypress/integration/examples/aliasing.spec.js")
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/assertions.spec.hbs", "frontend/cypress/integration/examples/assertions.spec.js")
				.withTime({
					"start" : 600,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/connectors.spec.hbs", "frontend/cypress/integration/examples/connectors.spec.js")
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/cookies.spec.hbs", "frontend/cypress/integration/examples/cookies.spec.js")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/cypress_api.spec.hbs", "frontend/cypress/integration/examples/cypress_api.spec.js")
				.withTime({
					"start" : 1000,
					"duration" : 300
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/files.spec.hbs", "frontend/cypress/integration/examples/files.spec.js")
				.withTime({
					"start" : 1300,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/local_storage.spec.hbs", "frontend/cypress/integration/examples/local_storage.spec.js")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/location.spec.hbs", "frontend/cypress/integration/examples/location.spec.js")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/misc.spec.hbs", "frontend/cypress/integration/examples/misc.spec.js")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/navigation.spec.hbs", "frontend/cypress/integration/examples/navigation.spec.js")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/network_requests.spec.hbs", "frontend/cypress/integration/examples/network_requests.spec.js")
				.withTime({
					"start" : 1900,
					"duration" : 300
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/querying.spec.hbs", "frontend/cypress/integration/examples/querying.spec.js")
				.withTime({
					"start" : 2200,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/spies_stubs_clocks.spec.hbs", "frontend/cypress/integration/examples/spies_stubs_clocks.spec.js")
				.withTime({
					"start" : 2400,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/traversal.spec.hbs", "frontend/cypress/integration/examples/traversal.spec.js")
				.withTime({
					"start" : 2500,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/utilities.spec.hbs", "frontend/cypress/integration/examples/utilities.spec.js")
				.withTime({
					"start" : 2700,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/viewport.spec.hbs", "frontend/cypress/integration/examples/viewport.spec.js")
				.withTime({
					"start" : 2900,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/waiting.spec.hbs", "frontend/cypress/integration/examples/waiting.spec.js")
				.withTime({
					"start" : 3000,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/window.spec.hbs", "frontend/cypress/integration/examples/window.spec.js")
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/support/commands.hbs", "frontend/cypress/support/commands.js")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/support/index.hbs", "frontend/cypress/support/index.js")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/tsconfig.hbs", "frontend/cypress/tsconfig.json")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/plugins/cy-ts-preprocessor.hbs", "frontend/cypress/plugins/cy-ts-preprocessor.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/plugins/index.hbs", "frontend/cypress/plugins/index.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/pages/board-page.hbs", "frontend/cypress/integration/pages/board-page.feature")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/pages/board-page/board-page.spec.hbs", "frontend/cypress/integration/pages/board-page/board-page.spec.ts")
				.withTime({
					"start" : 0,
					"duration" : 400
				})
				.addCode("step-26/code/frontend/src/index.hbs", "frontend/src/index.tsx")
					.withPartial("partial_1", "step-26/code/frontend/src/index_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-26/code/frontend/src/index_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/src/pages/board-page/board-page.component.hbs", "frontend/src/pages/board-page/board-page.component.tsx")
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
	.write(path.join(__dirname, "playbook.json"));