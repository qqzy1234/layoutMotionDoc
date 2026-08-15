import{d as s,_ as i}from"./D972DxR9.js";import{c as l}from"./WVBk0TGe.js";import{d as m,B as r,E as c,l as d,A as u}from"./BRRYZBnf.js";const x={class:"w-full h-full p-5"},p=m({__name:"code",props:{item:{default:()=>({})}},setup(t){const e=t,n=l(e.item,"",["content","size","color","borderWidth","type","gap","isTopStart","triggerIndex","customAni"],"                "),o=s(`
        <template>
            <LM-hexagon-matrix ref="hexagonMatrix"
                class="w-full"
                ${n}
            >
                <template #default="{ item, index }">
                    <div class="w-full h-full relative"
                        @mouseenter="handleMouseOver(index)" @mouseleave="handleMouseOut(index)"
                    >
                        <img :ref="el => setImgRef(el, index)" src="/static/images/bw-4.png" class="w-full h-full object-cover" alt="">
                        <span class="absolute top-0 left-0 bottom-0 right-0 m-auto text-white text-sm h-fit text-center">{{ item.text }}</span>
                    </div> 
                </template>
            </LM-hexagon-matrix>
        </template>
        <script setup lang="ts">
            import type { Example } from './useHexagonMatrix'
            
            const props = withDefaults(defineProps<{
                item: Example
            }>(), {
                item: () => ({} as Example),
            })

            const emit = defineEmits(['mouseenter', 'mouseleave'])

            const hexagonMatrix = ref()
            const img = ref<HTMLImageElement[]>([])

            const setImgRef = (el: any, index: number) => {
                img.value[index] = el
            }

            const handleMouseOver = (index: number) => {
                ${e.item.attr.customAni?`let tl = hexagonMatrix.value.getTimeline(index)
                tl.fromTo(img.value[index], 0.8, { scale: 1 }, { scale: 2 }, '<')
                emit('mouseenter', index)`:"emit('mouseenter', index)"}  
            }
            const handleMouseOut = (index: number) => {
                emit('mouseleave', index)
            }
        <\/script>
    `);return(f,g)=>{const a=i;return u(),r("div",x,[c(a,{vueCode:d(o)},null,8,["vueCode"])])}}}),M=Object.assign(p,{__name:"HexagonMatrixCode"});export{M as default};
