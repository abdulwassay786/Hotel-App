

const INITAIL_STATE = {
    rooms: [

        {
            title: "STANDARD ROOM",
            price: "$350.00",
            img:
                "https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp",
    
        },
        {
            title: "FAMILY ROOM",
            price: "$400.00",
            img:
                "https://preview.colorlib.com/theme/suites/images/ximg_2.jpg.pagespeed.ic.jAvfEkr8MX.webp",
        },
        {
            title: "SINGLE ROOM",
            price: "$250.00",
            img:
                "https://preview.colorlib.com/theme/suites/images/ximg_3.jpg.pagespeed.ic.osxKtu1h5b.webp",
        },
        {
            title: "DELUXE ROOM",
            price: "$350.00",
            img:
                "https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp",
        },
        {
            title: "LUXURY ROOM",
            price: "$450.00",
            img:
                "https://preview.colorlib.com/theme/suites/images/ximg_2.jpg.pagespeed.ic.jAvfEkr8MX.webp",
        },
        {
            title: "SINGLE ROOM",
            price: "$150.00",
            img:
                "https://preview.colorlib.com/theme/suites/images/ximg_3.jpg.pagespeed.ic.osxKtu1h5b.webp",
        }
    
    ],
    user: {},
    allUsers: []
}

export default (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case "GETUSER":
            return ({
                ...state,
                user: action.user
            })
        case "GETALLUSERS":
            return ({
                ...state,
                allUsers: action.allUsers
            })

        default:
            return state
    }
}
