const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const users = [
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234560'),
        name: {
            first: "זיוה",
            middle: " ",
            last: "רוזן"
        },
        phone: "050-1234567",
        email: "principal@gmail.com",
        password: bcrypt.hashSync('Principal123!', 10),
        job: "מנהלת בית הספר",
        isMale: false,
        image: {
            url: "https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.jpg?s=1024x1024&w=is&k=20&c=0ThxJHYXenpBpSoxls3JSdTptROW7qNqmhubRzOxLhM=",
            alt: "מנהלת בית הספר"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "בלפור",
            houseNumber: 2
        },
        classroom: "מנהלת בית הספר",
        grades: {},
        isPrincipal: true,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f5b21aa7d9234560'),
        name: {
            first: "חדווה",
            middle: " ",
            last: "עדני"
        },
        phone: "050-7654321",
        email: "hedvaa@gmail.com",
        password: bcrypt.hashSync('Hedva123!', 10),
        job: "יועצת החטיבה וסגנית המנהלת",
        isMale: false,
        image: {
            url: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "יועצת החטיבה וסגנית המנהלת"
        },
        address: {
            country: "ישראל",
            city: "ראשון לציון",
            street: "יברבוים",
            houseNumber: 1
        },
        classroom: "מנהלת בית הספר",
        grades: {},
        isPrincipal: true,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234561'),
        name: {
            first: "ניצה",
            middle: " ",
            last: "שרגא",
        },
        phone: "054-1234567",
        email: "nitzas@gmail.com",
        password: bcrypt.hashSync('Nitza123!', 10),
        job: "רכזת שכבת ז",
        isMale: false,
        image: {
            url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "רכזת שכבת ז",
        },
        address: {
            country: "ישראל",
            city: "בת ים",                 
            street: "רוטשילד",
            houseNumber: 45,
        },
        classroom: "רכזים",
        grades: {},
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234562'),
        name: {
            first: "יונה",
            middle: " ",
            last: "אזולאי",
        },
        phone: "050-1234567",
        email: "yonah@gmail.com",
        password: bcrypt.hashSync('Yonaח-123!', 10),
        job: "רכזת שכבת ח",
        isMale: false,
        image: {
            url: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "רכזת שכבת ח",
        },
        address: {
            country: "ישראל",
            city: "בת ים",                 
            street: "בלפור",
            houseNumber: 15,
        },
        classroom: "רכזים",
        grades: {},
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234563'),
        name: {
            first: "עמוס",
            middle: " ",
            last: "שטותנפליץ",
        },
        phone: "050-1284567",
        email: "amoss@gmail.com",
        password: bcrypt.hashSync('Amoss123!', 10),
        job: "רכז שכבת ט",
        isMale: true,
        image: {
            url: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?s=2048x2048&w=is&k=20&c=0HU1oQGXlO4nrrMKKzAK4Jmu6XDLvXhTGjKScvrNIZw=",
            alt: "רכז שכבת ט",
        },
        address: {
            country: "ישראל",
            city: "בת ים",                  
            street: "דניאל",
            houseNumber: 1,
        },
        classroom: "רכזים",
        grades: {},
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234564'),
        name: {
            first: "אביבה",
            middle: " ",
            last: "לנצמן",
        },
        phone: "053-9752288",
        email: "avival@gmail.com",
        password: bcrypt.hashSync('Avival123!', 10),
        job: "מחנכת כיתה ז-1",
        isMale: false,
        image: {
            url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "מחנכת כיתה ז-1",
        },
        address: {
            country: "ישראל",
            city: "בת ים",                  
            street: "שפירא",
            houseNumber: 17,
        },
        classroom: "ז-1",
        grades: {},
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234565'),
        name: {
        first: "אסתי",
        middle: " ",
        last: "ויינשטוק",
    },
    phone: "056-854751",
    email: "estyv@gmail.com",
    password: bcrypt.hashSync('Estyv123!', 10),
        job: "מחנכת כיתה ז-2",
    isMale: false,
    image: {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "מחנכת כיתה ז-2",
    },
    address: {
        country: "ישראל",
        city: "בת ים",                 
        street: "זרובבל",
        houseNumber: 5,
    },
    classroom: "ז-2",
        grades: {},
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234566'),
        name: {
        first: "יוסף",
        middle: " ",
        last: "לוי",
    },
    phone: "052-9632587",
    email: "yosil@gmail.com",
    password: bcrypt.hashSync('Yosil123!', 10),
    job: "מחנך כיתה ח-1",
    isMale: true,
    image: {
        url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "מחנך כיתה ח-1",
    },
    address: {
        country: "ישראל",
        city: "ראשון לציון",                 
        street: "טרכטנברג",
        houseNumber: 19,
    },
    classroom: "ח-1",
        grades: {},
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234567'),
        name: {
        first: "סיימון",
        middle: " ",
        last: "קירגישקוב",
    },
    phone: "03-1254789",
    email: "simonk@gmail.com",
    password: bcrypt.hashSync('Simonk123!', 10),
    job: "מחנך ח-2",
    isMale: true,
    image: {
        url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "מחנך ח-2",
    },
    address: {
        country: "ישראל",
        city: "קרית אונו",                 
        street: "העולים",
        houseNumber: 121,
    },
    classroom: "ח-2",
        grades: {},
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234568'),
        name: {
        first: "שיבולת",
        middle: "עננים",
        last: "לזר",
    },
    phone: "052-7755332",
    email: "shiboletl@gmail.com",
    password: bcrypt.hashSync('Shiboletl123!', 10),
    job: "מחנכת כיתה ט-1",
    isMale: false,
    image: {
        url: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "מחנכת כיתה ט-1",
    },
    address: {
        country: "ישראל",
        city: "בת ים",                 
        street: "העדניות",
        houseNumber: 3,
    },
    classroom: "ט-1",
        grades: {},
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
{
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234569'),
        name: {
        first: "שמואל",
        middle: "מולה",
        last: "כהן",
    },
    phone: "053-951235",
    email: "mulac@gmail.com",
    password: bcrypt.hashSync('Mulac123!', 10),
    job: "מחנך כיתה ט-2",
    isMale: true,
    image: {
        url: "https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "מחנך כיתה ט-2",
    },
    address: {
        country: "ישראל",
        city: "תל אביב",                 
        street: "הירקון",
        houseNumber: 98,
    },
    classroom: "ט-2",
        grades: {},
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
    
    {
        _id: new mongoose.Types.ObjectId('60d5ec40f1b21aa7d1234564'),
        name: {
            first: "יואב",
            middle: " ",
            last: "כהן"
        },
        phone: "050-1234567",
        email: "yoavcohen@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "הרצל",
            houseNumber: 12
        },
        classroom: "ז-1",
        grades: {
            math: 85,
            english: 78,
            sciences: 90,
            history: 80,
            literature: 70,
            programming: 95,
            art: 88
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('60d7ec49f1b21aa7d1234564'),
        name: {
            first: "מיכל",
            middle: " ",
            last: "לוי"
        },
        phone: "050-7654321",
        email: "michalevi@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמידה",
        isMale: false,
        image: {
            url: "",
            alt: "תלמידה"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "יהודה הלוי",
            houseNumber: 5
        },
        classroom: "ז-1",
        grades: {
            math: 92,
            english: 85,
            sciences: 88,
            history: 95,
            literature: 78,
            programming: 90,
            art: 80
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('60c5ec49f1b21aa7d1234564'),
    name: {
            first: "רון",
            middle: " ",
            last: "ברק"
        },
        phone: "050-9876543",
        email: "ronbarak@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "הרצל",
            houseNumber: 14
        },
        classroom: "ז-2",
        grades: {
            math: 88,
            english: 72,
            sciences: 85,
            history: 75,
            literature: 82,
            programming: 93,
            art: 90
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('60dcec49f1b21aa7d1234564'),
    name: {
            first: "נועה",
            middle: "יפה",
            last: "אביב"
        },
        phone: "050-1230987",
        email: "noaaviv@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמידה",
        isMale: false,
        image: {
            url: "",
            alt: "תלמידה"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "אלנבי",
            houseNumber: 18
        },
        classroom: "ז-2",
        grades: {
            math: 90,
            english: 87,
            sciences: 80,
            history: 85,
            literature: 88,
            programming: 92,
            art: 75
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b212a7d1234564'),
    name: {
            first: "דניאל",
            middle: " ",
            last: "רוזן"
        },
        phone: "050-2468101",
        email: "danielrozen@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "ביאליק",
            houseNumber: 10
        },
        classroom: "ח-1",
        grades: {
            math: 87,
            english: 90,
            sciences: 78,
            history: 85,
            literature: 80,
            programming: 95,
            art: 88
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec49f1b21aa7db234564'),
    name: {
            first: "יעל",
            middle: " ",
            last: "שפירא"
        },
        phone: "050-3456789",
        email: "yaelshapira@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמידה",
        isMale: false,
        image: {
            url: "",
            alt: "תלמידה"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "ז'בוטינסקי",
            houseNumber: 22
        },
        classroom: "ח-1",
        grades: {
            math: 92,
            english: 85,
            sciences: 88,
            history: 95,
            literature: 78,
            programming: 90,
            art: 80
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('60d5ec09f1b21aa7d1234564'),
    name: {
            first: "איתי",
            middle: " ",
            last: "פרידמן"
        },
        phone: "050-8765432",
        email: "itayfriedman@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "נורדאו",
            houseNumber: 3
        },
        classroom: "ח-2",
        grades: {
            math: 88,
            english: 92,
            sciences: 85,
            history: 75,
            literature: 82,
            programming: 93,
            art: 90
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('90d5ec49f1b21aa7d1234564'),
    name: {
            first: "שרון",
            middle: " ",
            last: "מזרחי"
        },
        phone: "050-2345678",
        email: "sharonmiz@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמידה",
        isMale: false,
        image: {
            url: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "תלמידה"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "סוקולוב",
            houseNumber: 20
        },
        classroom: "ח-2",
        grades: {
            math: 90,
            english: 87,
            sciences: 80,
            history: 85,
            literature: 88,
            programming: 92,
            art: 75
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('61d5ec49f1b21aa7d9234560'),
        name: {
            first: "עומר",
            middle: "שאול",
            last: "אביב"
        },
        phone: "050-7654321",
        email: "omeryaviv@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "דיזנגוף",
            houseNumber: 11
        },
        classroom: "ט-1",
        grades: {
            math: 85,
            english: 78,
            sciences: 90,
            history: 80,
            literature: 70,
            programming: 95,
            art: 88
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('61d6ac49f1b21aa7d9234560'),
        name: {
            first: "אילן",
            middle: " ",
            last: "מלכה"
        },
        phone: "050-1239874",
        email: "ilanmalka@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "רוטשילד",
            houseNumber: 9
        },
        classroom: "ט-1",
        grades: {
            math: 87,
            english: 85,
            sciences: 92,
            history: 88,
            literature: 82,
            programming: 90,
            art: 86
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('61d12bc99ab21aa7d9234560'),
        name: {
            first: "שירה",
            middle: " ",
            last: "חג'בי"
        },
        phone: "050-7652103",
        email: "shirahajbi@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמידה",
        isMale: false,
        image: {
            url: "",
            alt: "תלמידה"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "בלפור",
            houseNumber: 13
        },
        classroom: "ט-2",
        grades: {
            math: 90,
            english: 88,
            sciences: 85,
            history: 80,
            literature: 90,
            programming: 95,
            art: 87
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('61d5ec49f1b21aa7d9564560'),
        name: {
            first: "יובל",
            middle: " ",
            last: "רוזנפלד"
        },
        phone: "050-3456723",
        email: "yuvalrosenfeld@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "אחד העם",
            houseNumber: 15
        },
        classroom: "ט-2",
        grades: {
            math: 82,
            english: 91,
            sciences: 89,
            history: 87,
            literature: 85,
            programming: 93,
            art: 90
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234660'),
        name: {
            first: "הילה",
            middle: " ",
            last: "גולן"
        },
        phone: "050-5678901",
        email: "hilagolan@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמידה",
        isMale: false,
        image: {
            url: "",
            alt: "תלמידה"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "וייצמן",
            houseNumber: 2
        },
        classroom: "ז-1",
        grades: {
            math: 89,
            english: 84,
            sciences: 91,
            history: 83,
            literature: 86,
            programming: 92,
            art: 88
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('647ccc49f1b21aa7d9234560'),
        name: {
            first: "עידן",
            middle: " ",
            last: "מור"
        },
        phone: "050-7894561",
        email: "idanmor@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "דובנוב",
            houseNumber: 7
        },
        classroom: "ז-2",
        grades: {
            math: 88,
            english: 87,
            sciences: 82,
            history: 85,
            literature: 80,
            programming: 94,
            art: 89
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('61d57c49f1b21aa7d9234560'),
        name: {
            first: "רותם",
            middle: " ",
            last: "גלעד"
        },
        phone: "050-8765430",
        email: "rotemgilad@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמידה",
        isMale: false,
        image: {
            url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "תלמידה"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "שדרות בן גוריון",
            houseNumber: 16
        },
        classroom: "ח-1",
        grades: {
            math: 90,
            english: 92,
            sciences: 85,
            history: 83,
            literature: 87,
            programming: 90,
            art: 91
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('61d5ec49f1aa1aa7d9234560'),
        name: {
            first: "גיא",
            middle: " ",
            last: "עמיר"
        },
        phone: "050-3456724",
        email: "guyamir@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "עוזיאל",
            houseNumber: 19
        },
        classroom: "ח-2",
        grades: {
            math: 87,
            english: 90,
            sciences: 88,
            history: 80,
            literature: 85,
            programming: 94,
            art: 89
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('9547ffb25a36c545add3cee8'),
        name: {
            first: "תמר",
            middle: " ",
            last: "בן דוד"
        },
        phone: "050-3456710",
        email: "tamarbendavid@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמידה",
        isMale: false,
        image: {
            url: "",
            alt: "תלמידה"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "ויצמן",
            houseNumber: 14
        },
        classroom: "ט-1",
        grades: {
            math: 88,
            english: 91,
            sciences: 85,
            history: 87,
            literature: 84,
            programming: 95,
            art: 90
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('61d57c49f1aa1aa7d9234560'),
        name: {
            first: "אביתר",
            middle: " ",
            last: "שמש"
        },
        phone: "050-5678902",
        email: "avishamesh@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "שדרות העצמאות",
            houseNumber: 21
        },
        classroom: "ט-2",
        grades: {
            math: 90,
            english: 87,
            sciences: 89,
            history: 85,
            literature: 82,
            programming: 93,
            art: 88
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('61d57c49f2aa1aa7d9234560'),
        name: {
            first: "ארנון",
            middle: " ",
            last: "פישנזון"
        },
        phone: "050-1111111",
        email: "arnon@gmail.com",
        password: bcrypt.hashSync('Student123!', 10),
        job: "תלמיד",
        isMale: true,
        image: {
            url: "https://images1.ynet.co.il/PicServer5/2019/09/22/9500723/11185255_11185066_rumble_490X0.jpg",
            alt: "תלמיד"
        },
        address: {
            country: "ישראל",
            city: "בת ים",
            street: "שדרות החירות",
            houseNumber: 1
        },
        classroom: "ט-2",
        grades: {
            math: 100,
            english: 100,
            sciences: 100,
            history: 100,
            literature: 100,
            programming: 100,
            art: 100
        },
        isPrincipal: false,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
]

const contact = [
    { 
        sender: "רון ברק",
        id: "60c5ec49f1b21aa7d1234564",
        message: "אני רוצה להציע את עצמי למועצת תלמידים",
        email: "ronbarak@gmail.com",
        phone: "050-9876543",
        isDeleted: false,
    },
    { 
        sender: "שירה חג'בי",
        id: "61d12bc99ab21aa7d9234560",
        message: "אתמול במהלך ההפסקה יובל רוזנפלד מט-2 משך לי בצמה והתחלתי לבכות, אני רוצה להתלונן!",
        email: "shirahajbi@gmail.com",
        phone: "050-7652103",
        isDeleted: false,
    },
    { 
        sender: "רותם גלעד",
        id: "61d57c49f1b21aa7d9234560",
        message: "אני רוצה לערער על הציון שניתן לי במקצוע היסטוריה, כל הציונים שלי מעל 90 ועשיתי את כל שיעורי הבית ואני לא מבינה למה הציון שלי הוא רק 83",
        email: "rotemgilad@gmail.com",
        phone: "050-8765430",
        isDeleted: false,
    },
    { 
        sender: "אסתי ויינשטוק",
        id: "1234ec49f1b21aa7d9234565",
        message: "אני צריכה להודיע שאעדר ביום ה' שבוע הבא, אשמח למצוא מורה מחליפה",
        email: "estyv@gmail.com",
        phone: "056-854751",
        isDeleted: false,
    }
]

const news = [
    {
    title: "הושק אתר בית הספר החדש",
    subtitle: "לאחר עבודה רבה הושק אתר בית הספר החדש", //הקדמה
        content: "שמחה וששון לכל ילד בלון. לקראת סוף השנה הושק אתר בית הספר החדש, כולנו תקווה שתהנו ממנו המון עד לסוף השנה",
    date: "June 11th, 2024",
    image: {
        url: "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "השקת אתר בית הספר החדש",
        },
    web: "http://localhost:5173/home/",
    isDeleted: false,
    timestamps: true,
    },
    {
    title: "החופש הגדול כבר כאן",
    subtitle: "אט אט הסתיימה לה השנה", 
        content: "כולנו תקווה שהשנה הסתיימה כהלכה למרות כל המצב מסביב, בקרוב נפתח עמודי משחקים, פעילויות לחופשת הקיץ בבית ובשטח בית הספר ובהמשך פעולויות במחירים מסובסדים לתלמידי בית הספר ובני משפחותיהם",
    date: "July 6th, 2024",
    image: {
        url: "https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "חופש הגדול ",
        },
    web: "http://localhost:5173/home/",
    isDeleted: false,
    timestamps: true,
    },
    {
    title: "נותנים בראש לצד לקוח",
    subtitle: "אחרי בניית השרת הגיע הזמן להתפרע", //הקדמה
        content: "צד הלקוח, להלן בניית האתר בפועל, הגיע הזמן להתפרע, לתת את כל מה שאני רוצה לתת לו ביטוי, כל פעולה שהייתי רוצה לבנות ולראות באתר שאני נמצא בו ולעשות אותו טוב יותר",
    date: "July 14th, 2024",
    image: {
        url: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "פרוייקטוס",
        },
    web: "http://localhost:5173/home/",
    isDeleted: false,
    timestamps: true,
    },
    {
    title: "הגשת פרויקט פול סטאק",
    subtitle: "לאחר עבודה רבה ומאומצת הרגע קרב", 
        content: "בשמחה ובאושר אני מתגאה להציג את פרויקט סוף קורס פולסטאק שלי, צד שרת וצד לקוח ולא נשכח את צד הדאטהבייס שאוהבים לשכוח",
    date: "August 1st, 2024",
    image: {
        url: "https://images.pexels.com/photos/22221/pexels-photo.jpg",
        alt: "פרוייקטוס",
        },
    web: "http://localhost:5173/home/",
    isDeleted: false,
    timestamps: true,
    },
]

const staff = [
    {
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234560'),
        name: {
            first: "זיוה",
            middle: " ",
            last: "רוזן"
        },
        job: "מנהלת בית הספר",
        isMale: false,
        image: {
            url: "https://media.istockphoto.com/id/1303539316/photo/one-beautiful-woman-looking-at-the-camera-in-profile.jpg?s=1024x1024&w=is&k=20&c=0ThxJHYXenpBpSoxls3JSdTptROW7qNqmhubRzOxLhM=",
            alt: "מנהלת בית הספר"
        },
        classroom: "מנהלת בית הספר",
        isPrincipal: true,
        isTeacher: false, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('1234ec49f5b21aa7d9234560'),
        name: {
            first: "חדווה",
            middle: " ",
            last: "עדני"
        },
        job: "יועצת החטיבה וסגנית המנהלת",
        isMale: false,
        image: {
            url: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "יועצת החטיבה וסגנית המנהלת"
        },
        classroom: "מנהלת בית הספר",
        isPrincipal: true,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234561'),
        name: {
            first: "ניצה",
            middle: " ",
            last: "שרגא",
        },
        job: "רכזת שכבת ז",
        isMale: false,
        image: {
            url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "רכזת שכבת ז",
        },
        classroom: "רכזים",
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234562'),
        name: {
            first: "יונה",
            middle: " ",
            last: "אזולאי",
        },
        job: "רכזת שכבת ח",
        isMale: false,
        image: {
            url: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "רכזת שכבת ח",
        },
        classroom: "רכזים",
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
    {
        _id: new mongoose.Types.ObjectId('1234ec49f1b21aa7d9234563'),
        name: {
            first: "עמוס",
            middle: " ",
            last: "שטותנפליץ",
        },
        job: "רכז שכבת ט",
        isMale: true,
        image: {
            url: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?s=2048x2048&w=is&k=20&c=0HU1oQGXlO4nrrMKKzAK4Jmu6XDLvXhTGjKScvrNIZw=",
            alt: "רכז שכבת ט",
        },
        classroom: "רכזים",
        isPrincipal: false,
        isTeacher: true, 
        isDeleted: false,
        timestamps: true,
    },
]

module.exports = { users, contact, news, staff };