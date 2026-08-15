const $=(t,o,s,A)=>{let a=o;for(let r of s)t.attr[r]&&(a?a+=`
${A}:${r}="${Array.isArray(t.attr[r])?"["+t.attr[r]+"]":t.attr[r]}"`:a=`:${r}="${Array.isArray(t.attr[r])?"["+t.attr[r]+"]":t.attr[r]}"`);return a};export{$ as c};
