import{d as a,_ as l}from"./D972DxR9.js";import{c as r}from"./WVBk0TGe.js";import{d as m,B as c,E as i,l as u,A as d}from"./BRRYZBnf.js";const p={class:"w-full h-full p-5"},f=m({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,o=r(e.item,"",["size","color","borderWidth","type","isTrigger","customAni"],"                "),s=a(`
        <template>
            <LM-hexagon ref="hexagon"
                @mouseenter="handleMouseOver" @mouseleave="handleMouseOut"
                ${o}
            >
                <template #default>
                    <div class="w-full h-full">
                        <img ref="img" src="/static/images/bw-4.png" class="w-full h-full object-cover" alt="">
                    </div> 
                </template>
            </LM-hexagon>
        </template>
        <script setup lang="ts">
            import type { Example } from './useHexagon'
            
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
        ${e.item.attr.customAni?`    const hexagon = ref()
            const img = ref()

            onMounted(() => {
                nextTick(() => {
                    if (hexagon.value && img.value) {
                        let tl = hexagon.value.getTimeline()
                        tl.fromTo(img.value, 0.8, { scale: 1 }, { scale: 2 }, '<')
                    }
                })
            })
<\/script>`:"<\/script>"}          
    `);return(h,_)=>{const n=l;return d(),c("div",p,[i(n,{vueCode:u(s)},null,8,["vueCode"])])}}}),C=Object.assign(f,{__name:"HexagonCode"});export{C as default};
