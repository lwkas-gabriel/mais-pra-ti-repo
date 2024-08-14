//estruturas de dados

 // a lista permite retirar e inserir em qualquer lugar

 // fila geralmente vc insere sempre no final e retira no inicio

 // a pilha insere no final e retira no final

//Fila
 class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

 class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log("index fora dos limetes!");
        }

        let newNode = new Node(data);
        let current = this.head;
        let previous;

        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            for(let i = 0; i< index; i++){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return console.log("index fora dos limetes!");
        }

        let current = this.head;
        let previous;

        if(index === 0){
            this.head = current.next;
        }else{
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.next; 
            }
        }
        this.size -= 1;
        return current.data;
    }

    sizeOfList(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }
    
    indexOf(data){
        let current = this.head;
        let index = 0;

        while(current != null){
            if(current.data == null){
                return index;
            }
            index++;
            current = current.next
        }
        return -1;
    }
    
    printList(){
        let current = this.head;
        while(current != null){
            console.log(current.data);
            current = current.next;
        }
        console.log("=========");
    }
 }

 let list = new LinkedList();
 list.add(1);
 list.add(true);
 list.add("teste");
 list.printList();
 list.insertAt("novoElemento", 0);
 list.printList();