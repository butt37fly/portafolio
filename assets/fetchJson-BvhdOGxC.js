const n=new Map;async function c(t){const e=`/portafolio/${t.replace(/^\//,"")}`;if(n.has(e))return n.get(e);const s=await(await fetch(e)).json();return n.set(e,s),s}export{c as f};
