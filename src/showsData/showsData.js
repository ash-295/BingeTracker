let allShows = [
    {
        _id: "show_1",
        showName: "Naruto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post1.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_2",
        showName: "Fullmetal Alchemist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post2.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_3",
        showName: "Code Geass",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post3.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_4",
        showName: "Hunter X Hunter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post4.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_5",
        showName: "Kuroko no Baske",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post5.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_6",
        showName: "Noragami",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post6.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_7",
        showName: "Gintama",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post7.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_8",
        showName: "Attack on Titan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post8.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_9",
        showName: "That Time I got Re-incarnated as a Slime",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post9.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_10",
        showName: "Kaguaya Sama- Love is War",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post10.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_11",
        showName: "The Disastrous life of Saiki",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post11.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_12",
        showName: "Sword art Online",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post12.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_13",
        showName: "Boku no Hero Academia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post13.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_14",
        showName: "Dragon Ball Super",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post14.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_15",
        showName: "Fruit Basket",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post15.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_16",
        showName: "Goblin Slayer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post16.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_17",
        showName: "Jojo's Bizzare Adventure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post17.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_18",
        showName: "Jujutsu Kaisen",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post18.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_19",
        showName: "Demon Slayer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post19.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_20",
        showName: "One punch man",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post20.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_21",
        showName: "Re:Zero",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post21.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_22",
        showName: "Your lie in April",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post22.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_23",
        showName: "Shokugeki no Souma",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post23.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_24",
        showName: "Tokyo Revengers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post24.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_25",
        showName: "Horimiya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post25.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_26",
        showName: "Promised Neverland",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post26.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_27",
        showName: "Zanyou no Terror",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post27.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_28",
        showName: "Rent a Girlfriend",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post28.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_29",
        showName: "Ahiru no Sora",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post29.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_30",
        showName: "Overlord",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post30.jpg",
        rating: 0,
        ratingCount: 0
    },
];

export default allShows;