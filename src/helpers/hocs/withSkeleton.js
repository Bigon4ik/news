import Skeleton from "../../component/Skeleton/Skeleton";

function withSkeleton(Component,type,count) {
    return function (props){
        const {isLoading, ...restProps} = props

        if(isLoading){
            return<Skeleton type={type} count={count}/>

        }
        return <Component {...restProps}/>
    }
}

export default withSkeleton;