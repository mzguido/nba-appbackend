const { response } = require("express");

const getImage = async (req, res) => {
    const uid = req.params.term;
    const gse = require("general-search-engine");

    let petition = await new gse.search().setType("image").setQuery(`${uid} nba headshot`).setOptions().run();
    img = petition[0];
    console.log(img);
    console.log(uid);
    res.json({
        img,
    });
};

const getImages = async (req, res) => {
    const { names } = req.body;

    console.log(names);
    // res.json({ names });
    const gse = require("general-search-engine");

    let images = [];
    let petition;
    for (const name of names) {
        petition = [];
        console.log(`${name.name} nba headshot`);
        petition = await new gse.search().setType("image").setQuery(`${name.name} nba headshot`).setOptions().run();
        images.push(petition[0]);
        console.log(petition[0]);
        images[images.length - 1].name = name;
    }

    // console.log(img);
    // console.log(uid);
    res.json({
        images,
    });
};

module.exports = {
    getImages,
    getImage,
};
