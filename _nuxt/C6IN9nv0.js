import{d as n,_ as m}from"./BCoQejXu.js";import{c as r}from"./WVBk0TGe.js";import{d as l,B as i,E as c,l as p,A as u}from"./jQur5df3.js";const d={class:"w-full h-full p-5"},f=l({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,s=r(e.item,':isTrigger="item.attr.isTrigger"',["aniType","maskClass","alpha","duration"],"                "),a=n(`
        <template>
            <LM-mask-pop-card ref="maskPopCard" class="w-87.5"
                @mouseenter="handleMouseOver" @mouseleave="handleMouseOut"
                ${s}
            >
                <template #content>
                    <div>
                        <img src="/static/images/bw-3.png" class="w-full h-auto" alt="">
                    </div>    
                </template>
                <template #mask>
                    <div ref="maskContent" class="text-white flex justify-center items-center h-full px-5">你之荣耀既我之荣耀</div>
                </template>
            </LM-mask-pop-card>
        </template>

        <script setup lang="ts">
            import type { Example } from './useMaskPopCard'
            
            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })

            const emit = defineEmits(['mouseenter', 'mouseleave'])

            const maskPopCard = ref()
            const maskContent = ref<HTMLDivElement>()

            const handleMouseOver = () => {
                emit('mouseenter')
            }
            const handleMouseOut = () => {
                emit('mouseleave')
            }
        ${e.item.attr.customAni?`    onMounted(() => {
                nextTick(() => {
                    if (maskPopCard.value && maskContent.value) {
                        let tl = maskPopCard.value.getTimeline()
                        tl.fromTo(maskContent.value, 0.5, { y: 200 }, { y: 0 })
                    }
                })
            })
<\/script>`:"<\/script>"}
    `);return(k,v)=>{const o=m;return u(),i("div",d,[c(o,{vueCode:p(a)},null,8,["vueCode"])])}}}),x=Object.assign(f,{__name:"MaskPopCardCode"});export{x as default};
