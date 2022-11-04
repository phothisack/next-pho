import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter, Userouter} from 'next/router'
const NotFound = () => {
    const router = useRouter();
    useEffect (() =>{
        setTimeout(()=>{
            router.push('/');
            //router.go(-1)
        },3000)
        
    },[])
    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That pages cannot be found.</h2>
            <p>Go back to the<Link href="/"> HomePage</Link></p>
        </div>
     );
}
 
export default NotFound;