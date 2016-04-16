// JavaScript Document
var queue=[];
var bfsqueue=[];
var timer=null; 

function dfs(node){

	queue.push(node);
	var i;
	
	for(i=0;i<node.children.length;i++)
	{
		
		dfs(node.children[i]);
	}
	
}

function bfs(node){
	
	   var i=0;
	   var j=0;
	   bfsqueue.push(node); 
	 
	   while(bfsqueue.length!=j) 
	   {	  
		   m=bfsqueue[j];   
		   queue.push(m);   
		   j++;             
			for(i=0;i<m.children.length;i++)
			bfsqueue.push(m.children[i])      
	   }

	
}

function show(){
	clearInterval(timer);
	var i;
	var alltree= document.getElementsByClassName('tree');
	for(i=0;i<alltree.length;i++){
		alltree[i].style.background = '#fff';
	}
	i = 0;
	
	queue[0].style.background = '#000';
	timer = setInterval(function(){ 
		i++;
		if(i >= queue.length){
			queue[i-1].style.background = '#fff';
			clearInterval(timer);
		}else{
		    if(text.value == queue[i].innerText.split(' ')[0])
			 queue[i].style.background = '#FF0'
			else
			queue[i].style.background = '#000';
			
			if(text.value!=queue[i-1].innerText.split(' ')[0])
			queue[i-1].style.background = '#fff';
		}
	}, 500);
}

 var text;
window.onload=function(){
	
	document.getElementById('dfs').onclick=function(){
	
		queue=[];
		text=document.getElementsByName('find')[0];
		dfs(document.getElementsByClassName('NO1')[0]);
		show();
		
	}
	document.getElementById('bfs').onclick=function(){
		queue=[];
		text=document.getElementsByName('find')[0];
		bfs(document.getElementsByClassName('NO1')[0]);
		show();
	}
	
	
}