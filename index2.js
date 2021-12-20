
var list=[];
    const length=sessionStorage.getItem("Length");
	const form = document.querySelector("#taskForm");
	const input = document.querySelector("#input");

    const passvalue = () => {
		const task = input.value;
        if(length>0){
            list=JSON.parse(sessionStorage.getItem('Name'));
        }
        console.log(task);
        const tempObj = {
            name: task,
            arr: []
        }
        list.push(tempObj);
        sessionStorage.setItem('Name',JSON.stringify(list));
    };