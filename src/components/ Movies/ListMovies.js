import mulanBg from './../img/bg.jpg'
import HIMYMBg from './../img/himymBg.png'
import Frnds from './../img/friendsBg.png'
import BigBang from './../img/bigbangBg.png'
import HeistBg from './../img/heistBg.png'
import BrideBg from './../img/prncsBg.png'
import breakBg from './../img/brkngBg.png'
import shadowBg from './../img/shadowBg.png'
import sprntlBg from './../img/sprntrlBg.png'
import narcosBg from './../img/narcosBg.jpeg'
const ListMovies = [
    {
        id: '1',
        title: 'Mulan',
        year: '2020',
        audience: '12+' ,
        duration: '1h 55 min',
        genre: 'Action',
        definition: "Mulan is a 2020 American fantasy action drama film produced by Walt Disney Pictures. Directed by Niki Caro from a screenplay by Rick Jaffa, Amanda Silver, Lauren Hynek, and Elizabeth Martin, it is a live-action adaptation of Disney's 1998 film of the same name, itself based on the Chinese folklore story Ballad of Mulan. The film stars Yifei Liu in the title role, alongside Donnie Yen, Tzi Ma, Jason Scott Lee, Yoson An, Ron Yuan, Gong Li, and Jet Li in supporting roles. In the film, Hua Mulan, the eldest daughter of an honored warrior, masquerades as a man to take her ailing father's place during a general conscription to counter the Rouran army in Imperial China.",
        bg: mulanBg
    },
    {
        id: '2',
        title: 'How I Met Your Mother',
        year: '2005 - 2014',
        audience: '16++' ,
        duration: '208 episodes',
        genre: 'Comedy Romance',
        definition:  "A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.",
        bg: HIMYMBg
    },
    {
        id: '3',
        title: 'The Big Bang Theory',
        year: '2007 - 2019',
        audience: '16+' ,
        duration: '280 episodes',
        genre: 'Comedy Romance',
        definition:  "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.",
        bg: BigBang,
        link: 'https://drive.google.com/file/d/1q-a5d5AF_94InCn8XhnQib1B_cx8TtdP/view?usp=sharing'
    },
    {
        id: '4',
        title: 'Friends',
        year: '1994 - 2004',
        audience: '16+' ,
        duration: '235 episodes',
        genre: 'Comedy Romance',
        definition:  "Three young men and three young women -- of the BFF kind -- live in the same apartment complex and face life and love in New York. They're not above sticking their noses into one another's business and swapping romantic partners, which always leads to the kind of hilarity average people will never experience -- especially during breakups." ,
        bg: Frnds
    },
    {
        id: '5',
        title: 'Money Heist',
        year: '2017 -2021',
        audience: '18+' ,
        duration: '41',
        genre: 'Action Crime Drama',
        definition:  "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
        bg: HeistBg 
        
    },
    {
        id: '6',
        title: 'Princess Bride',
        year: '1987',
        audience: '13' ,
        duration: '1h 38m',
        genre: 'Comedy Romance',
        definition:  "A delightfully postmodern fairy tale, The Princess Bride is a deft, intelligent mix of swashbuckling, romance, and comedy that takes an age-old damsel-in-distress story and makes it fresh",
        bg: BrideBg,
        link: ''
    },
    {
        id: '7',
        title: 'Breaking Bad',
        year: '2008 - 2013',
        audience: '18+' ,
        duration: '62 episodes',
        genre: 'Crime Drama Thriller',
        definition:  "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        bg: breakBg
    },
    {
        id: '8',
        title: 'Shadow Hunter',
        year: '2016 - 2019',
        audience: '18+' ,
        duration: '55 Episodes',
        genre: 'Action Drama Fantasy',
        definition:  "On her birthday, Clary Fray discovers a surprise concerning her life. The teenager is not who she thinks she is -- she comes from a long line of human-angel hybrids, called Shadowhunters, who hunt demons. After her mother is kidnapped, Clary is thrust into the world of demon-hunting. " ,
        bg: shadowBg
        
    },
    {
        id: '9',
        title: 'Supernatural',
        year: '2005 - 2020',
        audience: '14+' ,
        duration: '327 Episodes',
        genre: 'Drama Fantasy Horror',
        definition:  "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons and gods that roam the earth.",
        bg: sprntlBg
    },
    {
        id: '10',
        title: 'Narcos',
        year: '2015 - 2017',
        audience: '18+' ,
        duration: '30 Episodes',
        genre: 'Biography Crime Drama',
        definition:  "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
        bg: narcosBg
    },
    {
        id: '11',
        title: '',
        year: '',
        audience: '' ,
        duration: '',
        genre: '',
        definition:  "" 
    },
    {
        id: '12',
        title: '',
        year: '',
        audience: '' ,
        duration: '',
        genre: '',
        definition:  "" 
    }
    
]
export default ListMovies