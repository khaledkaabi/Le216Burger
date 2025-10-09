import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const SectionHome = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-[url(/home-bg.jpg)] bg-cover bg-center opacity-40"></div>
            <div className='flex relative z-999 flex-col gap-4 p-8'>
                <h1 className='text-5xl text-black font-bold text-center'>Bienvenue chez Le 216 Burger</h1>
                <h2 className='text-5xl text-black font-bold text-center'>Le goût du vrai plaisir !</h2>
            </div>
            <div className="md:p-10 p-4 z-10">
                <ImageList variant="woven" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                alt={item.title}
                                className='rounded-md'
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
};

export default SectionHome;

const itemData = [
    {
        img: '/burger3.jpg',
        title: 'Breakfast',
        author: 'le 216 burger nantes',
        rows: 1,
        cols: 1,
        featured: true,
    },
    {
        img: '/home1.jpg',
        title: 'Burger',
        author: 'le 216 burger nantes',
    },
    {
        img: '/burger5.jpg',
        title: 'burger',
        author: 'le 216 burger nantes',
    }
];