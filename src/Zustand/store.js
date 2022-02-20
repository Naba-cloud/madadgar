import create from "zustand";

const useStore = create(set => ({
    userName:"",
    getusername:(event)=>{
        let a=event.target.value;
        set(state=>({
         userName:a
        }))
    },
    cnicNumber:"",
    getcnicnumber:(event)=>{
        let b=event.target.value;
        set(state=>({
            cnicNumber:b
        }))

    },
    phoneNumber:"",
    getphonenumber:(event)=>{
        let c=event.target.value;
        set(state=>({
            phoneNumber:c
        }))
    },
    emailAddress:"",
    getemailaddress:(event)=>{let d=event.target.value
        set(state=>({
            emailAddress:d
        }))
    },
password:"",
getpassword:(event)=>{
    let e=event.target.value;
    set(state=>({
        password:e
    }))
   

},
confirmpassword:"",
getconfirpassword:(event)=>{
    let f=event.target.value;
    set(state=>({
        confirmpassword:f
    }))
},
category:"",
getcategory:(event)=>{
    let g=event.target.value;
    set(state=>({
       category:g
    }))
}

}))
export default useStore;