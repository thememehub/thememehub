import { useContext } from 'react';
import Context from './context';
import styles from '../styles/Meme.module.css';

function Sidebar() {
    const { category, setCategory, setMemes } = useContext(Context);

    const categories = {
        india: 'India',
        memes: 'Memes',
        wholesomememes: 'Wholesome memes',
        dankmemes: 'Dank memes',
        wtf: 'WTF',
        humour: 'Humour',
        comedyheaven: 'Funny',
        animememes: 'Anime',
        // hentai: 'Hentai', // research purposes only
        comic: 'Comic'
    };

    // const country = {};

    return (
        <div
            className={`sticky h-96 top-14 inline col-span-1 bg-white  dark:bg-black dark:bg-opacity-90 sm:left-0 z-10 ${styles.sidebar_in_mobile}`}>
            <h4 className="text-lg mt-4 hidden md:block ">Tags</h4>

            {Object.entries({ ...categories }).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        onClick={() => {
                            setMemes([]);
                            setCategory(`category/${key}`);
                        }}
                        type="button"
                        className={`${
                            category.substr(category.indexOf('/') + 1) === key
                                ? 'bg-blue-700 text-white dark:bg-yellow-500'
                                : 'bg-red-50 dark:bg-gray-500'
                        }   hover:bg-blue-700 dark:hover:border-yellow-500  hover:text-white dark:text-black font-bold py-1 px-2 rounded m-1 h-9 whitespace-nowrap  mt-2`}>
                        #{value}
                    </button>
                );
            })}
        </div>
    );
}

export default Sidebar;
