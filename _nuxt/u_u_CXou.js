import{d as o,_ as s}from"./D972DxR9.js";import{c as r}from"./WVBk0TGe.js";import{d as c,B as i,E as m,l as p,A as u}from"./BRRYZBnf.js";const d={class:"w-full h-full p-5"},f=c({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,a=r(e.item,'class="h-70 w-full"',["imageUrl","bgMovDistance","enforceNoFixed","customAni"],"                "),l=o(`
        <template>
            <LM-bg-parallax
                ref="bgParallax"
                ${a}
                :scroller="component"
                :trigger="panel"
                isManual
            >
                <template #default>
                    <div class="w-full h-full text-white flex justify-center items-center">
                        我叫小舞 跳舞的舞
                    </div>
                </template>
            </LM-bg-parallax>
        </template>
        <script setup lang="ts">
            import type { Example } from './useBgParallax'
            
            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })

            const component: HTMLDivElement | undefined = inject('component')
            const panel: HTMLDivElement | undefined = inject('panel')
        ${e.item.attr.customAni?`    const bgParallax = ref()
            const text = ref()

            onMounted(() => {
                nextTick(() => {
                    if (bgParallax.value && text.value) {
                        let tl = bgParallax.value.getTimeline()
                        tl && tl.fromTo(text.value, 0.5, { scale: 1 }, { scale: 1.3 })
                    }
                })
            })
<\/script>`:"<\/script>"}    
    `);return(_,g)=>{const n=s;return u(),i("div",d,[m(n,{vueCode:p(l)},null,8,["vueCode"])])}}}),h=Object.assign(f,{__name:"BgParallaxCode"});export{h as default};
