function nomeDoAnimal(rex, bob, oli) {
    let distanciaRex = rex - oli;
    let distanciaBob = bob - oli;

    return distanciaRex < distanciaBob ? 'Rex chegou primeiro' :
        distanciaRex > distanciaBob ? 'Bob chegou primeiro' :
            distanciaRex === distanciaBob ? 'Oli fugiu' : '';

}

console.log(nomeDoAnimal(8, 4, 4));
