import{d as l,_ as c}from"./1p0rmulv.js";import{c as i}from"./WVBk0TGe.js";import{d as m,B as r,E as d,l as p,A as u}from"./CKw-aD2f.js";const f={class:"w-full h-full p-5"},g=m({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,n=i(e.item,':trigger="examplePanel"',["isReverse","instantReverse","aniType","customAni"],"                "),a=()=>e.item.attr.customAni?`    const headChange = ref()
            const logo = ref()

            onMounted(() => {
                nextTick(() => {
                    if (headChange.value && logo.value) {
                        let tl = headChange.value.getTimeline()
                        tl.fromTo(logo.value, 0.5, { scale: 1 }, { scale: 0.5 }, '<')
                    }
                })
            })
<\/script>`:"<\/script>",s=l(`
        <template>
            <LM-head-change ref="headChange" class="flex items-center bg-[#999]"
                :scroller="component"
                ${n}
            >
                <template #default>
                    <LM-column :columns="3" :colWidth="['180px', '1fr', '150px']" class="w-full">
                        <template #default>
                            <div class="flex justify-end">
                                ${e.item.attr.customAni?'<img ref="logo" src="/static/images/bw-5.png" alt="" class="h-12.5 w-auto">':"<span>logo</span>"}  
                            </div>
                            <div class="flex justify-end items-center gap-5">
                                <div>
                                    导航1
                                </div>
                                <div>
                                    导航2
                                </div>
                            </div>
                            <div class="flex justify-center items-center">语言</div>
                        </template>
                    </LM-column>
                </template>
            </LM-head-change>
        </template>

        <script setup lang="ts">
            import type { Example } from './useHeadChange'
    
            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })
            // 父组件注入的元素
            const component: HTMLDivElement | undefined = inject('component')
            const examplePanel: HTMLDivElement | undefined = inject('examplePanel')
        ${a()}
    `);return(v,h)=>{const o=c;return u(),r("div",f,[d(o,{vueCode:p(s)},null,8,["vueCode"])])}}}),A=Object.assign(g,{__name:"HeadChangeCode"});export{A as default};
