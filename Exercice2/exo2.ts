interface Administrateur {    
    nom : string,    
    email : string ,    
    ip : string ,    
    dt_connexion : Date ,    
    login : string,    
    password : string
}

interface UtilisateurAnonyme {
    nom ?: Omit<Administrateur,"nom">,
    ip :  Omit<Administrateur,"ip">
}