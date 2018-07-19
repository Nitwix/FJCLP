export const GAME_PROPS = {
    width: 960,
    height: 540
};

export const SCALE = 2;

export const TEXT_PROPS = {
    font: 'pixel_font',
    sizes: {
        small: 16,
        normal: 32,
        big: 64,
        huge: 128
    },
    // tint: 
};

//mettre cette variable à 'true' pour désactiver les effets embêtants pour tester
export const TESTING = true;
if(TESTING) console.warn('Le jeu est actuellement en mode TEST');
