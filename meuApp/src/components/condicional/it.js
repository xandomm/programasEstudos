

export default props=>{
    if(props.test){
        return props.children
    }
    else {
        return false
    }
}
export const Else = props=> props.children