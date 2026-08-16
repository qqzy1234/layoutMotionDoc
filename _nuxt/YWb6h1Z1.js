import{d as s,_ as n}from"./BFzZqMGl.js";import{c as i}from"./WVBk0TGe.js";import{d as l,B as d,E as m,l as c,A as u}from"./BOn_v-DG.js";const p={class:"w-full h-full p-5"},f=l({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,o=i(e.item,"",["color","borderWidth","radius","type","startPoint","customAni","isTrigger"],"                "),r=s(`
        <template>
            <LM-point-radial-border ref="pointRadialBorder" class="w-87 h-87"
                @mouseenter="handleMouseOver" @mouseleave="handleMouseOut"
                ${o}
            >
                <template #default>
                    <div class="w-full h-full">
                        <img ref="img" src="/static/images/bw-5.png" class="w-full h-full" alt="">
                    </div>
                </template>
            </LM-point-radial-border>
        </template>
        <script setup lang="ts">
            import type { Example } from './usePointRadialBorder'
            
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
        ${e.item.attr.customAni?`    const pointRadialBorder = ref()
            const img = ref()

            onMounted(() => {
                nextTick(() => {
                    if (pointRadialBorder.value && img.value) {
                        let tl = pointRadialBorder.value.getTimeline()
                        tl.fromTo(img.value, 0.8, { rotate: 0 }, { rotate: 360 }, '<')
                    }
                })
            })
<\/script>`:"<\/script>"}        
    `);return(v,g)=>{const a=n;return u(),d("div",p,[m(a,{vueCode:c(r)},null,8,["vueCode"])])}}}),A=Object.assign(f,{__name:"PointRadialBorderCode"});export{A as default};
