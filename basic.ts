function add(x:number,y:number){
    return x+y
}

console.log(add(1,2));


function rep(x:string,y:number):string{
    let res = ''
    for(let i=0;i<x.length;i++){
          for(let j=0;j<y;j++){
               res += x[i]
          }
    }
    return res
}
console.log(rep('hello',5));

