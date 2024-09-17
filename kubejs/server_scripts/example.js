// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!

    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    console.log('Hello! The recipe event has fired!')
    event.remove({mod: 'pipez'});
    event.shaped(
        Item.of('pipez:item_pipe', 16), // arg 1: output
        [
            'III',
            'DRD', // arg 2: the shape (array of strings)
            'III'
        ],
        {
            I: 'minecraft:iron_ingot',
            R: 'minecraft:redstone',  //arg 3: the mapping object
            D: 'minecraft:dropper'
        }
    )
    event.shaped(
        Item.of('pipez:fluid_pipe', 16), // arg 1: output
        [
            'III',
            'DRD', // arg 2: the shape (array of strings)
            'III'
        ],
        {
            I: 'minecraft:iron_ingot',
            R: 'minecraft:redstone',  //arg 3: the mapping object
            D: 'minecraft:bucket'
        }
    )
    event.shaped(
        Item.of('pipez:energy_pipe', 16), // arg 1: output
        [
            'III',
            'DRD', // arg 2: the shape (array of strings)
            'III'
        ],
        {
            I: 'minecraft:iron_ingot',
            R: 'minecraft:redstone',  //arg 3: the mapping object
            D: 'minecraft:redstone_block'
        }
    )
    // event.shaped(
    //     Item.of('pipez:gaz_pipe', 16), // arg 1: output
    //     [
    //         'III',
    //         'DRD', // arg 2: the shape (array of strings)
    //         'III'
    //     ],
    //     {
    //         I: 'minecraft:iron_ingot',
    //         R: 'minecraft:redstone',  //arg 3: the mapping object
    //         D: 'mekanism:alloy_infused'
    //     }
    // )
    event.shaped(
        Item.of('pipez:universal_pipe', 6), // arg 1: output
        [
            'IEF',
            'DRD', // arg 2: the shape (array of strings)
            'IEF'
        ],
        {
            I: 'pipez:item_pipe',
            E: 'pipez:fluid_pipe',
            F: 'pipez:energy_pipe',
            R: 'minecraft:redstone_block',  //arg 3: the mapping object
            D: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('pipez:wrench'), // arg 1: output
        [
            ' D ',
            ' ID', // arg 2: the shape (array of strings)
            'I '
        ],
        {
            I: '#forge:rods',
            D: 'minecraft:flint'
        }
    )
    event.shaped(
        Item.of('pipez:basic_upgrade'), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:iron_nugget',
            C: 'minecraft:redstone'
        }
    )
    event.shaped(
        Item.of('pipez:improved_upgrade'), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:redstone',
            C: 'pipez:basic_upgrade'
        }
    )
    event.shaped(
        Item.of('pipez:advanced_upgrade'), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:redstone_block',
            C: 'pipez:improved_upgrade'
        }
    )
    event.shaped(
        Item.of('pipez:ultimate_upgrade'), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'minecraft:netherite_ingot',
            B: 'minecraft:redstone_block',
            C: 'pipez:advanced_upgrade'
        }
    )
})