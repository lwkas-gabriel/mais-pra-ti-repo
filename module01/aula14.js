//estruturas de dados

//Fila
 class Node{
    constructor(data){
        this.data = data;
        this.next = next;
    }
 }

 class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(data){
        let newNode = new Node(data);
        if(this.head == null){
            this.head = data;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
 }