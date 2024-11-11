class User {
    constructor ( firstname, lastname,age,location){
        this.firstname= firstname
        this.lastname=lastname
        this.age=age 
        this.location=location
    }
    // per visualizzare i dati dell'utente
    getUserInfo(){
        return `Nome: ${this.firstname} ${this.lastname}, Età: ${this.age}, Luogo: ${this.location}`;
    }
    // metodo per confrontare l'età
    compareAge (otherUser){
        if(this.age > otherUser.age){
            return `${this.firstname} è più vecchio di ${otherUser.firstname}`
        } else {
            return `${this.firstname} e ${otherUser.firstname} hanno la stessa età`
        }
    }
        
}
 // Creazione di due oggetti User per il confronto 
 const u1 = new User("Mario", "Rossi",30 , "Roma")
 const u2 = new User("Luigi", "Verdi", 32, "Milano")

 ///Comparazione

  console.log(u1.compareAge(u2))
  console.log(u2.compareAge(u1))

  ///////////////////////////////////////////////////////////////////////
  class Pet {
    constructor (petName, ownerName, species, breed){
        this.petName
        this.ownerName
        this.species
        this.breed
    }
  }
  

  