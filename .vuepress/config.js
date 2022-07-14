module.exports = {
    title: '📖Documents',
    description: 'hello world',
    //base: '/',
    host: '127.0.0.1',
    port: '8080',
    head: [
        ['script', { src: '/live2d/L2Dwidget.min.js' }],
        ['script', {}, `
            const models = [
                '/live2d/live2d-widget-model-epsilon2_1/assets/Epsilon2.1.model.json',
                '/live2d/live2d-widget-model-haru/01/assets/haru01.model.json',
                '/live2d/live2d-widget-model-haru/02/assets/haru02.model.json',
                '/live2d/live2d-widget-model-haruto/assets/haruto.model.json',
                '/live2d/live2d-widget-model-koharu/assets/koharu.model.json',
                '/live2d/live2d-widget-model-hijiki/assets/hijiki.model.json',
                '/live2d/live2d-widget-model-tororo/assets/tororo.model.json',
                '/live2d/live2d-widget-model-izumi/assets/izumi.model.json',
                '/live2d/live2d-widget-model-miku/assets/miku.model.json',
                '/live2d/live2d-widget-model-shizuku/assets/shizuku.model.json',
                '/live2d/live2d-widget-model-wanko/assets/wanko.model.json',
                '/live2d/live2d-widget-model-z16/assets/z16.model.json'
            ];
            L2Dwidget.init({
                "model": {
                    jsonPath: models[parseInt(Math.random() * (models.length))]
                },
                "display": {
                    "position": "left",
                    "width": 150,
                    "height": 210,
                    "hOffset": 5,
                    "vOffset": 5,
                    "superSample": 1,
                },
                "mobile": {
                    "scale": 1,
                    "show": true,
                    "motion": true,
                },
                "react": {
                    "opacityDefault": .5,
                    "opacityOnHover": .2
                }
            });
        `]
    ],
    plugins: [
        'cursor-effects',
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        'vuepress-plugin-smooth-scroll',
        'reading-progress',
        [
            '@vuepress/search', {
                searchMaxSuggestions: 10
            }
        ],
        '@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
        '@vuepress/medium-zoom', {
            selector: 'img.zoom-custom-imgs',
            options: {
                margin: 16
            }
        },
        [
            // 评论
            // '@vssue/vuepress-plugin-vssue', {
            //     platform: 'github',
            //     owner: 'Meowv',
            //     repo: 'docs',
            //     clientId: 'dfcb3e4078504d07ccbf',
            //     clientSecret: 'f182d64e6d5063e0b137c0d039d4a99a5cebda00',
            // }
        ],
        [
            "vuepress-plugin-code-copy", {
                align: "top",
                color: "#5a9600",
                backgroundColor: "#5a9600",
                successText: "复制成功"
            }
        ],
        [
            '@vuepress/last-updated', {
                transformer: (timestamp, lang) => {
                    const moment = require('moment');
                    moment.locale(lang);
                    return moment(timestamp).fromNow();
                }
            }
        ]
    ],
    markdown: {
        lineNumbers: true
    },
}