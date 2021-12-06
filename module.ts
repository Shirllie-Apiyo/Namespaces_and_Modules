// modules are used to organise codes
// modules must be exported  to be used outside this file
export function greetings(): void{
    console.log("How are you?")
}// end

export namespace kenya{
    export function holiday(){
        console.log('Happy Holidays')
    }
}// end namespace