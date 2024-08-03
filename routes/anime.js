const express = require('express');
const router = express.Router();
const animeController = require('../controllers/anime');



router.get('/:id', (req, res) => {

    /* #swagger.description = 'Возвращает информацию об аниме с указанным ID.';
    #swagger.summary = 'Запрос информации об аниме';
    #swagger.tags = ['Anime']
    #swagger.parameters['id'] = {
        in: "path",                            
        description: "ID аниме",                   
        required: "true",                     
        type: "integer",
        schema: "5"                                               
    };
    #swagger.responses[200] = {
        description: 'Объект data с информацией об аниме',
        schema: {
                "data": {
                    "mal_id": 5,
                    "url": "https://myanimelist.net/anime/5/Cowboy_Bebop__Tengoku_no_Tobira",
                    "images": {
                        "jpg": {
                            "image_url": "https://cdn.myanimelist.net/images/anime/1439/93480.jpg",
                            "small_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480t.jpg",
                            "large_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480l.jpg"
                        },
                        "webp": {
                            "image_url": "https://cdn.myanimelist.net/images/anime/1439/93480.webp",
                            "small_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480t.webp",
                            "large_image_url": "https://cdn.myanimelist.net/images/anime/1439/93480l.webp"
                        }
                    },
                    "trailer": {
                        "youtube_id": null,
                        "url": null,
                        "embed_url": null,
                        "images": {
                            "image_url": null,
                            "small_image_url": null,
                            "medium_image_url": null,
                            "large_image_url": null,
                            "maximum_image_url": null
                        }
                    },
                    "approved": true,
                    "titles": [
                        {
                            "type": "Default",
                            "title": "Cowboy Bebop: Tengoku no Tobira"
                        },
                        {
                            "type": "Synonym",
                            "title": "Cowboy Bebop: Knockin' on Heaven's Door"
                        },
                        {
                            "type": "Japanese",
                            "title": "カウボーイビバップ 天国の扉"
                        },
                        {
                            "type": "English",
                            "title": "Cowboy Bebop: The Movie"
                        },
                        {
                            "type": "German",
                            "title": "Cowboy Bebop: Der Film"
                        },
                        {
                            "type": "Spanish",
                            "title": "Cowboy Bebop: La Película"
                        },
                        {
                            "type": "French",
                            "title": "Cowboy Bebop: Le Film"
                        }
                    ],
                    "title": "Cowboy Bebop: Tengoku no Tobira",
                    "title_english": "Cowboy Bebop: The Movie",
                    "title_japanese": "カウボーイビバップ 天国の扉",
                    "title_synonyms": [
                        "Cowboy Bebop: Knockin' on Heaven's Door"
                    ],
                    "type": "Movie",
                    "source": "Original",
                    "episodes": 1,
                    "status": "Finished Airing",
                    "airing": false,
                    "aired": {
                        "from": "2001-09-01T00:00:00+00:00",
                        "to": null,
                        "prop": {
                            "from": {
                                "day": 1,
                                "month": 9,
                                "year": 2001
                            },
                            "to": {
                                "day": null,
                                "month": null,
                                "year": null
                            }
                        },
                        "string": "Sep 1, 2001"
                    },
                    "duration": "1 hr 55 min",
                    "rating": "R - 17+ (violence & profanity)",
                    "score": 8.38,
                    "scored_by": 217974,
                    "rank": 201,
                    "popularity": 622,
                    "members": 383055,
                    "favorites": 1616,
                    "synopsis": "Another day, another bounty—such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator.\n\nWith lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized.\n\n[Written by MAL Rewrite]",
                    "background": "",
                    "season": null,
                    "year": null,
                    "broadcast": {
                        "day": null,
                        "time": null,
                        "timezone": null,
                        "string": null
                    },
                    "producers": [
                        {
                            "mal_id": 14,
                            "type": "anime",
                            "name": "Sunrise",
                            "url": "https://myanimelist.net/anime/producer/14/Sunrise"
                        },
                        {
                            "mal_id": 23,
                            "type": "anime",
                            "name": "Bandai Visual",
                            "url": "https://myanimelist.net/anime/producer/23/Bandai_Visual"
                        }
                    ],
                    "licensors": [
                        {
                            "mal_id": 15,
                            "type": "anime",
                            "name": "Sony Pictures Entertainment",
                            "url": "https://myanimelist.net/anime/producer/15/Sony_Pictures_Entertainment"
                        },
                        {
                            "mal_id": 102,
                            "type": "anime",
                            "name": "Funimation",
                            "url": "https://myanimelist.net/anime/producer/102/Funimation"
                        }
                    ],
                    "studios": [
                        {
                            "mal_id": 4,
                            "type": "anime",
                            "name": "Bones",
                            "url": "https://myanimelist.net/anime/producer/4/Bones"
                        }
                    ],
                    "genres": [
                        {
                            "mal_id": 1,
                            "type": "anime",
                            "name": "Action",
                            "url": "https://myanimelist.net/anime/genre/1/Action"
                        },
                        {
                            "mal_id": 24,
                            "type": "anime",
                            "name": "Sci-Fi",
                            "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                        }
                    ],
                    "explicit_genres": [],
                    "themes": [
                        {
                            "mal_id": 50,
                            "type": "anime",
                            "name": "Adult Cast",
                            "url": "https://myanimelist.net/anime/genre/50/Adult_Cast"
                        },
                        {
                            "mal_id": 29,
                            "type": "anime",
                            "name": "Space",
                            "url": "https://myanimelist.net/anime/genre/29/Space"
                        }
                    ],
                    "demographics": []
                }
            }
    }; */
    
    return animeController.getData(req, res);
});


module.exports = router