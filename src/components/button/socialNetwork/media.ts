

 type media = {
    type : string;
    url : string;
    iconePath? : string;
}



type Medias = {
    instagram: media;
    facebook: media;
    discord: media;
}

 const MEDIAS : Medias = {
    instagram : {
        type : "instagram",
        url : "https://www.instagram.com/"
    },
    facebook : {
        type : "facebook",
        url : "https://www.facebook.com/"
    },
    discord : {
        type : "discord",
        url : "https://discord.gg/HgB2m8y5PH",
        iconePath : "/assets/icons/discord.svg"
    },
}

export default MEDIAS