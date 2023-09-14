export default function Friend({friend}){
    const {name, email}=friend;
    return(
        <div style={{backgroundColor:'black', borderRadius:'5px', padding:'2px', margin:'3px'}}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            
        </div>
    )
}