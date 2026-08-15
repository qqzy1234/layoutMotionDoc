import{d as o,_ as l}from"./D972DxR9.js";import{c}from"./WVBk0TGe.js";import{d as i,B as r,E as m,l as d,A as p}from"./BRRYZBnf.js";const f={class:"w-full h-full p-5"},u=i({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,n=c(e.item,':trigger="examplePanel"',["isReverse","instantReverse","aniType","customAni"],"                "),a=o(`
        <template>
            <LM-head-mask-change ref="headMaskChange" class="flex items-center bg-[#999]"
                :scroller="component"
                ${n}
            >
                <template #default>
                    <LM-column :columns="3" :colWidth="['180px', '1fr', '150px']" class="w-full">
                        <template #default>
                            <div class="flex justify-end items-center">logo</div>
                            <div class="flex justify-end items-center gap-5">
                                <div>
                                    导航1
                                </div>
                                <div>
                                    导航2
                                </div>
                            </div>
                            <div ref="lang" class="flex justify-center items-center text-black">语言</div>
                        </template>
                    </LM-column>
                </template>
            </LM-head-mask-change>
        </template>

        <script setup lang="ts">
            import type { Example } from './useHeadMaskChange'
    
            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })

            const component: HTMLDivElement | undefined = inject('component')
            const examplePanel: HTMLDivElement | undefined = inject('examplePanel')
        ${e.item.attr.customAni?`    const headMaskChange = ref()
            const lang = ref()

            onMounted(() => {
                nextTick(() => {
                    if (headMaskChange.value && lang.value) {
                        let tl = headMaskChange.value.getTimeline()
                        tl.fromTo(lang.value, 0.5, { color: '#ffffff' }, { color: '#000000' }, '<')
                    }
                })
            })
<\/script>`:"<\/script>"}
    `);return(g,h)=>{const s=l;return p(),r("div",f,[m(s,{vueCode:d(a)},null,8,["vueCode"])])}}}),M=Object.assign(u,{__name:"HeadMaskChangeCode"});export{M as default};
