import{d as i,_ as a}from"./APHLTj8e.js";import{c as n}from"./WVBk0TGe.js";import{d as l,B as m,E as d,l as c,A as u}from"./CUILJOC5.js";const p={class:"w-full h-full p-5"},f=l({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,o=n(e.item,"",["color","borderWidth","radius","type","startPoint","customAni","isTrigger"],"                "),s=i(`
        <template>
            <LM-side-grow-border ref="sideGrowBorder" class="w-87 h-87"
                @mouseenter="handleMouseOver" @mouseleave="handleMouseOut"
                ${o}
            >
                <template #default>
                    <div class="w-full h-full">
                        <img v-if="!item.attr.customAni" src="/static/images/bw-2.png" class="w-full h-full" alt="">
                        <img v-else ref="img" src="/static/images/bw-2.png" class="w-full h-full" alt="">
                    </div>
                </template>
            </LM-side-grow-border>
        </template>
        <script setup lang="ts">
            import type { Example } from './useSideGrowBorder'
            
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
        ${e.item.attr.customAni?`    const sideGrowBorder = ref()
            const img = ref()

            onMounted(() => {
                nextTick(() => {
                    if (sideGrowBorder.value && img.value) {
                        let tl = sideGrowBorder.value.getTimeline()
                        tl.fromTo(img.value, 0.9, { rotate: 0 }, { rotate: 360 }, '<')
                    }
                })
            })
<\/script>`:"<\/script>"}        
    `);return(_,v)=>{const r=a;return u(),m("div",p,[d(r,{vueCode:c(s)},null,8,["vueCode"])])}}}),A=Object.assign(f,{__name:"SideGrowBorderCode"});export{A as default};
