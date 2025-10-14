import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { itemData } from '../utils';

const MenuList = () => {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const cols = isXs ? 1 : isSm ? 2 : 3;

    return (
        <div className='p-8'>
            <div className='pt-4 pb-10'>
                <p className='font-semibold text-xl text-black text-left'>
                    Chez <strong className='text-orange-primary'>Le 216 Burger</strong>, chaque bouchée est une explosion de saveurs — croustillant, juteux et généreux, comme on les aime !
                    <br></br><br></br>
                    Plongez dans notre menu gourmand, où chaque recette raconte une histoire de goût et de plaisir ! Des burgers signature aux
                    sandwichs savoureux, en passant par nos frites dorées et sauces maison, tout est préparé avec des ingrédients frais et une
                    touche d’audace. Que vous soyez amateur de classiques revisités ou en quête de nouvelles sensations,
                    <strong className='text-orange-primary'> Le 216 Burger</strong> vous promet une expérience culinaire généreuse et authentique, à chaque bouchée.
                </p>
            </div>
            <ImageList variant="woven" cols={cols} gap={8}>
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
            <p className='font-semibold text-xl text-black text-left mt-8'>
                Chez <strong className='text-orange-primary'> Le 216 Burger</strong>, notre mission est simple : vous régaler à chaque visite. Parce qu’un bon burger, c’est plus qu’un repas — c’est un moment de partage, de plaisir et de gourmandise. Alors, installez-vous, laissez-vous tenter par nos créations uniques et savourez l’instant… le goût fera le reste ! 🍔🔥
            </p>
        </div>
    )
}
export default MenuList;