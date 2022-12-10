
//      ----- 1 ------

class vehicule {

    constructor(couleur, roues, marque) {
        this.couleur = couleur
        this.roues = roues
        this.marque = marque
    }

    demarrer() {
        console.log('Le véhicule à demarré')
    }

    arreter() {
        console.log('le véhicule s\'est arrêté')
    }
}

//       ------- 2 -------

class velo extends vehicule {
    constructor(couleur, roues, marque, rayonRoues, typePeinture) {
        super(couleur, roues, marque);
        this.rayon = rayonRoues
        this.peinture = typePeinture
    }

    monter() {
        console.log('Je monte sur le velo')
    }
}


//     ------- 3 ---------

class voiture extends vehicule {

    constructor(couleur, roues, marque, assurance, proprietaire) {
        super(couleur, roues, marque);
        this.assurance = assurance
        this.prop = proprietaire
    }

    carWash() {
        console.log('voiture lavée')
    }
}
