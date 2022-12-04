



export default function ContactsList({contacts, onDelete}){

    return(
    
      <div>
        
     <h3>Contacts</h3>
      <ul>{
       contacts.map(({id, name}) => {
          <li key={id} >{name}</li>
        })
       
        }
        
      </ul>
      </div>
    )

}