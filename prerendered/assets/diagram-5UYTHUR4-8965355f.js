import{p as y}from"./chunk-353BL4L5-34ef263d.js";import{F as B,s as S,g as F,o as z,p as P,b as E,c as W,_ as l,l as v,G as w,H as T,v as D,L as _,k as A}from"./mermaid-exporter-834905de.js";import{p as L}from"./mermaid-parser.core-bf7d16f8.js";import"./index-1de3a68b.js";import"./isEmpty-b8e03c97.js";import"./_basePickBy-e1a4254e.js";import"./_baseExtremum-6ce8e2c5.js";import"./_castFunction-4513d3e4.js";import"./reduce-1a81d1b4.js";import"./_arrayReduce-865b0d3f.js";import"./toInteger-77d22f0c.js";import"./toNumber-8a64c215.js";import"./_baseUniq-ad797099.js";import"./_baseFlatten-17f0b146.js";import"./uniq-c408707d.js";import"./find-978554de.js";import"./groupBy-0c42a5be.js";import"./clone-1f3f2ea6.js";var x={packet:[]},u=structuredClone(x),N=B.packet,Y=l(()=>{const t=w({...N,...T().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),G=l(()=>u.packet,"getPacket"),H=l(t=>{t.length>0&&u.packet.push(t)},"pushWord"),I=l(()=>{D(),u=structuredClone(x)},"clear"),m={pushWord:H,getPacket:G,getConfig:Y,clear:I,setAccTitle:S,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:P,getAccDescription:E,setAccDescription:W},M=1e4,O=l(t=>{y(t,m);let e=-1,o=[],i=1;const{bitsPerRow:s}=m.getConfig();for(let{start:a,end:r,bits:c,label:f}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??=e+1,a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(c===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??=a+(c??1)-1,c??=r-a+1,e=r,v.debug(`Packet block ${a} - ${e} with label ${f}`);o.length<=s+1&&m.getPacket().length<M;){const[d,p]=K({start:a,end:r,bits:c,label:f},i,s);if(o.push(d),d.end+1===i*s&&(m.pushWord(o),o=[],i++),!p)break;({start:a,end:r,bits:c,label:f}=p)}}m.pushWord(o)},"populate"),K=l((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const i=e*o-1,s=e*o;return[{start:t.start,end:i,label:t.label,bits:i-t.start},{start:s,end:t.end,label:t.label,bits:t.end-s}]},"getNextFittingBlock"),R={parse:l(async t=>{const e=await L("packet",t);v.debug(e),O(e)},"parse")},U=l((t,e,o,i)=>{const s=i.db,a=s.getConfig(),{rowHeight:r,paddingY:c,bitWidth:f,bitsPerRow:d}=a,p=s.getPacket(),n=s.getDiagramTitle(),k=r+c,g=k*(p.length+1)-(n?0:r),b=f*d+2,h=_(e);h.attr("viewbox",`0 0 ${b} ${g}`),A(h,g,b,a.useMaxWidth);for(const[C,$]of p.entries())X(h,$,C,a);h.append("text").text(n).attr("x",b/2).attr("y",g-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=l((t,e,o,{rowHeight:i,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:c,showBits:f})=>{const d=t.append("g"),p=o*(i+a)+a;for(const n of e){const k=n.start%c*r+1,g=(n.end-n.start+1)*r-s;if(d.append("rect").attr("x",k).attr("y",p).attr("width",g).attr("height",i).attr("class","packetBlock"),d.append("text").attr("x",k+g/2).attr("y",p+i/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(n.label),!f)continue;const b=n.end===n.start,h=p-2;d.append("text").attr("x",k+(b?g/2:0)).attr("y",h).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(n.start),b||d.append("text").attr("x",k+g).attr("y",h).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(n.end)}},"drawWord"),j={draw:U},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=w(q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),bt={parser:R,db:m,renderer:j,styles:J};export{bt as diagram};
