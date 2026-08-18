import{d as s,_ as a}from"./APHLTj8e.js";import{c}from"./WVBk0TGe.js";import{d as l,B as d,E as i,l as r,A as m}from"./CUILJOC5.js";const p={class:"w-full h-full p-5"},u=l({__name:"code",props:{item:{default:()=>({})}},setup(e){const t=c(e.item,"",["columns","colWidth","gap"],"                "),o=s(`
        <template>
            <LM-column
                ${t}
            >
                <template #default>
                    <div class="bg-[#666] h-10 leading-10 text-white text-center">列1</div>
                    <div class="bg-[#999] h-10 leading-10 text-white text-center">列2</div>
                    <div class="bg-[#666] h-10 leading-10 text-white text-center">列3</div>
                    <div class="bg-[#999] h-10 leading-10 text-white text-center" v-if="item.attr.columns === 4">列4</div>
                </template>
            </LM-column>
        </template>

        <script setup lang="ts">
            import type { Example } from './useColumn'
    
            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })
        <\/script>
    `);return(f,x)=>{const n=a;return m(),d("div",p,[i(n,{vueCode:r(o)},null,8,["vueCode"])])}}}),C=Object.assign(u,{__name:"ColumnCode"});export{C as default};
