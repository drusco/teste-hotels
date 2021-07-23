## Exercício: Reserva de Hotel

Um programa para encontrar o hotel mais barato. A entrada do programa será uma sequência de datas para um cliente participante ou não do programa de fidelidade. Usa "Regular" para denominar um cliente normal e "Fidelidade" para um cliente participante do programa de fidelidade. A saída é o nome do hotel disponível mais barato e em caso de empate, o nome do hotel com a maior classificação.

###How to install?

You can install this package either with yarn or with npm.

    yarn install

####CLI Usage
###

#####Run Once
    yarn dev

#####Build
    yarn build
    
#####Build & Run Once
    yarn start
    
#####Unit Testing
    yarn test

#####Code Quality Check
    yarn eslint
    
##API Example

    import Hotels from './services/Hotels'
    
    const hotels = new Hotels()
    
    const cheapest = hotels.getCheapestHotelName('Regular', [
      new Date(2021, 6, 17),
      new Date(2021, 6, 18)
    ])
    
    console.log(cheapest) // Jardim Botânico
                             
