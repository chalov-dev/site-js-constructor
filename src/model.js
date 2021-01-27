import {TextBlock, TitleBlock, ColumnsBlock} from './classes/blocks'

const text = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum iusto molestiae molestias perferendis porro praesentium quam suscipit veritatis voluptate? A consequuntur deleniti doloribus ea explicabo iste itaque iusto libero molestias necessitatibus non numquam pariatur praesentium quia quibusdam quo recusandae repellendus sint sit temporibus tenetur voluptatem, voluptatum! Accusamus alias amet debitis deserunt illo libero nemo quisquam quo repellat voluptatibus! Aperiam distinctio, enim excepturi hic quasi similique? A eum ex harum ipsam libero quis unde, vel voluptate! Architecto at atque beatae commodi, cumque debitis ea explicabo fugit iste natus nulla officia perferendis praesentium quae quia quod, quos reiciendis suscipit tempore ullam.
`

export const model = [
    new TitleBlock('Конструктор сайтов', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #E6E99D, #ECC069)',
            color: 'black',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ColumnsBlock([
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem!'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]