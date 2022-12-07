const activities =[
    ["Ажил","идэх","ярилцах","Тоглох","Унтах"],
    [10,1,2,3,8]
]

console.table(activities);
const act_per=[];

for (let i=0; i<activities[1].length; i++){
    act_per[i]=activities[1][i]/24;0
}

activities.push(act_per);

console.table(activities);