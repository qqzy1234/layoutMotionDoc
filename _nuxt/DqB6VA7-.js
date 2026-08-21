import{d as o,_ as i}from"./DrFQelrp.js";import{c as l}from"./WVBk0TGe.js";import{d as r,B as m,E as c,l as p,A as u}from"./DKMGnRlw.js";const d={class:"w-full h-full p-5"},f=r({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,s=l(e.item,':isTrigger="item.attr.isTrigger"',["isTrigger","direction","diagonal","turns","axis","slotFollowFlip","customAni"],"                "),a=o(`
        <template>
            <LM-mask-flip-card ref="flipCard" class="w-87.5"
                @mouseenter="handleMouseOver" @mouseleave="handleMouseOut"
                ${s}
            >
                <template #content>
                    <div>
                        <img src="/static/images/bw-6.png" class="w-full h-auto" alt="">
                    </div> 
                </template>
                <template #mask>
                    <div ref="maskContent" v-if="item.attr.customAni" class="text-white flex justify-center items-center h-full px-5">
                        <p>比起空间的距离，时间的阻隔更加让人绝望。</p>
                    </div>
                    <div class="w-full h-full text-white flex justify-center items-center px-5" v-else>
                        <span v-if="!item.attr.axis">所有命运的馈赠，早已在暗中标注好了价格，不是吗？</span>
                        <span v-else>我们是一群时刻对抗着危险和疯狂的可怜虫，但我们更是守护者。</span>
                    </div>
                </template>
            </LM-mask-flip-card>
        </template>
        <script setup lang="ts">
            import type { Example } from './useMaskFlipCard'
            
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
        ${e.item.attr.customAni?`    const flipCard = ref()
            const maskContent = ref<HTMLDivElement>()

            onMounted(() => {
                nextTick(() => {
                    if (flipCard.value && maskContent.value) {
                        let tl = flipCard.value.getTimeline()
                        tl.fromTo(maskContent.value, 0.5, { opacity: 0 }, { opacity: 1 })
                    }
                })
            })
<\/script>`:"<\/script>"}    
    `);return(C,_)=>{const n=i;return u(),m("div",d,[c(n,{vueCode:p(a)},null,8,["vueCode"])])}}}),k=Object.assign(f,{__name:"MaskFlipCardCode"});export{k as default};
