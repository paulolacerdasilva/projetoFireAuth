import {useState, useEffect} from 'react';
import {auth} from '../firebaseConnection';
import {onAuthStateChanged} from 'firebase/auth';
import {Navigate} from 'react-router-dom';

export default function Private({children}){
    const[loading, setloading] = useState(true);
    const[signed, setSigned] = useState(false);

    useEffect(()=>{
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user)=>{
                //se tem user logado
                if(user){
                    const userDate = {
                        uid: user.uid,
                        email: user.email,
                    }
                    localStorage.setItem("@detailUser", 
                            JSON.stringify(userDate))
                    setloading(false);
                    setSigned(true);

                }else{
                     //não possui user logado
                    setloading(false);
                    setSigned(false);
                }//fim do else         
            })
        }//fim da função checkLogin
        checkLogin();
    },[])
    if(loading){
        return(
            <div></div>
        )
    }
    if(!signed){
        return <Navigate to="/"/>
    }
    return children;
} 