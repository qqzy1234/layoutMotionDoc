import{d as a,_ as n}from"./BCoQejXu.js";import{c as l}from"./WVBk0TGe.js";import{d as m,B as i,E as u,l as c,A as d}from"./jQur5df3.js";const p={class:"w-full h-full p-5"},f=m({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,o=l(e.item,"",["color","borderWidth","radius","roundType","customAni","isTrigger"],"                "),r=a(`
        <template>
            <LM-base-grow-border ref="baseGrowBorder" class="w-87.5 h-87.5"
                @mouseenter="handleMouseOver" @mouseleave="handleMouseOut"
                ${o}
            >
                <template #default>
                    <div class="w-full h-full">
                        <img ref="img" src="/static/images/bw-5.png" class="w-full h-full" alt="">
                    </div>
                </template>
            </LM-base-grow-border>
        </template>
        <script setup lang="ts">
            import type { Example } from './useBaseGrowBorder'
            
            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })

            const emit = defineEmits(['mouseenter', 'mouseleave'])

            const handleMouseOver = () => {
                emit('mouseenter')
            }
            const handleMouseOut = () => {
                emit('mouseleave')
            }
        ${e.item.attr.customAni?`    const baseGrowBorder = ref()
            const img = ref()

            onMounted(() => {
                nextTick(() => {
                    if (baseGrowBorder.value && img.value) {
                        let tl = baseGrowBorder.value.getTimeline()
                        tl.fromTo(img.value, 0.9, { rotate: 0 }, { rotate: 360 }, '<')
                    }
                })
            })
<\/script>`:"<\/script>"}        
    `);return(g,v)=>{const s=n;return d(),i("div",p,[u(s,{vueCode:c(r)},null,8,["vueCode"])])}}}),B=Object.assign(f,{__name:"BaseGrowBorderCode"});export{B as default};
