const path = require('path');

module.exports = step("step-2")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_01_webpack.mdx"))
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_02_typescript.mdx"))
					.withTime({
						"start" : 600,
						"duration" : 200
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_04_storybook.mdx"))
					.withTime({
						"start" : 800,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_lerna.mdx"))
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/ProjectPlan.mdx"))
					.withTime({
						"start" : 1000,
						"duration" : 400
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/src/components/card/card.playbook.mdx"))
					.withTime({
						"start" : 2500,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/ProjectPlan.mdx"))
					.withTime({
						"start" : 100,
						"duration" : 400
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/readme.md"))
					.withTime({
						"start" : 1200,
						"duration" : 400
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card/card.playbook.mdx"))
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 100,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/server/README.md"))
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/.storybook/addons.hbs", ".storybook/addons.js")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/.storybook/config.hbs", ".storybook/config.js")
					.withTime({
						"start" : 100,
						"duration" : 100
					})
					.addCode("/code/.storybook/webpack.config.hbs", ".storybook/webpack.config.js")
					.withTime({
						"start" : 200,
						"duration" : 100
					})
					.addCode("/code/.webpack/loaders/example-loader.hbs", ".webpack/loaders/example-loader.js")
					.withTime({
						"start" : 300,
						"duration" : 100
					})
					.addCode("/code/.webpack/plugins/FileListPlugin.hbs", ".webpack/plugins/FileListPlugin.js")
					.withTime({
						"start" : 400,
						"duration" : 100
					})
					.addCode("/code/package.hbs", "package.json")
						.withPartial("partial_1", "step-2/code/package_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-2/code/package_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-2/code/package_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-2/code/package_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-2/code/package_partials/partial_5.hbs", 400, 100)
					.withTime({
						"start" : 1400,
						"duration" : 100
					})
					.addCode("/code/setup/_template_.hbs", "setup/_template_.sh")
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
					.addCode("/code/setup/gitignore.hbs", "setup/gitignore.sh")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/setup/storybook.hbs", "setup/storybook.sh")
						.withPartial("partial_1", "step-2/code/setup/storybook_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-2/code/setup/storybook_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 1700,
						"duration" : 200
					})
					.addCode("/code/setup/typescript.hbs", "setup/typescript.sh")
					.withTime({
						"start" : 1900,
						"duration" : 100
					})
					.addCode("/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
					.withTime({
						"start" : 2000,
						"duration" : 100
					})
					.addCode("/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
					.withTime({
						"start" : 2100,
						"duration" : 100
					})
					.addCode("/code/setup/webpack.hbs", "setup/webpack.sh")
					.withTime({
						"start" : 2200,
						"duration" : 100
					})
					.addCode("/code/src/components/card/card.bdd.hbs", "src/components/card/card.bdd.tsx")
					.withTime({
						"start" : 2300,
						"duration" : 0
					})
					.addCode("/code/src/components/card/card.component.hbs", "src/components/card/card.component.tsx")
					.withTime({
						"start" : 2300,
						"duration" : 100
					})
					.addCode("/code/src/components/card/card.container.hbs", "src/components/card/card.container.tsx")
					.withTime({
						"start" : 2400,
						"duration" : 100
					})
					.addCode("/code/src/components/card/card.redux.hbs", "src/components/card/card.redux.tsx")
					.withTime({
						"start" : 2600,
						"duration" : 0
					})
					.addCode("/code/src/components/card/card.stories.hbs", "src/components/card/card.stories.tsx")
					.withTime({
						"start" : 2600,
						"duration" : 300
					})
					.addCode("/code/src/components/card/card.styles.hbs", "src/components/card/card.styles.tsx")
					.withTime({
						"start" : 2900,
						"duration" : 0
					})
					.addCode("/code/src/components/card/card.test.hbs", "src/components/card/card.test.tsx")
					.withTime({
						"start" : 2900,
						"duration" : 0
					})
					.addCode("/code/src/example-stories/example.actions.stories.hbs", "src/example-stories/example.actions.stories.tsx")
					.withTime({
						"start" : 2900,
						"duration" : 100
					})
					.addCode("/code/src/example-stories/example.knobs.stories.hbs", "src/example-stories/example.knobs.stories.tsx")
					.withTime({
						"start" : 3000,
						"duration" : 300
					})
					.addCode("/code/src/index.hbs", "src/index.css")
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addCode("/code/src/index.hbs", "src/index.html")
					.withTime({
						"start" : 3400,
						"duration" : 100
					})
					.addCode("/code/src/index.hbs", "src/index.tsx")
					.withTime({
						"start" : 3500,
						"duration" : 100
					})
					.addCode("/code/tsconfig.hbs", "tsconfig.json")
					.withTime({
						"start" : 3600,
						"duration" : 200
					})
					.addCode("/code/webpack.common.hbs", "webpack.common.js")
					.withTime({
						"start" : 3800,
						"duration" : 200
					})
					.addCode("/code/webpack.dev.hbs", "webpack.dev.js")
					.withTime({
						"start" : 4000,
						"duration" : 100
					})
					.addCode("/code/webpack.prod.hbs", "webpack.prod.js")
					.withTime({
						"start" : 4100,
						"duration" : 100
					})
					.addCode("/code/yarn.hbs", "yarn.lock")
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
					.addCode("/code/package.hbs", "package.json")
						.withPartial("partial_1", "step-2/code/package_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-2/code/package_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-2/code/package_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-2/code/package_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-2/code/package_partials/partial_5.hbs", 400, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/setup/docker.hbs", "setup/docker.sh")
					.withTime({
						"start" : 100,
						"duration" : 0
					})
					.addCode("/code/.gitignore.hbs", ".gitignore")
						.withPartial("partial_1", "step-2/code/.gitignore_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/config.hbs", "frontend/.storybook/config.js")
					.withTime({
						"start" : 600,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
					.withTime({
						"start" : 700,
						"duration" : 100
					})
					.addCode("/code/frontend/.webpack/loaders/example-loader.hbs", "frontend/.webpack/loaders/example-loader.js")
					.withTime({
						"start" : 800,
						"duration" : 100
					})
					.addCode("/code/frontend/.webpack/plugins/FileListPlugin.hbs", "frontend/.webpack/plugins/FileListPlugin.js")
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("/code/frontend/package-lock.hbs", "frontend/package-lock.json")
					.withTime({
						"start" : 1000,
						"duration" : 100
					})
					.addCode("/code/frontend/package.hbs", "frontend/package.json")
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.bdd.hbs", "frontend/src/components/card/card.bdd.tsx")
					.withTime({
						"start" : 1600,
						"duration" : 0
					})
					.addCode("/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.container.hbs", "frontend/src/components/card/card.container.tsx")
					.withTime({
						"start" : 1700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.redux.hbs", "frontend/src/components/card/card.redux.tsx")
					.withTime({
						"start" : 1900,
						"duration" : 0
					})
					.addCode("/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
					.withTime({
						"start" : 1900,
						"duration" : 300
					})
					.addCode("/code/frontend/src/components/card/card.styles.hbs", "frontend/src/components/card/card.styles.tsx")
					.withTime({
						"start" : 2200,
						"duration" : 0
					})
					.addCode("/code/frontend/src/components/card/card.test.hbs", "frontend/src/components/card/card.test.tsx")
					.withTime({
						"start" : 2200,
						"duration" : 0
					})
					.addCode("/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
					.withTime({
						"start" : 2200,
						"duration" : 100
					})
					.addCode("/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
					.withTime({
						"start" : 2300,
						"duration" : 300
					})
					.addCode("/code/frontend/src/index.hbs", "frontend/src/index.css")
					.withTime({
						"start" : 2600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/index.hbs", "frontend/src/index.html")
					.withTime({
						"start" : 2700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/index.hbs", "frontend/src/index.tsx")
					.withTime({
						"start" : 2800,
						"duration" : 100
					})
					.addCode("/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withTime({
						"start" : 2900,
						"duration" : 200
					})
					.addCode("/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
					.withTime({
						"start" : 3100,
						"duration" : 200
					})
					.addCode("/code/frontend/webpack.dev.hbs", "frontend/webpack.dev.js")
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addCode("/code/frontend/webpack.prod.hbs", "frontend/webpack.prod.js")
					.withTime({
						"start" : 3400,
						"duration" : 100
					})
					.addCode("/code/frontend/yarn.hbs", "frontend/yarn.lock")
					.withTime({
						"start" : 3500,
						"duration" : 13900
					})
					.addCode("/code/.gitignore.hbs", ".gitignore")
						.withPartial("partial_1", "step-2/code/.gitignore_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-2/code/.gitignore_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/.gitignore.hbs", "backend/.gitignore")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/.gitignore.hbs", "backend/.gitignore")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/Dockerfile.hbs", "backend/Dockerfile.dev")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/server/nest-cli.hbs", "backend/server/nest-cli.json")
					.withTime({
						"start" : 200,
						"duration" : 100
					})
					.addCode("/code/backend/server/nodemon-debug.hbs", "backend/server/nodemon-debug.json")
					.withTime({
						"start" : 300,
						"duration" : 100
					})
					.addCode("/code/backend/server/nodemon.hbs", "backend/server/nodemon.json")
					.withTime({
						"start" : 400,
						"duration" : 100
					})
					.addCode("/code/backend/server/package.hbs", "backend/server/package.json")
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.controller.spec.hbs", "backend/server/src/app.controller.spec.ts")
					.withTime({
						"start" : 600,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.controller.hbs", "backend/server/src/app.controller.ts")
					.withTime({
						"start" : 700,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
					.withTime({
						"start" : 800,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.service.hbs", "backend/server/src/app.service.ts")
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/Validation.exception.hbs", "backend/server/src/common/http/exceptions/Validation.exception.ts")
					.withTime({
						"start" : 1000,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/index.hbs", "backend/server/src/common/http/exceptions/index.ts")
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-found.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-found.exception.spec.ts")
					.withTime({
						"start" : 1200,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-found.exception.hbs", "backend/server/src/common/http/exceptions/not-found.exception.ts")
					.withTime({
						"start" : 1300,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-unique.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.spec.ts")
					.withTime({
						"start" : 1400,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-unique.exception.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.ts")
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/validation.exception.spec.hbs", "backend/server/src/common/http/exceptions/validation.exception.spec.ts")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/responses/index.hbs", "backend/server/src/common/http/responses/index.ts")
					.withTime({
						"start" : 1700,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/responses/success.response.hbs", "backend/server/src/common/http/responses/success.response.ts")
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/interceptors/error-handling.interceptor.hbs", "backend/server/src/common/interceptors/error-handling.interceptor.ts")
					.withTime({
						"start" : 1900,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/recipes/swagger/swagger.util.hbs", "backend/server/src/common/recipes/swagger/swagger.util.ts")
					.withTime({
						"start" : 2000,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/utils/error.util.spec.hbs", "backend/server/src/common/utils/error.util.spec.ts")
					.withTime({
						"start" : 2100,
						"duration" : 400
					})
					.addCode("/code/backend/server/src/common/utils/error.util.hbs", "backend/server/src/common/utils/error.util.ts")
					.withTime({
						"start" : 2500,
						"duration" : 200
					})
					.addCode("/code/backend/server/src/common/utils/test-helper.util.hbs", "backend/server/src/common/utils/test-helper.util.ts")
					.withTime({
						"start" : 2700,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/main.hbs", "backend/server/src/main.ts")
					.withTime({
						"start" : 2800,
						"duration" : 100
					})
					.addCode("/code/backend/server/test/app.e2e-spec.hbs", "backend/server/test/app.e2e-spec.ts")
					.withTime({
						"start" : 2900,
						"duration" : 100
					})
					.addCode("/code/backend/server/test/jest-e2e.hbs", "backend/server/test/jest-e2e.json")
					.withTime({
						"start" : 3000,
						"duration" : 100
					})
					.addCode("/code/backend/server/tsconfig.build.hbs", "backend/server/tsconfig.build.json")
					.withTime({
						"start" : 3100,
						"duration" : 100
					})
					.addCode("/code/backend/server/tsconfig.hbs", "backend/server/tsconfig.json")
					.withTime({
						"start" : 3200,
						"duration" : 100
					})
					.addCode("/code/backend/server/tslint.hbs", "backend/server/tslint.json")
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addCode("/code/backend/server/yarn.hbs", "backend/server/yarn.lock")
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
