import{d as n,_ as m}from"./DrFQelrp.js";import{c as r}from"./WVBk0TGe.js";import{d as i,B as c,E as l,l as d,A as u}from"./DKMGnRlw.js";const p={class:"w-full h-full p-5"},f=i({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,s=r(e.item,':isTrigger="item.attr.isTrigger"',["maskMovDistance","direction","maskInitPos"],"                "),a=n(`
        <template>
            <LM-mask-mov-card ref="maskCard" class="w-87.5" 
                @mouseenter="handleMouseOver" @mouseleave="handleMouseOut"
                ${s}
            >
                <template #content>
                    <div>
                        <img src="/static/images/bw-1.png" 
                            class="w-full h-auto" alt=""
                    >
                    </div>    
                </template>
                <template #mask>
                    <div ref="maskContent" 
                        class="text-white flex justify-center items-center h-full px-5"
                    >
                        <p>在爱与被爱的过程中，我们学会了成长，也学会了牺牲。</p>
                    </div>
                </template>
            </LM-mask-mov-card>
        </template>

        <script setup lang="ts">
            import type { Example } from './useMaskMovCard'
            
            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })

            const emit = defineEmits(['mouseenter', 'mouseleave'])

            const maskContent = ref<HTMLDivElement>()
            const maskCard = ref()

            const handleMouseOver = () => {
                emit('mouseenter')
            }
            const handleMouseOut = () => {
                emit('mouseleave')
            }
        ${e.item.attr.customAni?`    onMounted(() => {
                nextTick(() => {
                    if (maskCard.value && maskContent.value) {
                        let tl = maskCard.value.getTimeline()
                        tl.fromTo(maskContent.value, 0.5, { y: 200 }, { y: 0 }, '<')
                    }
                })
            })
<\/script>`:"<\/script>"}
    `);return(k,C)=>{const o=m;return u(),c("div",p,[l(o,{vueCode:d(a)},null,8,["vueCode"])])}}}),g=Object.assign(f,{__name:"MaskMovCardCode"});export{g as default};
