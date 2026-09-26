// Rounded generic values per 100 g; recipe, brand and preparation differences matter.
export const foods=[
{id:'chicken',name:'Chicken breast · cooked',calories:165,protein:31,carbs:0,fat:3.6,fiber:0},
{id:'salmon',name:'Salmon · cooked',calories:206,protein:22,carbs:0,fat:12,fiber:0},
{id:'tofu',name:'Firm tofu',calories:144,protein:17,carbs:3,fat:8.7,fiber:2.3},
{id:'egg',name:'Whole egg · cooked (1 egg ≈ 50 g)',calories:155,protein:12.6,carbs:1.1,fat:10.6,fiber:0},
{id:'yogurt',name:'Plain nonfat Greek yogurt',calories:59,protein:10.2,carbs:3.6,fat:.4,fiber:0},
{id:'lentils',name:'Lentils · cooked',calories:116,protein:9,carbs:20,fat:.4,fiber:7.9},
{id:'beans',name:'Black beans · cooked',calories:132,protein:8.9,carbs:23.7,fat:.5,fiber:8.7},
{id:'tuna',name:'Tuna · canned in water, drained',calories:116,protein:25.5,carbs:0,fat:.8,fiber:0},
{id:'beef',name:'Lean beef · cooked',calories:217,protein:26,carbs:0,fat:12,fiber:0},
{id:'rice',name:'Brown rice · cooked',calories:123,protein:2.7,carbs:25.6,fat:1,fiber:1.6},
{id:'white-rice',name:'White rice · cooked',calories:130,protein:2.7,carbs:28.2,fat:.3,fiber:.4},
{id:'oats',name:'Rolled oats · dry',calories:379,protein:13.2,carbs:67.7,fat:6.5,fiber:10.1},
{id:'bread',name:'Whole-wheat bread',calories:247,protein:13,carbs:41,fat:4.2,fiber:7},
{id:'potato',name:'Potato · baked',calories:93,protein:2.5,carbs:21,fat:.1,fiber:2.2},
{id:'quinoa',name:'Quinoa · cooked',calories:120,protein:4.4,carbs:21.3,fat:1.9,fiber:2.8},
{id:'broccoli',name:'Broccoli · cooked',calories:35,protein:2.4,carbs:7.2,fat:.4,fiber:3.3},
{id:'greens',name:'Mixed salad vegetables · no dressing',calories:25,protein:1.2,carbs:4.5,fat:.3,fiber:2},
{id:'banana',name:'Banana · peeled',calories:89,protein:1.1,carbs:22.8,fat:.3,fiber:2.6},
{id:'apple',name:'Apple · with skin',calories:52,protein:.3,carbs:13.8,fat:.2,fiber:2.4},
{id:'berries',name:'Blueberries',calories:57,protein:.7,carbs:14.5,fat:.3,fiber:2.4},
{id:'avocado',name:'Avocado',calories:160,protein:2,carbs:8.5,fat:14.7,fiber:6.7},
{id:'oil',name:'Olive oil (1 tablespoon ≈ 14 g)',calories:884,protein:0,carbs:0,fat:100,fiber:0},
{id:'almonds',name:'Almonds',calories:579,protein:21.2,carbs:21.6,fat:49.9,fiber:12.5},
{id:'milk',name:'Milk · 2% (100 ml ≈ 100 g)',calories:50,protein:3.3,carbs:4.8,fat:2,fiber:0},
];
export type Portion={id:string,grams:number};
export function nutrition(items:Portion[]){return items.reduce((sum,item)=>{const food=foods.find(f=>f.id===item.id);if(food)for(const k of ['calories','protein','carbs','fat','fiber'] as const)sum[k]+=food[k]*item.grams/100;return sum},{calories:0,protein:0,carbs:0,fat:0,fiber:0});}
export const defaultProfile={weight:0,height:0,goalWeight:0,age:'' as number|'',sex:'',start:'12:00',preferences:'',calorieTarget:0};
export function clockLabel(minutes:number){const m=((minutes%1440)+1440)%1440;return `${String(Math.floor(m/60)).padStart(2,'0')}:${String(Math.floor(m%60)).padStart(2,'0')}`;}
export function fastingStatus(start:string,now:Date){const [h,m]=start.split(':').map(Number),begin=h*60+m;const elapsed=(now.getHours()*60+now.getMinutes()-begin+1440)%1440;return {eating:elapsed<480,remaining:elapsed<480?480-elapsed:1440-elapsed,start:begin,end:(begin+480)%1440,progress:elapsed<480?elapsed/480:(elapsed-480)/960};}
const p=(id:string,grams:number)=>({id,grams});
export const weekPlan=[
{day:'Monday',lunch:'Chicken & brown rice bowl',a:[p('chicken',180),p('rice',250),p('greens',250),p('avocado',80),p('oil',10)],dinner:'Salmon, potatoes & broccoli',b:[p('salmon',180),p('potato',350),p('broccoli',250),p('oil',10)]},
{day:'Tuesday',lunch:'Tofu & quinoa crunch bowl',a:[p('tofu',250),p('quinoa',250),p('greens',250),p('oil',15)],dinner:'Chicken, rice & greens',b:[p('chicken',200),p('rice',300),p('broccoli',250),p('avocado',80)]},
{day:'Wednesday',lunch:'Tuna & bean toast plate',a:[p('tuna',150),p('beans',150),p('bread',120),p('greens',250),p('oil',15)],dinner:'Lean beef & potato plate',b:[p('beef',180),p('potato',350),p('broccoli',250),p('oil',10)]},
{day:'Thursday',lunch:'Chicken & lentil salad',a:[p('chicken',160),p('lentils',200),p('bread',100),p('greens',250),p('oil',15)],dinner:'Tofu rice bowl',b:[p('tofu',250),p('rice',300),p('broccoli',250),p('oil',10)]},
{day:'Friday',lunch:'Egg & avocado toast',a:[p('egg',150),p('bread',140),p('avocado',100),p('greens',200)],dinner:'Salmon & quinoa plate',b:[p('salmon',200),p('quinoa',300),p('broccoli',250),p('oil',10)]},
{day:'Saturday',lunch:'Chicken & rice training bowl',a:[p('chicken',200),p('white-rice',300),p('greens',250),p('oil',15)],dinner:'Lentil & tofu bowl',b:[p('lentils',200),p('tofu',200),p('rice',200),p('broccoli',200),p('oil',10)]},
{day:'Sunday',lunch:'Tuna & avocado sandwich plate',a:[p('tuna',180),p('bread',140),p('avocado',100),p('greens',200)],dinner:'Chicken, potatoes & greens',b:[p('chicken',200),p('potato',350),p('broccoli',250),p('oil',15)]}
];
export const snack=[p('yogurt',250),p('oats',50),p('banana',120),p('almonds',25)];
