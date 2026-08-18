import{d as p,_ as r}from"./APHLTj8e.js";import{c as n}from"./WVBk0TGe.js";import{d as a,B as c,E as d,l,A as m}from"./CUILJOC5.js";const i={class:"w-full h-full p-5"},u=a({__name:"code",props:{item:{default:()=>({})}},setup(e){const t=n(e.item,"",["text","typeSpeed","backDelay","deleteSpeedRatio","loop","deleteOnComplete","showCursor","manyLines"],"                "),o=p(`
        <template>
            <LM-typewriter
                ${t}
            />
        </template>
        <script setup lang="ts">
            import type { Example } from './useTypewriter'

            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })
        <\/script>
    `);return(f,C)=>{const s=r;return m(),c("div",i,[d(s,{vueCode:l(o)},null,8,["vueCode"])])}}}),h=Object.assign(u,{__name:"TypewriterCode"});export{h as default};
