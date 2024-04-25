#!/usr/bin/node

function fibsRec(n){
    let array=[]
        if(n==1){
          return  array=[0]
        }else if(n==2){
           return  array=[0,1]
        }else if(n>2){
            array=[0,1]
            function fibo(n){
                if(n>2){
                    array.push((array[(array.length)-2])+(array[(array.length)-1]))
                fibo(n-1)}
                else return array
                
            }fibo(n)
            } return array
    }
    console.log(fibsRec(8))

    function fibs(n){
        let array=[]
        for(i=1;i<=n;i++){
            if (i==1){
                array=[0]
            }else
            if(i==2){
                 array.push(1)
            }else if(i>2){
                array.push(array[i-3]+array[i-2])
            
            }
        } return array
    }
    console.log(fibs(8))