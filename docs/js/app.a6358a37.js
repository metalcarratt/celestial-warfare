(function(){"use strict";var e={2155:function(e,t,n){var i=n(9242),o=n(3396),a=n(4870),s=n(7139);const l={class:"section"};function r(e,t){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var c=n(89);const u={},p=(0,c.Z)(u,[["render",r],["__scopeId","data-v-39941380"]]);var g=p;const d={class:"items"};function m(e,t){return(0,o.wg)(),(0,o.iD)("span",d,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}const h={},f=(0,c.Z)(h,[["render",m],["__scopeId","data-v-33492c5a"]]);var v=f,_=n(65);const w="Residence",y="Mountain",b="Seclusion Chambers",k="Artefact School",S="Furnace",L="Herb Farm",T="Apothecary",I="Outside",A="Library",C="Beast Pavilion",D="Formation Pavilion",E="Combat Arena";var P,H;(function(e){e["CRAFTING_1"]="Crafting 1",e["HERBALISM_1"]="Herbalism 1",e["APOTHECARY_1"]="Apothecary 1",e["FORMATIONS_1"]="Formations 1",e["BEAST_TAMING_1"]="Beast Taming 1",e["VITALITY_PILL"]="Concoct Vitality Pill",e["SHIELD"]="Crafting Shields",e["ELEMENTAL_STONE"]="Crafting elemental stone"})(P||(P={})),function(e){e["CRAFTING_LEVEL_1"]="Crafting Level 1",e["HERBALISM_1"]="Growing Herbs 1",e["APOTHECARY_1"]="Making potions 1",e["VITALITY_PILL"]="Vitality Pill",e["SHIELD_BOOK"]="Crafting Shields",e["FORMATIONS_1"]="Formations Level 1",e["BEAST_TAMING_1"]="Beast Taming 1"}(H||(H={}));const M={name:H.CRAFTING_LEVEL_1,prerequisites:[],skill:P.CRAFTING_1},G={name:H.HERBALISM_1,prerequisites:[],skill:P.HERBALISM_1},B={name:H.APOTHECARY_1,prerequisites:[],skill:P.APOTHECARY_1},q={name:H.VITALITY_PILL,prerequisites:[P.APOTHECARY_1],skill:P.VITALITY_PILL},Y={name:H.SHIELD_BOOK,prerequisites:[P.CRAFTING_1],skill:P.SHIELD},U={name:H.FORMATIONS_1,prerequisites:[],skill:P.FORMATIONS_1},F={name:H.BEAST_TAMING_1,prerequisites:[],skill:P.BEAST_TAMING_1},N=[M,G,B,q,Y,U,F],O=(e,t)=>{console.log("Studying "+t.name),e.skills.learnSkill(t.skill)},W=e=>{const t=[];return N.filter((t=>!e.skills.knows(t.skill)&&t.prerequisites.every((t=>e.skills.knows(t))))).forEach((n=>t.push({name:`Study ${n.name}`,describe:`Studying ${n.name}`,action:()=>O(e,n)}))),t},K={title:"Library",icon:"library.png",built:()=>!0,build:()=>{},canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(A))),canGo:()=>!0,actions:W},R={name:"Cultivate",describe:"Cultivating",action:e=>e.cultivator.cultivate()},x={title:w,icon:"house.png",built:()=>!0,build:()=>{},canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(w))),canGo:()=>!0,defaultAction:R},$=()=>({selected:5,plots:[null,null,null,null,null,x,null,null,null,null,K,null,null,null,null,null]}),Z={name:"None",artefactKnowledge:0,craftingSkill:0},j={name:"Foundation",artefactKnowledge:5,craftingSkill:0},z={name:"Vision",artefactKnowledge:15,craftingSkill:3},V={name:"Dominance",artefactKnowledge:100,craftingSkill:100},J={name:"Transcendence",artefactKnowledge:1e3,craftingSkill:1e3},Q=e=>{switch(e){case 1:return j;case 2:return z;case 3:return V;case 4:return J;default:return Z}};class X{constructor(e){this.store=e.craftsman}level(){return this.store.craftsmanLevel}levelUp(){this.store.craftsmanLevel+=1}artefactKnowledge(){return this.store.artefactKnowledge}increaseArtefactKnowledge(e){const t=Q(this.level()+1);this.artefactKnowledge()<t.artefactKnowledge&&(this.store.artefactKnowledge+=e),this.nextCraftsmanLevel()}craftingSkill(){return this.store.craftingSkill}increaseCraftingSkill(e){const t=Q(this.level()+1);this.craftingSkill()<t.craftingSkill&&(this.store.craftingSkill+=e),this.nextCraftsmanLevel()}nextCraftsmanLevel(){const e=Q(this.level()+1);this.artefactKnowledge()>=e.artefactKnowledge&&this.craftingSkill()>=e.craftingSkill&&this.levelUp()}}const ee="Ginseng",te="Fire Lily",ne={name:ee,gestationPeriod:4,yield:4},ie={name:te,gestationPeriod:2,yield:8},oe=[ee,te],ae=[ne,ie],se=e=>ae.find((t=>t.name===e));var le;(function(e){e["VITALITY_PILL"]="Vitality Pill"})(le||(le={}));const re={name:le.VITALITY_PILL,ingredients:{[ee]:1},skill:P.VITALITY_PILL,yield:2},ce=[re],ue="Spirit Stone",pe="Mid-grade Spirit Stone",ge="Minerals",de={name:"Mortal",spiritEnergy:0,enlightenment:0,sense:0},me={name:"Foundation",spiritEnergy:10,enlightenment:0,sense:0},he={name:"Vision",spiritEnergy:100,enlightenment:10,sense:0},fe={name:"Dominance",spiritEnergy:1e3,enlightenment:100,sense:10},ve={name:"Transcendence",spiritEnergy:1e4,enlightenment:1e3,sense:100},_e=e=>{switch(e){case 1:return me;case 2:return he;case 3:return fe;case 4:return ve;default:return de}};class we{constructor(e,t){this.person=t,this.store=e.cultivation}qi(){return this.store.spiritEnergy}increaseQi(e){this.store.spiritEnergy+=e}level(){return this.store.level}levelUp(){this.store.level+=1}minLevel(e){return this.store.level>=e}enlightenment(){return this.store.enlightenment}sense(){return this.store.sense}nextLevelType(){return _e(this.level()+1)}cultivate(){this.qi()<this.nextLevelType().spiritEnergy&&(this.person.inventory.has(pe)>0?(this.person.inventory.take(pe,1),this.increaseQi(15)):this.person.inventory.has(ue)>0?(this.person.inventory.take(ue,1),this.increaseQi(5)):this.person.inventory.has(le.VITALITY_PILL)?(this.person.inventory.take(le.VITALITY_PILL,1),this.increaseQi(2)):this.increaseQi(1),this.nextLevel())}gainEnlightenment(){this.enlightenment()<this.nextLevelType().enlightenment&&(this.store.enlightenment+=1,this.nextLevel())}senseElements(){this.sense()<this.nextLevelType().sense&&(this.store.sense+=1,this.nextLevel())}nextLevel(){const e=this.nextLevelType();this.qi()>=e.spiritEnergy&&this.enlightenment()>=e.enlightenment&&this.sense()>=e.sense&&this.levelUp()}}class ye{constructor(e,t){this.store=e,this.person=t}set(e,t){this.store.action={action:e,target:t}}clear(){this.store.action=void 0}perform(){this.store.action&&this.store.action.action.action(this.person)}getTarget(){return this.store.action?this.store.action.target:""}hasAction(){return void 0!==this.store.action}getAction(){return this.store.action?this.store.action.action:null}doing(){let e;if(this.store.action)e=this.store.action.action.describe;else{const t=this.person.location.is();e=t?.defaultAction?.describe}return"string"===typeof e?e:"function"===typeof e?e(this.person):""}}class be{constructor(e){this.store=e.inventory}add(e,t){this.store[e]?this.store[e]+=t:this.store[e]=t}has(e){return this.store[e]?this.store[e]:0}take(e,t){this.store[e]?this.store[e]-=t:this.store[e]=0}items(){return Object.keys(this.store)}}const ke=(e,t)=>{Object.keys(t.ingredients).forEach((n=>e.inventory.take(n,t.ingredients[n]))),e.inventory.add(t.name,t.yield)},Se=e=>{const t=[];for(const n of ce){const i=!n.skill||e.skills.knows(n.skill),o=Object.keys(n.ingredients).every((t=>e.inventory.has(t)>=n.ingredients[t]));i&&o&&t.push({name:`Concoct ${n.name}`,describe:`Concocting ${n.name}`,action:()=>ke(e,n)})}return t},Le={title:T,icon:"apothecary.png",built:()=>dt.store.state.apothecary.apothecary,build:()=>dt.store.state.apothecary.apothecary=!0,canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(T))),canGo:e=>e.skills.knows(P.APOTHECARY_1)&&e.cultivator.level()>=1,actions:Se},Te=(e,t)=>{const n=t-e+1;return Math.floor(Math.random()*n)+e},Ie={name:"Explore for Spirit Stones",describe:"Exploring for Spirit Stones",action:e=>{e.inventory.add(ue,Te(3,5)),e.inventory.add(pe,Te(1,2))}},Ae={name:"Explore for Minerals",describe:"Exploring for Minerals",action:e=>{e.inventory.add(ge,Te(3,5))}},Ce={name:"Explore for Herbs",describe:"Exploring for Herbs",action:e=>{const t=Te(0,1);0===t?e.inventory.add(ee,Te(1,2)):1===t&&e.inventory.add(te,Te(1,2))}},De={title:I,icon:"map.png",built:()=>!0,build:()=>{},canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(I))),canGo:()=>!0,actions:()=>[Ie,Ae,Ce]},Ee={name:"Gain Enlightenment",describe:"Gaining Enlightenment",action:e=>e.cultivator.gainEnlightenment()},Pe={title:y,icon:"mountain.png",built:()=>dt.store.state.residence.mountain,build:()=>dt.store.state.residence.mountain=!0,canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(y))),canGo:e=>e.cultivator.minLevel(1),defaultAction:Ee},He={name:"Sense Elements",describe:"Sensing Elements",action:e=>e.cultivator.senseElements()},Me={title:b,icon:"cave.png",built:()=>dt.store.state.residence.seclusion,build:()=>dt.store.state.residence.seclusion=!0,canBuild:()=>Pe.built(),occupants:()=>dt.people().filter((e=>e.location.eq(b))),canGo:e=>e.cultivator.minLevel(2),defaultAction:He},Ge={title:"Trial Realm",icon:"trial.png",built:()=>dt.store.state.residence.trialRealm,build:()=>dt.store.state.residence.trialRealm=!0,canBuild:()=>Me.built(),occupants:()=>[],canGo:()=>!1};var Be={plant(e,t){console.log("Planting "+e),dt.store.state.apothecary.farm.push({herb:e,gestation:0,person:t})},grow(){const e=dt.store.state.apothecary.farm;for(const t of e){t.gestation+=1;const e=se(t.herb);if(e&&t.gestation>=e.gestationPeriod){t.person.inventory.add(t.herb,e.yield);const n=dt.store.state.apothecary.farm.indexOf(t);dt.store.state.apothecary.farm.splice(n,1)}}},getDetails(){const e=[];for(const t of dt.store.state.apothecary.farm){const n=se(t.herb);e.push({item:t.herb,detail:`Gestation ${t.gestation}/${n?.gestationPeriod} for person ${t.person.id()}`})}return e}};const qe=e=>{const t=[];return oe.filter((t=>e.inventory.has(t))).forEach((n=>t.push({name:`Plant ${n}`,describe:`Planting ${n}`,action:()=>Be.plant(n,e)}))),t},Ye={title:"Herb Farm",icon:"herb-farm.png",details(){return Be.getDetails()},built:()=>dt.store.state.apothecary.herbFarm,build:()=>dt.store.state.apothecary.herbFarm=!0,canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(L))),canGo:e=>e.skills.knows(P.HERBALISM_1)&&e.cultivator.level()>=1,actions:qe},Ue={name:"Shield",craftsmanLevel:1,materials:{[ue]:1,[ge]:1},skill:P.SHIELD,createNew:()=>({type:"Shield"})},Fe={name:"Elemental Stone",craftsmanLevel:2,materials:{[ue]:2,[ge]:1},skill:P.ELEMENTAL_STONE,createNew:()=>({type:"Elemental Stone"})},Ne=[Ue,Fe],Oe={craft(e,t){if(console.log("crafting"),e){console.log(e);for(const n of Object.keys(e.materials)){const i=e.materials[n];t.inventory.take(n,i)}t.craftsman.increaseCraftingSkill(1),t.inventory.add(e.name,1)}}},We=(e,t)=>{const n=Object.keys(t.materials).every((n=>e.inventory.has(n)>=t.materials[n])),i=e.skills.knows(t.skill);return i&&n},Ke=e=>{const t=[];return Ne.filter((t=>We(e,t))).forEach((n=>{t.push({name:`Craft ${n.name}`,describe:()=>`Crafting ${n.name}`,action:()=>Oe.craft(n,e)})})),t},Re={title:S,icon:"furnace.png",built:()=>dt.furnace(),build:()=>dt.buildFurnace(),canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(S))),canGo:e=>e.skills.knows(P.CRAFTING_1),actions:Ke},xe={title:C,icon:"beast.png",built:()=>dt.store.state.beastPen.built,build:()=>dt.store.state.beastPen.built=!0,canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(C))),canGo:e=>e.cultivator.level()>=1&&e.skills.knows(P.BEAST_TAMING_1),actions:()=>[]},$e={title:D,icon:"rune.jpg",built:()=>dt.store.state.formationPavilion.built,build:()=>dt.store.state.formationPavilion.built=!0,canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(D))),canGo:e=>e.cultivator.level()>=1&&e.skills.knows(P.FORMATIONS_1),actions:()=>[]},Ze={title:E,icon:"arena.png",built:()=>dt.store.state.arena.built,build:()=>dt.store.state.arena.built=!0,canBuild:()=>!0,occupants:()=>dt.people().filter((e=>e.location.eq(E))),canGo:()=>!0,actions:()=>[]},je=[De,x,Pe,Me,Ge,Ye,Le,Re,K,$e,Ze,xe],ze=e=>{const t=je.find((t=>t.title===e));if(!t)throw"Error finding building for name "+e;return t};class Ve{constructor(e){this.store=e}eq(e){return this.store.location===e}goTo(e){this.store.location=e}is(){return ze(this.store.location)}}class Je{constructor(e){this.store=e}learnSkill(e){this.store.skills.push(e)}listAll(){return this.store.skills}knows(e){return this.store.skills.includes(e)}}const Qe=(e,t)=>{if(e.pre)for(const n of e.pre(t))if(n.g.complete(t,n.q))console.log("Complete goal action: "+n.g.name);else if(Qe(n.g,t),t.action.hasAction())return;console.log("Start goal action: "+e.name),e.action(t)};class Xe{constructor(e,t){this.store=e.goal,this.person=t}assignGoal(e){console.log("Assign goal "+e.name),this.store.type=e,this.processGoal()}hasGoal(){return void 0!==this.store.type}goalName(){return this.store.type?.name}processGoal(){this.store.type&&(this.store.type.complete(this.person)?(console.log("Complete goal action: "+this.store.type.name),this.store.type=void 0):(Qe(this.store.type,this.person),this.store.type.complete(this.person)&&(console.log("Complete goal action: "+this.store.type.name),this.store.type=void 0)))}}class et{constructor(e){this.ps=e,this.cultivator=new we(this.ps,this),this.inventory=new be(this.ps),this.location=new Ve(this.ps),this.craftsman=new X(this.ps),this.action=new ye(this.ps,this),this.skills=new Je(this.ps),this.goals=new Xe(this.ps,this)}id(){return this.ps.id}name(){return this.ps.name}face(){return`assets/img/faces/${this.ps.face}.png`}gender(){return this.ps.gender}isSelected(){return this.ps.id===dt.getSelectedPersonId()}}var tt;(function(e){e["Male"]="Male",e["Female"]="Female"})(tt||(tt={}));const nt=()=>{const e=Math.floor(2*Math.random());return 1===e?tt.Male:tt.Female},it=e=>{if(e===tt.Male){const e=Math.floor(20*Math.random())+1;return`male${e<10?"0":""}${e}`}{const e=Math.floor(30*Math.random())+1;return`female${e<10?"0":""}${e}`}},ot=["Bai","Cai","Cao","Chang","Chen","Cheng","Cui","Dai","Deng","Ding","Dong","Du","Duan","Fan","Fang","Feng","Fu","Gao","Gong","Gu","Guo","Han","Hao","He","Hou","Hong","Hu","Huang","Jia","Jian","Jiang","Jin","Kang","Ke","Kong","Lai","Lei","Li","Liang","Liao","Lin","Liu","Long","Lu","Luo","Ma","Mao","Meng","Mo","Ou","Pan","Peng","Qian","Qiao","Qin","Qiu","Ren","Shao","Shen","Shi","Song","Su","Sun","Tan","Tang","Tao","Tian","Wan","Wang","Wei","Wen","Wu","Xia","Xiang","Xiao","Xie","Xin","Xiong","Xu","Xue","Yan","Yang","Yao","Ye","Yi","Yin","Yu","Yuan","Zeng","Zhang","Zhao","Zheng","Zhong","Zhou","Zhu","Zhuang","Zou"],at=["Xiu","Zixuan","Zihan","Yuxuan","Yuze","Xiang","Wei","Tao","Shi","Kai","Hao-Yu","Haoran","Guo","Fu","Dong","Da-Fu","Chih-Cheng","Chen","Chao","Bowen","Aiguo","Tu","Syaoran","Taio","Shen","Shan","Ming","Manchu","Longwei","Lim","Lee","Kuo","Kong","Kang","Jing","Jiao-Long","Hu","Hou","Hong","Fa","Dingbang","Delun","Chung","Chaun","Chang","Li Qiang","Li Jun","Bambang","Zhang Yong","Li Jie"],st=["Alix","Bethsheba","Hien","Gho","Diu","Da Xia","Genji","Hop","Huan","Jia Li","Jiao","Liling","Lin","Liu","Loi","Luan","Meilin","Meiling","Niu","Nuo","Qing","Nuwa","Qi","Na","Li Hua","Lixue","Nuan","Ming Yue","Mey","Meiying","Lien","Lian","Li Ming","Lai","Pangfua","Qinyang","Ting","Ushi","Yun","Caihong","Ju","Jilpa","Heng","Genji","Da Xia","Chu","Bo","Bai","Wang Fang","Li Jing"],lt=e=>{const t=Math.floor(Math.random()*ot.length),n=ot[t];if(e===tt.Male){const e=Math.floor(Math.random()*at.length),t=at[e];return`${n} ${t}`}{const e=Math.floor(Math.random()*st.length),t=st[e];return`${n} ${t}`}};let rt=1;const ct=()=>{const e=nt(),t=lt(e),n=it(e);return{id:rt++,name:t,gender:e,face:n,location:w,doing:"",cultivation:{level:0,spiritEnergy:0,enlightenment:0,sense:0},craftsman:{artefactKnowledge:0,craftsmanLevel:0,craftingTarget:"",craftingSkill:0},inventory:{},skills:[],goal:{type:void 0}}},ut=e=>_e(e).name,pt=(0,_.MT)({state:{selectedPerson:void 0,artefactSchool:!1,furnace:!1,people:[],inventory:{},residence:{mountain:!1,seclusion:!1,trialRealm:!1},apothecary:{herbFarm:!1,farm:[],apothecary:!1},library:{built:!0},beastPen:{built:!1},formationPavilion:{built:!1},arena:{built:!1},buildingsStore:$()}}),gt=e=>{const t=pt.state.people.find((t=>t.id===e));return t?new et(t):void 0};var dt={store:pt,artefactSchool:()=>pt.state.artefactSchool,furnace:()=>pt.state.furnace,people:()=>pt.state.people.map((e=>new et(e))),buildSchool:()=>{pt.state.artefactSchool=!0},buildFurnace:()=>{pt.state.furnace=!0},recruit(){const e=ct();pt.state.people.push(e),this.setSelectedPerson(e.id)},getPerson:gt,inventory:()=>pt.state.inventory,setSelectedPerson(e){pt.state.selectedPerson=e},getSelectedPersonId(){return pt.state.selectedPerson},getSelectedPerson(){return pt.state.selectedPerson?gt(pt.state.selectedPerson):void 0}},mt={add:(e,t)=>{console.log(`adding to inventory ${e} x ${t}`);const n=dt.store.state.inventory;n[e]?n[e]+=t:n[e]=t},consume:(e,t)=>{const n=dt.store.state.inventory;n[e]-=t},list:()=>Object.keys(dt.store.state.inventory),quantity:e=>dt.store.state.inventory[e]};const ht=(0,o._)("h2",null,"Inventory",-1);var ft={__name:"InventorySection",setup(e){const t=()=>mt.list();return(e,n)=>((0,o.wg)(),(0,o.j4)(g,null,{default:(0,o.w5)((()=>[ht,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t(),((e,t)=>((0,o.wg)(),(0,o.j4)(v,{key:t},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e)+": "+(0,s.zw)((0,a.SU)(mt).quantity(e)),1)])),_:2},1024)))),128))])),_:1}))}};const vt=ft;var _t=vt;function wt(e,t){return(0,o.wg)(),(0,o.iD)("button",null,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}const yt={},bt=(0,c.Z)(yt,[["render",wt],["__scopeId","data-v-d9ffa608"]]);var kt=bt;const St={class:"sidePanel"};function Lt(e,t){return(0,o.wg)(),(0,o.iD)("div",St,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}const Tt={},It=(0,c.Z)(Tt,[["render",Lt],["__scopeId","data-v-99f5b094"]]);var At=It;const Ct={class:"next-steps"};function Dt(e,t){return(0,o.wg)(),(0,o.iD)("div",Ct,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}const Et={},Pt=(0,c.Z)(Et,[["render",Dt],["__scopeId","data-v-fd54e5dc"]]);var Ht=Pt;const Mt=e=>((0,o.dD)("data-v-3332a554"),e=e(),(0,o.Cn)(),e),Gt=Mt((()=>(0,o._)("h2",null,"Cultivation",-1)));var Bt={__name:"CultivationDetails",props:{person:et},setup(e){const t=e,n=(0,o.Fl)((()=>t.person.cultivator));return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[Gt,(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Spirit Energy: "+(0,s.zw)((0,a.SU)(n).qi()),1)])),_:1}),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Enlightenment: "+(0,s.zw)((0,a.SU)(n).enlightenment()),1)])),_:1}),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Sense: "+(0,s.zw)((0,a.SU)(n).sense()),1)])),_:1}),(0,o.Wm)(Ht,null,{default:(0,o.w5)((()=>[(0,o._)("label",null,"Next level: "+(0,s.zw)((0,a.SU)(n).nextLevelType().name),1),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Spirit Energy: "+(0,s.zw)((0,a.SU)(n).nextLevelType().spiritEnergy),1)])),_:1}),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Enlightenment: "+(0,s.zw)((0,a.SU)(n).nextLevelType().enlightenment),1)])),_:1})])),_:1})],64))}};const qt=(0,c.Z)(Bt,[["__scopeId","data-v-3332a554"]]);var Yt=qt;const Ut=e=>((0,o.dD)("data-v-3f52b468"),e=e(),(0,o.Cn)(),e),Ft=Ut((()=>(0,o._)("h2",null,"Craftsman",-1)));var Nt={__name:"CraftsmanDetails",props:{person:Object},setup(e){const t=e,n=(0,o.Fl)((()=>t.person.craftsman));return(e,i)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[Ft,(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Craftsman level: "+(0,s.zw)((0,a.SU)(Q)(t.person.craftsman.level()).name),1)])),_:1}),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Artefact Knowledge: "+(0,s.zw)((0,a.SU)(n).artefactKnowledge()),1)])),_:1}),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Crafting Skill: "+(0,s.zw)((0,a.SU)(n).craftingSkill()),1)])),_:1})],64))}};const Ot=(0,c.Z)(Nt,[["__scopeId","data-v-3f52b468"]]);var Wt=Ot;const Kt=e=>((0,o.dD)("data-v-68849a79"),e=e(),(0,o.Cn)(),e),Rt={key:0},xt=Kt((()=>(0,o._)("h2",null,"Actions...",-1))),$t=["onClick"];var Zt={__name:"BuildingActions",props:{person:et},setup(e){const t=e,n=(0,a.iH)(""),l=()=>t.person.location.is(),r=e=>t.person.action.set(e,n.value);return(a,c)=>l().actions&&!t.person.action.hasAction()?((0,o.wg)(),(0,o.iD)("div",Rt,[xt,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l().actions(e.person),((t,a)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:a},[t.targets&&t.targets(e.person)?(0,o.wy)(((0,o.wg)(),(0,o.iD)("select",{key:0,"onUpdate:modelValue":c[0]||(c[0]=e=>n.value=e)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.targets(e.person),((e,t)=>((0,o.wg)(),(0,o.iD)("option",{key:t},(0,s.zw)(e),1)))),128))],512)),[[i.bM,n.value]]):(0,o.kq)("",!0),(0,o._)("span",{class:"action",onClick:e=>r(t)},(0,s.zw)(t.name),9,$t)],64)))),128))])):(0,o.kq)("",!0)}};const jt=(0,c.Z)(Zt,[["__scopeId","data-v-68849a79"]]);var zt=jt;const Vt={class:"inventory"},Jt=(0,o._)("h2",null,"Inventory",-1);var Qt={__name:"PersonInventory",props:{person:et},setup(e){const t=e;return(e,n)=>((0,o.wg)(),(0,o.iD)("div",Vt,[Jt,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.person.inventory.items(),((e,n)=>((0,o.wg)(),(0,o.j4)(v,{key:n},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e)+": "+(0,s.zw)(t.person.inventory.has(e)),1)])),_:2},1024)))),128))]))}};const Xt=Qt;var en=Xt;const tn={class:"banner"},nn=["src"],on={class:"right"},an=(0,o.Uk)(" Doing: ");var sn={__name:"PersonBanner",props:{person:et},setup(e){const t=e,n=(0,o.Fl)((()=>t.person.action)),i=()=>`/celestial-warfare/${t.person.face()}`;return(e,l)=>((0,o.wg)(),(0,o.iD)("span",tn,[(0,o._)("img",{src:i()},null,8,nn),(0,o._)("span",on,[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Name: "+(0,s.zw)(t.person.name()),1)])),_:1}),(0,a.SU)(n).hasAction()||t.person.location.is()?.defaultAction?((0,o.wg)(),(0,o.j4)(v,{key:0},{default:(0,o.w5)((()=>[an,(0,o._)("strong",null,(0,s.zw)((0,a.SU)(n).doing()),1)])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Level: "+(0,s.zw)((0,a.SU)(ut)(t.person.cultivator.level())),1)])),_:1})])]))}};const ln=(0,c.Z)(sn,[["__scopeId","data-v-0f39b86f"]]);var rn=ln;const cn={class:"person"},un={class:"details"};function pn(e,t){return(0,o.wg)(),(0,o.iD)("span",cn,[(0,o._)("span",un,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])}const gn={},dn=(0,c.Z)(gn,[["render",pn],["__scopeId","data-v-4fba9e18"]]);var mn=dn;const hn=e=>((0,o.dD)("data-v-406eb49c"),e=e(),(0,o.Cn)(),e),fn={key:0},vn=hn((()=>(0,o._)("h2",null,"Go to...",-1))),_n=["onClick","title"],wn=["src"];var yn={__name:"PersonActions",props:{person:et},setup(e){const t=e,n=e=>`/celestial-warfare/assets/img/${e.icon}`;return(e,i)=>t.person.action.hasAction()?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",fn,[vn,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,a.SU)(je),((e,i)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:i},[!t.person.location.eq(e.title)&&e.canGo(t.person)&&e.built()?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"goto",onClick:n=>t.person.location.goTo(e.title),title:"Go to "+e.title},[(0,o._)("img",{src:n(e.icon)},null,8,wn)],8,_n)):(0,o.kq)("",!0)],64)))),128))]))}};const bn=(0,c.Z)(yn,[["__scopeId","data-v-406eb49c"]]);var kn=bn;const Sn={key:0},Ln=(0,o._)("h2",null,"Skills",-1);var Tn={__name:"PersonSkills",props:{person:et},setup(e){const t=e;return(e,n)=>t.person.skills.listAll().length>0?((0,o.wg)(),(0,o.iD)("div",Sn,[Ln,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.person.skills.listAll(),((e,t)=>((0,o.wg)(),(0,o.j4)(v,{key:t},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e),1)])),_:2},1024)))),128))])):(0,o.kq)("",!0)}};const In=Tn;var An=In;const Cn=(e,t)=>{const n=5*e.inventory.has(ue)+15*e.inventory.has(pe);return n>=t},Dn={name:"Get Spirit Stones",complete:(e,t)=>Cn(e,t||1),action:e=>{e.location.goTo(I),e.action.set(Ie,"")}},En={name:"Get Minerals",complete:(e,t)=>e.inventory.has(ge)>=(t||1),action:e=>{e.location.goTo(I),e.action.set(Ae,"")}},Pn={name:"Get Ginseng",complete:(e,t)=>e.inventory.has(ee)>=(t||!0),action:e=>{e.location.goTo(I),e.action.set(Ce,"")}},Hn={name:"Get Fire lily",complete:(e,t)=>e.inventory.has(te)>=(t||!0),action:e=>{e.location.goTo(I),e.action.set(Ce,"")}},Mn={name:"Get Foundation Level",complete:e=>e.cultivator.level()>=1,pre:()=>[{g:Dn,q:me.spiritEnergy}],action:e=>{e.location.goTo(w),e.action.set(R,"")}},Gn={name:"Build mountain",complete:()=>Pe.built(),action:()=>Pe.build()},Bn={name:"Cultivate qi",complete:(e,t)=>!t||e.cultivator.qi()>=t,action:e=>{e.location.goTo(w),e.action.set(R,"")}},qn={name:"Gain enlightenment",complete:(e,t)=>!t||e.cultivator.enlightenment()>=t,pre:()=>[{g:Gn}],action:e=>{e.location.goTo(y),e.action.set(Ee,"")}},Yn={name:"Get Vision Level",complete:e=>e.cultivator.level()>=2,pre:e=>[{g:Mn},{g:Dn,q:he.spiritEnergy-e.cultivator.qi()},{g:Bn,q:he.spiritEnergy},{g:qn,q:he.enlightenment}],action:()=>{}},Un=(e,t)=>{e.location.goTo(A);const n=W(e).find((e=>e.name.includes(t)));if(!n)throw`Cannot find ${t} book to read`;e.action.set(n,"")},Fn={name:"Learn Apothecary",complete:e=>e.skills.knows(P.APOTHECARY_1),action:e=>Un(e,H.APOTHECARY_1)},Nn={name:"Build Apothecary",complete:()=>Le.built(),action:()=>Le.build()},On={name:"Go to Apothecary",complete:e=>e.location.eq(T),pre:()=>[{g:Mn},{g:Fn},{g:Nn}],action:e=>e.location.goTo(T)},Wn={name:"Study Vitality Pill",complete:e=>e.skills.knows(P.VITALITY_PILL),pre:()=>[{g:Fn}],action:e=>Un(e,H.VITALITY_PILL)},Kn={name:"Concoct Vitality Pill",complete:e=>e.inventory.has(le.VITALITY_PILL)>=1,pre:()=>[{g:Wn},{g:Pn,q:1},{g:On}],action:e=>{const t=Se(e).find((e=>e.name.includes(le.VITALITY_PILL)));if(!t)throw"Couldn't find vitality pill action";e.action.set(t,"")}},Rn={name:"Build Furnace",complete:()=>Re.built(),action:()=>Re.build()},xn={name:"Learn crafting",complete:e=>e.skills.knows(P.CRAFTING_1),action:e=>Un(e,H.CRAFTING_LEVEL_1)},$n={name:"Go to furnace",complete:e=>e.location.eq(S),pre:()=>[{g:Mn},{g:xn},{g:Rn}],action:e=>e.location.goTo(S)},Zn={name:"Learn crafting shield",complete:e=>e.skills.knows(P.SHIELD),action:e=>Un(e,H.SHIELD_BOOK)},jn={name:"Craft shield",complete:e=>e.inventory.has(Ue.name)>=1,pre:()=>[{g:Mn},{g:xn},{g:Zn},{g:Dn,q:Ue.materials[ue]},{g:En,q:Ue.materials[ge]},{g:$n}],action:e=>{const t=Ke(e).find((e=>e.name.includes(Ue.name)));if(!t)throw"error finding craft shield action";e.action.set(t,"")}},zn={name:"Build beast pavilion",complete:()=>xe.built(),action:()=>xe.build()},Vn={name:"Learn beast taming",complete:e=>e.skills.knows(P.BEAST_TAMING_1),action:e=>Un(e,H.BEAST_TAMING_1)},Jn={name:"Go to Beast Pavilion",complete:e=>e.location.eq(C),pre:()=>[{g:Mn},{g:Vn},{g:zn}],action:e=>e.location.goTo(C)},Qn={name:"Build arena",complete:()=>Ze.built(),action:()=>Ze.build()},Xn={name:"Go to arena",complete:e=>e.location.eq(E),pre:()=>[{g:Mn},{g:Qn}],action:e=>e.location.goTo(E)},ei={name:"Build formation pavilion",complete:()=>$e.built(),action:()=>$e.build()},ti={name:"Learn formations",complete:e=>e.skills.knows(P.FORMATIONS_1),action:e=>Un(e,H.FORMATIONS_1)},ni={name:"Go to Formation Pavilion",complete:e=>e.location.eq(D),pre:()=>[{g:Mn},{g:ti},{g:ei}],action:e=>e.location.goTo(D)},ii={name:"Learn Herbalism",complete:e=>e.skills.knows(P.HERBALISM_1),action:e=>Un(e,H.HERBALISM_1)},oi={name:"Build Herb Farm",complete:()=>Ye.built(),action:()=>Ye.build()},ai={name:"Go to Herb Farm",complete:e=>e.location.eq(L),pre:()=>[{g:Mn},{g:ii},{g:oi}],action:e=>e.location.goTo(L)},si={name:"Plant fire lily",complete:e=>Be.getDetails().some((t=>t.item===te&&t.detail.includes(`${e.id()}`))),pre:()=>[{g:Hn},{g:ai}],action:e=>{const t=qe(e).find((e=>e.name.includes(te)));if(!t)throw"No action to plant fire lily";e.action.set(t,"")}},li={name:"Plant ginseng",complete:e=>Be.getDetails().some((t=>t.item===ee&&t.detail.includes(`${e.id()}`))),pre:()=>[{g:Pn},{g:ai}],action:e=>{const t=qe(e).find((e=>e.name.includes(ee)));if(!t)throw"No action to plant ginseng";e.action.set(t,"")}},ri=[Mn,Yn,Dn,En,Pn,Fn,Nn,On,Kn,ii,oi,ai,si,li,Rn,xn,$n,Zn,jn,ei,ti,ni,zn,Vn,Jn,Qn,Xn],ci=e=>{const t=ri.find((t=>t.name===e));if(!t)throw"No goal found for name "+e;return t},ui=e=>((0,o.dD)("data-v-419a5599"),e=e(),(0,o.Cn)(),e),pi=ui((()=>(0,o._)("h2",null,"Goals",-1))),gi=(0,o.Uk)(" Current goal: "),di=(0,o.Uk)(" No goals ");var mi={__name:"PersonGoals",props:{person:et},setup(e){const t=e,n=(0,a.iH)(null),l=()=>ri.filter((e=>!e.complete(t.person))),r=()=>n.value?ci(n.value):null,c=()=>n.value,u=()=>t.person.goals.assignGoal(r());return(e,a)=>((0,o.wg)(),(0,o.iD)("div",null,[pi,!t.person.action.hasAction()&&l().length>0?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l(),((e,t)=>((0,o.wg)(),(0,o.iD)("option",{key:t},(0,s.zw)(e.name),1)))),128))],512),[[i.bM,n.value]]),c()?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:u},"Assign goal")):(0,o.kq)("",!0)],64)):t.person.goals.hasGoal()?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[gi,(0,o._)("strong",null,(0,s.zw)(t.person.goals.goalName()),1)],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[di],64))]))}};const hi=(0,c.Z)(mi,[["__scopeId","data-v-419a5599"]]);var fi=hi,vi={__name:"PersonDetails",props:{person:et},setup(e){const t=e,n=()=>t.person.location.eq(w)||t.person.location.eq(y)||t.person.location.eq(b),i=()=>t.person.location.eq(k)||t.person.location.eq(S);return(e,a)=>((0,o.wg)(),(0,o.j4)(mn,null,{default:(0,o.w5)((()=>[(0,o.Wm)(rn,{person:t.person},null,8,["person"]),(0,o.Wm)(en,{person:t.person},null,8,["person"]),(0,o.Wm)(An,{person:t.person},null,8,["person"]),(0,o._)("h3",null,"At "+(0,s.zw)(t.person.location.is().title),1),n()?((0,o.wg)(),(0,o.j4)(Yt,{key:0,person:t.person},null,8,["person"])):(0,o.kq)("",!0),i()?((0,o.wg)(),(0,o.j4)(Wt,{key:1,person:t.person},null,8,["person"])):(0,o.kq)("",!0),(0,o.Wm)(zt,{person:t.person},null,8,["person"]),(0,o.Wm)(fi,{person:t.person},null,8,["person"]),(0,o.Wm)(kn,{person:t.person},null,8,["person"])])),_:1}))}};const _i=(0,c.Z)(vi,[["__scopeId","data-v-3b4d2570"]]);var wi=_i;const yi=["src"];var bi={__name:"BuildingLabel",props:{img:String,title:String,center:{type:Boolean,default:!1}},setup(e){const t=e;console.log("process.env.BASE_URL: /celestial-warfare/");const n=()=>`/celestial-warfare/assets/img/${t.img}`;return(e,i)=>((0,o.wg)(),(0,o.iD)("label",{class:(0,s.C_)(t.center?"center":"")},[(0,o._)("img",{src:n()},null,8,yi),(0,o.Uk)(" "+(0,s.zw)(t.title),1)],2))}};const ki=(0,c.Z)(bi,[["__scopeId","data-v-05bb8b78"]]);var Si=ki;const Li=["src"],Ti=["src"];var Ii={__name:"PersonMeeple",props:{person:et},setup(e){const t=e,n=()=>"/celestial-warfare/assets/img/blue_meeple.webp",i=()=>"/celestial-warfare/assets/img/pink_meeple.webp";return(e,s)=>t.person.gender()===(0,a.SU)(tt).Male?((0,o.wg)(),(0,o.iD)("img",{key:0,src:n()},null,8,Li)):((0,o.wg)(),(0,o.iD)("img",{key:1,src:i()},null,8,Ti))}};const Ai=(0,c.Z)(Ii,[["__scopeId","data-v-12d8b384"]]);var Ci=Ai;const Di=100,Ei=()=>dt.store.state.buildingsStore,Pi={isBuildingSelected(e){return Ei().selected===e},selectBuilding(e){Ei().selected=e},getSelectedBuilding(){return Ei().selected===Di?De:Ei().plots[Ei().selected]},getPlots(){return Ei().plots},build(e){e.build(),Ei().plots[Ei().selected]=e}},Hi={key:0,class:"centered"};var Mi={__name:"BuildingDiv",props:{building:{},plotNumber:Number},setup(e){const t=e,n=()=>Pi.isBuildingSelected(t.plotNumber),i=()=>Pi.selectBuilding(t.plotNumber);return(e,a)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(["building",n()?"selected":""]),onClick:i},[t.building?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(Si,{img:t.building.icon,title:t.building.title,center:!0},null,8,["img","title"]),t.building.details?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:0},(0,o.Ko)(t.building.details(),((e,t)=>((0,o.wg)(),(0,o.j4)(v,{key:t},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.item)+": "+(0,s.zw)(e.detail),1)])),_:2},1024)))),128)):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.building.occupants(),((e,t)=>((0,o.wg)(),(0,o.j4)(Ci,{key:t,person:e},null,8,["person"])))),128))],64)):((0,o.wg)(),(0,o.iD)("label",Hi,"Empty land"))],2))}};const Gi=(0,c.Z)(Mi,[["__scopeId","data-v-72d718f1"]]);var Bi=Gi;const qi=e=>((0,o.dD)("data-v-25aa8212"),e=e(),(0,o.Cn)(),e),Yi={key:0},Ui=qi((()=>(0,o._)("img",{src:"/assets/img/symbol_male.png"},null,-1))),Fi=[Ui],Ni={key:1},Oi=qi((()=>(0,o._)("img",{src:"/assets/img/symbol_female.png"},null,-1))),Wi=[Oi];var Ki={__name:"PersonGender",props:{person:et},setup(e){const t=e;return(e,n)=>t.person.gender()===(0,a.SU)(tt).Male?((0,o.wg)(),(0,o.iD)("span",Yi,Fi)):((0,o.wg)(),(0,o.iD)("span",Ni,Wi))}};const Ri=(0,c.Z)(Ki,[["__scopeId","data-v-25aa8212"]]);var xi=Ri;const $i=["src"],Zi={class:"right"};var ji={__name:"PersonSynopsis",props:{person:et},setup(e){const t=e,n=(0,o.Fl)((()=>t.person.action)),i=()=>t.person.isSelected(),l=()=>dt.setSelectedPerson(t.person.id());return(e,r)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(["banner",i()?"selected":"clickable"]),onClick:l},[(0,o._)("img",{src:t.person.face()},null,8,$i),(0,o._)("span",Zi,[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(xi,{person:t.person},null,8,["person"]),(0,o.Uk)((0,s.zw)(t.person.name()),1)])),_:1}),(0,a.SU)(n).hasAction()||t.person.location.is()?.defaultAction?((0,o.wg)(),(0,o.j4)(v,{key:0},{default:(0,o.w5)((()=>[(0,o._)("strong",null,(0,s.zw)((0,a.SU)(n).doing()),1)])),_:1})):(0,o.kq)("",!0)])],2))}};const zi=(0,c.Z)(ji,[["__scopeId","data-v-6337f314"]]);var Vi=zi;const Ji=e=>((0,o.dD)("data-v-273b0466"),e=e(),(0,o.Cn)(),e),Qi={class:"buildingBar"},Xi={key:1,class:"chooseBuilding"},eo=["onClick"],to=Ji((()=>(0,o._)("label",{class:"title"},"Build:",-1)));var no={__name:"BuildingBar",setup(e){const t=()=>Pi.getSelectedBuilding(),n=()=>je.filter((e=>!e.built()&&e.canBuild())),i=e=>Pi.build(e);return(e,a)=>((0,o.wg)(),(0,o.iD)("div",Qi,[t()&&t().built()?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Wm)(Si,{img:t().icon,title:t().title},null,8,["img","title"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t().occupants(),((e,t)=>((0,o.wg)(),(0,o.j4)(Vi,{key:t,person:e},null,8,["person"])))),128))],64)):((0,o.wg)(),(0,o.iD)("div",Xi,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n(),((e,t)=>((0,o.wg)(),(0,o.iD)("span",{key:t,class:"canBuild",onClick:t=>i(e)},[to,(0,o.Wm)(Si,{img:e.icon,title:e.title},null,8,["img","title"])],8,eo)))),128))]))]))}};const io=(0,c.Z)(no,[["__scopeId","data-v-273b0466"]]);var oo=io;const ao={class:"sect"};var so={__name:"AllBuildings",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(oo),(0,o.Wm)(Bi,{building:(0,a.SU)(De),plotNumber:(0,a.SU)(Di)},null,8,["building","plotNumber"]),(0,o._)("div",ao,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,a.SU)(Pi).getPlots(),((e,t)=>((0,o.wg)(),(0,o.j4)(Bi,{key:t,building:e,plotNumber:t},null,8,["building","plotNumber"])))),128))])],64))}};const lo=(0,c.Z)(so,[["__scopeId","data-v-0a4eed52"]]);var ro=lo;const co=()=>{dt.people().forEach((e=>{if(e.action.hasAction())e.action.perform(),e.action.clear();else{const t=e.location.is();t?.defaultAction&&t.defaultAction.action(e)}e.goals.hasGoal()&&e.goals.processGoal()})),Be.grow()},uo={class:"main"},po={class:"buildings"},go=(0,o.Uk)("Recruit"),mo=(0,o.Uk)("Next Tick");var ho={__name:"App",setup(e){const t=()=>{const e=dt.getSelectedPerson();return e};return(e,n)=>((0,o.wg)(),(0,o.iD)("div",uo,[(0,o._)("div",po,[(0,o.Wm)(ro),(0,o.Wm)(_t)]),(0,o.Wm)(At,null,{default:(0,o.w5)((()=>[(0,o.Wm)(kt,{onClick:n[0]||(n[0]=e=>(0,a.SU)(dt).recruit())},{default:(0,o.w5)((()=>[go])),_:1}),t()?((0,o.wg)(),(0,o.j4)(wi,{key:0,person:t()},null,8,["person"])):(0,o.kq)("",!0),(0,o.Wm)(kt,{onClick:(0,a.SU)(co)},{default:(0,o.w5)((()=>[mo])),_:1},8,["onClick"])])),_:1})]))}};const fo=(0,c.Z)(ho,[["__scopeId","data-v-5e078cbc"]]);var vo=fo;(0,i.ri)(vo).use(dt.store).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var s=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],a=e[u][2];for(var l=!0,r=0;r<i.length;r++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[r])}))?i.splice(r--,1):(l=!1,a<s&&(s=a));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,s=i[0],l=i[1],r=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(r)var u=r(n)}for(t&&t(i);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunkcelestial_warfare"]=self["webpackChunkcelestial_warfare"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2155)}));i=n.O(i)})();
//# sourceMappingURL=app.a6358a37.js.map