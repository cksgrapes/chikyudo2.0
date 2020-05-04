import WebFont from 'webfontloader';

const webFontLoad = () => {
    WebFont.load({
        google: {
            families: ['Noto+Sans+JP:400,700', 'Inria+Sans:400,700,700i']
        },
        timeout: 2000,
        active: function() {
            sessionStorage.fonts = true;
        }
      });
};

export default webFontLoad
