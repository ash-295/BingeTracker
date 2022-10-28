let allShows = [
    {
        _id: "show_1",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Naruto",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post1.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_2",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Fullmetal Alchemist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post2.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_3",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Code Geass",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post3.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_4",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Hunter X Hunter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post4.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_5",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Kuroko no Baske",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post5.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_6",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Noragami",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post6.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_7",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Gintama",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post7.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_8",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Attack on Titan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post8.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_9",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "That Time I got Re-incarnated as a Slime",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post9.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_10",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Kaguaya Sama- Love is War",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post10.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_11",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "The Disastrous life of Saiki",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post11.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_12",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Sword art Online",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post12.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_13",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Boku no Hero Academia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post13.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_14",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Dragon Ball Super",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post14.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_15",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Fruit Basket",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post15.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_16",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Goblin Slayer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post16.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_17",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Jojo's Bizzare Adventure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post17.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_18",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Jujutsu Kaisen",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post18.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_19",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Demon Slayer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post19.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_20",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "One punch man",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post20.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_21",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Re:Zero",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post21.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_22",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Your lie in April",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post22.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_23",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Shokugeki no Souma",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post23.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_24",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Tokyo Revengers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post24.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_25",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Horimiya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post25.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_26",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Promised Neverland",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post26.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_27",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Zanyou no Terror",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post27.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_28",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Rent a Girlfriend",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post28.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_29",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Ahiru no Sora",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post29.jpg",
        rating: 0,
        ratingCount: 0
    },
    {
        _id: "show_30",
        type: "Series",
        category: "Anime",
        season: 1,
        episode: 220,
        status: "Completed",
        showName: "Overlord",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        genre: [
            "6350e1dafd73fa06634afc52",
            "6350e1dafd73fa06634afc54",
            "6350e1dafd73fa06634afc59"
        ],
        releasedAt: 10000000,
        showPoster: "https://bingetracker.s3.ap-south-1.amazonaws.com/showsPoster/post30.jpg",
        rating: 0,
        ratingCount: 0
    },
];

export default allShows;