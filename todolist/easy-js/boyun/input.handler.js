import qoa from 'qoa'

/**
 * @info 입력값을 하나 받는 함수입니다.
 */
export const inputHandler = async(title) =>{

    const ps = {
            type: 'input',
            query: `${title} : `,
            handle: 'input'
        }


    const {input} = await qoa.prompt([ps])
    return input
}