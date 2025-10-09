import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageListSection = () => {

    return (
        <div className='p-8'>
            <div className='pt-4 pb-10'>
                <p className='font-semibold text-xl text-black text-left'>
                    Chez Le216 Burger, chaque bouchée est une explosion de saveurs — croustillant, juteux et généreux, comme on les aime !
                    <br></br>
                    Découvrez nos créations originales de burgers et sandwichs, préparés avec passion et servis avec style.
                </p>
            </div>
            <ImageList variant="woven" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=161&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}
export default ImageListSection;

const itemData = [
    {
        img: '/burger1.jpg',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 1,
        cols: 1,
        featured: true,
    },
    {
        img: '/sandwich2.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: '/burger2.jpg',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: '/plat3.jpg',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: '/frit.jpg',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'plat4.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    }
];