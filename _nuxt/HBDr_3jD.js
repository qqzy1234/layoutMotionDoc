import{d as l,_ as r}from"./DrFQelrp.js";import{c}from"./WVBk0TGe.js";import{d as n,B as a,E as i,l as m,A as d}from"./DKMGnRlw.js";const p={class:"w-full h-full p-5"},f=n({__name:"code",props:{item:{default:()=>({})}},setup(e){const t=c(e.item,'class="h-50"',["rows","rowHeight","gap"],"                "),s=l(`
        <template>
            <LM-row
                ${t}
            >
                <template #default>
                    <div class="bg-[#666] h-full text-white text-sm flex items-center justify-center">行1</div>
                    <div class="bg-[#999] h-full text-white text-sm flex items-center justify-center">行2</div>
                    <div class="bg-[#666] h-full text-white text-sm flex items-center justify-center">行3</div>
                    <div class="bg-[#999] h-full text-white text-sm flex items-center justify-center">行4</div>
                </template>
            </LM-row>
        </template>

        <script setup lang="ts">
            import type { Example } from './useRow'
    
            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })
        <\/script>
    `);return(x,_)=>{const o=r;return d(),a("div",p,[i(o,{vueCode:m(s)},null,8,["vueCode"])])}}}),g=Object.assign(f,{__name:"RowCode"});export{g as default};
