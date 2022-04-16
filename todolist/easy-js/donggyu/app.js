import {inputHandler} from "./input.handler"
/**
 * 입력
 * 출력
 * 1. 할일 등록 o
 * 2. 할일 변경 o
 * 3. 할일 삭제 o
 * 4. 할일 참조 (read) o
 */

/**
 * 할일 배열
 */
let todos = []

/**
 * @info 할일을 등록합니다
 */
const registerTodo = async() =>{
    const title = await inputHandler("할일을 적으세요")
    todos.push(title)
}

/**
 * @info 할일을 참조 (read)
 * map
 * foreach
 * filter 
 * ...
 * for 
 * while
 */
const readTodos = () =>{

    if(todos.length === 0){
        console.error("할일이 없습니다. 등록하세요")
    }else{
        /**
         * javascript
         */
        todos.forEach((todo)=>{
            console.log(todo)
        })
    }
}

/**
 * @info todos에 존재하는지 검사한다
 */
 const isExistsTitle = (title) =>{
    return todos.includes(title)
}

/**
 * @info 해당 배열의 index값을 지운다
 * filter
 */
const deleteTodo = (title) =>{

    if(!isExistsTitle(title)){
        console.log(`${title}의 할일은 없습니다`)
    }else{
        const newTodos =todos.filter((item)=>{
            return item !== title
        })
    
        /**
         * Error
         * const -> let
         */
        todos = newTodos
    }
}

/**
 * @info 할일 변경
 * 해당 todo놈을 찾아야 한다 (true, false)
 * map
 */
const updateTodo = (title, updateTitle) =>{
    if(!isExistsTitle(title)){
        console.log(`변경할 ${title}이 없어요`)
    }else{

        /**
         * 실무
         * todos.length = 10000000 (n)
         * 
         * (x)
         * 정렬 ㄱ,ㄴ,ㄷ,ㄹ,ㅁ,ㅂ,ㅅ
         * todos.length / 2
         * 왼쪽만 돈다 (n/2)
         * 
         * Burble Sort (n^2)  **
         * Quick Sort (log n) ***
         * Buble Sort (log n) **
         */
        for(let i=0; i<todos.length; i++){

            if(todos[i] === title){
                todos[i] = updateTitle
            }
        }
    }
}

// async function init(){

// }
const init = async() =>{
    
    while(true){

        console.log("할일등록 CLI를 실행합니다")
        console.log(`
            1. 할일등록
            2. 할일변경
            3. 할일삭제
            4. 할일보기
            5. 종료
        `)

        const input = await inputHandler("어떤걸 하시겠어요")
        
        /**
         * 1~5
         * if, switch
         * casting
         */
        switch(parseInt(input,10)){
            
            case 1: // complete
                console.log("할일을 등록합니다")
                await registerTodo()
                break
            case 2:
                console.log("할일을 변경합니다")
                break
            case 3:
                console.log("할일을 삭제합니다")
                break
            case 4: // complete
                console.log("할일을 봅니다")
                readTodos()
                break
            case 5:
                console.log("종료합니다")
                process.exit(0)
            default:
                console.log("해당하는 번호가 없습니다")
        }
    }
}

init()
