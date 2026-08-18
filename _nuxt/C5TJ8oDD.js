import{d as e,_ as p}from"./1p0rmulv.js";import{d as m,B as r,C as s,E as n,l as a,A as u,_ as f}from"./CKw-aD2f.js";const x={class:"px-12 py-14 max-w-4xl"},c={class:"mb-16"},y={class:"bg-[#f5f5f5] px-5 py-4 rounded-md"},g={class:"mb-16"},b={class:"bg-[#f5f5f5] px-5 py-4 rounded-md"},v={class:"bg-[#f5f5f5] px-5 py-4 rounded-md"},_=m({__name:"config",setup(C){const d=e(`
        // main.ts
        import { createApp } from 'vue'
        import App from './App.vue'
        import { LayoutMotion } from '@qqzy1234/layout-motion-vue'

        const app = createApp(App).use(LayoutMotion).mount('#app')

        // 或者全局注册一个组件
        import MaskMovCard from '@qqzy1234/layout-motion-vue'
        
        const app = createApp(App).use(MaskMovCard).mount('#app')
    `),i=e(`
        // tailwind.css
        @import "tailwindcss";
        @import "@qqzy1234/layout-motion-core/style.css";
    `),l=e(`
        // nuxt.config.ts
        export default defineNuxtConfig({
            ...
            css: [
                '~/assets/css/tailwind.css',
            ],
            modules: ['@qqzy1234/layout-motion-nuxt'],
            ...
        })
    `);return(q,t)=>{const o=p;return u(),r("div",x,[t[6]||(t[6]=s("h1",{class:"font-display text-4xl font-bold text-gray-900 mb-12"}," 配置 ",-1)),t[7]||(t[7]=s("p",{class:"text-base text-gray-600 leading-relaxed mb-16"}," 根据你的项目类型，选择对应的配置方式。记得先安装 Tailwind CSS。 ",-1)),s("section",c,[t[0]||(t[0]=s("h2",{class:"font-display text-lg font-semibold text-gray-900 mb-3"}," Vue 3 ",-1)),t[1]||(t[1]=s("p",{class:"text-sm text-gray-500 mb-4"}," 在入口文件中引入并注册插件 ",-1)),s("div",y,[n(o,{vueCode:a(d),lang:"ts"},null,8,["vueCode"])])]),s("section",g,[t[2]||(t[2]=s("h2",{class:"font-display text-lg font-semibold text-gray-900 mb-3"}," Nuxt ",-1)),t[3]||(t[3]=s("p",{class:"text-sm text-gray-500 mb-4"}," 在 nuxt.config.ts 中添加模块和 CSS 配置 ",-1)),s("div",b,[n(o,{vueCode:a(l),lang:"ts"},null,8,["vueCode"])])]),s("section",null,[t[4]||(t[4]=s("h2",{class:"font-display text-lg font-semibold text-gray-900 mb-3"}," Tailwind CSS ",-1)),t[5]||(t[5]=s("p",{class:"text-sm text-gray-500 mb-4"}," 在 Tailwind 配置文件中引入组件库的样式 ",-1)),s("div",v,[n(o,{vueCode:a(i),lang:"css"},null,8,["vueCode"])])])])}}}),M=Object.assign(f(_,[["__scopeId","data-v-5e9263d1"]]),{__name:"Config"});export{M as default};
